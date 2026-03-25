import Image from "next/image";
import type { Metadata } from "next";
import BookGameButton from "@/components/BookBtn";
import Link from "next/link";
import { allGames } from "@/lib/gamesData";
import { ChevronRight, Users, Clock, Zap, ShieldAlert } from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Sol Raiders at Zero Latency Webster, Houston | PvP Team vs Team Free-Roam VR",
  description: "Sol Raiders at Zero Latency Webster, Houston is a team vs team PvP free-roam VR game for 4–8 players. Split into 2 squads and compete in objective-based arenas for 30–50 minutes in Houston, Texas.",
  alternates: { canonical: "https://arcadehouston.com/games/sol-raiders" },
  openGraph: {
    title: "Sol Raiders at Zero Latency Webster, Houston",
    description: "Sol Raiders at Zero Latency Webster, Houston splits 4–8 players into 2 rival squads for objective-based PvP free-roam VR combat. 30–50 minute sessions. Ages 13+. Houston, Texas.",
    url: "https://arcadehouston.com/games/sol-raiders",
    images: [{ url: "https://arcadehouston.com/game-sol-raiders.webp", width: 1200, height: 630, alt: "Sol Raiders PvP VR at Zero Latency Webster, Houston" }],
  },
};

const gameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Sol Raiders",
  "description": "Sol Raiders at Zero Latency Webster, Houston is a competitive PvP free-roam VR game for 4–8 players in Houston, Texas. Two teams compete in objective-based arenas — controlling zones, gathering resources, and eliminating opponents — across 30–50 minute sessions. The only team vs team virtual reality game in the Zero Latency Webster, Houston lineup.",
  "genre": "PvP Esports",
  "numberOfPlayers": { "@type": "QuantitativeValue", "minValue": 4, "maxValue": 8 },
  "gamePlatform": "Virtual Reality",
  "url": "https://arcadehouston.com/games/sol-raiders",
  "provider": { "@type": "Organization", "name": "Zero Latency Webster, Houston", "url": "https://arcadehouston.com" },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "item": { "name": "Home", "id": "https://arcadehouston.com/" } },
    { "@type": "ListItem", "position": 2, "item": { "name": "Games", "id": "https://arcadehouston.com/games" } },
    { "@type": "ListItem", "position": 3, "item": { "name": "Sol Raiders", "id": "https://arcadehouston.com/games/sol-raiders" } },
  ],
};

const STATS = [
  { Icon: Users, label: "Players", value: "4–8" },
  { Icon: Clock, label: "Duration", value: "30–50 min" },
  { Icon: Zap, label: "Intensity", value: "Extreme" },
  { Icon: ShieldAlert, label: "Min Age", value: "13+" },
];

const GALLERY = [
  "/sol-raiders-commms.webp",
  "/sol-raiders-dark-wreck.webp",
  "/sol-raiders-gear.webp",
  "/sol-raiders-leaderboard.webp",
  "/sol-raiders-mining.webp",
  "/sol-raiders-team.webp",
];

const FEATURES = [
  { img: "/sol-raiders-esports.webp", title: "Team vs Team PvP Combat", desc: "Sol Raiders splits your group into 2 rival squads who fight each other directly — not AI enemies. Every opponent adapts, counters, and makes decisions in real time. No scripted behavior." },
  { img: "/sol-raiders-objectives.webp", title: "Objective-Based Match Structure", desc: "Teams compete across multiple objective types — control zone capture, resource gathering, and direct elimination. Squads that coordinate movement and communicate positions win more consistently than squads who play individually." },
  { img: "/sol-raiders-8p.webp", title: "4–8 Players Per Session", desc: "Sol Raiders requires a minimum of 4 players to run a PvP session. At 8 players — 4 per team — the match intensity increases significantly. Game Masters at Zero Latency Webster, Houston manage scoring and session timing from a control room." },
];

