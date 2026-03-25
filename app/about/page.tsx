import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Arcade Houston | VR Arcade & Entertainment Guide',
  description: "Arcade Houston covers every arcade in the Houston metro area and operates Zero Latency Webster, Houston — the city's only free-roam VR arena. 2,000 sq ft arena, 8 games, 2-8 players. Webster TX.",
  alternates: { canonical: 'https://arcadehouston.com/about' },
  openGraph: {
    title: 'About Arcade Houston | VR Arcade & Entertainment Guide',
    description: "Arcade Houston covers every arcade in Houston and operates Zero Latency VR. 2,000 sq ft arena, 8 games. Webster TX.",
    url: 'https://arcadehouston.com/about',
    siteName: 'Arcade Houston',
  },
  robots: { index: true, follow: true },
};

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://arcadehouston.com/about',
  url: 'https://arcadehouston.com/about',
  name: 'About Arcade Houston',
  description: "Arcade Houston is a comprehensive guide to every arcade in Houston and operates Zero Latency Webster, Houston — the city's only free-roam VR arena.",
  publisher: { '@id': 'https://arcadehouston.com/#organization' },
};

const stats = [
  { value: '5.0★', label: 'Google Rating', sub: '424+ reviews' },
  { value: '8', label: 'VR Games', sub: 'Multiplayer titles' },
  { value: '2,000', label: 'Sq Ft Arena', sub: 'Wireless, cable-free' },
  { value: '2–8', label: 'Players', sub: 'Per session' },
];

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: 'Zombie Survival',
    body: 'Outbreak & Undead Arena — face endless hordes with shared ammo and teamwork. 30-minute sessions, up to 8 players.',
    color: 'from-red-900/40 to-red-950/20 border-red-800/30',
    accent: 'text-red-400',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: 'Sci-Fi Missions',
    body: 'Space Marine VR (Warhammer 40K) & Singularity — breach alien stations, fight the swarm or solve zero-gravity puzzles.',
    color: 'from-blue-900/40 to-blue-950/20 border-blue-800/30',
    accent: 'text-blue-400',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'PvP Esports',
    body: 'Sol Raiders splits players into rival squads for objective-based combat. Human vs human — no AI, no scripts. Pure competition.',
    color: 'from-cyan-900/40 to-cyan-950/20 border-cyan-800/30',
    accent: 'text-cyan-400',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    title: 'Family Adventures',
    body: 'Engineerium is rated ages 6+. No combat, no enemies — explore impossible geometric worlds. Perfect for first-timers and families.',
    color: 'from-emerald-900/40 to-emerald-950/20 border-emerald-800/30',
    accent: 'text-emerald-400',
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <Image
          src="/venue-arena.webp"
          alt="Zero Latency VR arena interior — 2,000 sq ft free-roam space"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#000C1A]/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#000C1A]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_50%,rgba(6,182,212,0.12)_0%,transparent_60%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-24">
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-300 text-xs font-mono">Houston&apos;s Only Free-Roam VR Arena</span>
          </div>
          <h1 className="font-orbitron font-black text-5xl md:text-6xl text-white mb-6 leading-[1.05]">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">Zero Latency</span><br />Webster, Houston
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mb-8">
            We operate Houston&apos;s only wireless, cable-free VR arena — 2,000 sq ft where groups of 2–8 move freely through 8 multiplayer virtual worlds. Rated 5.0 stars from 424+ Google reviews.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://booking.zerolatencyvr.com/en/book-now/webster"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 active:scale-95 text-black font-bold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/25"
            >
              Book a Session
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </a>
            <Link
              href="/experiences"
              className="inline-flex items-center gap-2 border border-white/25 hover:border-white/50 hover:bg-white/5 text-white px-7 py-3.5 rounded-xl transition-all duration-200"
            >
              View All 8 Games
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ───────────────────────────────────────── */}
      <div className="bg-gradient-to-r from-cyan-950/60 via-[#001525] to-cyan-950/60 border-y border-cyan-900/40 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="font-orbitron font-black text-3xl text-cyan-400 leading-none">{stat.value}</span>
                <span className="text-white text-sm font-semibold mt-1">{stat.label}</span>
                <span className="text-gray-500 text-xs mt-0.5">{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 space-y-24">

        {/* ── The Experience ──────────────────────────────────── */}
        <section className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1 order-2 md:order-1">
            <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest">What You&apos;ll Do</span>
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mt-2 mb-4">The Experience</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Zero Latency Webster, Houston offers 8 games spanning zombie survival, sci-fi missions, PvP esports, and family-friendly worlds. Sessions run 30–50 minutes depending on the game selected.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Game Masters guide every session from arrival through the post-game replay — no prior VR experience required. At the end, a replay video is delivered via YouTube link so your group can relive every highlight.
            </p>
            <Link href="/experiences" className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
              Explore all 8 games
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
          <div className="relative w-full md:w-72 h-64 md:h-80 rounded-2xl overflow-hidden order-1 md:order-2 shrink-0 ring-1 ring-cyan-500/20">
            <Image
              src="/pvp-experience.webp"
              alt="Players experiencing free-roam VR at Zero Latency Webster Houston"
              fill
              sizes="(max-width: 768px) 100vw, 288px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000C1A]/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="inline-block px-2 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-cyan-400 text-xs font-mono">8 Multiplayer Games</div>
            </div>
          </div>
        </section>

        {/* ── Games Grid ──────────────────────────────────────── */}
        <section>
          <div className="mb-8 text-center">
            <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest">Game Library</span>
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mt-2">Four Categories of Play</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className={`rounded-2xl border bg-gradient-to-br p-6 ${f.color}`}>
                <div className={`mb-3 ${f.accent}`}>{f.icon}</div>
                <h3 className="font-orbitron text-base font-bold text-white mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── The Technology ──────────────────────────────────── */}
        <section className="flex flex-col md:flex-row gap-10 items-center">
          <div className="relative w-full md:w-72 h-64 md:h-80 rounded-2xl overflow-hidden shrink-0 ring-1 ring-cyan-500/20">
            <Image
              src="/player-vr-weapon.jpg"
              alt="Player wearing wireless VR backpack headset at Zero Latency"
              fill
              sizes="(max-width: 768px) 100vw, 288px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000C1A]/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="inline-block px-2 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-cyan-400 text-xs font-mono">Wireless Backpack VR</div>
            </div>
          </div>
          <div className="flex-1">
            <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest">How It Works</span>
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mt-2 mb-4">The Technology</h2>
            <div className="space-y-4">
              {[
                { label: 'Wireless Freedom', body: 'Players wear wireless TPCAST VR backpacks — no cables tethered to a station. Move anywhere in the 2,000 sq ft arena.' },
                { label: 'Sub-ms Tracking', body: 'Precision overhead cameras track every player\'s position in real time across the full arena floor with sub-millisecond latency.' },
                { label: 'Spatial Audio', body: 'Full spatial audio immerses players in each game world. Custom avatars make every player visible to teammates simultaneously.' },
                { label: 'Post-Game Replay', body: 'Every session is recorded. A shareable YouTube replay link is sent to your group after the session ends.' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-cyan-500 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <div>
                    <span className="text-white font-semibold text-sm">{item.label}: </span>
                    <span className="text-gray-400 text-sm">{item.body}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our Team ────────────────────────────────────────── */}
        <section className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1 order-2 md:order-1">
            <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest">Who We Are</span>
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mt-2 mb-4">Our Team</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Zero Latency Webster, Houston&apos;s Game Masters are trained VR facilitators. They run the pre-game briefing, monitor the session in real time, and respond within seconds if any player needs assistance.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Every session has a dedicated Game Master on-site from start to finish. Zero experience required — our team handles everything so your group can focus on having fun.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Pre-Game Briefing', 'Live Session Monitoring', 'Instant Player Assist', 'Post-Game Replay'].map((item) => (
                <span key={item} className="px-3 py-1 rounded-full border border-cyan-800/50 bg-cyan-950/30 text-cyan-300 text-xs">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="relative w-full md:w-72 h-64 md:h-80 rounded-2xl overflow-hidden order-1 md:order-2 shrink-0 ring-1 ring-cyan-500/20">
            <Image
              src="/post-game-group.jpg"
              alt="Group celebrating after a Zero Latency VR session"
              fill
              sizes="(max-width: 768px) 100vw, 288px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000C1A]/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1.5">
                <span className="text-yellow-400 text-xs">★★★★★</span>
                <span className="text-white text-xs font-bold">5.0</span>
                <span className="text-gray-400 text-xs">424+ reviews</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Location ────────────────────────────────────────── */}
        <section>
          <div className="rounded-2xl overflow-hidden border border-white/10 flex flex-col md:flex-row">
            <div className="relative w-full md:w-64 h-48 md:h-auto shrink-0">
              <Image
                src="/venue-waiting-area.webp"
                alt="Zero Latency Webster Houston venue entrance and waiting area"
                fill
                sizes="(max-width: 768px) 100vw, 256px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#000C1A]/40 md:bg-gradient-to-r" />
            </div>
            <div className="p-8 flex-1 bg-white/[0.02]">
              <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest">Find Us</span>
              <h2 className="font-orbitron text-xl font-bold text-white mt-2 mb-4">Location</h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                <strong className="text-white">BayWay Village Shopping Center</strong><br />
                20801 Gulf Fwy Suite 5, Webster TX 77598
              </p>
              <ul className="space-y-1.5 mb-5 text-sm text-gray-400">
                <li className="flex items-center gap-2"><span className="text-cyan-500">✓</span> Free parking on-site</li>
                <li className="flex items-center gap-2"><span className="text-cyan-500">✓</span> 10 min from NASA Johnson Space Center</li>
                <li className="flex items-center gap-2"><span className="text-cyan-500">✓</span> 20–30 min from downtown Houston</li>
                <li className="flex items-center gap-2"><span className="text-cyan-500">✓</span> Serves Houston, Clear Lake, League City, Pearland &amp; Galveston County</li>
              </ul>
              <div className="flex gap-3">
                <Link href="/contact-us" className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 text-sm transition-colors">
                  Get directions
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Final CTA ───────────────────────────────────────── */}
        <section className="relative rounded-2xl overflow-hidden text-center">
          <Image
            src="/hero_img.webp"
            alt=""
            fill
            sizes="896px"
            className="object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#000C1A]/90 via-cyan-950/70 to-[#000C1A]/90" />
          <div className="relative z-10 py-16 px-8">
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-cyan-500/40 bg-cyan-500/10">
              <span className="text-yellow-400 text-sm">★★★★★</span>
              <span className="text-cyan-300 text-sm">5.0 · Houston&apos;s #1 Rated Arcade</span>
            </div>
            <h2 className="font-orbitron text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
              Ready to Step<br />Into the Arena?
            </h2>
            <p className="text-gray-300 mb-8 max-w-md mx-auto">
              8 games. 2–8 players. Wireless, cable-free. Sessions fill fast on Friday and Saturday — book online to lock your slot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://booking.zerolatencyvr.com/en/book-now/webster"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 active:scale-95 text-black font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-cyan-500/30"
              >
                Book Your Session Now
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </a>
              <Link
                href="/what-to-expect"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 hover:bg-white/5 text-white px-8 py-4 rounded-xl transition-all duration-200"
              >
                What to Expect
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
