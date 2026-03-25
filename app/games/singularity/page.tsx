import Image from "next/image";
import type { Metadata } from "next";
import BookGameButton from "@/components/BookBtn";
import Link from "next/link";
import { allGames } from "@/lib/gamesData";
import { ChevronRight, Users, Clock, Zap, ShieldAlert } from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Singularity at Zero Latency Webster, Houston | Sci-Fi Co-op Free-Roam VR",
  description: "Singularity at Zero Latency Webster, Houston sends 2–8 players into a crippled orbital space station to fight rogue AI in a 30–50 minute free-roam VR co-op mission. Book now in Houston, Texas.",
  alternates: { canonical: "https://arcadehouston.com/games/singularity" },
  openGraph: {
    title: "Singularity at Zero Latency Webster, Houston",
    description: "Play Singularity at Zero Latency Webster, Houston — a sci-fi free-roam VR co-op game for 2–8 players set aboard a crippled orbital space station. 30–50 minute sessions. Ages 13+. Houston, Texas.",
    url: "https://arcadehouston.com/games/singularity",
    images: [{ url: "https://arcadehouston.com/game-singularity.webp", width: 1200, height: 630, alt: "Singularity sci-fi VR at Zero Latency Webster, Houston" }],
  },
};

const gameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Singularity",
  "description": "Singularity at Zero Latency Webster, Houston is a sci-fi free-roam VR co-op game for 2–8 players aged 13 and older. Players battle rogue AI and alien threats aboard a crippled orbital space station across zero-gravity corridors and pressurized zones in a 30–50 minute session in Houston, Texas.",
  "genre": "Sci-Fi Action",
  "numberOfPlayers": { "@type": "QuantitativeValue", "minValue": 2, "maxValue": 8 },
  "gamePlatform": "Virtual Reality",
  "url": "https://arcadehouston.com/games/singularity",
  "provider": { "@type": "Organization", "name": "Zero Latency Webster, Houston", "url": "https://arcadehouston.com" },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "item": { "name": "Home", "id": "https://arcadehouston.com/" } },
    { "@type": "ListItem", "position": 2, "item": { "name": "Games", "id": "https://arcadehouston.com/games" } },
    { "@type": "ListItem", "position": 3, "item": { "name": "Singularity", "id": "https://arcadehouston.com/games/singularity" } },
  ],
};

const STATS = [
  { Icon: Users, label: "Players", value: "2–8" },
  { Icon: Clock, label: "Duration", value: "30–50 min" },
  { Icon: Zap, label: "Intensity", value: "High" },
  { Icon: ShieldAlert, label: "Min Age", value: "13+" },
];

const GALLERY = [
  "/singularity-pulse.webp",
  "/singularity-scatter.webp",
  "/singularity-shield.webp",
  "/singularity-team-playing.webp",
];

const FEATURES = [
  { img: "/singularity-station-exterior.webp", title: "Orbital Space Station Setting", desc: "The entire mission takes place aboard a crippled orbital station — interior corridors, pressurized compartments, and hull-adjacent zones. The station environment is the most architecturally distinct setting in the Zero Latency Webster, Houston game lineup." },
  { img: "/singularity-zerog.webp", title: "Zero-Gravity Combat Zones", desc: "Sections of the station operate in zero gravity. Players physically navigate these zones using free-roam VR movement while managing 3D spatial positioning — enemies approach from above and below, not just forward and sides." },
  { img: "/singularity-beam.webp", title: "Futuristic Energy Weapons", desc: "Players use energy-based weapons — pulse rifles, beam cannons, and scatter-shot emitters — designed for the rogue AI and alien enemies aboard the station. Weapon selection and ammo management affect squad survival across the full 30–50 minute session." },
];

