import Image from "next/image";
import type { Metadata } from "next";
import BookGameButton from "@/components/BookBtn";
import Link from "next/link";
import { allGames } from "@/lib/gamesData";
import { ChevronRight, Users, Clock, Zap, ShieldAlert } from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Space Marine VR at Zero Latency Webster, Houston | Warhammer 40K Free-Roam VR",
  description: "Space Marine VR at Zero Latency Webster, Houston puts 1–8 players in Warhammer 40K Space Marine armor to fight Tyranid swarms in free-roam VR. 30–45 minute sessions in Houston, Texas.",
  alternates: { canonical: "https://arcadehouston.com/games/space-marine-vr" },
  openGraph: {
    title: "Space Marine VR at Zero Latency Webster, Houston",
    description: "Fight Tyranid hordes as a Warhammer 40K Space Marine in this free-roam multiplayer VR experience for 1–8 players at Zero Latency Webster, Houston, Texas.",
    url: "https://arcadehouston.com/games/space-marine-vr",
    images: [{ url: "https://arcadehouston.com/game-hero-space-marine.webp", width: 1200, height: 630, alt: "Space Marine VR at Zero Latency Webster, Houston" }],
  },
};

const gameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Space Marine VR",
  "description": "Space Marine VR at Zero Latency Webster, Houston is a Warhammer 40,000 free-roam VR experience for 1–8 players. Players wear Space Marine armor and fight coordinated waves of Tyranid creatures across 30–45 minutes in Houston, Texas. Includes Threat: Lethal mode for advanced squads.",
  "genre": "Sci-Fi Action",
  "numberOfPlayers": { "@type": "QuantitativeValue", "minValue": 1, "maxValue": 8 },
  "gamePlatform": "Virtual Reality",
  "url": "https://arcadehouston.com/games/space-marine-vr",
  "provider": { "@type": "Organization", "name": "Zero Latency Webster, Houston", "url": "https://arcadehouston.com" },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "item": { "name": "Home", "id": "https://arcadehouston.com/" } },
    { "@type": "ListItem", "position": 2, "item": { "name": "Games", "id": "https://arcadehouston.com/games" } },
    { "@type": "ListItem", "position": 3, "item": { "name": "Space Marine VR", "id": "https://arcadehouston.com/games/space-marine-vr" } },
  ],
};

const STATS = [
  { Icon: Users, label: "Players", value: "1–8" },
  { Icon: Clock, label: "Duration", value: "30–45 min" },
  { Icon: Zap, label: "Intensity", value: "Extreme" },
  { Icon: ShieldAlert, label: "Min Age", value: "13+" },
];

const FEATURES = [
  { img: "/become-a-marine.webp", title: "Wear Space Marine Armor", desc: "Players physically inhabit the ceramite-armored body of a Warhammer 40K super-soldier. The scale, weight, and power of the Space Marine suit is modeled in VR — your hands and weapons match the character you see." },
  { img: "/space-marine-hero-character.webp", title: "Fight the Tyranid Swarm", desc: "Tyranid creatures — Hormagaunts, Termagants, and larger bio-forms — attack from multiple directions at once. Your squad must hold defensive positions and coordinate fire to survive each wave." },
  { img: "/Space-Marine-VR-Threat-Lethal-Game-Scene-Fight-1.webp", title: "Threat: Lethal Mode", desc: "A 30-minute timed mode where a full squad wipe resets the level. Designed for experienced VR players who want the hardest version of the Space Marine VR mission at Zero Latency Webster, Houston." },
];

const GALLERY = [
  "/game-space-marine.webp",
  "/become-a-marine.webp",
  "/space-marine-hero-character.webp",
  "/Space-Marine-VR-Threat-Lethal-Game-Scene-Fight-1.webp",
];

