import Image from "next/image";
import type { Metadata } from "next";
import BookGameButton from "@/components/BookBtn";
import Link from "next/link";
import { allGames } from "@/lib/gamesData";
import { ChevronRight, Users, Clock, Zap, ShieldAlert } from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Outbreak at Zero Latency Webster, Houston | Zombie Survival Free-Roam VR",
  description: "Outbreak at Zero Latency Webster, Houston puts 2–8 players in a free-roam VR zombie survival mission across post-apocalyptic environments. 30-minute sessions. Book now in Houston, Texas.",
  alternates: { canonical: "https://arcadehouston.com/games/outbreak" },
  openGraph: {
    title: "Outbreak at Zero Latency Webster, Houston",
    description: "Play Outbreak at Zero Latency Webster, Houston — free-roam multiplayer VR for 2–8 players set in a zombie-overrun world. 30-minute sessions in Houston, Texas.",
    url: "https://arcadehouston.com/games/outbreak",
    images: [{ url: "https://arcadehouston.com/game-outbreak.webp", width: 1200, height: 630, alt: "Outbreak zombie survival VR at Zero Latency Webster, Houston" }],
  },
};

const gameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Outbreak",
  "description": "Outbreak is a free-roam zombie survival VR experience at Zero Latency Webster, Houston where 2–8 players navigate post-apocalyptic environments — sewers, streets, and fortified holdouts — fighting through infected hordes to reach extraction.",
  "genre": "Zombie Survival",
  "numberOfPlayers": { "@type": "QuantitativeValue", "minValue": 2, "maxValue": 8 },
  "gamePlatform": "Virtual Reality",
  "url": "https://arcadehouston.com/games/outbreak",
  "provider": { "@type": "Organization", "name": "Zero Latency Webster, Houston", "url": "https://arcadehouston.com" },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "item": { "name": "Home", "id": "https://arcadehouston.com/" } },
    { "@type": "ListItem", "position": 2, "item": { "name": "Games", "id": "https://arcadehouston.com/games" } },
    { "@type": "ListItem", "position": 3, "item": { "name": "Outbreak", "id": "https://arcadehouston.com/games/outbreak" } },
  ],
};

const STATS = [
  { Icon: Users, label: "Players", value: "2–8" },
  { Icon: Clock, label: "Duration", value: "30 min" },
  { Icon: Zap, label: "Intensity", value: "High" },
  { Icon: ShieldAlert, label: "Min Age", value: "13+" },
];

const FEATURES = [
  { img: "/outbreak-zombies.webp", title: "Face the Horde", desc: "Move through post-apocalyptic environments — sewers, open streets, collapsed buildings — packed with infected enemies. Every corridor hides a potential ambush." },
  { img: "/outbreak-team.webp", title: "Fight as a Team", desc: "Outbreak is a co-op multiplayer VR game for up to 8 players. Shout callouts, share ammo, and cover your flanks — players who split up don't make it to extraction." },
  { img: "/outbreak-weapons.webp", title: "Full Physical Arsenal", desc: "Pick up full-sized VR weapons — rifles, shotguns, pistols — that respond to your real body movements. Aim, reload, and fire with your actual hands." },
];

const GALLERY = [
  "/outbreak-horde.webp",
  "/outbreak-sewers.webp",
  "/outbreak-cure.webp",
  "/outbreak-helicopter.webp",
  "/outbreak-mercenaries.webp",
  "/outbreak-group-fun.webp",
];

