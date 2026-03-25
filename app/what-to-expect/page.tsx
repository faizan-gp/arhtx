"use client";

import Image from "next/image";
import Script from "next/script";
import { useState } from "react";
import {
  CalendarCheck,
  CheckCircle,
  ChevronDown,
  Gamepad2,
  Headset,
  LogIn,
  Ticket,
  Trophy,
  Zap,
} from "lucide-react";
import BookGameButton from "@/components/BookBtn";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const steps = [
  {
    num: "01",
    icon: Ticket,
    title: "Book Your Session",
    subtitle: "Reserve your time slot before you arrive — weekends fill fast",
    img: "/what-to-expect-thumbnail.webp",
    imgAlt: "Zero Latency Webster, Houston booking confirmation screen",
    details: [
      { label: "Reserve Online", text: "Book at arcadehouston.com. Weekends book out days in advance — secure your slot early." },
      { label: "Age Requirement", text: "Players must be 13 years or older. Some games carry a 16+ recommendation listed on the game page." },
      { label: "Group Size", text: "Sessions support 1–8 players at the same time. Groups of 9 or more can book back-to-back sessions." },
      { label: "Arrive Early", text: "Arrive 10–15 minutes before your session start time so check-in does not cut into gameplay." },
      { label: "What to Wear", text: "Closed-toe shoes and clothes you can move in. No heels, no flip-flops, no oversized jackets." },
    ],
  },
  {
    num: "02",
    icon: LogIn,
    title: "Check In",
    subtitle: "Your Game Master takes over from here",
    img: "/registration.jpg",
    imgAlt: "Players checking in at Zero Latency Webster, Houston front desk",
    details: [
      { label: "Front Desk", text: "Check in at the desk and confirm your booking name. Staff confirms group size and selected game." },
      { label: "Game Master", text: "Your Game Master briefs the full group on safety rules, movement boundaries, controller use, and game objectives." },
      { label: "No VR Experience Needed", text: "First-timers make up a large portion of our visitors. The briefing covers everything — zero prior knowledge assumed." },
      { label: "Game Selection", text: "If you did not pre-select a game, your Game Master recommends the best option based on your group size and preferences." },
    ],
  },
  {
    num: "03",
    icon: Headset,
    title: "Gear Up",
    subtitle: "Fully wireless — no cables between you and the arena",
    img: "/gear-up.jpg",
    imgAlt: "Player being fitted with VR headset and backpack at Zero Latency Webster, Houston",
    details: [
      { label: "Wireless Backpack", text: "The compute unit straps on like a hiking pack. It powers your headset with no cables connecting you to any fixed point." },
      { label: "VR Headset", text: "High-resolution displays with 360° spatial audio. Staff fits every headset to your head, prescription glasses included." },
      { label: "Controllers", text: "Precision-tracked hand controllers map your movements to in-game actions — weapons, tools, or instruments depending on the game." },
      { label: "Calibration", text: "Calibration takes under 5 minutes. The system tracks every player's exact position in the arena before the session starts." },
    ],
  },
  {
    num: "04",
    icon: Gamepad2,
    title: "Play",
    subtitle: "Walk, run, crouch, and move — the arena is your world",
    img: "/arena-action.jpg",
    imgAlt: "Players moving freely through the Zero Latency Webster, Houston VR arena",
    details: [
      { label: "Full Body Movement", text: "Your physical movements map directly to the virtual world — walk forward in the arena, move forward in the game." },
      { label: "Session Length", text: "Games run 15–45 minutes depending on which title you selected. Most groups lose track of time within the first few minutes." },
      { label: "Up to 8 Players", text: "All 8 players share the same virtual world and see each other in-game throughout the session." },
      { label: "Team Communication", text: "Strategy and communication determine outcomes in every co-op and PvP game. Your crew wins or loses together." },
    ],
  },
  {
    num: "05",
    icon: Trophy,
    title: "Rewatch and Replay",
    subtitle: "Check your scores and watch your highlights before you leave",
    img: "/post-game-group.webp",
    imgAlt: "Group of friends celebrating after their Zero Latency Webster, Houston VR session",
    details: [
      { label: "Scoreboard", text: "Post-game leaderboard shows individual and team stats — kills, assists, accuracy, and final ranking." },
      { label: "Replay Footage", text: "Zero Latency Webster, Houston captures gameplay highlights from the session. Your Game Master shares a link before you leave." },
      { label: "Book Another Round", text: "Groups who want a second session can book on-site at the desk — Game Masters check slot availability immediately." },
      { label: "Share Your Footage", text: "Post your highlight reel and tag Zero Latency Webster, Houston. We share Houston groups on our social channels." },
    ],
  },
];

