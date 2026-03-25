"use client";

import { useEffect, useState, useMemo } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
  where,
  Timestamp,
  deleteDoc,
  getDocs,
  writeBatch,
  doc,
} from "firebase/firestore";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Session {
  sessionId: string;
  startedAt: Timestamp;
  lastSeenAt: Timestamp;
  referrer: string;
  referrerLabel: string;
  landingPage: string;
  device: "mobile" | "tablet" | "desktop";
  screenWidth: number;
  city?: string;
  region?: string;
  country?: string;
  ip?: string;
  pages: string[];
  pageCount: number;
  totalClicks: number;
  visitedBooking: boolean;
  isActive: boolean;
}

interface ZLEvent {
  id: string;
  sessionId: string;
  type: "page_view" | "click" | "scroll" | "time_on_page";
  page: string;
  timestamp: Timestamp;
  isBooking: boolean;
  data: Record<string, unknown>;
}

type FilterType = "all" | "live" | "booked" | "mobile" | "desktop";

// ─── Helpers ──────────────────────────────────────────────────────────────────

const BOOKING_RE = /book|reserv|ticket/i;

function isLive(s: Session, now: number) {
  return s.lastSeenAt && now - s.lastSeenAt.toDate().getTime() < 5 * 60 * 1000;
}

function startOfToday() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

function fmt(ts: Timestamp | undefined, mode: "time" | "datetime" | "ago" = "datetime"): string {
  if (!ts) return "—";
  const d = ts.toDate();
  if (mode === "ago") {
    const s = Math.floor((Date.now() - d.getTime()) / 1000);
    if (s < 60) return `${s}s ago`;
    if (s < 3600) return `${Math.floor(s / 60)}m ago`;
    return `${Math.floor(s / 3600)}h ago`;
  }
  if (mode === "time") {
    return d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  }
  return (
    d.toLocaleDateString("en-US", { month: "short", day: "numeric" }) +
    " · " +
    d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
  );
}

function duration(start: Timestamp | undefined, end: Timestamp | undefined): string {
  if (!start || !end) return "—";
  const s = Math.floor((end.toDate().getTime() - start.toDate().getTime()) / 1000);
  if (s < 60) return `${s}s`;
  return `${Math.floor(s / 60)}m ${s % 60}s`;
}

function pageName(p: string): string {
  if (!p || p === "/") return "Home";
  return p.replace(/^\//, "").replace(/-/g, " ").replace(/\//g, " › ");
}

function refLabel(s: Session): string {
  return s.referrerLabel && s.referrerLabel !== "direct" ? s.referrerLabel : "direct";
}

const DEVICE_ICON: Record<string, string> = {
  mobile: "📱",
  tablet: "📲",
  desktop: "🖥️",
};

// ─── Mini helpers ─────────────────────────────────────────────────────────────

function Dot({ live }: { live: boolean }) {
  return (
    <span className="relative flex h-2 w-2 shrink-0">
      {live && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />}
      <span className={`relative inline-flex rounded-full h-2 w-2 ${live ? "bg-green-400" : "bg-zinc-700"}`} />
    </span>
  );
}

function BookedBadge() {
  return (
    <span className="inline-flex items-center gap-1 bg-amber-400/15 border border-amber-400/40 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wide">
      ★ BOOKED
    </span>
  );
}

function evDetail(ev: ZLEvent): string {
  if (ev.type === "click" && ev.data?.label != null) return `"${String(ev.data.label)}"`;
  if (ev.type === "scroll") return `${String(ev.data?.depth ?? "?")}% scrolled`;
  if (ev.type === "time_on_page") return `${String(ev.data?.seconds ?? "?")}s on page`;
  if (ev.type === "page_view" && ev.data?.title != null) return String(ev.data.title).slice(0, 50);
  return "";
}

function EventRow({ ev }: { ev: ZLEvent }) {
  const cfg = {
    page_view:    { icon: "→", color: "text-blue-400",   bg: "bg-blue-400/10 border-blue-400/20",   label: "Page View" },
    click:        { icon: "⚡", color: "text-green-400",  bg: "bg-green-400/10 border-green-400/20", label: "Click" },
    scroll:       { icon: "↕", color: "text-cyan-400",   bg: "bg-cyan-400/10 border-cyan-400/20",   label: "Scroll" },
    time_on_page: { icon: "⏱", color: "text-zinc-400",   bg: "bg-zinc-400/10 border-zinc-400/20",   label: "Time" },
  }[ev.type] ?? { icon: "•", color: "text-zinc-500", bg: "bg-zinc-800", label: ev.type };

  const isBooking = ev.isBooking || BOOKING_RE.test(String(ev.data?.label ?? "")) || BOOKING_RE.test(ev.page);

  return (
    <div className={`relative flex items-start gap-3 py-2.5 ${isBooking ? "bg-amber-400/5 rounded-lg px-2 -mx-2 border border-amber-400/20" : ""}`}>
      {/* timeline line */}
      <div className="flex flex-col items-center shrink-0 mt-0.5">
        <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-[11px] ${cfg.bg} ${cfg.color}`}>
          {cfg.icon}
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-[11px] font-semibold ${cfg.color}`}>{cfg.label}</span>
          <span className="text-[11px] text-zinc-400 capitalize truncate">{pageName(ev.page)}</span>
          {isBooking && <span className="text-[10px] text-amber-300 font-bold">★ booking</span>}
        </div>

        <div className="text-[11px] text-zinc-500 mt-0.5 truncate">
          {evDetail(ev)}
        </div>
      </div>

      <div className="text-[10px] text-zinc-600 shrink-0 mt-0.5">{fmt(ev.timestamp, "time")}</div>
    </div>
  );
}

