import Image from "next/image";
import type { Metadata } from "next";
import BookGameButton from "@/components/BookBtn";
import Link from "next/link";
import { allGames } from "@/lib/gamesData";
import { ChevronRight, Users, Clock, Zap, ShieldAlert } from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Haunted VR at Zero Latency Webster, Houston | Full-Body Horror Free-Roam VR",
  description: "Haunted at Zero Latency Webster, Houston is a free-roam VR horror game for 2–8 players aged 16+. Walk physically through a horror house with spatial 3D audio and room-scale tracking. 30-minute sessions in Houston, Texas.",
  alternates: { canonical: "https://arcadehouston.com/games/haunted" },
  openGraph: {
    title: "Haunted VR at Zero Latency Webster, Houston",
    description: "Haunted at Zero Latency Webster, Houston puts 2–8 players in a free-roam VR horror environment with spatial audio and room-scale tracking. 30 minutes. Ages 16+. Houston, Texas.",
    url: "https://arcadehouston.com/games/haunted",
    images: [{ url: "https://arcadehouston.com/haunted-house-bg.webp", width: 1200, height: 630, alt: "Haunted VR horror experience at Zero Latency Webster, Houston" }],
  },
};

const gameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Haunted",
  "description": "Haunted is a free-roam VR horror experience at Zero Latency Webster, Houston for 2–8 players aged 16 and older. Players walk physically through horror environments using room-scale tracking and spatial 3D audio in a 30-minute session in Houston, Texas.",
  "genre": "Horror",
  "numberOfPlayers": { "@type": "QuantitativeValue", "minValue": 2, "maxValue": 8 },
  "gamePlatform": "Virtual Reality",
  "url": "https://arcadehouston.com/games/haunted",
  "provider": { "@type": "Organization", "name": "Zero Latency Webster, Houston", "url": "https://arcadehouston.com" },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "item": { "name": "Home", "id": "https://arcadehouston.com/" } },
    { "@type": "ListItem", "position": 2, "item": { "name": "Games", "id": "https://arcadehouston.com/games" } },
    { "@type": "ListItem", "position": 3, "item": { "name": "Haunted", "id": "https://arcadehouston.com/games/haunted" } },
  ],
};

const STATS = [
  { Icon: Users, label: "Players", value: "2–8" },
  { Icon: Clock, label: "Duration", value: "30 min" },
  { Icon: Zap, label: "Intensity", value: "Extreme" },
  { Icon: ShieldAlert, label: "Min Age", value: "16+" },
];

const GALLERY = [
  "/haunted-final-cta.webp",
  "/haunted-virtual-horror.webp",
  "/haunted-main-gameplay.webp",
  "/haunted-terror.webp",
];

const FEATURES = [
  { img: "/haunted-main-gameplay.webp", title: "Full-Body Room-Scale Movement", desc: "Players walk, run, crouch, and back away through the horror environments. Room-scale tracking in the free-roam VR arena means your physical movement drives everything — there are no teleport shortcuts." },
  { img: "/haunted-terror.webp", title: "Spatial 3D Audio", desc: "Every creak, whisper, drip, and scream is positioned in 3D space around your head. Audio cues come from specific directions — including behind you. Hearing something doesn't tell you which way to run." },
  { img: "/haunted-survive.webp", title: "Group Survival Dynamics", desc: "Staying with your group of 2–8 players gives you more eyes on the environment. Separating from the group means facing threats alone. Both choices have consequences in Haunted's horror design." },
];