export default function SpaceMarineVRPage() {
  const otherGames = allGames.filter(g => g.slug !== "space-marine-vr");
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
          <li className="text-amber-400">Space Marine VR</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end pb-20">
        <Image src="/game-hero-space-marine.webp" alt="Space Marine VR — Warhammer 40K free-roam VR at Zero Latency Webster, Houston" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000C1A] via-[#000C1A]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000C1A]/50 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 w-full">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold font-orbitron bg-amber-500/20 border border-amber-500/40 text-amber-300 uppercase tracking-widest">Sci-Fi Action · Warhammer 40K</span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold font-orbitron bg-red-500/20 border border-red-500/40 text-red-300 uppercase tracking-widest">Extreme Intensity</span>
          </div>
          <h1 className="font-orbitron text-5xl md:text-7xl font-black text-white leading-none">Space Marine VR</h1>
          <p className="mt-4 text-xl text-[#7DD3FC] max-w-2xl leading-relaxed">The Warhammer 40K free-roam VR game at Zero Latency Webster, Houston. Play as a Space Marine, fight Tyranid hordes, and survive alongside up to 7 teammates in a 30–45 minute session.</p>
          <div className="flex flex-wrap gap-3 mt-5 text-sm text-[#7DD3FC]/80">
            <span className="glass px-3 py-1.5 rounded-full border border-white/10">1–8 players</span>
            <span className="glass px-3 py-1.5 rounded-full border border-white/10">30–45 min</span>
            <span className="glass px-3 py-1.5 rounded-full border border-white/10">Age 13+</span>
            <span className="glass px-3 py-1.5 rounded-full border border-white/10">Extreme Intensity</span>
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
                <div className="w-9 h-9 rounded-lg bg-amber-900/20 border border-amber-700/30 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-amber-400" />
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
          <p className="font-orbitron text-xs tracking-[0.3em] text-amber-400 uppercase mb-2">Official Trailer</p>
          <h2 className="font-orbitron text-2xl font-black text-white mb-8">Watch the <span className="text-amber-400">Space Marine VR Trailer</span></h2>
          <VideoPlayer videoSrc="/space-marine-trailer.mp4" thumbnailSrc="/game-space-marine.webp" title="Space Marine VR Trailer" />
        </div>
      </section>

      {/* About */}
      <section className="py-16 border-t border-cyan-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">
            <div>
              <p className="font-orbitron text-xs tracking-[0.3em] text-amber-400 uppercase mb-2">Mission Briefing</p>
              <h2 className="font-orbitron text-2xl md:text-3xl font-black text-white mb-6">About <span className="text-amber-400">Space Marine VR</span></h2>
              <div className="space-y-4 text-[#7DD3FC] leading-relaxed">
                <p>Space Marine VR at Zero Latency Webster, Houston puts 1–8 players in the Warhammer 40,000 universe as fully armored Space Marines fighting back a Tyranid invasion. Players move freely through the arena in Houston, Texas — physically walking, aiming, and shooting across 30–45 minutes of co-op multiplayer VR combat. The game runs on the same free-roam VR technology as all Zero Latency Webster, Houston titles, so there are no fixed positions or stationary platforms.</p>
                <p>The mission structure focuses on coordinated defense and counterattack. Tyranid waves — Hormagaunts, Termagants, and larger organisms — attack from multiple angles simultaneously. Squads that hold formation and communicate ammo counts and threat positions last significantly longer than groups that scatter. Game Masters at Zero Latency Webster, Houston track every session and adjust wave difficulty to match your group's progress.</p>
                <p>Threat: Lethal mode is a separate 30-minute timed mission available to squads that want the hardest version of Space Marine VR. A full team wipe sends the group back to the start of the level. This mode works best for groups of 4–8 players who have completed a standard session and want a second run with higher stakes.</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-orbitron text-[9px] tracking-widest text-[#7DD3FC]/50 uppercase mb-4">Game Details</p>
              {[
                { label: "Genre", value: "Sci-Fi Action" },
                { label: "IP", value: "Warhammer 40K" },
                { label: "Players", value: "1–8" },
                { label: "Duration", value: "30–45 minutes" },
                { label: "Intensity", value: "Extreme" },
                { label: "Min Age", value: "13+" },
                { label: "Play Style", value: "Co-op" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center px-4 py-3 rounded-xl border border-amber-800/20 bg-amber-900/5">
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
          <p className="font-orbitron text-xs tracking-[0.3em] text-amber-400 uppercase mb-2">Gallery</p>
          <h2 className="font-orbitron text-2xl font-black text-white mb-8">Space Marine VR <span className="text-amber-400">Screenshots</span></h2>
          <div className="grid grid-cols-2 gap-3">
            {GALLERY.map((src, i) => (
              <div key={i} className="group relative aspect-video rounded-xl overflow-hidden border border-cyan-900/30 hover:border-amber-500/40 transition-colors duration-300">
                <Image src={src} alt={`Space Marine VR screenshot ${i + 1}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[#000C1A]/30 group-hover:bg-transparent transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 border-t border-cyan-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="font-orbitron text-xs tracking-[0.3em] text-amber-400 uppercase mb-2">Experience Highlights</p>
          <h2 className="font-orbitron text-2xl font-black text-white mb-8">What Space Marine VR <span className="text-amber-400">Includes</span></h2>
          <div className="grid md:grid-cols-3 gap-4">
            {FEATURES.map((f, i) => (
              <div key={f.title} className="relative overflow-hidden rounded-2xl group border border-cyan-900/30 hover:border-amber-500/30 transition-colors duration-300">
                <div className={`relative ${i === 0 ? 'h-72' : 'h-60'}`}>
                  <Image src={f.img} alt={f.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000C1A]/95 via-[#000C1A]/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-orbitron text-sm font-bold text-white mb-1.5 group-hover:text-amber-300 transition-colors">{f.title}</h3>
                    <p className="text-xs text-[#7DD3FC]/80 leading-relaxed">{f.desc}</p>
                  </div>
                  <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-amber-500/60 rounded-tl-lg pointer-events-none" />
                  <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-amber-500/60 rounded-tr-lg pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini CTA */}
      <section className="relative overflow-hidden py-16 mx-4 sm:mx-6 mb-12 rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-cyan-900/40 to-[#000C1A] rounded-2xl" />
        <div className="absolute inset-0 opacity-[0.04] rounded-2xl" style={{ backgroundImage: 'linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <p className="font-orbitron text-xs tracking-[0.3em] text-amber-400 uppercase mb-3">Book a Session</p>
          <h2 className="font-orbitron text-2xl md:text-3xl font-black text-white mb-3">
            Book Space Marine VR at <span className="text-[#38BDF8]">Zero Latency Webster, Houston</span>
          </h2>
          <p className="text-[#7DD3FC] text-sm mb-8 leading-relaxed">1–8 players. 30–45 minute Warhammer 40K free-roam VR session in Houston, Texas. Book online now and choose your mode — standard or Threat: Lethal.</p>
          <BookGameButton label="Book Space Marine VR" source="game-cta" />
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