// ─── User detail panel ────────────────────────────────────────────────────────

function UserDetail({
  session,
  events,
  now,
  onClose,
}: {
  session: Session;
  events: ZLEvent[];
  now: number;
  onClose: () => void;
}) {
  const live = isLive(session, now);
  const sessionEvents = useMemo(
    () =>
      events
        .filter((e) => e.sessionId === session.sessionId)
        .sort((a, b) => {
          const ta = a.timestamp?.toDate?.().getTime() ?? 0;
          const tb = b.timestamp?.toDate?.().getTime() ?? 0;
          return ta - tb;
        }),
    [events, session.sessionId]
  );

  const totalTime = duration(session.startedAt, session.lastSeenAt);
  const maxScrollDepth = Math.max(
    0,
    ...sessionEvents
      .filter((e) => e.type === "scroll")
      .map((e) => Number(e.data?.depth ?? 0))
  );

  return (
    <div className="flex flex-col h-full">
      {/* Panel header */}
      <div className={`shrink-0 p-5 border-b ${session.visitedBooking ? "border-amber-400/30 bg-amber-400/5" : "border-zinc-800"}`}>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <Dot live={live} />
            <span className="text-sm font-bold text-white">
              {DEVICE_ICON[session.device]} {session.device}
            </span>
            {session.visitedBooking && <BookedBadge />}
            {live && (
              <span className="text-[10px] text-green-400 font-semibold bg-green-400/10 border border-green-400/20 px-2 py-0.5 rounded-full">
                LIVE
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-zinc-600 hover:text-white transition-colors text-lg leading-none"
          >
            ✕
          </button>
        </div>

        {/* Meta grid */}
        <div className="grid grid-cols-2 gap-2 text-[11px]">
          <div>
            <span className="text-zinc-600">Started</span>
            <p className="text-zinc-300">{fmt(session.startedAt)}</p>
          </div>
          <div>
            <span className="text-zinc-600">Last seen</span>
            <p className="text-zinc-300">{fmt(session.lastSeenAt, "ago")}</p>
          </div>
          <div>
            <span className="text-zinc-600">Duration</span>
            <p className="text-zinc-300">{totalTime}</p>
          </div>
          <div>
            <span className="text-zinc-600">Source</span>
            <p className="text-zinc-300">{refLabel(session)}</p>
          </div>
          <div>
            <span className="text-zinc-600">Screen</span>
            <p className="text-zinc-300">{session.screenWidth}px</p>
          </div>
          <div>
            <span className="text-zinc-600">Max scroll</span>
            <p className="text-zinc-300">{maxScrollDepth > 0 ? `${maxScrollDepth}%` : "—"}</p>
          </div>
          {(session.city || session.country) && (
            <div className="col-span-2">
              <span className="text-zinc-600">Location</span>
              <p className="text-zinc-300">
                📍 {[session.city, session.region, session.country].filter(Boolean).join(", ")}
              </p>
            </div>
          )}
          {session.ip && (
            <div className="col-span-2">
              <span className="text-zinc-600">IP</span>
              <p className="text-zinc-400 font-mono text-[10px]">{session.ip}</p>
            </div>
          )}
        </div>

        {/* Page journey */}
        {session.pages && session.pages.length > 0 && (
          <div className="mt-3">
            <p className="text-[10px] text-zinc-600 uppercase tracking-widest mb-1.5">Page journey</p>
            <div className="flex flex-wrap gap-1 items-center">
              {session.pages.map((p, i) => {
                const booking = BOOKING_RE.test(p);
                return (
                  <div key={i} className="flex items-center gap-1">
                    <span className={`text-[10px] px-2 py-0.5 rounded border ${
                      booking
                        ? "bg-amber-400/15 border-amber-400/40 text-amber-300"
                        : "bg-zinc-800 border-zinc-700 text-zinc-400"
                    } capitalize`}>
                      {pageName(p)}
                    </span>
                    {i < session.pages.length - 1 && (
                      <span className="text-zinc-700 text-[10px]">›</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Event timeline */}
      <div className="flex-1 overflow-y-auto p-5">
        <p className="text-[10px] text-zinc-600 uppercase tracking-widest mb-3">
          Full timeline · {sessionEvents.length} events
        </p>

        {sessionEvents.length === 0 && (
          <p className="text-zinc-700 text-xs">No events recorded for this session yet.</p>
        )}

        <div className="relative space-y-0.5">
          {/* Vertical line */}
          <div className="absolute left-3 top-3 bottom-3 w-px bg-zinc-800 pointer-events-none" />
          {sessionEvents.map((ev) => (
            <EventRow key={ev.id} ev={ev} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Session card ─────────────────────────────────────────────────────────────

function SessionCard({
  session,
  events,
  selected,
  now,
  onClick,
  onDelete,
}: {
  session: Session;
  events: ZLEvent[];
  selected: boolean;
  now: number;
  onClick: () => void;
  onDelete: () => void;
}) {
  const live = isLive(session, now);
  const sessionEvents = events.filter((e) => e.sessionId === session.sessionId);
  const lastEvent = sessionEvents[0]; // events are sorted desc

  return (
    <div className="relative group">
      {/* ── Clickable card area ── */}
      <div
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={(e) => e.key === "Enter" && onClick()}
        className={`w-full text-left p-3.5 pr-8 rounded-xl border cursor-pointer transition-all duration-150 ${
          session.visitedBooking
            ? selected
              ? "border-amber-400/60 bg-amber-400/10"
              : "border-amber-400/25 bg-amber-400/5 hover:border-amber-400/40"
            : selected
            ? "border-zinc-600 bg-zinc-800/80"
            : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 hover:bg-zinc-800/50"
        }`}
      >
        {/* Row 1: status + badges */}
        <div className="flex items-center gap-2 mb-2">
          <Dot live={live} />
          <span className="text-xs text-zinc-400">{DEVICE_ICON[session.device]}</span>
          {session.visitedBooking && <BookedBadge />}
          {live && !session.visitedBooking && (
            <span className="text-[10px] text-green-400 font-semibold">LIVE</span>
          )}
          <span className="ml-auto text-[10px] text-zinc-600">{fmt(session.startedAt, "ago")}</span>
        </div>

        {/* Row 2: landing + ref */}
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="text-xs text-zinc-200 font-medium capitalize truncate">
            {pageName(session.landingPage ?? "/")}
          </span>
          {session.referrerLabel && session.referrerLabel !== "direct" && (
            <span className="text-[10px] text-zinc-600 truncate">← {session.referrerLabel}</span>
          )}
        </div>

        {/* Row 3: stats */}
        <div className="flex items-center gap-3 text-[11px] text-zinc-500">
          <span>{session.pageCount ?? 0} pages</span>
          <span>·</span>
          <span>{session.totalClicks ?? 0} clicks</span>
          <span>·</span>
          <span>{duration(session.startedAt, session.lastSeenAt)}</span>
        </div>

        {/* Row 4: location */}
        {(session.city || session.country) && (
          <div className="mt-1.5 text-[10px] text-cyan-600 truncate">
            📍 {[session.city, session.country].filter(Boolean).join(", ")}
          </div>
        )}

        {/* Last event */}
        {lastEvent && (
          <div className="mt-2 text-[10px] text-zinc-600 truncate">
            Last: {lastEvent.type === "click"
              ? `clicked "${lastEvent.data?.label}"`
              : lastEvent.type === "page_view"
              ? `viewed ${pageName(lastEvent.page)}`
              : lastEvent.type === "scroll"
              ? `${lastEvent.data?.depth}% scroll`
              : `${lastEvent.data?.seconds}s on page`}
          </div>
        )}
      </div>

      {/* ── Delete button (hover-reveal) ── */}
      <button
        onClick={(e) => { e.stopPropagation(); onDelete(); }}
        title="Delete session"
        className="absolute top-2 right-2 w-5 h-5 flex items-center justify-center rounded-md text-zinc-700 hover:text-red-400 hover:bg-red-400/10 opacity-0 group-hover:opacity-100 transition-all duration-150"
      >
        ✕
      </button>
    </div>
  );
}

// ─── Login ────────────────────────────────────────────────────────────────────

function Login({ onLogin }: { onLogin: () => void }) {
  const [pw, setPw] = useState("");
  const [err, setErr] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pw === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      sessionStorage.setItem("zl_admin", "1");
      onLogin();
    } else {
      setErr(true);
      setPw("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950">
      <div className="w-full max-w-xs">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-2xl mx-auto mb-4">
            🎮
          </div>
          <h1 className="text-xl font-black text-white tracking-wide font-[family-name:var(--font-orbitron)]">
            ZL Analytics
          </h1>
          <p className="text-zinc-600 text-xs mt-1">Zero Latency Webster, Houston</p>
        </div>
        <form onSubmit={submit} className="space-y-3">
          <input
            type="password"
            value={pw}
            onChange={(e) => { setPw(e.target.value); setErr(false); }}
            placeholder="Admin password"
            autoFocus
            className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
          />
          {err && <p className="text-red-400 text-xs text-center">Incorrect password</p>}
          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Enter Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}

// ─── KPI strip ────────────────────────────────────────────────────────────────

function KPI({ label, value, accent }: { label: string; value: string | number; accent?: string }) {
  return (
    <div className="flex flex-col">
      <span className={`text-2xl font-black ${accent ?? "text-white"}`}>{value}</span>
      <span className="text-[10px] text-zinc-500 uppercase tracking-wider mt-0.5">{label}</span>
    </div>
  );
}

// ─── Main dashboard ───────────────────────────────────────────────────────────

export default function AdminDashboard() {
  const [authed, setAuthed] = useState(false);
  const [ready, setReady] = useState(false);

  const [sessions, setSessions] = useState<Session[]>([]);
  const [events, setEvents] = useState<ZLEvent[]>([]);
  const [selected, setSelected] = useState<Session | null>(null);
  const [filter, setFilter] = useState<FilterType>("all");
  const [search, setSearch] = useState("");
  const [now, setNow] = useState(0); // 0 until mounted
  const [deleting, setDeleting] = useState<string | null>(null); // sessionId being deleted
  const [confirmDeleteAll, setConfirmDeleteAll] = useState(false);
  const [deletingAll, setDeletingAll] = useState(false);

  // Hydration-safe auth check
  useEffect(() => {
    setNow(Date.now());
    setAuthed(sessionStorage.getItem("zl_admin") === "1");
    setReady(true);
  }, []);

  // Tick
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 30_000);
    return () => clearInterval(t);
  }, []);

  // Firestore listeners
  useEffect(() => {
    if (!authed) return;

    const unsubSessions = onSnapshot(
      query(collection(db, "sessions"), orderBy("startedAt", "desc"), limit(100)),
      (snap) => setSessions(snap.docs.map((d) => d.data() as Session))
    );

    // Load last 600 events (all sessions)
    const unsubEvents = onSnapshot(
      query(collection(db, "events"), orderBy("timestamp", "desc"), limit(600)),
      (snap) =>
        setEvents(snap.docs.map((d) => ({ id: d.id, ...d.data() } as ZLEvent)))
    );

    return () => { unsubSessions(); unsubEvents(); };
  }, [authed]);

  // ── Delete helpers ────────────────────────────────────────────────────────────

  async function deleteSession(sessionId: string) {
    if (deleting) return;
    setDeleting(sessionId);
    try {
      const batch = writeBatch(db);
      // Delete the session document
      batch.delete(doc(db, "sessions", sessionId));
      // Delete all events belonging to this session
      const evSnap = await getDocs(
        query(collection(db, "events"), where("sessionId", "==", sessionId))
      );
      evSnap.docs.forEach((d) => batch.delete(d.ref));
      await batch.commit();
      // Deselect if this session was open in the detail panel
      if (selected?.sessionId === sessionId) setSelected(null);
    } finally {
      setDeleting(null);
    }
  }

  async function deleteAll() {
    setDeletingAll(true);
    try {
      const [sessSnap, evSnap] = await Promise.all([
        getDocs(collection(db, "sessions")),
        getDocs(collection(db, "events")),
      ]);
      const allRefs = [...sessSnap.docs, ...evSnap.docs].map((d) => d.ref);
      // Firestore batch limit = 500 ops; use chunks of 490 to be safe
      for (let i = 0; i < allRefs.length; i += 490) {
        const batch = writeBatch(db);
        allRefs.slice(i, i + 490).forEach((ref) => batch.delete(ref));
        await batch.commit();
      }
      setSelected(null);
    } finally {
      setDeletingAll(false);
      setConfirmDeleteAll(false);
    }
  }

  // ── Derived ───────────────────────────────────────────────────────────────────

  const todayStart = Timestamp.fromDate(startOfToday());

  const liveCount = useMemo(
    () => sessions.filter((s) => isLive(s, now)).length,
    [sessions, now]
  );

  const todaySessions = useMemo(
    () => sessions.filter((s) => s.startedAt && s.startedAt.toDate() >= todayStart.toDate()),
    [sessions]
  );

  const bookedToday = useMemo(
    () => todaySessions.filter((s) => s.visitedBooking).length,
    [todaySessions]
  );

  const conversionRate = todaySessions.length
    ? Math.round((bookedToday / todaySessions.length) * 100)
    : 0;

  const todayPageViews = useMemo(
    () =>
      events.filter(
        (e) =>
          e.type === "page_view" &&
          e.timestamp &&
          e.timestamp.toDate() >= todayStart.toDate()
      ).length,
    [events]
  );

  // ── Filtered session list ────────────────────────────────────────────────────

  const filtered = useMemo(() => {
    let list = [...sessions];
    if (filter === "live") list = list.filter((s) => isLive(s, now));
    if (filter === "booked") list = list.filter((s) => s.visitedBooking);
    if (filter === "mobile") list = list.filter((s) => s.device === "mobile");
    if (filter === "desktop") list = list.filter((s) => s.device === "desktop");
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (s) =>
          (s.landingPage ?? "").toLowerCase().includes(q) ||
          (s.referrerLabel ?? "").toLowerCase().includes(q) ||
          (s.pages ?? []).some((p) => p.toLowerCase().includes(q))
      );
    }
    return list;
  }, [sessions, filter, now, search]);

  // ── Render ────────────────────────────────────────────────────────────────────

  if (!ready) return null;
  if (!authed) return <Login onLogin={() => setAuthed(true)} />;

  const FILTERS: { key: FilterType; label: string }[] = [
    { key: "all", label: `All (${sessions.length})` },
    { key: "live", label: `Live (${liveCount})` },
    { key: "booked", label: `★ Booked (${sessions.filter((s) => s.visitedBooking).length})` },
    { key: "mobile", label: "Mobile" },
    { key: "desktop", label: "Desktop" },
  ];

  return (
    <div className="h-screen flex flex-col bg-zinc-950 text-white font-[family-name:var(--font-inter)] overflow-hidden">

      {/* ── Top bar ── */}
      <header className="shrink-0 border-b border-zinc-800/80 bg-zinc-950 px-5 py-3 flex items-center gap-6">
        <div className="flex items-center gap-2.5 mr-4">
          <div className="w-7 h-7 rounded-lg bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-sm">🎮</div>
          <span className="font-black text-sm tracking-wider font-[family-name:var(--font-orbitron)] text-white">ZL</span>
          <span className="text-zinc-600 text-xs hidden md:block">Analytics</span>
        </div>

        {/* KPIs inline */}
        <div className="flex items-center gap-6 flex-1 overflow-x-auto">
          <KPI label="Live now" value={liveCount} accent="text-green-400" />
          <div className="w-px h-8 bg-zinc-800 shrink-0" />
          <KPI label="Today's visitors" value={todaySessions.length} accent="text-blue-400" />
          <div className="w-px h-8 bg-zinc-800 shrink-0" />
          <KPI label="Page views today" value={todayPageViews} accent="text-cyan-400" />
          <div className="w-px h-8 bg-zinc-800 shrink-0" />
          <KPI label="Booked today" value={bookedToday} accent="text-amber-400" />
          <div className="w-px h-8 bg-zinc-800 shrink-0" />
          <KPI label="Conversion" value={`${conversionRate}%`} accent={conversionRate > 0 ? "text-amber-300" : "text-zinc-500"} />
        </div>

        <button
          onClick={() => { sessionStorage.removeItem("zl_admin"); setAuthed(false); }}
          className="shrink-0 text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
        >
          Sign out
        </button>
      </header>

      {/* ── Body: left list + right detail ── */}
      <div className="flex flex-1 min-h-0">

        {/* ── LEFT: user list ── */}
        <div className="w-[340px] xl:w-[380px] shrink-0 border-r border-zinc-800/80 flex flex-col bg-zinc-950">

          {/* Filter bar */}
          <div className="shrink-0 p-3 border-b border-zinc-800/60 space-y-2">
            <div className="flex gap-2">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by page, source…"
                className="flex-1 bg-zinc-900 border border-zinc-800 text-zinc-200 placeholder:text-zinc-600 text-xs rounded-lg px-3 py-2 focus:outline-none focus:border-zinc-600 transition-colors"
              />
              {/* Delete All button */}
              {sessions.length > 0 && !confirmDeleteAll && (
                <button
                  onClick={() => setConfirmDeleteAll(true)}
                  title="Delete all sessions"
                  className="shrink-0 text-[10px] px-2.5 py-1.5 rounded-lg border border-red-900/60 text-red-500 hover:bg-red-500/10 hover:border-red-500/50 transition-colors font-medium"
                >
                  Delete all
                </button>
              )}
            </div>

            {/* Delete all confirmation */}
            {confirmDeleteAll && (
              <div className="flex items-center gap-2 rounded-lg border border-red-500/40 bg-red-500/5 px-3 py-2">
                <span className="text-[10px] text-red-400 flex-1">
                  Delete all {sessions.length} sessions?
                </span>
                <button
                  onClick={deleteAll}
                  disabled={deletingAll}
                  className="text-[10px] px-2 py-1 rounded bg-red-500 hover:bg-red-400 text-white font-semibold disabled:opacity-50 transition-colors"
                >
                  {deletingAll ? "Deleting…" : "Confirm"}
                </button>
                <button
                  onClick={() => setConfirmDeleteAll(false)}
                  disabled={deletingAll}
                  className="text-[10px] text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            )}

            <div className="flex gap-1 flex-wrap">
              {FILTERS.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`text-[10px] px-2.5 py-1 rounded-full border font-medium transition-colors ${
                    filter === key
                      ? key === "booked"
                        ? "bg-amber-400/15 border-amber-400/50 text-amber-300"
                        : "bg-zinc-700 border-zinc-600 text-white"
                      : "border-zinc-800 text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Session cards */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {filtered.length === 0 && (
              <div className="text-center py-16 text-zinc-600 text-xs">
                {sessions.length === 0
                  ? "Waiting for visitors… Visit the site to start tracking."
                  : "No sessions match this filter."}
              </div>
            )}
            {filtered.map((s) => (
              <SessionCard
                key={s.sessionId}
                session={s}
                events={events}
                selected={selected?.sessionId === s.sessionId}
                now={now}
                onClick={() => setSelected(s.sessionId === selected?.sessionId ? null : s)}
                onDelete={() => deleteSession(s.sessionId)}
              />
            ))}
          </div>
        </div>

        {/* ── RIGHT: user detail ── */}
        <div className="flex-1 min-w-0 bg-zinc-950 overflow-hidden">
          {selected ? (
            <UserDetail
              key={selected.sessionId}
              session={
                // Always use the freshest session data from state
                sessions.find((s) => s.sessionId === selected.sessionId) ?? selected
              }
              events={events}
              now={now}
              onClose={() => setSelected(null)}
            />
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-8">
              <div className="text-5xl mb-4 opacity-20">👆</div>
              <p className="text-zinc-500 text-sm">Select a user from the left to see their full session timeline</p>
              <p className="text-zinc-700 text-xs mt-2">
                ★ Gold cards = users who engaged with booking
              </p>

              {/* Summary stats for empty state */}
              {sessions.length > 0 && (
                <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl">
                  {[
                    { label: "Total sessions loaded", value: sessions.length, color: "text-blue-400" },
                    { label: "Visited booking", value: sessions.filter(s => s.visitedBooking).length, color: "text-amber-400" },
                    { label: "Mobile visitors", value: sessions.filter(s => s.device === "mobile").length, color: "text-cyan-400" },
                    { label: "Desktop visitors", value: sessions.filter(s => s.device === "desktop").length, color: "text-emerald-400" },
                  ].map(({ label, value, color }) => (
                    <div key={label} className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 text-left">
                      <div className={`text-2xl font-black ${color}`}>{value}</div>
                      <div className="text-[10px] text-zinc-600 uppercase tracking-wider mt-1">{label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