export default function OutbreakPage() {
  const otherGames = allGames.filter(g => g.slug !== "outbreak");
  return (
    <>
      <Script id="game-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gameSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 pt-4 pb-2">
        <ol className="flex items-center gap-1 text-xs text-[#7DD3FC]/60">
          <li><Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
          <li><ChevronRight size={12} /></li>
          <li><Link href="/games" className="hover:text-cyan-400 transition-colors">Games</Link></li>
          <li><ChevronRight size={12} /></li>
          <li className="text-green-400">Outbreak</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end pb-20">
        <Image src="/outbreak-hero-bg.webp" alt="Outbreak zombie survival VR at Zero Latency Webster, Houston" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000C1A] via-[#000C1A]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000C1A]/50 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 w-full">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold font-orbitron bg-green-500/20 border border-green-500/40 text-green-300 uppercase tracking-widest">Zombie Survival · Co-op</span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold font-orbitron bg-orange-500/20 border border-orange-500/40 text-orange-300 uppercase tracking-widest">High Intensity</span>
          </div>
          <h1 className="font-orbitron text-5xl md:text-7xl font-black text-white leading-none">Outbreak</h1>
          <p className="mt-4 text-xl text-[#7DD3FC] max-w-2xl leading-relaxed">Zero Latency Webster, Houston's zombie survival free-roam VR game for 2–8 players. Fight through the infected. Reach extraction. Do it together.</p>
          <div className="flex flex-wrap gap-3 mt-5 text-sm text-[#7DD3FC]/80">
            <span className="glass px-3 py-1.5 rounded-full border border-white/10">2–8 players</span>
            <span className="glass px-3 py-1.5 rounded-full border border-white/10">30 min</span>
            <span className="glass px-3 py-1.5 rounded-full border border-white/10">Age 13+</span>
            <span className="glass px-3 py-1.5 rounded-full border border-white/10">High Intensity</span>
          </div>
          <BookGameButton label="Book This Experience" source="game-hero" className="mt-8" />
        </div>
      </section>

      {/* Quick Stats Bar */}
      <div className="border-y border-cyan-800/30 bg-[#001225]/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-cyan-800/30">
            {STATS.map(({ Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3 px-4 py-5">
                <div className="w-9 h-9 rounded-lg bg-green-900/20 border border-green-700/30 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-green-400" />
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
      <section className="py-16 border-t border-cyan-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="font-orbitron text-xs tracking-[0.3em] text-green-400 uppercase mb-2">Official Trailer</p>
          <h2 className="font-orbitron text-2xl font-black text-white mb-8">Watch the <span className="text-green-400">Outbreak Trailer</span></h2>
          <VideoPlayer videoSrc="/outbreak-trailer.mp4" thumbnailSrc="/game-outbreak.webp" title="Outbreak Trailer" />
        </div>
      </section>

      {/* About */}
      <section className="py-16 border-t border-cyan-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">
            <div>
              <p className="font-orbitron text-xs tracking-[0.3em] text-green-400 uppercase mb-2">Mission Briefing</p>
              <h2 className="font-orbitron text-2xl md:text-3xl font-black text-white mb-6">About <span className="text-green-400">Outbreak</span></h2>
              <div className="space-y-4 text-[#7DD3FC] leading-relaxed">
                <p>Outbreak at Zero Latency Webster, Houston puts 2–8 players in a free-roam VR arena set in a world overrun by the infected. Your group moves physically through the space — no controllers strapped to a chair — navigating sewers, collapsing streets, and fortified holdouts while fighting off zombie hordes across a 30-minute session.</p>
                <p>The game rewards coordinated teamwork. Players who communicate — sharing ammo, calling out enemy positions, covering each other's flanks — reach extraction. Players who don't get overwhelmed. Outbreak is one of the most physically active multiplayer VR games available in Houston, Texas, and it works for first-timers and experienced VR players alike.</p>
                <p>Each section of the mission ramps up pressure. The infected don't come in waves you can predict — they push from multiple directions as your group advances. Game Masters at Zero Latency Webster, Houston monitor every session from a control room and can adjust difficulty in real time, so the experience stays challenging no matter your group's skill level.</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-orbitron text-[9px] tracking-widest text-[#7DD3FC]/50 uppercase mb-4">Game Details</p>
              {[
                { label: "Genre", value: "Zombie Survival" },
                { label: "Players", value: "2–8" },
                { label: "Duration", value: "30 minutes" },
                { label: "Intensity", value: "High" },
                { label: "Min Age", value: "13+" },
                { label: "Play Style", value: "Co-op" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center px-4 py-3 rounded-xl border border-green-800/20 bg-green-900/5">
                  <span className="text-[#7DD3FC]/60 text-xs font-orbitron">{label}</span>
                  <span className="font-orbitron text-sm font-bold text-white">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 rounded-xl border border-green-800/30 bg-green-900/10 px-5 py-4 flex items-center gap-3">
            <Zap size={16} className="text-green-400 flex-shrink-0" />
            <p className="text-sm text-[#7DD3FC]">
              Ready for more mayhem?{" "}
              <Link href="/games/outbreak-2-mall-mayhem" className="font-bold text-green-300 hover:text-green-200 transition-colors">
                Try the sequel: Outbreak 2 — Mall Mayhem →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-16 border-t border-cyan-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="font-orbitron text-xs tracking-[0.3em] text-green-400 uppercase mb-2">Gallery</p>
          <h2 className="font-orbitron text-2xl font-black text-white mb-8">Outbreak <span className="text-green-400">Screenshots</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {GALLERY.map((src, i) => (
              <div key={i} className="group relative aspect-video rounded-xl overflow-hidden border border-cyan-900/30 hover:border-green-500/40 transition-colors duration-300">
                <Image src={src} alt={`Outbreak screenshot ${i + 1}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[#000C1A]/30 group-hover:bg-transparent transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 border-t border-cyan-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="font-orbitron text-xs tracking-[0.3em] text-green-400 uppercase mb-2">Experience Highlights</p>
          <h2 className="font-orbitron text-2xl font-black text-white mb-8">What Makes <span className="text-green-400">Outbreak Stand Out</span></h2>
          <div className="grid md:grid-cols-3 gap-4">
            {FEATURES.map((f, i) => (
              <div key={f.title} className="relative overflow-hidden rounded-2xl group border border-cyan-900/30 hover:border-green-500/30 transition-colors duration-300">
                <div className={`relative ${i === 0 ? 'h-72' : 'h-60'}`}>
                  <Image src={f.img} alt={f.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000C1A]/95 via-[#000C1A]/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-orbitron text-sm font-bold text-white mb-1.5 group-hover:text-green-300 transition-colors">{f.title}</h3>
                    <p className="text-xs text-[#7DD3FC]/80 leading-relaxed">{f.desc}</p>
                  </div>
                  <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-green-500/60 rounded-tl-lg pointer-events-none" />
                  <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-green-500/60 rounded-tr-lg pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini CTA */}
      <section className="relative overflow-hidden py-16 mx-4 sm:mx-6 mb-12 rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 via-cyan-900/40 to-[#000C1A] rounded-2xl" />
        <div className="absolute inset-0 opacity-[0.04] rounded-2xl" style={{ backgroundImage: 'linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <p className="font-orbitron text-xs tracking-[0.3em] text-green-400 uppercase mb-3">Book a Session</p>
          <h2 className="font-orbitron text-2xl md:text-3xl font-black text-white mb-3">
            Book Outbreak at <span className="text-[#38BDF8]">Zero Latency Webster, Houston</span>
          </h2>
          <p className="text-[#7DD3FC] text-sm mb-8 leading-relaxed">Groups of 2–8 players. 30-minute free-roam VR session. Available now in Houston, Texas — book your Outbreak game online.</p>
          <BookGameButton label="Book Outbreak" source="game-cta" />
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
