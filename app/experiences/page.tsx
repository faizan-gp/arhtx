'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Zap, Users, Clock, Shield, ChevronRight, Radio, Crosshair, Rocket, Heart, Sword, Ghost } from 'lucide-react';
import { BOOKING_URL } from '@/lib/navData';
import VideoPlayer from '@/components/VideoPlayer';

const schemaData = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@id": "https://arcadehouston.com/", "name": "Home" } },
      { "@type": "ListItem", "position": 2, "item": { "@id": "https://arcadehouston.com/experiences", "name": "Experiences" } }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": ["WebPage", "CollectionPage"],
    "@id": "https://arcadehouston.com/experiences",
    "url": "https://arcadehouston.com/experiences",
    "name": "VR Experiences Houston | Zero Latency Webster, Houston",
    "description": "Six free-roam VR experience categories in Houston — zombie survival, sci-fi missions, PvP esports, family adventures, tropical action, and VR horror.",
    "inLanguage": "en",
    "isPartOf": { "@id": "https://arcadehouston.com/#website" },
    "publisher": { "@id": "https://arcadehouston.com/#organization" }
  }
];

const STATS = [
  { value: '6', label: 'Experience Types' },
  { value: '8', label: 'Games Available' },
  { value: '8', label: 'Players Max' },
  { value: '50', label: 'Min Per Session' },
  { value: '13+', label: 'Age Min (Most)' },
  { value: '2000', label: 'Sq Ft Arena' },
];

const EXPERIENCES = [
  {
    id: 'zombie',
    num: '01',
    title: 'Zombie Survival',
    tag: 'CO-OP · HORROR',
    Icon: Ghost,
    intensity: 5,
    img: '/Outbreak-Digital-Square.webp',
    tagline: '2 to 8 players. Ammo is shared. Survival is not guaranteed.',
    desc: 'Zero Latency Webster, Houston\'s zombie survival games — Outbreak and Undead Arena — put 2 to 8 players inside a free-roam arena where undead attack from every direction. Players share a limited ammo pool and must coordinate movement and fire to survive each wave.',
    specs: [
      { label: 'Players', value: '2 – 8' },
      { label: 'Duration', value: '50 min' },
      { label: 'Min Age', value: '10+' },
      { label: 'Intensity', value: 'EXTREME' },
    ],
    games: [
      { name: 'Outbreak', href: '/games/outbreak' },
      { name: 'Undead Arena', href: '/games/undead-arena' },
    ],
    color: '#DC2626',
    glow: 'rgba(220,38,38,0.25)',
  },
  {
    id: 'scifi',
    num: '02',
    title: 'Sci-Fi Missions',
    tag: 'CO-OP · ACTION',
    Icon: Rocket,
    intensity: 4,
    img: '/Sci-fi.webp',
    tagline: '2 to 8 players. Alien stations. Rogue AI.',
    desc: 'Zero Latency Webster, Houston\'s sci-fi games — Space Marine VR and Singularity — place 2 to 8 players inside alien-controlled space stations and rogue AI environments. Players use weapons built for zero-gravity combat and must move strategically through multi-room virtual environments.',
    specs: [
      { label: 'Players', value: '2 – 8' },
      { label: 'Duration', value: '50 min' },
      { label: 'Min Age', value: '10+' },
      { label: 'Intensity', value: 'HIGH' },
    ],
    games: [
      { name: 'Space Marine VR', href: '/games/space-marine-vr' },
      { name: 'Singularity', href: '/games/singularity' },
    ],
    color: '#2563EB',
    glow: 'rgba(37,99,235,0.25)',
  },
  {
    id: 'pvp',
    num: '03',
    title: 'PvP Esports',
    tag: 'COMPETITIVE · PvP',
    Icon: Crosshair,
    intensity: 5,
    img: '/pvp.webp',
    tagline: '4 to 8 players. 2 teams. One winner.',
    desc: 'Sol Raiders splits 4 to 8 players into 2 competing squads inside a shared arena-scale VR space. Teams fight across objective-based maps with no scripted outcomes — Zero Latency Webster, Houston\'s most competitive multiplayer VR format.',
    specs: [
      { label: 'Players', value: '4 – 8' },
      { label: 'Duration', value: '50 min' },
      { label: 'Min Age', value: '10+' },
      { label: 'Intensity', value: 'EXTREME' },
    ],
    games: [
      { name: 'Sol Raiders', href: '/games/sol-raiders' },
    ],
    color: '#D97706',
    glow: 'rgba(217,119,6,0.25)',
  },
  {
    id: 'family',
    num: '04',
    title: 'Family Adventures',
    tag: 'FAMILY · EXPLORATION',
    Icon: Heart,
    intensity: 1,
    img: '/Family-Adventure.webp',
    tagline: 'Ages 6 and up. No combat. No pressure.',
    desc: 'Engineerium is Zero Latency Webster, Houston\'s non-combat family VR game — players aged 6 and up walk through large-scale geometric structures and physics-driven environments together. There are no enemies, no shooting, and no time limits to stress over.',
    specs: [
      { label: 'Players', value: '2 – 8' },
      { label: 'Duration', value: '50 min' },
      { label: 'Min Age', value: '6+' },
      { label: 'Intensity', value: 'RELAXED' },
    ],
    games: [
      { name: 'Engineerium', href: '/games/engineerium' },
    ],
    color: '#059669',
    glow: 'rgba(5,150,105,0.25)',
  },
  {
    id: 'tropical',
    num: '05',
    title: 'Tropical Action',
    tag: 'CO-OP · ADVENTURE',
    Icon: Sword,
    intensity: 3,
    img: '/far-cry-team.webp',
    tagline: '2 to 6 players. Pirate island. Fight out or stay trapped.',
    desc: 'Far Cry VR at Zero Latency Webster, Houston puts 2 to 6 players on a pirate-controlled tropical island with no extraction point. Players navigate jungle terrain, engage enemy combatants, and must complete objectives as a coordinated team to escape.',
    specs: [
      { label: 'Players', value: '2 – 6' },
      { label: 'Duration', value: '50 min' },
      { label: 'Min Age', value: '13+' },
      { label: 'Intensity', value: 'MEDIUM' },
    ],
    games: [
      { name: 'Far Cry VR', href: '/games/far-cry-vr' },
    ],
    color: '#0891B2',
    glow: 'rgba(8,145,178,0.25)',
  },
  {
    id: 'horror',
    num: '06',
    title: 'VR Horror',
    tag: 'HORROR · SOLO/CO-OP',
    Icon: Shield,
    intensity: 5,
    img: '/haunted-house-bg.webp',
    tagline: 'Ages 15+. Total darkness. Designed to scare.',
    desc: 'Haunted is Zero Latency Webster, Houston\'s horror game — players aged 15 and up move through pitch-black virtual environments where threats are audible before they are visible. The game uses spatial audio and jump mechanics built specifically for free-roam VR.',
    specs: [
      { label: 'Players', value: '2 – 8' },
      { label: 'Duration', value: '50 min' },
      { label: 'Min Age', value: '15+' },
      { label: 'Intensity', value: 'EXTREME' },
    ],
    games: [
      { name: 'Haunted', href: '/games/haunted' },
    ],
    color: '#7C3AED',
    glow: 'rgba(124,58,237,0.25)',
  },
];

