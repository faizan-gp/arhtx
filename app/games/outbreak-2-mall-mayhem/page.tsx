import Image from "next/image";
import type { Metadata } from "next";
import BookGameButton from "@/components/BookBtn";
import Link from "next/link";
import { allGames } from "@/lib/gamesData";
import { ChevronRight, Users, Clock, Zap, ShieldAlert } from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Outbreak 2: Mall Mayhem at Zero Latency Webster, Houston | Zombie VR Experience",
  description: "Outbreak 2: Mall Mayhem at Zero Latency Webster, Houston sends 1–8 players through a zombie-overrun shopping mall in 30 minutes of extreme-intensity free-roam VR. Book now in Houston, Texas.",
  alternates: { canonical: "https://arcadehouston.com/games/outbreak-2-mall-mayhem" },
  openGraph: {
    title: "Outbreak 2: Mall Mayhem at Zero Latency Webster, Houston",
    description: "Fight mutant zombies through a collapsing mall in this extreme-intensity free-roam VR game for 1–8 players at Zero Latency Webster, Houston. 30-minute sessions in Houston, Texas.",
    url: "https://arcadehouston.com/games/outbreak-2-mall-mayhem",
    images: [{ url: "https://arcadehouston.com/mm_banner.webp", width: 1200, height: 630, alt: "Outbreak 2: Mall Mayhem at Zero Latency Webster, Houston" }],
  },
};

const gameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Outbreak 2: Mall Mayhem",
  "description": "Outbreak 2: Mall Mayhem is a free-roam zombie survival VR game at Zero Latency Webster, Houston. Up to 8 players fight mutant zombies — spitters, spewers, and boomers — through a collapsing shopping mall in a 30-minute extreme-intensity session in Houston, Texas.",
  "genre": "Zombie Survival",
  "numberOfPlayers": { "@type": "QuantitativeValue", "minValue": 1, "maxValue": 8 },
  "gamePlatform": "Virtual Reality",
  "url": "https://arcadehouston.com/games/outbreak-2-mall-mayhem",
  "provider": { "@type": "Organization", "name": "Zero Latency Webster, Houston", "url": "https://arcadehouston.com" },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "item": { "name": "Home", "id": "https://arcadehouston.com/" } },
    { "@type": "ListItem", "position": 2, "item": { "name": "Games", "id": "https://arcadehouston.com/games" } },
    { "@type": "ListItem", "position": 3, "item": { "name": "Outbreak 2: Mall Mayhem", "id": "https://arcadehouston.com/games/outbreak-2-mall-mayhem" } },
  ],
};

const STATS = [
  { Icon: Users, label: "Players", value: "1–8" },
  { Icon: Clock, label: "Duration", value: "30 min" },
  { Icon: Zap, label: "Intensity", value: "Extreme" },
  { Icon: ShieldAlert, label: "Min Age", value: "13+" },
];

const FEATURES = [
  { img: "/mm_image1.webp", title: "Mutant Zombie Types", desc: "Mall Mayhem introduces new enemy classes — spitters that shoot acid, spewers that explode on contact, boomers that rush your position. Enemies scale in intensity the deeper your group advances." },
  { img: "/mm_image2.webp", title: "Destructible Mall Environments", desc: "Shoot toy displays, torch mannequins, blow apart store fronts. The mall environment responds to every shot. Multiplayer VR in a fully interactive space makes each session different." },
  { img: "/mm_image3.webp", title: "A Mall That Fights Back", desc: "Floors collapse mid-run, ceiling sections drop, corridors catch fire. Your group has to track enemies and navigate structural hazards at the same time — both will kill you." },
];

const GALLERY = ["/mm_banner2.webp", "/mm_image1.webp", "/mm_image2.webp", "/mm_image3.webp"];

