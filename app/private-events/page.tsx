'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import {
  PartyPopper, Briefcase, Crown, Users,
  CheckCircle, ChevronRight, Zap, CalendarCheck,
  MapPin, Phone, Mail, ArrowRight,
} from 'lucide-react';
import { BOOKING_URL } from '@/lib/navData';

const schemaData = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@id": "https://arcadehouston.com/", "name": "Home" } },
      { "@type": "ListItem", "position": 2, "item": { "@id": "https://arcadehouston.com/private-events", "name": "Private Events" } }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Private VR Events at Zero Latency Webster, Houston",
    "description": "Host birthday parties, corporate team building, bachelor parties, and group outings in Houston's premier free-roam VR arena. Sessions for 2–8 players. Book online.",
    "serviceType": "Private VR Event Venue",
    "provider": { "@id": "https://arcadehouston.com/#organization" },
    "areaServed": {
      "@type": "City",
      "name": "Houston",
      "sameAs": "https://en.wikipedia.org/wiki/Houston"
    },
    "url": "https://arcadehouston.com/private-events",
    "image": "https://arcadehouston.com/venue-team-building.webp",
    "offers": {
      "@type": "Offer",
      "url": "https://booking.zerolatencyvr.com/en/book-now/webster",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "seller": { "@id": "https://arcadehouston.com/#organization" }
    }
  }
];

const EVENT_TYPES = [
  {
    id: 'birthday',
    Icon: PartyPopper,
    title: 'Birthday Parties',
    subtitle: 'The birthday they actually remember.',
    img: '/venue-birthday-party.webp',
    color: '#38BDF8',
    desc: 'Zero Latency Webster, Houston gives your birthday crew a private arena-scale VR session — up to 8 players sharing the same virtual world. Pick your game, show up, and let our Game Masters handle everything else.',
    features: [
      'Private arena session for your group of 2–8 players',
      'Choose from 6+ multiplayer VR games or get a recommendation',
      'Post-game café area for food and drinks',
      'Back-to-back sessions available for larger birthday parties',
      'Game Masters run the tech so your group focuses on playing',
    ],
    cta: 'Book a Birthday Party',
  },
  {
    id: 'corporate',
    Icon: Briefcase,
    title: 'Corporate Team Building',
    subtitle: 'Teams that play together work better together.',
    img: '/venue-team-building.webp',
    color: '#3B82F6',
    desc: 'Zero Latency Webster, Houston puts your Houston Texas team into multiplayer VR missions where communication and strategy decide the outcome. Groups run 2–8 players per session, with back-to-back booking for larger corporate teams.',
    features: [
      'Co-op missions built around communication and leadership',
      'PvP tournament mode for competitive team-vs-team events',
      'Flexible scheduling for corporate groups of any size',
      'Scoreboard and replay footage for post-game debrief',
      'One of the most distinctive corporate team building venues in Houston',
    ],
    cta: 'Plan a Corporate Event',
  },
  {
    id: 'bachelor',
    Icon: Crown,
    title: 'Bachelor & Bachelorette',
    subtitle: 'Start the night with something worth talking about.',
    img: '/venue-bachelor-party.webp',
    color: '#22D3EE',
    desc: 'Kick off the celebration at Zero Latency Webster, Houston before heading out in Houston Texas. Run PvP battles against each other, survive a zombie outbreak together, or take on a co-op mission — then take the party wherever the night goes.',
    features: [
      'PvP mode pits the squad against each other in free-roam VR',
      'Zombie survival and co-op missions for groups of 2–8 players',
      'Ideal pre-party stop before a Houston night out',
      'Beginners welcome — no VR experience needed',
      'Game Masters handle all setup and briefing',
    ],
    cta: 'Book the Send-Off',
  },
  {
    id: 'groups',
    Icon: Users,
    title: 'Group Outings',
    subtitle: 'Works for any group, any occasion.',
    img: '/venue-waiting-area.webp',
    color: '#10B981',
    desc: 'Zero Latency Webster, Houston hosts school trips, family reunions, church groups, and friend outings. Sessions support 2–8 players, with back-to-back bookings for groups of 9 or more. Players must be at least 6 years old.',
    features: [
      'Family-friendly VR game options rated for all ages',
      'Back-to-back sessions for groups larger than 8 players',
      'School trips and youth groups welcome — ages 6 and up',
      'Game Masters guide every group through setup and gameplay',
      'Free parking at BayWay Village Shopping Center in Webster TX',
    ],
    cta: 'Book a Group Outing',
  },
];