const faqs = [
  { q: "Do I need VR experience?", a: "No. Every session at Zero Latency Webster, Houston starts with a full briefing from your Game Master — controller basics, movement, safety, and game objectives. First-timers make up a large share of our visitors every week." },
  { q: "Will I get motion sick?", a: "Motion sickness in free-roam VR is rare. Because your body physically moves through the arena — rather than a controller simulating movement — your brain and body stay in sync. The vast majority of visitors finish their session with zero discomfort." },
  { q: "Can I wear glasses?", a: "Yes. Our VR headsets fit over most prescription frames. Bring your glasses and Game Masters adjust the headset during gear-up to get a proper fit." },
  { q: "What if I need to stop mid-game?", a: "Signal your Game Master at any point and they pause the session immediately. There is no pressure to continue. Game Masters monitor all players throughout the session and respond within seconds." },
  { q: "How long is the whole visit?", a: "A single session takes 1–1.5 hours total — that includes check-in, briefing, gear-up, gameplay, and post-game debrief. Groups booking 2 back-to-back sessions should plan for about 2.5 hours." },
  { q: "Is there parking?", a: "Yes. Free parking is available at BayWay Village Shopping Center in Webster, TX where Zero Latency Webster, Houston is located. Parking is abundant and you will not need to search for a spot." },
];

const gear = [
  { icon: Headset, name: "VR Headset", spec: "High-res 360° display", desc: "High-resolution visuals with spatial audio — footsteps, gunshots, and in-game sounds come from accurate directions in 3D space." },
  { icon: Zap, name: "Wireless Backpack", spec: "Cable-free compute unit", desc: "Straps on like a hiking pack and houses the processing hardware. No cables connect you to any fixed point in the arena." },
  { icon: Gamepad2, name: "Precision Controllers", spec: "Sub-millimeter tracking", desc: "Hand controllers track your exact movements and map them to in-game actions — weapons, tools, or instruments depending on the game." },
  { icon: CalendarCheck, name: "Arena Sensors", spec: "Full-space spatial mapping", desc: "Sensors cover the full 2,000+ sq ft arena. The system tracks every player's exact position throughout the session." },
];

const tips = [
  "Wear closed-toe sneakers. No heels, no sandals, no slip-on shoes.",
  "Arrive 10–15 minutes early. The briefing and gear-up start on schedule.",
  "Follow your Game Master's instructions. They run these sessions every day.",
  "Move naturally and keep your head up. Your body movements control the game.",
  "Communicate with your team. Every co-op game requires active callouts.",
  "Leave bulky jackets in the car or at the front desk — you need full arm movement.",
];

