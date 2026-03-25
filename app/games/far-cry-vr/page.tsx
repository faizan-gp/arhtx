import Image from "next/image";
import type { Metadata } from "next";
import BookGameButton from "@/components/BookBtn";
import Link from "next/link";
import { allGames } from "@/lib/gamesData";
import { ChevronRight, Users, Clock, Zap, ShieldAlert } from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Far Cry VR at Zero Latency Webster, Houston | Escape the Island Free-Roam VR",
  description: "Far Cry VR at Zero Latency Webster, Houston sends 2–6 players into the Far Cry 3 universe for a 50-minute free-roam VR mission across jungle, caves, and enemy territory. Book now in Houston, Texas.",
  alternates: { canonical: "https://arcadehouston.com/games/far-cry-vr" },
  openGraph: {
    title: "Far Cry VR at Zero Latency Webster, Houston",
    description: "Play Far Cry VR at Zero Latency Webster, Houston — a 50-minute free-roam VR co-op adventure for 2–6 players based on Far Cry 3. Escape a pirate island. Ages 13+. Houston, Texas.",
    url: "https://arcadehouston.com/games/far-cry-vr",
    images: [{ url: "https://arcadehouston.com/game-far-cry-vr.webp", width: 1200, height: 630, alt: "Far Cry VR at Zero Latency Webster, Houston" }],
  },
};

const gameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Far Cry VR",
  "description": "Far Cry VR at Zero Latency Webster, Houston is a free-roam multiplayer VR adventure based on Far Cry 3 by Ubisoft. Groups of 2–6 players aged 13 and older complete a 50-minute mission across jungle environments, underground caves, and enemy-controlled territory in Houston, Texas.",
  "genre": "Tropical Action",
  "numberOfPlayers": { "@type": "QuantitativeValue", "minValue": 2, "maxValue": 6 },
  "gamePlatform": "Virtual Reality",
  "url": "https://arcadehouston.com/games/far-cry-vr",
  "provider": { "@type": "Organization", "name": "Zero Latency Webster, Houston", "url": "https://arcadehouston.com" },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "item": { "name": "Home", "id": "https://arcadehouston.com/" } },
    { "@type": "ListItem", "position": 2, "item": { "name": "Games", "id": "https://arcadehouston.com/games" } },
    { "@type": "ListItem", "position": 3, "item": { "name": "Far Cry VR", "id": "https://arcadehouston.com/games/far-cry-vr" } },
  ],
};

const STATS = [
  { Icon: Users, label: "Players", value: "2–6" },
  { Icon: Clock, label: "Duration", value: "50 min" },
  { Icon: Zap, label: "Intensity", value: "Medium" },
  { Icon: ShieldAlert, label: "Min Age", value: "13+" },
];

const FEATURES = [
  { img: "/far-cry-jungle.webp", title: "Multiple Environments", desc: "Far Cry VR takes your group through 3 distinct environment types — dense jungle with enemy patrols, underground cave systems, and open coastal areas. Each section has different combat tactics and visibility conditions." },
  { img: "/far-cry-coop.webp", title: "50-Minute Co-op Mission", desc: "At 50 minutes, Far Cry VR is Zero Latency Webster, Houston's longest single-session game. The extra runtime lets groups of 2–6 players work through a complete mission arc with story beats, escalating combat, and a final confrontation." },
  { img: "/far-cry-vaas.webp", title: "Vaas Montenegro as Antagonist", desc: "Vaas Montenegro from Far Cry 3 appears throughout the mission, tracking your group's progress. The encounter with Vaas in the final section of the game is the direct objective your squad works toward across the full 50 minutes." },
];

const GALLERY = [
  "/far-cry-caves.webp",
  "/far-cry-immersion.webp",
  "/far-cry-showdown.webp",
  "/far-cry-team.webp",
  "/far-cry-weapons.webp",
  "/far-cry-intro.webp",
];