export default function HauntedPage() {
  const otherGames = allGames.filter(g => g.slug !== "haunted");
  return (
    <>
      <Script id="game-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gameSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Breadcrumb nav */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 pt-4 pb-2">
        <ol className="flex items-center gap-1 text-xs text-[#7DD3FC]/60">
          <li><Link href="/" className="hover:text-red-400 transition-colors">Home</Link></li>
          <li><ChevronRight size={12} /></li>
          <li><Link href="/games" className="hover:text-red-400 transition-colors">Games</Link></li>
          <li><ChevronRight size={12} /></li>
          <li className="text-red-400">Haunted</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end pb-16">
        <Image src="/haunted-house-bg.webp" alt="Haunted VR — full-body horror experience at Zero Latency Webster, Houston" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000C1A] via-[#000C1A]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000C1A]/70 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 w-full">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold font-orbitron bg-red-500/20 border border-red-500/40 text-red-300 uppercase tracking-widest">Horror</span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold font-orbitron bg-white/5 border border-white/10 text-[#7DD3FC] uppercase tracking-widest">Extreme Intensity · 16+</span>
          </div>
          <h1 className="font-orbitron text-5xl md:text-7xl font-black text-white leading-none">Haunted</h1>
          <p className="mt-4 text-lg text-[#7DD3FC] max-w-xl">Zero Latency Webster, Houston's horror free-roam VR game. 2–8 players walk physically through a horror house using room-scale tracking and spatial 3D audio. Ages 16 and up only. 30-minute session.</p>
          <div className="flex flex-wrap gap-3 mt-5 text-sm text-[#7DD3FC]/80">
            <span className="glass px-3 py-1 rounded-full border border-white/10">2–8 players</span>
            <span className="glass px-3 py-1 rounded-full border border-white/10">30 min</span>
            <span className="glass px-3 py-1 rounded-full border border-white/10">Age 16+</span>
          </div>
          <BookGameButton label="Book This Experience" source="game-hero" className="mt-6" />
        </div>
      </section>

      {/* Quick Stats Bar */}
      <div className="border-y border-red-800/30 bg-[#001225]/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-red-800/30">
            {STATS.map(({ Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3 px-4 py-5">
                <div className="w-9 h-9 rounded-lg bg-red-900/40 border border-red-700/30 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-red-400" />
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
      <section className="py-16 border-t border-red-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="font-orbitron text-xs tracking-[0.3em] text-red-400 uppercase mb-2">Official Trailer</p>
          <h2 className="font-orbitron text-2xl md:text-3xl font-black text-white mb-8">Watch the <span className="text-red-400">Haunted VR Trailer</span></h2>
          <VideoPlayer videoSrc="/haunted-trailer.mp4" thumbnailSrc="/haunted-house-bg.webp" title="Haunted — Official Trailer" />
        </div>
      </section>

      {/* About */}
      <section className="py-16 border-t border-red-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-start">
            <div>
              <p className="font-orbitron text-xs tracking-[0.3em] text-red-400 uppercase mb-3">About the Game</p>
              <h2 className="font-orbitron text-2xl md:text-3xl font-black text-white mb-6">Haunted VR: <span className="text-red-400">How It Works</span></h2>
              <div className="space-y-4 text-[#7DD3FC] leading-relaxed text-sm">
                <p>Haunted at Zero Latency Webster, Houston is a free-roam VR horror game where 2–8 players physically walk through a haunted environment using room-scale tracking in a shared arena. The game runs for 30 minutes. Players aged 16 and older can book a session in Houston, Texas. Unlike a seated or stationary VR experience, Haunted requires players to move their bodies — walking into rooms, backing away from threats, and reacting physically to what the virtual reality environment presents.</p>
                <p>The horror design relies on two technical elements: full room-scale free-roam movement and spatial 3D audio. Sounds — footsteps, breathing, creaking floors, distant voices — are positioned in three-dimensional space around each player's head. A sound from behind means something is behind you. A sound from above means look up. The audio system works alongside the visual design to create multi-directional scares that a flat-screen horror game cannot replicate.</p>
                <p>Haunted is rated for ages 16 and older at Zero Latency Webster, Houston. The game contains sustained horror content, jump scares, and dark environments. Game Masters monitor every session from a control room and can assist players who need to exit the experience early. Groups that finish the 30-minute session together report it as one of the most memorable shared experiences available in Houston.</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="font-orbitron text-[9px] tracking-widest text-[#7DD3FC]/50 uppercase mb-4">Game Details</p>
              {[
                { label: "Genre", value: "Horror" },
                { label: "Players", value: "2–8" },
                { label: "Duration", value: "30 minutes" },
                { label: "Intensity", value: "Extreme" },
                { label: "Age Minimum", value: "16+" },
                { label: "Combat", value: "Atmospheric" },
                { label: "VR Style", value: "Free-Roam" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center px-4 py-3 rounded-xl border border-red-800/20 bg-red-900/5">
                  <span className="text-[#7DD3FC]/60 text-xs font-orbitron">{label}</span>
                  <span className="font-orbitron text-sm font-bold text-white">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 border-t border-red-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="font-orbitron text-xs tracking-[0.3em] text-red-400 uppercase mb-3">Screenshots</p>
          <h2 className="font-orbitron text-2xl font-black text-white mb-6">Haunted VR <span className="text-red-400">Screenshots</span></h2>
          <div className="grid grid-cols-2 gap-3">
            {GALLERY.map((src, i) => (
              <div key={i} className="relative aspect-video rounded-xl overflow-hidden">
                <Image src={src} alt={`Haunted screenshot ${i + 1}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 border-t border-red-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="font-orbitron text-xs tracking-[0.3em] text-red-400 uppercase mb-3">Highlights</p>
          <h2 className="font-orbitron text-2xl md:text-3xl font-black text-white mb-8">What Makes Haunted <span className="text-red-400">Different</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f, i) => (
              <div key={f.title} className="relative overflow-hidden rounded-2xl group border border-red-800/20 bg-red-900/5 hover:border-red-500/30 transition-colors">
                <div className={`relative ${i === 0 ? "h-72" : "h-60"}`}>
                  <Image src={f.img} alt={f.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000C1A]/90 via-[#000C1A]/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-orbitron text-sm font-bold text-white mb-1 group-hover:text-red-300 transition-colors">{f.title}</h3>
                    <p className="text-xs text-[#7DD3FC]/80 leading-relaxed">{f.desc}</p>
                  </div>
                  <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-red-500/60 rounded-tl-lg pointer-events-none" />
                  <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-red-500/60 rounded-tr-lg pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini CTA */}
      <section className="relative overflow-hidden py-14 mx-4 sm:mx-6 mb-12 rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-cyan-900/30 to-[#000C1A] rounded-2xl" />
        <div className="absolute inset-0 opacity-[0.04] rounded-2xl" style={{ backgroundImage: 'linear-gradient(rgba(239,68,68,1) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <p className="font-orbitron text-xs tracking-[0.3em] text-red-400 uppercase mb-3">Book a Session</p>
          <h2 className="font-orbitron text-2xl md:text-3xl font-black text-white mb-3">
            Book Haunted at <span className="text-red-400">Zero Latency Webster, Houston</span>
          </h2>
          <p className="text-[#7DD3FC] text-sm mb-8">2–8 players. 30-minute free-roam VR horror session. Ages 16 and older. Available now in Houston, Texas — book your Haunted session online.</p>
          <BookGameButton label="Book Haunted — If You Dare" source="game-cta" />
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