export default function SingularityPage() {
  const otherGames = allGames.filter(g => g.slug !== "singularity");
  return (
    <>
      <Script id="game-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gameSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 pt-4 pb-2">
        <ol className="flex items-center gap-1 text-xs text-[#7DD3FC]/60">
          <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
          <li><ChevronRight size={12} /></li>
          <li><Link href="/games" className="hover:text-sky-400 transition-colors">Games</Link></li>
          <li><ChevronRight size={12} /></li>
          <li className="text-sky-400">Singularity</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end pb-16">
        <Image src="/singularity-hero-bg.webp" alt="Singularity sci-fi VR at Zero Latency Webster, Houston" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000C1A] via-[#000C1A]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000C1A]/70 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 w-full">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold font-orbitron bg-sky-500/20 border border-sky-500/40 text-sky-300 uppercase tracking-widest">Sci-Fi Action · Co-op</span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold font-orbitron bg-white/5 border border-white/10 text-[#7DD3FC] uppercase tracking-widest">High Intensity</span>
          </div>
          <h1 className="font-orbitron text-5xl md:text-7xl font-black text-white leading-none">Singularity</h1>
          <p className="mt-4 text-lg text-[#7DD3FC] max-w-xl">Zero Latency Webster, Houston's sci-fi free-roam VR co-op game. 2–8 players aged 13 and up fight rogue AI and alien threats aboard a crippled orbital space station in a 30–50 minute session in Houston, Texas.</p>
          <div className="flex flex-wrap gap-3 mt-5 text-sm text-[#7DD3FC]/80">
            <span className="glass px-3 py-1 rounded-full border border-white/10">2–8 players</span>
            <span className="glass px-3 py-1 rounded-full border border-white/10">30–50 min</span>
            <span className="glass px-3 py-1 rounded-full border border-white/10">Age 13+</span>
          </div>
          <BookGameButton label="Book This Experience" source="game-hero" className="mt-6" />
        </div>
      </section>

      {/* Quick Stats Bar */}
      <div className="border-y border-sky-800/30 bg-[#001225]/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-sky-800/30">
            {STATS.map(({ Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3 px-4 py-5">
                <div className="w-9 h-9 rounded-lg bg-sky-900/40 border border-sky-700/30 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-sky-400" />
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
      <section className="py-16 border-t border-sky-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-orbitron text-2xl font-black text-white mb-8">Watch the <span className="text-sky-400">Singularity Trailer</span></h2>
          <VideoPlayer videoSrc="/singularity-trailer.mp4" thumbnailSrc="/game-singularity.webp" title="Singularity Trailer" />
        </div>
      </section>

      {/* About */}
      <section className="py-16 border-t border-sky-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-start">
            <div>
              <p className="font-orbitron text-xs tracking-[0.3em] text-sky-400 uppercase mb-3">Mission Briefing</p>
              <h2 className="font-orbitron text-2xl md:text-3xl font-black text-white mb-6">About <span className="text-sky-400">Singularity</span></h2>
              <div className="space-y-4 text-[#7DD3FC] leading-relaxed text-sm">
                <p>Singularity at Zero Latency Webster, Houston is a sci-fi co-op multiplayer VR game for 2–8 players aged 13 and older. The mission takes place aboard a crippled orbital space station where rogue AI systems and alien organisms have taken control. Players navigate the station's interior physically using free-roam VR movement in the Zero Latency Webster, Houston arena in Houston, Texas, across a 30–50 minute session that includes zero-gravity zones, pressurized corridors, and exterior hull sections.</p>
                <p>The game's enemy types — rogue AI drones, automated turrets, and alien biological threats — require different tactics. AI drones respond to sound and movement and target players who break formation. Alien organisms move in patterns that reward squads who communicate positions clearly. Larger groups of 5–8 players handle wider engagement zones and face more complex simultaneous encounters than 2–4 player squads. Game Masters at Zero Latency Webster, Houston monitor session progress from a control room and adjust encounter difficulty in real time.</p>
                <p>Singularity is the game Zero Latency Webster, Houston recommends for sci-fi fans, groups that want high-intensity co-op VR without the horror atmosphere of Haunted, and groups looking for a longer experience than the 30-minute games in the lineup. The 30–50 minute runtime allows for a narrative arc with a structured beginning, escalating middle section, and final objective.</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="font-orbitron text-[9px] tracking-widest text-[#7DD3FC]/50 uppercase mb-4">Game Details</p>
              {[
                { label: "Genre", value: "Sci-Fi Action" },
                { label: "Players", value: "2–8" },
                { label: "Duration", value: "30–50 minutes" },
                { label: "Intensity", value: "High" },
                { label: "Min Age", value: "13+" },
                { label: "Play Style", value: "Co-op" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center px-4 py-3 rounded-xl border border-sky-800/20 bg-sky-900/5">
                  <span className="text-[#7DD3FC]/60 text-xs font-orbitron">{label}</span>
                  <span className="font-orbitron text-sm font-bold text-white">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 border-t border-sky-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="font-orbitron text-xs tracking-[0.3em] text-sky-400 uppercase mb-3">Screenshots</p>
          <h2 className="font-orbitron text-2xl font-black text-white mb-6">Singularity <span className="text-sky-400">Screenshots</span></h2>
          <div className="grid grid-cols-2 gap-3">
            {GALLERY.map((src, i) => (
              <div key={i} className="relative aspect-video rounded-xl overflow-hidden">
                <Image src={src} alt={`Singularity screenshot ${i + 1}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 border-t border-sky-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="font-orbitron text-xs tracking-[0.3em] text-sky-400 uppercase mb-3">Experience Highlights</p>
          <h2 className="font-orbitron text-2xl font-black text-white mb-8">What Singularity <span className="text-sky-400">Includes</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f, i) => (
              <div key={f.title} className="relative overflow-hidden rounded-2xl group border border-sky-800/20 bg-sky-900/5 hover:border-sky-500/30 transition-colors">
                <div className={`relative ${i === 0 ? "h-72" : "h-60"}`}>
                  <Image src={f.img} alt={f.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000C1A]/90 via-[#000C1A]/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-orbitron text-sm font-bold text-white mb-1 group-hover:text-sky-300 transition-colors">{f.title}</h3>
                    <p className="text-xs text-[#7DD3FC]/80 leading-relaxed">{f.desc}</p>
                  </div>
                  <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-sky-500/60 rounded-tl-lg pointer-events-none" />
                  <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-sky-500/60 rounded-tr-lg pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini CTA */}
      <section className="relative overflow-hidden py-14 mx-4 sm:mx-6 mb-12 rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/30 via-cyan-900/40 to-[#000C1A] rounded-2xl" />
        <div className="absolute inset-0 opacity-[0.04] rounded-2xl" style={{ backgroundImage: 'linear-gradient(rgba(56,189,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <p className="font-orbitron text-xs tracking-[0.3em] text-sky-400 uppercase mb-3">Book a Session</p>
          <h2 className="font-orbitron text-2xl md:text-3xl font-black text-white mb-3">Book Singularity at <span className="text-sky-400">Zero Latency Webster, Houston</span></h2>
          <p className="text-[#7DD3FC] text-sm mb-8">2–8 players. 30–50 minute sci-fi free-roam VR co-op session in Houston, Texas. Ages 13 and up. Book your Singularity mission online now.</p>
          <BookGameButton label="Book Singularity" source="game-cta" />
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