const VENUE_FEATURES = [
  { icon: '🎮', title: 'Free-Roam Arena', desc: '2,000+ sq ft of wireless, cable-free VR space in Webster, TX — players walk, run, and move freely.' },
  { icon: '👥', title: 'Up to 8 Players', desc: 'Up to 8 players share the same virtual world at the same time, each with their own headset and backpack.' },
  { icon: '🍕', title: 'On-Site Café', desc: 'Order food and drinks at our café between sessions or while your group finishes gameplay.' },
  { icon: '📺', title: 'Spectator Screens', desc: 'Guests who are not playing watch the live feed on display screens in the waiting area.' },
  { icon: '🎯', title: 'Game Masters On-Site', desc: 'Game Masters brief your group, run calibration, monitor gameplay, and replay footage after the session.' },
  { icon: '🔒', title: 'Private Arena Access', desc: 'Your booking locks down the arena for your group — no shared sessions with strangers.' },
];

const STEPS = [
  { num: '01', title: 'Choose Your Event Type', desc: 'Select from birthday parties, corporate team building, bachelor/bachelorette, or group outings. Tell us your group size and preferred game — we recommend if you are unsure.' },
  { num: '02', title: 'Book and Confirm', desc: 'Reserve your date and time online or by phone at (469) 404-9149. We send a confirmation with everything your group needs to know before arriving.' },
  { num: '03', title: 'Arrive, Gear Up, Play', desc: 'Show up 10–15 minutes early. Game Masters gear up your group in under 15 minutes, run a full briefing, and start your session on time.' },
];