export default function FarCryVRPage() {
  const otherGames = allGames.filter(g => g.slug !== "far-cry-vr");
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
          <li className="text-orange-400">Far Cry VR</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end pb-20">
        <Image src="/far-cry-hero-bg.webp" alt="Far Cry VR tropical action at Zero Latency Webster, Houston" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000C1A] via-[#000C1A]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000C1A]/50 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 w-full">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold font-orbitron bg-orange-500/20 border border-orange-500/40 text-orange-300 uppercase tracking-widest">Tropical Action · Ubisoft</span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold font-orbitron bg-yellow-500/20 border border-yellow-500/40 text-yellow-300 uppercase tracking-widest">Medium Intensity</span>
          </div>
          <h1 className="font-orbitron text-5xl md:text-7xl font-black text-white leading-none">Far Cry VR</h1>
          <p className="mt-4 text-xl text-[#7DD3FC] max-w-2xl leading-relaxed">Zero Latency Webster, Houston's longest free-roam VR game — based on Far Cry 3. Groups of 2–6 players spend 50 minutes navigating jungle terrain and enemy territory to escape a pirate-controlled island.</p>
          <div className="flex flex-wrap gap-3 mt-5 text-sm text-[#7DD3FC]/80">
            <span className="glass px-3 py-1.5 rounded-full border border-white/10">2–6 players</span>
            <span className="glass px-3 py-1.5 rounded-full border border-white/10">50 min</span>
            <span className="glass px-3 py-1.5 rounded-full border border-white/10">Age 13+</span>
            <span className="glass px-3 py-1.5 rounded-full border border-white/10">Medium Intensity</span>
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
                <div className="w-9 h-9 rounded-lg bg-orange-900/20 border border-orange-700/30 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-orange-400" />
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
          <p className="font-orbitron text-xs tracking-[0.3em] text-orange-400 uppercase mb-2">Official Trailer</p>
          <h2 className="font-orbitron text-2xl font-black text-white mb-8">Watch the <span className="text-orange-400">Far Cry VR Trailer</span></h2>
          <VideoPlayer videoSrc="/far-cry-trailer.mp4" thumbnailSrc="/game-far-cry-vr.webp" title="Far Cry VR Trailer" />
        </div>
      </section>

      {/* About */}
      <section className="py-16 border-t border-cyan-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">
            <div>
              <p className="font-orbitron text-xs tracking-[0.3em] text-orange-400 uppercase mb-2">Mission Briefing</p>
              <h2 className="font-orbitron text-2xl md:text-3xl font-black text-white mb-6">About <span className="text-orange-400">Far Cry VR</span></h2>
              <div className="space-y-4 text-[#7DD3FC] leading-relaxed">
                <p>Far Cry VR at Zero Latency Webster, Houston is based on the Far Cry 3 universe developed by Ubisoft. Groups of 2–6 players aged 13 and older take on a 50-minute free-roam VR mission to escape a pirate-controlled island. The session runs across 3 distinct environments — jungle terrain with enemy patrols, underground caves with limited visibility, and fortified enemy positions — all navigated physically in the Zero Latency Webster, Houston free-roam arena.</p>
                <p>At 50 minutes, Far Cry VR is the longest single-session game at Zero Latency Webster, Houston. The extra runtime allows for a structured story arc: an opening that establishes the mission, mid-game environments with escalating enemy contact, and a final confrontation. Groups of 2–3 players experience a tighter, more personal version of the mission; groups of 4–6 handle larger engagement zones simultaneously. Game Masters monitor the session and manage difficulty from a control room throughout the full 50 minutes.</p>
                <p>Far Cry VR is the game Zero Latency Webster, Houston recommends for groups who want medium-intensity combat without the extreme pressure of games like Haunted or Space Marine VR. The pacing works for first-time VR players alongside experienced players in the same squad.</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-orbitron text-[9px] tracking-widest text-[#7DD3FC]/50 uppercase mb-4">Game Details</p>
              {[
                { label: "Genre", value: "Tropical Action" },
                { label: "IP", value: "Far Cry 3 (Ubisoft)" },
                { label: "Players", value: "2–6" },
                { label: "Duration", value: "50 minutes" },
                { label: "Intensity", value: "Medium" },
                { label: "Min Age", value: "13+" },
                { label: "Play Style", value: "Co-op" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center px-4 py-3 rounded-xl border border-orange-800/20 bg-orange-900/5">
                  <span className="text-[#7DD3FC]/60 text-xs font-orbitron">{label}</span>
                  <span className="font-orbitron text-sm font-bold text-white">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-16 border-t border-cyan-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="font-orbitron text-xs tracking-[0.3em] text-orange-400 uppercase mb-2">Gallery</p>
          <h2 className="font-orbitron text-2xl font-black text-white mb-8">Far Cry VR <span className="text-orange-400">Screenshots</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {GALLERY.map((src, i) => (
              <div key={i} className="group relative aspect-video rounded-xl overflow-hidden border border-cyan-900/30 hover:border-orange-500/40 transition-colors duration-300">
                <Image src={src} alt={`Far Cry VR screenshot ${i + 1}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[#000C1A]/30 group-hover:bg-transparent transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 border-t border-cyan-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="font-orbitron text-xs tracking-[0.3em] text-orange-400 uppercase mb-2">Experience Highlights</p>
          <h2 className="font-orbitron text-2xl font-black text-white mb-8">What Far Cry VR <span className="text-orange-400">Includes</span></h2>
          <div className="grid md:grid-cols-3 gap-4">
            {FEATURES.map((f, i) => (
              <div key={f.title} className="relative overflow-hidden rounded-2xl group border border-cyan-900/30 hover:border-orange-500/30 transition-colors duration-300">
                <div className={`relative ${i === 0 ? 'h-72' : 'h-60'}`}>
                  <Image src={f.img} alt={f.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000C1A]/95 via-[#000C1A]/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-orbitron text-sm font-bold text-white mb-1.5 group-hover:text-orange-300 transition-colors">{f.title}</h3>
                    <p className="text-xs text-[#7DD3FC]/80 leading-relaxed">{f.desc}</p>
                  </div>
                  <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-orange-500/60 rounded-tl-lg pointer-events-none" />
                  <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-orange-500/60 rounded-tr-lg pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini CTA */}
      <section className="relative overflow-hidden py-16 mx-4 sm:mx-6 mb-12 rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-cyan-900/40 to-[#000C1A] rounded-2xl" />
        <div className="absolute inset-0 opacity-[0.04] rounded-2xl" style={{ backgroundImage: 'linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <p className="font-orbitron text-xs tracking-[0.3em] text-orange-400 uppercase mb-3">Book a Session</p>
          <h2 className="font-orbitron text-2xl md:text-3xl font-black text-white mb-3">
            Book Far Cry VR at <span className="text-[#38BDF8]">Zero Latency Webster, Houston</span>
          </h2>
          <p className="text-[#7DD3FC] text-sm mb-8 leading-relaxed">2–6 players. 50-minute free-roam VR mission in Houston, Texas. Based on Far Cry 3. Ages 13 and up — book your session online now.</p>
          <BookGameButton label="Book Far Cry VR" source="game-cta" />
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