export default function SolRaidersPage() {
  const otherGames = allGames.filter(g => g.slug !== "sol-raiders");
  return (
    <>
      <Script id="game-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gameSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 pt-4 pb-2">
        <ol className="flex items-center gap-1 text-xs text-[#7DD3FC]/60">
          <li><Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link></li>
          <li><ChevronRight size={12} /></li>
          <li><Link href="/games" className="hover:text-yellow-400 transition-colors">Games</Link></li>
          <li><ChevronRight size={12} /></li>
          <li className="text-yellow-400">Sol Raiders</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end pb-16">
        <Image src="/sol-raiders-hero-bg.webp" alt="Sol Raiders PvP VR at Zero Latency Webster, Houston" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000C1A] via-[#000C1A]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000C1A]/70 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 w-full">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold font-orbitron bg-yellow-500/20 border border-yellow-500/40 text-yellow-300 uppercase tracking-widest">PvP Esports · Team vs Team</span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold font-orbitron bg-white/5 border border-white/10 text-[#7DD3FC] uppercase tracking-widest">Extreme Intensity</span>
          </div>
          <h1 className="font-orbitron text-5xl md:text-7xl font-black text-white leading-none">Sol Raiders</h1>
          <p className="mt-4 text-lg text-[#7DD3FC] max-w-xl">Zero Latency Webster, Houston's only team vs team PvP free-roam VR game. 4–8 players split into 2 squads and compete in objective-based arenas for 30–50 minutes. Ages 13 and up.</p>
          <div className="flex flex-wrap gap-3 mt-5 text-sm text-[#7DD3FC]/80">
            <span className="glass px-3 py-1 rounded-full border border-white/10">4–8 players</span>
            <span className="glass px-3 py-1 rounded-full border border-white/10">30–50 min</span>
            <span className="glass px-3 py-1 rounded-full border border-white/10">Age 13+</span>
          </div>
          <BookGameButton label="Book This Experience" source="game-hero" className="mt-6" />
        </div>
      </section>

      {/* Quick Stats Bar */}
      <div className="border-y border-yellow-800/30 bg-[#001225]/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-yellow-800/30">
            {STATS.map(({ Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3 px-4 py-5">
                <div className="w-9 h-9 rounded-lg bg-yellow-900/40 border border-yellow-700/30 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-yellow-400" />
                </div>
                <div>
                  <div className="font-orbitron text-[9px] tracking-widest text-[#7DD3FC]/50 uppercase">{label}</div>
                  <div className="font-orbitron text-sm font-bold text-white">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trailer */}
      <section className="py-16 border-t border-yellow-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-orbitron text-2xl font-black text-white mb-8">Watch the <span className="text-yellow-400">Sol Raiders Trailer</span></h2>
          <VideoPlayer videoSrc="/sol-raiders-trailer.mp4" thumbnailSrc="/game-sol-raiders.webp" title="Sol Raiders Trailer" />
        </div>
      </section>

      {/* About */}
      <section className="py-16 border-t border-yellow-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-start">
            <div>
              <p className="font-orbitron text-xs tracking-[0.3em] text-yellow-400 uppercase mb-3">Mission Briefing</p>
              <h2 className="font-orbitron text-2xl md:text-3xl font-black text-white mb-6">About <span className="text-yellow-400">Sol Raiders</span></h2>
              <div className="space-y-4 text-[#7DD3FC] leading-relaxed text-sm">
                <p>Sol Raiders at Zero Latency Webster, Houston is the only game in the lineup where players fight each other directly. Groups of 4–8 players aged 13 and older split into 2 teams and compete in objective-based free-roam VR arenas for 30–50 minutes in Houston, Texas. Objectives include zone control, resource mining, and direct player-vs-player combat — teams accumulate points across the session and a scoreboard determines the winner.</p>
                <p>Every opponent in Sol Raiders is a human player making real-time decisions. There are no scripted enemy behaviors or predictable attack patterns. A team that identifies and counters the opposing squad's strategy — by flanking, cutting off resource lines, or coordinating 2-on-1 engagements — wins the match. Game Masters at Zero Latency Webster, Houston track scoring and timing from a control room and can run multiple rounds if your group wants to play again.</p>
                <p>Sol Raiders works for corporate team-building events, competitive friend groups, and office parties at Zero Latency Webster, Houston in Houston, Texas. The team structure creates a natural competitive format — 4 vs 4 is the maximum supported per session. Groups that have already completed co-op games like Outbreak or Far Cry VR and want a player-vs-player challenge book Sol Raiders as a natural next step.</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="font-orbitron text-[9px] tracking-widest text-[#7DD3FC]/50 uppercase mb-4">Game Details</p>
              {[
                { label: "Genre", value: "PvP Esports" },
                { label: "Players", value: "4–8" },
                { label: "Duration", value: "30–50 minutes" },
                { label: "Intensity", value: "Extreme" },
                { label: "Min Age", value: "13+" },
                { label: "Play Style", value: "Team vs Team" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center px-4 py-3 rounded-xl border border-yellow-800/20 bg-yellow-900/5">
                  <span className="text-[#7DD3FC]/60 text-xs font-orbitron">{label}</span>
                  <span className="font-orbitron text-sm font-bold text-white">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 border-t border-yellow-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="font-orbitron text-xs tracking-[0.3em] text-yellow-400 uppercase mb-3">Screenshots</p>
          <h2 className="font-orbitron text-2xl font-black text-white mb-6">Sol Raiders <span className="text-yellow-400">Screenshots</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {GALLERY.map((src, i) => (
              <div key={i} className="relative aspect-video rounded-xl overflow-hidden">
                <Image src={src} alt={`Sol Raiders screenshot ${i + 1}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 border-t border-yellow-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="font-orbitron text-xs tracking-[0.3em] text-yellow-400 uppercase mb-3">Experience Highlights</p>
          <h2 className="font-orbitron text-2xl font-black text-white mb-8">How Sol Raiders <span className="text-yellow-400">Works</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f, i) => (
              <div key={f.title} className="relative overflow-hidden rounded-2xl group border border-yellow-800/20 bg-yellow-900/5 hover:border-yellow-500/30 transition-colors">
                <div className={`relative ${i === 0 ? "h-72" : "h-60"}`}>
                  <Image src={f.img} alt={f.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000C1A]/90 via-[#000C1A]/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-orbitron text-sm font-bold text-white mb-1 group-hover:text-yellow-300 transition-colors">{f.title}</h3>
                    <p className="text-xs text-[#7DD3FC]/80 leading-relaxed">{f.desc}</p>
                  </div>
                  <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-yellow-500/60 rounded-tl-lg pointer-events-none" />
                  <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-yellow-500/60 rounded-tr-lg pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini CTA */}
      <section className="relative overflow-hidden py-14 mx-4 sm:mx-6 mb-12 rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/30 via-cyan-900/40 to-[#000C1A] rounded-2xl" />
        <div className="absolute inset-0 opacity-[0.04] rounded-2xl" style={{ backgroundImage: 'linear-gradient(rgba(234,179,8,1) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <p className="font-orbitron text-xs tracking-[0.3em] text-yellow-400 uppercase mb-3">Book a Session</p>
          <h2 className="font-orbitron text-2xl md:text-3xl font-black text-white mb-3">Book Sol Raiders at <span className="text-yellow-400">Zero Latency Webster, Houston</span></h2>
          <p className="text-[#7DD3FC] text-sm mb-8">4–8 players. 30–50 minute team vs team PvP free-roam VR session in Houston, Texas. Minimum 4 players to run a match. Book your Sol Raiders session online now.</p>
          <BookGameButton label="Book Sol Raiders" source="game-cta" />
        </div>
      </section>

      {/* Other Games */}
      <section className="py-12 pb-24" style={{ background: 'radial-gradient(ellipse at center, rgba(8,145,178,0.1) 0%, #000C1A 70%)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-orbitron text-2xl font-black text-white mb-6">More Free-Roam VR Games at Zero Latency Webster, Houston</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {otherGames.slice(0, 8).map((game) => (
              <Link key={game.slug} href={`/games/${game.slug}`} className="group block glass rounded-xl overflow-hidden hover:border-cyan-500/50 transition-colors">
                <div className="relative aspect-square">
                  <Image src={game.thumbnail} alt={game.title} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000C1A]/90 to-transparent" />
                  <p className="absolute bottom-2 left-2 right-2 font-orbitron text-xs font-bold text-white">{game.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
