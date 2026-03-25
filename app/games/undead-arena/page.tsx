import Image from "next/image";
import type { Metadata } from "next";
import BookGameButton from "@/components/BookBtn";
import Link from "next/link";
import { allGames } from "@/lib/gamesData";
import { ChevronRight, Users, Clock, Zap, ShieldAlert } from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Undead Arena at Zero Latency Webster, Houston | Wave Survival Zombie VR",
  description: "Undead Arena at Zero Latency Webster, Houston is a free-roam VR wave survival game for 2–8 players. Fight escalating zombie hordes in a multi-level arena for 30 minutes in Houston, Texas. Book now.",
  alternates: { canonical: "https://arcadehouston.com/games/undead-arena" },
  openGraph: {
    title: "Undead Arena at Zero Latency Webster, Houston",
    description: "Undead Arena at Zero Latency Webster, Houston puts 2–8 players in a free-roam VR zombie wave survival arena for 30 minutes. Each wave increases in intensity. Ages 13+. Houston, Texas.",
    url: "https://arcadehouston.com/games/undead-arena",
    images: [{ url: "https://arcadehouston.com/game-undead-arena.webp", width: 1200, height: 630, alt: "Undead Arena zombie VR at Zero Latency Webster, Houston" }],
  },
};

const gameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Undead Arena",
  "description": "Undead Arena at Zero Latency Webster, Houston is a free-roam VR zombie wave survival game for 2–8 players aged 13 and older. Players fight escalating zombie hordes in a multi-level dedicated arena across 30 minutes of high-intensity multiplayer VR in Houston, Texas. Squad coordination and ammo management determine how long your team survives.",
  "genre": "Zombie Action",
  "numberOfPlayers": { "@type": "QuantitativeValue", "minValue": 2, "maxValue": 8 },
  "gamePlatform": "Virtual Reality",
  "url": "https://arcadehouston.com/games/undead-arena",
  "provider": { "@type": "Organization", "name": "Zero Latency Webster, Houston", "url": "https://arcadehouston.com" },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "item": { "name": "Home", "id": "https://arcadehouston.com/" } },
    { "@type": "ListItem", "position": 2, "item": { "name": "Games", "id": "https://arcadehouston.com/games" } },
    { "@type": "ListItem", "position": 3, "item": { "name": "Undead Arena", "id": "https://arcadehouston.com/games/undead-arena" } },
  ],
};

const STATS = [
  { Icon: Users, label: "Players", value: "2–8" },
  { Icon: Clock, label: "Duration", value: "30 min" },
  { Icon: Zap, label: "Intensity", value: "High" },
  { Icon: ShieldAlert, label: "Min Age", value: "13+" },
];

const GALLERY = [
  "/undead-arena-8p.webp",
  "/undead-arena-commentator.webp",
  "/undead-arena-group.webp",
  "/undead-arena-score.webp",
  "/undead-arena-traps.webp",
  "/undead-arena-vibe.webp",
];

const FEATURES = [
  { img: "/undead-arena-stage.webp", title: "Dedicated Combat Arena", desc: "Undead Arena uses a fixed combat stage where zombie hordes enter from multiple directions simultaneously. The design forces engagement — players cannot fall back or avoid contact. All 2–8 players fight in the same shared free-roam VR space." },
  { img: "/undead-arena-waves.webp", title: "Escalating Zombie Waves", desc: "Each wave adds more zombies, faster zombies, and new zombie types — runners, heavies, and tankers — to the arena. The 30-minute session does not have a fixed end point based on time: squad performance determines how many waves your group survives." },
  { img: "/undead-arena-platforms.webp", title: "Multi-Level Arena Layout", desc: "The arena has elevated platforms and lower-level floor zones. Squads that use the vertical layout — putting shooters on high ground while others hold the floor — survive more waves than groups who stay at a single level." },
];