export default function OutbreakMallMayhemPage() {
  const otherGames = allGames.filter(g => g.slug !== "outbreak-2-mall-mayhem");
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
          <li className="text-rose-400">Outbreak 2: Mall Mayhem</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end pb-20">
        <Image src="/mm_banner.webp" alt="Outbreak 2: Mall Mayhem — zombie chaos at Zero Latency Webster, Houston" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000C1A] via-[#000C1A]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000C1A]/50 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 w-full">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold font-orbitron bg-rose-500/20 border border-rose-500/40 text-rose-300 uppercase tracking-widest">Zombie Survival · Mall Mayhem</span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold font-orbitron bg-red-500/20 border border-red-500/40 text-red-300 uppercase tracking-widest">Extreme Intensity</span>
          </div>
          <h1 className="font-orbitron text-5xl md:text-7xl font-black text-white leading-none">Outbreak 2<br /><span className="text-rose-400">Mall Mayhem</span></h1>
          <p className="mt-4 text-xl text-[#7DD3FC] max-w-2xl leading-relaxed">Zero Latency Webster, Houston's most intense zombie VR game. 1–8 players fight mutant zombies through a collapsing mall in 30 minutes of extreme free-roam VR.</p>
          <div className="flex flex-wrap gap-3 mt-5 text-sm text-[#7DD3FC]/80">
            <span className="glass px-3 py-1.5 rounded-full border border-white/10">1–8 players</span>
            <span className="glass px-3 py-1.5 rounded-full border border-white/10">30 min</span>
            <span className="glass px-3 py-1.5 rounded-full border border-white/10">Age 13+</span>
            <span className="glass px-3 py-1.5 rounded-full border border-white/10">Extreme Intensity</span>
          </div>
          <BookGameButton label="Survive the Mall" source="game-hero" className="mt-8" />
        </div>
      </section>

      {/* Quick Stats Bar */}
      <div className="border-y border-cyan-800/30 bg-[#001225]/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-cyan-800/30">
            {STATS.map(({ Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3 px-4 py-5">
                <div className="w-9 h-9 rounded-lg bg-rose-900/20 border border-rose-700/30 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-rose-400" />
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
          <p className="font-orbitron text-xs tracking-[0.3em] text-rose-400 uppercase mb-2">Official Trailer</p>
          <h2 className="font-orbitron text-2xl font-black text-white mb-8">Watch the <span className="text-rose-400">Mall Mayhem Trailer</span></h2>
          <VideoPlayer videoSrc="/mm_video.mp4" thumbnailSrc="/mm_vidthumb.webp" title="Outbreak 2: Mall Mayhem Trailer" />
        </div>
      </section>

      {/* About */}
      <section className="py-16 border-t border-cyan-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">
            <div>
              <p className="font-orbitron text-xs tracking-[0.3em] text-rose-400 uppercase mb-2">Mission Briefing</p>
              <h2 className="font-orbitron text-2xl md:text-3xl font-black text-white mb-6">About <span className="text-rose-400">Mall Mayhem</span></h2>
              <div className="space-y-4 text-[#7DD3FC] leading-relaxed">
                <p>Outbreak 2: Mall Mayhem at Zero Latency Webster, Houston drops 1–8 players into a zombie-overrun shopping mall for 30 minutes of free-roam multiplayer VR. The sequel to Outbreak increases enemy variety, adds fully destructible environments, and pushes structural hazards — collapsing floors, falling ceiling sections, burning corridors — into the combat zones.</p>
                <p>Players move physically through the free-roam VR arena in Houston, Texas, fighting new zombie classes that didn&apos;t appear in the original Outbreak. Spitters attack from range with acid. Spewers detonate on contact. Boomers rush the group in numbers. The harder your squad pushes into the mall, the more dangerous the enemy mix becomes. Game Masters monitor every session from a control room and adjust the challenge in real time.</p>
                <p>Outbreak 2 works for groups who completed the original Outbreak and want a step up in difficulty, and for first-timers who want to start with the most intense zombie VR experience Zero Latency Webster, Houston offers. Groups of 2–4 still have a strong chance of completing the mission; groups of 5–8 get a chaotic, team-focused run that rewards communication and coordination.</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-orbitron text-[9px] tracking-widest text-[#7DD3FC]/50 uppercase mb-4">Game Details</p>
              {[
                { label: "Genre", value: "Zombie Survival" },
                { label: "Series", value: "Outbreak" },
                { label: "Players", value: "1–8" },
                { label: "Duration", value: "30 minutes" },
                { label: "Intensity", value: "Extreme" },
                { label: "Min Age", value: "13+" },
                { label: "Play Style", value: "Co-op" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center px-4 py-3 rounded-xl border border-rose-800/20 bg-rose-900/5">
                  <span className="text-[#7DD3FC]/60 text-xs font-orbitron">{label}</span>
                  <span className="font-orbitron text-sm font-bold text-white">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 rounded-xl border border-rose-800/30 bg-rose-900/10 px-5 py-4 flex items-center gap-3">
            <Zap size={16} className="text-rose-400 flex-shrink-0" />
            <p className="text-sm text-[#7DD3FC]">
              Played the original?{" "}
              <Link href="/games/outbreak" className="font-bold text-rose-300 hover:text-rose-200 transition-colors">
                Revisit where it all began in Outbreak →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-16 border-t border-cyan-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="font-orbitron text-xs tracking-[0.3em] text-rose-400 uppercase mb-2">Gallery</p>
          <h2 className="font-orbitron text-2xl font-black text-white mb-8">Mall Mayhem <span className="text-rose-400">Screenshots</span></h2>
          <div className="grid grid-cols-2 gap-3">
            {GALLERY.map((src, i) => (
              <div key={i} className="group relative aspect-video rounded-xl overflow-hidden border border-cyan-900/30 hover:border-rose-500/40 transition-colors duration-300">
                <Image src={src} alt={`Outbreak 2: Mall Mayhem screenshot ${i + 1}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[#000C1A]/30 group-hover:bg-transparent transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 border-t border-cyan-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="font-orbitron text-xs tracking-[0.3em] text-rose-400 uppercase mb-2">Experience Highlights</p>
          <h2 className="font-orbitron text-2xl font-black text-white mb-8">What Makes <span className="text-rose-400">Mall Mayhem Different</span></h2>
          <div className="grid md:grid-cols-3 gap-4">
            {FEATURES.map((f, i) => (
              <div key={f.title} className="relative overflow-hidden rounded-2xl group border border-cyan-900/30 hover:border-rose-500/30 transition-colors duration-300">
                <div className={`relative ${i === 0 ? 'h-72' : 'h-60'}`}>
                  <Image src={f.img} alt={f.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000C1A]/95 via-[#000C1A]/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-orbitron text-sm font-bold text-white mb-1.5 group-hover:text-rose-300 transition-colors">{f.title}</h3>
                    <p className="text-xs text-[#7DD3FC]/80 leading-relaxed">{f.desc}</p>
                  </div>
                  <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-rose-500/50 rounded-tl-lg pointer-events-none" />
                  <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-rose-500/50 rounded-tr-lg pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini CTA */}
      <section className="relative overflow-hidden py-16 mx-4 sm:mx-6 mb-12 rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900/40 via-cyan-900/30 to-[#000C1A] rounded-2xl" />
        <div className="absolute inset-0 opacity-[0.04] rounded-2xl" style={{ backgroundImage: 'linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <p className="font-orbitron text-xs tracking-[0.3em] text-rose-400 uppercase mb-3">Book a Session</p>
          <h2 className="font-orbitron text-2xl md:text-3xl font-black text-white mb-3">
            Book Mall Mayhem at <span className="text-[#38BDF8]">Zero Latency Webster, Houston</span>
          </h2>
          <p className="text-[#7DD3FC] text-sm mb-8 leading-relaxed">1–8 players. 30-minute extreme-intensity free-roam VR session in Houston, Texas. Book your Outbreak 2: Mall Mayhem game online now.</p>
          <BookGameButton label="Book Mall Mayhem" source="game-cta" />
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