/* ─────────────────────────────────────────────
   SCHEMA
───────────────────────────────────────────── */
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "item": { "name": "Home", "id": "https://arcadehouston.com/" } },
    { "@type": "ListItem", "position": 2, "item": { "name": "What to Expect", "id": "https://arcadehouston.com/what-to-expect" } },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Experience Zero Latency Webster, Houston Free-Roam VR",
  "description": "Step-by-step guide to your first free-roam VR experience at Zero Latency Webster, Houston",
  "totalTime": "PT1H",
  "step": steps.map((s, i) => ({
    "@type": "HowToStep",
    "position": i + 1,
    "name": s.title,
    "text": s.subtitle,
    "url": `https://arcadehouston.com/what-to-expect#step-${s.num}`,
  })),
  "supply": [{ "@type": "HowToSupply", "name": "Comfortable closed-toe shoes" }],
  "tool": [
    { "@type": "HowToTool", "name": "VR Headset" },
    { "@type": "HowToTool", "name": "Wireless Controller" },
    { "@type": "HowToTool", "name": "Wireless Backpack" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What to Expect at Zero Latency Webster, Houston | Your Complete VR Visit Guide",
  "description": "Everything you need to know before your Zero Latency Webster, Houston visit — booking, check-in, gear-up, gameplay, and post-session highlights.",
  "datePublished": "2025-01-01",
  "dateModified": "2025-12-01",
  "author": { "@type": "Organization", "name": "Zero Latency Webster, Houston", "url": "https://arcadehouston.com" },
  "publisher": { "@type": "Organization", "name": "Zero Latency Webster, Houston", "url": "https://arcadehouston.com" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export default function WhatToExpectPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Script id="bc-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background */}
        <Image
          src="/background.webp"
          alt="Zero Latency Webster, Houston VR arena"
          fill
          className="object-cover opacity-20"
          priority
        />

        {/* Scanline grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Radial glow */}
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(34,211,238,0.18) 0%, transparent 70%)" }} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 w-full py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-xs font-orbitron font-bold text-cyan-300 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
              Your Visit Guide
            </div>
            <h1 className="font-orbitron text-5xl sm:text-6xl md:text-7xl font-black text-white leading-none tracking-tight">
              What to
              <br />
              <span className="text-stroke-cyan">Expect</span>
            </h1>
            <p className="mt-6 text-lg text-[#7DD3FC] max-w-xl leading-relaxed">
              Here is exactly what happens during a Zero Latency Webster, Houston visit — from booking your free-roam VR session to rewatching your gameplay highlights.
            </p>

            {/* Step quick-nav pills */}
            <div className="mt-10 flex flex-wrap gap-2">
              {steps.map((s, i) => (
                <button
                  key={s.num}
                  onClick={() => {
                    setActiveStep(i);
                    document.getElementById(`step-${s.num}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-orbitron font-bold border transition-all duration-200 ${
                    activeStep === i
                      ? "bg-cyan-500 border-cyan-400 text-white"
                      : "border-cyan-800/50 text-[#7DD3FC]/60 hover:border-cyan-500/60 hover:text-white"
                  }`}
                >
                  <span className="opacity-50">{s.num}</span> {s.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STEPS ── alternating full-width sections */}
      {steps.map((step, i) => {
        const isEven = i % 2 === 0;
        return (
          <section
            key={step.num}
            id={`step-${step.num}`}
            onMouseEnter={() => setActiveStep(i)}
            className="relative overflow-hidden"
            style={{
              background: isEven
                ? "linear-gradient(180deg, #000C1A 0%, #001225 100%)"
                : "linear-gradient(180deg, #001225 0%, #000C1A 100%)",
            }}
          >
            {/* Giant step number — background decoration */}
            <div
              className="absolute select-none pointer-events-none font-orbitron font-black text-[clamp(160px,25vw,320px)] leading-none top-1/2 -translate-y-1/2"
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(34,211,238,0.1)",
                right: isEven ? "-0.05em" : "auto",
                left: isEven ? "auto" : "-0.05em",
              }}
              aria-hidden
            >
              {step.num}
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-28">
              <div className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${isEven ? "" : "md:[&>*:first-child]:order-2"}`}>

                {/* Text column */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-cyan-500/15 border border-cyan-500/30">
                      <step.icon size={20} className="text-[#38BDF8]" />
                    </div>
                    <span className="font-orbitron text-xs font-bold text-cyan-400 tracking-widest uppercase">Step {step.num}</span>
                  </div>

                  <h2 className="font-orbitron text-3xl md:text-4xl font-black text-white leading-tight">
                    {step.title}
                  </h2>
                  <p className="mt-2 text-[#38BDF8] font-medium text-sm">{step.subtitle}</p>

                  {/* Detail rows */}
                  <div className="mt-8 space-y-0 divide-y divide-cyan-900/30">
                    {step.details.map((d) => (
                      <div key={d.label} className="py-4 grid grid-cols-[120px_1fr] gap-4 items-start">
                        <span className="font-orbitron text-xs font-bold text-cyan-400 uppercase tracking-wide pt-0.5">{d.label}</span>
                        <span className="text-sm text-[#7DD3FC] leading-relaxed">{d.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image column */}
                <div className="relative">
                  {/* Glow halo */}
                  <div className="absolute -inset-4 rounded-3xl bg-cyan-500/10 blur-2xl pointer-events-none" />
                  <div className="relative rounded-2xl overflow-hidden neon-border">
                    <Image
                      src={step.img}
                      alt={step.imgAlt}
                      width={700}
                      height={470}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={i === 0}
                      className="w-full h-full object-cover aspect-video"
                    />
                    {/* Corner label */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full glass-dark text-xs font-orbitron font-bold text-cyan-300 border border-cyan-500/30">
                      STEP {step.num}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section divider neon line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
          </section>
        );
      })}

      {/* ── GEAR SHOWCASE ── */}
      <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: "radial-gradient(ellipse at center, rgba(8,145,178,0.2) 0%, #000C1A 65%)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-bold font-orbitron tracking-widest bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 uppercase">
              Your Equipment
            </span>
            <h2 className="font-orbitron text-3xl md:text-4xl font-black text-white">
              The VR <span className="text-stroke-cyan">Gear You Wear</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-[#7DD3FC] text-sm">
              Game Masters calibrate every piece of equipment to each player before the session. No extra charges. No prior setup knowledge needed.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {gear.map((g, i) => (
              <div
                key={g.name}
                className="group relative glass rounded-2xl p-6 flex flex-col gap-4 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/20"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-pink-500/10 border border-cyan-500/30 group-hover:border-[#38BDF8]/50 transition-colors">
                  <g.icon size={22} className="text-[#38BDF8]" />
                </div>
                <div>
                  <p className="font-orbitron text-xs text-cyan-400 mb-1 tracking-wide">{g.spec}</p>
                  <h3 className="font-orbitron text-base font-bold text-white">{g.name}</h3>
                  <p className="mt-2 text-xs text-[#7DD3FC]/80 leading-relaxed">{g.desc}</p>
                </div>
                {/* Hover glow accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#38BDF8]/0 to-transparent group-hover:via-[#38BDF8]/40 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIPS + FAQ ── two-column */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Terminal-style tips block */}
            <div>
              <h2 className="font-orbitron text-2xl md:text-3xl font-black text-white mb-8">
                6 Tips for <span className="text-stroke-cyan">First-Timers</span>
              </h2>
              <div className="rounded-2xl overflow-hidden border border-cyan-900/40" style={{ background: "#080010" }}>
                {/* Terminal header bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-cyan-900/30 bg-cyan-950/30">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-3 font-orbitron text-xs text-cyan-400/60">mission_tips.sh</span>
                </div>
                <div className="p-6 space-y-3 font-mono text-sm">
                  {tips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-[#38BDF8] flex-shrink-0 mt-0.5">{">"}</span>
                      <span className="text-[#7DD3FC]">{tip}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-1 pt-2">
                    <span className="text-cyan-400/50 font-orbitron text-xs">$</span>
                    <span className="inline-block w-2 h-4 bg-cyan-400/60 animate-pulse ml-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ accordion */}
            <div>
              <h2 className="font-orbitron text-2xl md:text-3xl font-black text-white mb-8">
                Frequently Asked <span className="text-stroke-cyan">Questions</span>
              </h2>
              <div className="space-y-2">
                {faqs.map((faq, i) => (
                  <div key={i} className={`rounded-xl border transition-all duration-200 overflow-hidden ${openFaq === i ? "border-cyan-500/50 bg-cyan-950/20" : "border-cyan-900/30 bg-white/[0.02] hover:border-cyan-700/40"}`}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="font-orbitron text-sm font-bold text-white leading-snug">{faq.q}</span>
                      <ChevronDown
                        size={16}
                        className={`flex-shrink-0 text-cyan-400 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === i ? "max-h-60" : "max-h-0"}`}>
                      <p className="px-5 pb-5 text-sm text-[#7DD3FC] leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative py-24 overflow-hidden">
        {/* Full-bleed gradient bg */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(8,145,178,0.35) 0%, rgba(34,211,238,0.15) 40%, rgba(56,189,248,0.08) 100%)" }} />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(34,211,238,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.06) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-xs font-orbitron font-bold text-cyan-300 tracking-widest uppercase">
            <CheckCircle size={12} /> You Know What to Expect
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white leading-tight">
            Book Your Zero Latency <span className="text-stroke-cyan">Houston Session</span>
          </h2>
          <p className="mt-5 text-[#7DD3FC] text-base leading-relaxed max-w-lg mx-auto">
            Bring 1–8 players to Zero Latency Webster, Houston in Webster, TX and step into arena-scale free-roam virtual reality. Book online in under 5 minutes.
          </p>
          <BookGameButton label="BOOK YOUR SESSION" source="what-to-expect-cta" className="mt-2" />
          <p className="mt-4 text-xs text-[#7DD3FC]/40 font-orbitron">Walk-ins welcome when slots are available</p>
        </div>
      </section>
    </>
  );
}