export default function UndeadArenaPage() {
  const otherGames = allGames.filter(g => g.slug !== "undead-arena");
  return (
    <>
      <Script id="game-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gameSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 pt-4 pb-2">
        <ol className="flex items-center gap-1 text-xs text-[#7DD3FC]/60">
          <li><Link href="/" className="hover:text-lime-400 transition-colors">Home</Link></li>
          <li><ChevronRight size={12} /></li>
          <li><Link href="/games" className="hover:text-lime-400 transition-colors">Games</Link></li>
          <li><ChevronRight size={12} /></li>
          <li className="text-lime-400">Undead Arena</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end pb-16">
        <Image src="/undead-hero-bg.webp" alt="Undead Arena zombie VR at Zero Latency Webster, Houston" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000C1A] via-[#000C1A]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000C1A]/70 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 w-full">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold font-orbitron bg-lime-500/20 border border-lime-500/40 text-lime-300 uppercase tracking-widest">Zombie Action · Wave Survival</span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold font-orbitron bg-white/5 border border-white/10 text-[#7DD3FC] uppercase tracking-widest">High Intensity</span>
          </div>
          <h1 className="font-orbitron text-5xl md:text-7xl font-black text-white leading-none">Undead Arena</h1>
          <p className="mt-4 text-lg text-[#7DD3FC] max-w-xl">Zero Latency Webster, Houston's zombie wave survival free-roam VR game. 2–8 players fight escalating hordes in a multi-level arena for 30 minutes. Ages 13 and up in Houston, Texas.</p>
          <div className="flex flex-wrap gap-3 mt-5 text-sm text-[#7DD3FC]/80">
            <span className="glass px-3 py-1 rounded-full border border-white/10">2–8 players</span>
            <span className="glass px-3 py-1 rounded-full border border-white/10">30 min</span>
            <span className="glass px-3 py-1 rounded-full border border-white/10">Age 13+</span>
          </div>
          <BookGameButton label="Book This Experience" source="game-hero" className="mt-6" />
        </div>
      </section>

      {/* Quick Stats Bar */}
      <div className="border-y border-lime-800/30 bg-[#001225]/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-lime-800/30">
            {STATS.map(({ Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3 px-4 py-5">
                <div className="w-9 h-9 rounded-lg bg-lime-900/40 border border-lime-700/30 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-lime-400" />
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
      <section className="py-16 border-t border-lime-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-orbitron text-2xl font-black text-white mb-8">Watch the <span className="text-lime-400">Undead Arena Trailer</span></h2>
          <VideoPlayer videoSrc="/undead-arena-trailer.mp4" thumbnailSrc="/game-undead-arena.webp" title="Undead Arena Trailer" />
        </div>
      </section>

      {/* About */}
      <section className="py-16 border-t border-lime-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-start">
            <div>
              <p className="font-orbitron text-xs tracking-[0.3em] text-lime-400 uppercase mb-3">Mission Briefing</p>
              <h2 className="font-orbitron text-2xl md:text-3xl font-black text-white mb-6">About <span className="text-lime-400">Undead Arena</span></h2>
              <div className="space-y-4 text-[#7DD3FC] leading-relaxed text-sm">
                <p>Undead Arena at Zero Latency Webster, Houston is a free-roam VR zombie wave survival game for 2–8 players aged 13 and older. Unlike Outbreak — which has a linear mission structure — Undead Arena uses a single dedicated combat stage in Houston, Texas, and tests how many escalating waves of zombies your squad can survive across a 30-minute session. Players move freely through the arena using the same free-roam VR tracking system that runs all Zero Latency Webster, Houston games.</p>
                <p>The arena design has multiple levels — elevated platforms above and a lower combat floor. Groups that use both levels simultaneously, with some players holding high ground while others guard floor-level entry points, survive more waves than groups that cluster together. Ammo is finite. Each wave introduces new zombie types — standard walkers in the early waves, then runners, heavies with high hit points, and tankers that damage nearby players when eliminated. Wave difficulty scales based on how many players are in the session.</p>
                <p>Undead Arena tracks your squad's wave count and score at the end of every session. Groups that return to Zero Latency Webster, Houston and play Undead Arena again have a specific target — their previous record — and a changed understanding of arena positioning that makes the second run more tactically complex than the first.</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="font-orbitron text-[9px] tracking-widest text-[#7DD3FC]/50 uppercase mb-4">Game Details</p>
              {[
                { label: "Genre", value: "Zombie Action" },
                { label: "Style", value: "Wave Survival" },
                { label: "Players", value: "2–8" },
                { label: "Duration", value: "30 minutes" },
                { label: "Intensity", value: "High" },
                { label: "Min Age", value: "13+" },
                { label: "Play Style", value: "Co-op" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center px-4 py-3 rounded-xl border border-lime-800/20 bg-lime-900/5">
                  <span className="text-[#7DD3FC]/60 text-xs font-orbitron">{label}</span>
                  <span className="font-orbitron text-sm font-bold text-white">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 border-t border-lime-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="font-orbitron text-xs tracking-[0.3em] text-lime-400 uppercase mb-3">Screenshots</p>
          <h2 className="font-orbitron text-2xl font-black text-white mb-6">Undead Arena <span className="text-lime-400">Screenshots</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {GALLERY.map((src, i) => (
              <div key={i} className="relative aspect-video rounded-xl overflow-hidden">
                <Image src={src} alt={`Undead Arena screenshot ${i + 1}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 border-t border-lime-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="font-orbitron text-xs tracking-[0.3em] text-lime-400 uppercase mb-3">Experience Highlights</p>
          <h2 className="font-orbitron text-2xl font-black text-white mb-8">How Undead Arena <span className="text-lime-400">Works</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f, i) => (
              <div key={f.title} className="relative overflow-hidden rounded-2xl group border border-lime-800/20 bg-lime-900/5 hover:border-lime-500/30 transition-colors">
                <div className={`relative ${i === 0 ? "h-72" : "h-60"}`}>
                  <Image src={f.img} alt={f.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000C1A]/90 via-[#000C1A]/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-orbitron text-sm font-bold text-white mb-1 group-hover:text-lime-300 transition-colors">{f.title}</h3>
                    <p className="text-xs text-[#7DD3FC]/80 leading-relaxed">{f.desc}</p>
                  </div>
                  <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-lime-500/60 rounded-tl-lg pointer-events-none" />
                  <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-lime-500/60 rounded-tr-lg pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini CTA */}
      <section className="relative overflow-hidden py-14 mx-4 sm:mx-6 mb-12 rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-900/30 via-cyan-900/40 to-[#000C1A] rounded-2xl" />
        <div className="absolute inset-0 opacity-[0.04] rounded-2xl" style={{ backgroundImage: 'linear-gradient(rgba(132,204,22,1) 1px, transparent 1px), linear-gradient(90deg, rgba(132,204,22,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <p className="font-orbitron text-xs tracking-[0.3em] text-lime-400 uppercase mb-3">Book a Session</p>
          <h2 className="font-orbitron text-2xl md:text-3xl font-black text-white mb-3">Book Undead Arena at <span className="text-lime-400">Zero Latency Webster, Houston</span></h2>
          <p className="text-[#7DD3FC] text-sm mb-8">2–8 players. 30-minute zombie wave survival free-roam VR session in Houston, Texas. Ages 13 and up. Book your Undead Arena session online now.</p>
          <BookGameButton label="Book Undead Arena" source="game-cta" />
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