export default function PrivateEventsPage() {
  const [active, setActive] = useState(EVENT_TYPES[0].id);
  const current = EVENT_TYPES.find((e) => e.id === active)!;

  return (
    <>
      <Script id="pe-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden py-20">
        <div className="absolute inset-0">
          <Image src="/events-hero-bg.webp" alt="Private VR events at Zero Latency Webster, Houston" fill sizes="100vw" className="object-cover opacity-10" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000C1A] via-[#000C1A]/70 to-[#000C1A]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(rgba(56,189,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 70%, rgba(34,211,238,0.15) 0%, transparent 70%)' }} />
        </div>

        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-fuchsia-500/30 bg-fuchsia-900/20 mb-6">
            <CalendarCheck size={12} className="text-fuchsia-400" />
            <span className="font-orbitron text-xs text-fuchsia-300 tracking-widest uppercase">Private Events — Houston TX</span>
          </div>
          <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
            Houston&apos;s Private{' '}
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: '1px #38BDF8', filter: 'drop-shadow(0 0 20px rgba(56,189,248,0.5))' }}
            >
              VR Event Venue
            </span>
          </h1>
          <p className="mt-5 text-[#7DD3FC] text-lg max-w-2xl mx-auto leading-relaxed">
            Zero Latency Webster, Houston hosts birthday parties, corporate team building, bachelor and bachelorette parties, and group outings — all in a 2,000+ sq ft free-roam VR arena in Webster, TX.
          </p>

          {/* quick-jump pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {EVENT_TYPES.map((e) => (
              <button
                key={e.id}
                onClick={() => setActive(e.id)}
                className="font-orbitron text-[10px] tracking-widest px-3 py-1.5 rounded-full border transition-all duration-200"
                style={{
                  borderColor: active === e.id ? e.color : `${e.color}40`,
                  color: active === e.id ? '#fff' : e.color,
                  backgroundColor: active === e.id ? `${e.color}30` : `${e.color}10`,
                }}
              >
                {e.title.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVENT COMMAND CENTER (tabbed) ─────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-[280px_1fr] gap-6 items-start">

            {/* Left: tab nav — 2×2 grid on mobile, vertical list on lg */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 lg:sticky lg:top-24">
              {EVENT_TYPES.map((e) => {
                const isActive = active === e.id;
                return (
                  <button
                    key={e.id}
                    onClick={() => setActive(e.id)}
                    className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl border text-left transition-all duration-300 w-full"
                    style={{
                      borderColor: isActive ? `${e.color}60` : 'rgba(34,211,238,0.1)',
                      backgroundColor: isActive ? `${e.color}12` : 'transparent',
                    }}
                  >
                    <div
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${e.color}20`, border: `1px solid ${e.color}40` }}
                    >
                      <e.Icon size={14} style={{ color: e.color }} />
                    </div>
                    <div className="min-w-0">
                      <div className="font-orbitron text-[10px] sm:text-xs font-bold text-white leading-tight truncate">{e.title}</div>
                      <div className="hidden lg:block font-orbitron text-[9px] tracking-wide mt-0.5 truncate" style={{ color: e.color }}>{e.subtitle}</div>
                    </div>
                    {isActive && <ChevronRight size={12} className="ml-auto flex-shrink-0 hidden sm:block" style={{ color: e.color }} />}
                  </button>
                );
              })}
            </div>

            {/* Right: display panel */}
            <div
              key={current.id}
              className="rounded-2xl overflow-hidden border transition-all duration-300"
              style={{ borderColor: `${current.color}30` }}
            >
              {/* Image */}
              <div className="relative h-64 sm:h-80 md:h-96">
                <Image src={current.img} alt={current.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000C1A] via-[#000C1A]/40 to-transparent" />
                {/* floating badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className="inline-flex items-center gap-1.5 font-orbitron text-[9px] tracking-widest px-2.5 py-1 rounded-full border font-bold"
                    style={{ borderColor: `${current.color}60`, color: current.color, backgroundColor: `${current.color}20` }}
                  >
                    <current.Icon size={10} /> {current.title.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-10" style={{ backgroundColor: `${current.color}05` }}>
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  {/* Left: text */}
                  <div>
                    <h2 className="font-orbitron text-2xl md:text-3xl font-black text-white leading-tight">{current.title}</h2>
                    <p className="font-orbitron text-sm italic mt-1" style={{ color: current.color }}>"{current.subtitle}"</p>
                    <p className="mt-4 text-[#7DD3FC] text-sm leading-relaxed">{current.desc}</p>
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full font-orbitron text-sm font-bold text-white transition-all duration-300 hover:scale-105"
                      style={{
                        background: `linear-gradient(135deg, ${current.color}, ${current.color}aa)`,
                        boxShadow: `0 0 20px ${current.color}40`,
                      }}
                    >
                      <Zap size={14} /> {current.cta}
                    </a>
                  </div>

                  {/* Right: feature list */}
                  <div>
                    <p className="font-orbitron text-[9px] tracking-widest text-[#7DD3FC]/50 uppercase mb-4">What&apos;s included</p>
                    <ul className="space-y-3">
                      {current.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <CheckCircle size={15} className="flex-shrink-0 mt-0.5" style={{ color: current.color }} />
                          <span className="text-sm text-[#7DD3FC] leading-snug">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VENUE FEATURES BENTO ─────────────────────────────── */}
      <section className="py-16 md:py-24 border-t border-cyan-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="font-orbitron text-xs tracking-[0.3em] text-cyan-400 uppercase mb-3">The Venue</p>
            <h2 className="font-orbitron text-3xl md:text-4xl font-black text-white">
              Everything Your Event{' '}
              <span className="text-transparent" style={{ WebkitTextStroke: '1px #22D3EE' }}>Needs On-Site</span>
            </h2>
            <p className="mt-4 text-[#7DD3FC] max-w-xl mx-auto text-sm leading-relaxed">
              Zero Latency Webster, Houston covers your full event from check-in through final replay — arena, café, staff, and spectator screens all in one location in Webster, TX.
            </p>
          </div>

          {/* Bento grid: top row image spanning 2 cols + feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Large image card — spans 2 cols on lg */}
            <div className="relative lg:col-span-2 rounded-2xl overflow-hidden h-64 sm:h-72 border border-cyan-800/20">
              <Image src="/venue-arena.webp" alt="Zero Latency Webster, Houston private event arena" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000C1A]/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5">
                <span className="font-orbitron text-xs text-cyan-300 tracking-widest uppercase">Zero Latency Webster, Houston — Webster, TX</span>
                <p className="font-orbitron text-xl font-black text-white mt-1">2,000+ Sq Ft of Arena-Scale VR Space</p>
              </div>
            </div>

            {/* Feature cards */}
            {VENUE_FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-6 border border-cyan-800/20 hover:border-cyan-500/40 transition-all duration-300 group"
                style={{ backgroundColor: 'rgba(34,211,238,0.04)' }}
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-orbitron text-sm font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{f.title}</h3>
                <p className="text-xs text-[#7DD3FC] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="py-16 md:py-24 border-t border-cyan-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="font-orbitron text-xs tracking-[0.3em] text-cyan-400 uppercase mb-3">How to Book</p>
            <h2 className="font-orbitron text-3xl md:text-4xl font-black text-white">
              3 Steps to Book Your{' '}
              <span className="text-transparent" style={{ WebkitTextStroke: '1px #38BDF8' }}>Private VR Event</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* connector line — desktop only */}
            <div className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-cyan-700/0 via-cyan-600/60 to-cyan-700/0" />

            {STEPS.map((step, i) => (
              <div key={step.num} className="relative flex flex-col items-center text-center">
                {/* number circle */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6 border-2 border-cyan-600/40 relative z-10"
                  style={{ background: 'linear-gradient(135deg, rgba(34,211,238,0.2), rgba(56,189,248,0.1))' }}
                >
                  <span className="font-orbitron text-xl font-black text-white">{step.num}</span>
                </div>
                <h3 className="font-orbitron text-base font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-[#7DD3FC] leading-relaxed max-w-xs">{step.desc}</p>
                {/* mobile arrow */}
                {i < STEPS.length - 1 && (
                  <ArrowRight size={18} className="text-cyan-600/50 mt-4 md:hidden rotate-90" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPLIT CTA ────────────────────────────────────────── */}
      <section className="py-16 md:py-0 border-t border-cyan-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid md:grid-cols-2 overflow-hidden rounded-2xl border border-cyan-800/30">

            {/* Left: contact info */}
            <div className="p-8 md:p-12 lg:p-16" style={{ backgroundColor: 'rgba(34,211,238,0.06)' }}>
              <p className="font-orbitron text-xs tracking-[0.3em] text-cyan-400 uppercase mb-4">Contact Us</p>
              <h2 className="font-orbitron text-2xl md:text-3xl font-black text-white leading-tight mb-6">
                Questions About<br />
                <span className="text-cyan-400">Your Private Event?</span>
              </h2>
              <p className="text-[#7DD3FC] text-sm leading-relaxed mb-8">
                Our team answers group size questions, game recommendations, and scheduling — call, email, or send a message and we respond same day.
              </p>
              <div className="space-y-4">
                <a href="tel:+14694049149" className="flex items-center gap-3 text-[#7DD3FC] hover:text-white transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-cyan-900/40 border border-cyan-700/30 flex items-center justify-center flex-shrink-0 group-hover:border-cyan-500/60 transition-colors">
                    <Phone size={14} className="text-cyan-400" />
                  </div>
                  <span className="text-sm font-medium">(469) 404-9149</span>
                </a>
                <a href="mailto:zero@zlwebster.com" className="flex items-center gap-3 text-[#7DD3FC] hover:text-white transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-cyan-900/40 border border-cyan-700/30 flex items-center justify-center flex-shrink-0 group-hover:border-cyan-500/60 transition-colors">
                    <Mail size={14} className="text-cyan-400" />
                  </div>
                  <span className="text-sm font-medium">zero@zlwebster.com</span>
                </a>
                <div className="flex items-start gap-3 text-[#7DD3FC]">
                  <div className="w-9 h-9 rounded-lg bg-cyan-900/40 border border-cyan-700/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={14} className="text-cyan-400" />
                  </div>
                  <span className="text-sm">20801 Gulf Fwy Suite 5, Webster, TX 77598</span>
                </div>
              </div>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full font-orbitron text-sm font-bold border border-cyan-500/40 text-cyan-300 hover:border-cyan-400 hover:text-white transition-all duration-200"
              >
                Send a Message <ChevronRight size={14} />
              </Link>
            </div>

            {/* Right: booking CTA */}
            <div className="relative overflow-hidden p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/50 via-fuchsia-900/30 to-[#000C1A]" />
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage: 'linear-gradient(rgba(56,189,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,1) 1px, transparent 1px)',
                  backgroundSize: '35px 35px',
                }}
              />
              <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(34,211,238,0.2) 0%, transparent 70%)' }} />

              <div className="relative z-10">
                <p className="font-orbitron text-xs tracking-[0.3em] text-fuchsia-400 uppercase mb-4">Book Online Now</p>
                <h2 className="font-orbitron text-2xl md:text-3xl font-black text-white leading-tight mb-4">
                  Reserve Your Group&apos;s<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">
                    VR Arena Session
                  </span>
                </h2>
                <p className="text-[#7DD3FC] text-sm leading-relaxed mb-8">
                  Book your private event at Zero Latency Webster, Houston in under 5 minutes. Pick your date, group size (up to 8 players per session), and preferred game.
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-orbitron text-sm font-bold text-white w-full sm:w-auto"
                >
                  <Zap size={16} /> BOOK PRIVATE EVENT
                </a>
                <p className="mt-4 text-[#7DD3FC]/50 text-xs font-orbitron">
                  Prefer to call? Reach us at (469) 404-9149
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-16 md:h-20" />
      </section>
    </>
  );
}