function IntensityBar({ level, color }: { level: number; color: string }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="h-1.5 w-5 rounded-full transition-all duration-300"
          style={{ backgroundColor: i < level ? color : 'rgba(255,255,255,0.1)' }}
        />
      ))}
    </div>
  );
}

export default function ExperiencesPage() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <Script id="exp-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[55vh] flex flex-col items-center justify-center text-center overflow-hidden py-20">
        {/* bg image */}
        <div className="absolute inset-0">
          <Image src="/Sci-fi.webp" alt="VR experiences at Zero Latency Webster, Houston" fill sizes="100vw" className="object-cover opacity-15" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000C1A] via-[#000C1A]/60 to-[#000C1A]" />
          {/* scanline grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          {/* radial glow */}
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(34,211,238,0.12) 0%, transparent 70%)' }} />
        </div>

        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          {/* eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-900/20 mb-6">
            <Radio size={12} className="text-cyan-400 animate-pulse" />
            <span className="font-orbitron text-xs text-cyan-300 tracking-widest uppercase">Zero Latency VR — Houston TX</span>
          </div>

          <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
            Zero Latency Webster, Houston{' '}
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: '1px #22D3EE', filter: 'drop-shadow(0 0 20px rgba(34,211,238,0.6))' }}
            >
              Experiences
            </span>
          </h1>
          <p className="mt-5 text-[#7DD3FC] text-lg max-w-2xl mx-auto leading-relaxed">
            Zero Latency Webster, Houston offers 8 multiplayer VR games across 6 experience categories — zombie survival, sci-fi combat, PvP esports, family adventures, tropical action, and VR horror. Every game runs in the same wireless, free-roam arena with 2 to 8 players.
          </p>

          {/* quick-jump pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {EXPERIENCES.map((exp) => (
              <a
                key={exp.id}
                href={`#${exp.id}`}
                className="font-orbitron text-[10px] tracking-widest px-3 py-1.5 rounded-full border transition-all duration-200"
                style={{
                  borderColor: `${exp.color}50`,
                  color: exp.color,
                  backgroundColor: `${exp.color}15`,
                }}
              >
                {exp.num} {exp.title.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────── */}
      <div className="border-y border-cyan-800/30 bg-gradient-to-r from-cyan-950/60 via-[#001525] to-cyan-950/60 py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <span className="font-orbitron text-2xl md:text-3xl font-black text-cyan-400 leading-none">{s.value}</span>
                <span className="font-orbitron text-[8px] md:text-[9px] tracking-widest text-[#7DD3FC]/80 mt-1.5 uppercase">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── OVERVIEW VIDEO ───────────────────────────────────── */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center mb-8">
            <p className="font-orbitron text-xs tracking-[0.3em] text-cyan-400 uppercase mb-2">Zero Latency Webster, Houston — Arena Overview</p>
            <h2 className="font-orbitron text-2xl md:text-3xl font-black text-white">See What Happens <span className="text-cyan-400">Inside the Arena</span></h2>
          </div>
          <VideoPlayer videoSrc="/experience.mp4" thumbnailSrc="/Sci-fi.webp" title="Zero Latency Webster, Houston — Experiences Overview" />
        </div>
      </section>

      {/* ── EXPERIENCE SECTIONS ──────────────────────────────── */}
      <div className="divide-y divide-cyan-900/20">
        {EXPERIENCES.map((exp, idx) => {
          const isEven = idx % 2 === 0;
          const isActive = active === exp.id;
          return (
            <section
              key={exp.id}
              id={exp.id}
              onMouseEnter={() => setActive(exp.id)}
              onMouseLeave={() => setActive(null)}
              className="relative overflow-hidden transition-all duration-500"
              style={{ backgroundColor: isActive ? `${exp.color}08` : 'transparent' }}
            >
              {/* subtle glow on active */}
              {isActive && (
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse 60% 80% at ${isEven ? '30%' : '70%'} 50%, ${exp.glow} 0%, transparent 70%)` }}
                />
              )}

              <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-0">
                <div className={`grid md:grid-cols-2 items-stretch min-h-[480px] ${isEven ? '' : 'md:[direction:rtl]'}`}>

                  {/* Image panel */}
                  <div className={`relative h-64 md:h-auto overflow-hidden ${isEven ? 'md:rounded-none' : '[direction:ltr]'}`}>
                    <Image
                      src={exp.img}
                      alt={exp.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700"
                      style={{ transform: isActive ? 'scale(1.04)' : 'scale(1)' }}
                    />
                    {/* gradient overlay — bottom fade on mobile, side fade on desktop */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000C1A] via-transparent to-transparent md:hidden" />
                    <div
                      className="absolute inset-0 hidden md:block"
                      style={{
                        background: isEven
                          ? 'linear-gradient(90deg, transparent 50%, #000C1A 100%)'
                          : 'linear-gradient(270deg, transparent 50%, #000C1A 100%)',
                      }}
                    />
                    {/* top gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#000C1A]/60 via-transparent to-transparent" />

                    {/* category tag floating */}
                    <div className="absolute top-5 left-5 [direction:ltr]">
                      <span
                        className="font-orbitron text-[9px] tracking-widest px-2.5 py-1 rounded-full border font-bold"
                        style={{ borderColor: `${exp.color}60`, color: exp.color, backgroundColor: `${exp.color}20` }}
                      >
                        {exp.tag}
                      </span>
                    </div>

                    {/* giant number watermark */}
                    <div
                      className="absolute bottom-0 font-orbitron font-black leading-none select-none pointer-events-none [direction:ltr]"
                      style={{
                        fontSize: 'clamp(100px,18vw,220px)',
                        color: 'transparent',
                        WebkitTextStroke: `1px ${exp.color}25`,
                        right: isEven ? '-0.05em' : 'auto',
                        left: isEven ? 'auto' : '-0.05em',
                        bottom: '-0.1em',
                      }}
                      aria-hidden
                    >
                      {exp.num}
                    </div>
                  </div>

                  {/* Content panel */}
                  <div className={`relative [direction:ltr] flex flex-col justify-center px-6 py-12 md:px-12 lg:px-16`}>

                    {/* icon + number */}
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${exp.color}20`, border: `1px solid ${exp.color}40` }}
                      >
                        <exp.Icon size={18} style={{ color: exp.color }} />
                      </div>
                      <span className="font-orbitron text-xs tracking-[0.2em] text-[#7DD3FC]/60 uppercase">{exp.tag}</span>
                    </div>

                    {/* title */}
                    <h2 className="font-orbitron text-3xl md:text-4xl font-black text-white leading-tight">{exp.title}</h2>

                    {/* tagline */}
                    <p
                      className="mt-2 font-orbitron text-sm tracking-wide italic"
                      style={{ color: exp.color }}
                    >
                      "{exp.tagline}"
                    </p>

                    {/* intensity */}
                    <div className="mt-4 flex items-center gap-3">
                      <span className="font-orbitron text-[9px] tracking-widest text-[#7DD3FC]/50 uppercase">Intensity</span>
                      <IntensityBar level={exp.intensity} color={exp.color} />
                    </div>

                    {/* description */}
                    <p className="mt-5 text-[#7DD3FC] text-sm leading-relaxed">{exp.desc}</p>

                    {/* specs grid */}
                    <div className="mt-6 grid grid-cols-2 gap-3">
                      {exp.specs.map((s) => (
                        <div
                          key={s.label}
                          className="rounded-lg px-3 py-2.5 border"
                          style={{ borderColor: `${exp.color}25`, backgroundColor: `${exp.color}08` }}
                        >
                          <div className="font-orbitron text-[8px] tracking-widest text-[#7DD3FC]/50 uppercase mb-0.5">{s.label}</div>
                          <div className="font-orbitron text-sm font-bold text-white">{s.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* games */}
                    <div className="mt-6">
                      <p className="font-orbitron text-[9px] tracking-widest text-[#7DD3FC]/50 uppercase mb-2">Games in this category</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.games.map((g) => (
                          <Link
                            key={g.name}
                            href={g.href}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 hover:brightness-125"
                            style={{
                              borderColor: `${exp.color}50`,
                              color: exp.color,
                              backgroundColor: `${exp.color}15`,
                            }}
                          >
                            {g.name} <ChevronRight size={10} />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-8">
                      <a
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-orbitron text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:brightness-110"
                        style={{
                          background: `linear-gradient(135deg, ${exp.color}, ${exp.color}cc)`,
                          boxShadow: `0 0 20px ${exp.color}40`,
                        }}
                      >
                        <Zap size={14} /> Book at Zero Latency Webster, Houston
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ── USP TRINITY ──────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-t border-cyan-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="font-orbitron text-xs tracking-[0.3em] text-cyan-400 uppercase mb-3">How Zero Latency Webster, Houston Works</p>
            <h2 className="font-orbitron text-3xl md:text-4xl font-black text-white">
              The Technology Behind{' '}
              <span className="text-transparent" style={{ WebkitTextStroke: '1px #22D3EE' }}>Zero Latency VR</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                Icon: Radio,
                title: 'Arena-Scale Free-Roam',
                body: 'Zero Latency Webster, Houston tracks every player across a 2,000 sq ft physical space with no cables or fixed stations. Players walk, run, crouch, and dodge at full speed inside the virtual world.',
                accent: '#22D3EE',
              },
              {
                Icon: Users,
                title: 'Up to 8 Simultaneous Players',
                body: 'All 8 players share the same virtual space and appear to each other as in-game avatars. Players communicate in real time through the headset audio system.',
                accent: '#38BDF8',
              },
              {
                Icon: Clock,
                title: '50-Minute Sessions',
                body: 'Each Zero Latency Webster, Houston session runs 50 minutes — enough time to complete full game objectives. Game Masters brief players before the session and monitor play throughout.',
                accent: '#C084FC',
              },
            ].map(({ Icon, title, body, accent }) => (
              <div
                key={title}
                className="relative rounded-2xl p-7 border overflow-hidden group transition-all duration-300 hover:border-cyan-500/50"
                style={{ backgroundColor: 'rgba(34,211,238,0.04)', borderColor: 'rgba(34,211,238,0.15)' }}
              >
                {/* glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(circle at 30% 40%, ${accent}15 0%, transparent 60%)` }}
                />
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${accent}20`, border: `1px solid ${accent}40` }}
                >
                  <Icon size={20} style={{ color: accent }} />
                </div>
                <h3 className="font-orbitron text-lg font-bold text-white mb-3">{title}</h3>
                <p className="text-[#7DD3FC] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-fuchsia-900/20 to-[#000C1A]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'linear-gradient(rgba(56,189,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(34,211,238,0.2) 0%, transparent 70%)' }} />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-fuchsia-500/30 bg-fuchsia-900/20 mb-6">
            <Zap size={12} className="text-fuchsia-400" />
            <span className="font-orbitron text-xs text-fuchsia-300 tracking-widest uppercase">Sessions Open Now — Houston Texas</span>
          </div>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white leading-tight">
            Book Zero Latency Webster, Houston<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">
              For Your Group.
            </span>
          </h2>
          <p className="mt-5 text-[#7DD3FC] text-lg leading-relaxed">
            Zero Latency Webster, Houston runs sessions 7 days a week. Pick from 8 games, bring 2 to 8 players, and book the time slot your group needs online in under 2 minutes.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-orbitron text-sm font-bold text-white"
            >
              <Zap size={16} /> BOOK YOUR SESSION
            </a>
            <Link
              href="/what-to-expect"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-orbitron text-sm font-bold border border-cyan-500/40 text-cyan-300 hover:border-cyan-400 hover:text-white transition-all duration-200"
            >
              What to Expect <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
