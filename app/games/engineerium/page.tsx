import Image from "next/image";
import type { Metadata } from "next";
import BookGameButton from "@/components/BookBtn";
import Link from "next/link";
import { allGames } from "@/lib/gamesData";
import { ChevronRight, Users, Clock, Zap, ShieldAlert } from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Engineerium at Zero Latency Webster, Houston | Family-Friendly Free-Roam VR",
  description: "Engineerium at Zero Latency Webster, Houston is a no-combat free-roam VR adventure for 1–8 players aged 10 and up. Explore floating worlds and giant sky creatures in a 20-minute session in Houston, Texas.",
  alternates: { canonical: "https://arcadehouston.com/games/engineerium" },
  openGraph: {
    title: "Engineerium at Zero Latency Webster, Houston",
    description: "Engineerium at Zero Latency Webster, Houston is a family-friendly free-roam VR game for ages 10+. Explore a world of colossal flying whales and floating platforms in 20 minutes in Houston, Texas.",
    url: "https://arcadehouston.com/games/engineerium",
    images: [{ url: "https://arcadehouston.com/game-engineerium.webp", width: 1200, height: 630, alt: "Engineerium family-friendly VR adventure at Zero Latency Webster, Houston" }],
  },
};

const gameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Engineerium",
  "description": "Engineerium is a no-combat free-roam VR adventure at Zero Latency Webster, Houston for 1–8 players aged 10 and older. Players walk through a world of colossal flying whales, floating platforms, and geometric structures in a 20-minute low-intensity session in Houston, Texas.",
  "genre": "Family Adventure",
  "numberOfPlayers": { "@type": "QuantitativeValue", "minValue": 1, "maxValue": 8 },
  "gamePlatform": "Virtual Reality",
  "url": "https://arcadehouston.com/games/engineerium",
  "provider": { "@type": "Organization", "name": "Zero Latency Webster, Houston", "url": "https://arcadehouston.com" },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "item": { "name": "Home", "id": "https://arcadehouston.com/" } },
    { "@type": "ListItem", "position": 2, "item": { "name": "Games", "id": "https://arcadehouston.com/games" } },
    { "@type": "ListItem", "position": 3, "item": { "name": "Engineerium", "id": "https://arcadehouston.com/games/engineerium" } },
  ],
};

const STATS = [
  { Icon: Users, label: "Players", value: "1–8" },
  { Icon: Clock, label: "Duration", value: "20 min" },
  { Icon: Zap, label: "Intensity", value: "Low" },
  { Icon: ShieldAlert, label: "Min Age", value: "10+" },
];

const GALLERY = [
  "/engineerium-final.webp",
  "/engineerium-intro.webp",
  "/engineerium-puzzles.webp",
  "/engineerium-upside.webp",
];

const FEATURES = [
  { img: "/engineerium-scenery.webp", title: "Large-Scale Environments", desc: "Players walk through environments that include colossal flying whales, floating geometric platforms, and sky structures that extend further than any physical space. The free-roam VR arena at Zero Latency Webster, Houston makes these spaces feel physically real." },
  { img: "/engineerium-curiosity.webp", title: "No Combat, No Pressure", desc: "Engineerium has no enemies, no health bars, and no failure states. Players aged 10 and up move at their own pace — looking around, walking toward interesting objects, and experiencing the environment without time pressure." },
  { img: "/engineerium-group.webp", title: "Works for Mixed Groups", desc: "Engineerium fits groups that include first-time VR players, younger players aged 10+, adults, and people who want a non-combat virtual reality session. All 1–8 players share the same environment at the same time." },
];

export default function EngineeriumPage() {
  const otherGames = allGames.filter(g => g.slug !== "engineerium");
  return (
    <>
      <Script id="game-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gameSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 pt-4 pb-2">
        <ol className="flex items-center gap-1 text-xs text-[#7DD3FC]/60">
          <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
          <li><ChevronRight size={12} /></li>
          <li><Link href="/games" className="hover:text-emerald-400 transition-colors">Games</Link></li>
          <li><ChevronRight size={12} /></li>
          <li className="text-emerald-400">Engineerium</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end pb-16">
        <Image src="/engineerium-hero-bg.webp" alt="Engineerium — family-friendly VR adventure at Zero Latency Webster, Houston" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000C1A] via-[#000C1A]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000C1A]/70 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 w-full">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold font-orbitron bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 uppercase tracking-widest">Family Adventure</span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold font-orbitron bg-white/5 border border-white/10 text-[#7DD3FC] uppercase tracking-widest">All Ages · No Combat</span>
          </div>
          <h1 className="font-orbitron text-5xl md:text-7xl font-black text-white leading-none">Engineerium</h1>
          <p className="mt-4 text-lg text-[#7DD3FC] max-w-xl">Zero Latency Webster, Houston's family-friendly free-roam VR game. No combat, no enemies. 1–8 players aged 10 and up walk through a world of flying whales and floating platforms in 20 minutes.</p>
          <div className="flex flex-wrap gap-3 mt-5 text-sm text-[#7DD3FC]/80">
            <span className="glass px-3 py-1 rounded-full border border-white/10">1–8 players</span>
            <span className="glass px-3 py-1 rounded-full border border-white/10">20 min</span>
            <span className="glass px-3 py-1 rounded-full border border-white/10">Age 10+</span>
          </div>
          <BookGameButton label="Book This Experience" source="game-hero" className="mt-6" />
        </div>
      </section>

      {/* Quick Stats Bar */}
      <div className="border-y border-emerald-800/30 bg-[#001225]/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-emerald-800/30">
            {STATS.map(({ Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3 px-4 py-5">
                <div className="w-9 h-9 rounded-lg bg-emerald-900/40 border border-emerald-700/30 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-emerald-400" />
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
      <section className="py-16 border-t border-emerald-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="font-orbitron text-xs tracking-[0.3em] text-emerald-400 uppercase mb-2">Official Trailer</p>
          <h2 className="font-orbitron text-2xl font-black text-white mb-8">Watch the <span className="text-emerald-400">Engineerium Trailer</span></h2>
          <VideoPlayer videoSrc="/engineerium-trailer.mp4" thumbnailSrc="/game-engineerium.webp" title="Engineerium — Official Trailer" />
        </div>
      </section>

      {/* About */}
      <section className="py-16 border-t border-emerald-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-start">
            <div>
              <p className="font-orbitron text-xs tracking-[0.3em] text-emerald-400 uppercase mb-3">About the Game</p>
              <h2 className="font-orbitron text-2xl md:text-3xl font-black text-white mb-6">Engineerium: <span className="text-emerald-400">No Combat, All Exploration</span></h2>
              <div className="space-y-4 text-[#7DD3FC] leading-relaxed text-sm">
                <p>Engineerium at Zero Latency Webster, Houston is a no-combat free-roam VR game for 1–8 players aged 10 and older. The 20-minute session takes place in a large-scale virtual reality world featuring colossal flying whales, floating geometric platforms, and sky structures that players walk through physically in the free-roam arena. There are no enemies, no objectives to fail, and no time pressure — the game is built entirely around exploration and visual scale.</p>
                <p>Engineerium is the game Zero Latency Webster, Houston recommends for first-time VR players, families with children aged 10 and older, and groups that include people who prefer non-combat virtual reality. All players share the same 20-minute session in the same environment, so a group of 4 players aged 10–60 can experience the same world together without one member being left out due to age or comfort level.</p>
                <p>Engineerium pairs well with Singularity as a two-game family session at Zero Latency Webster, Houston — both run without combat and both work for the same age range. Together they cover about 50 minutes of total play time across two very different environments. If your group includes younger players or anyone new to VR in Houston, Texas, starting with Engineerium before a more active title gives everyone a comfortable introduction to the free-roam format.</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="font-orbitron text-[9px] tracking-widest text-[#7DD3FC]/50 uppercase mb-4">Game Details</p>
              {[
                { label: "Genre", value: "Family Adventure" },
                { label: "Players", value: "1–8" },
                { label: "Duration", value: "20 minutes" },
                { label: "Intensity", value: "Low" },
                { label: "Age Minimum", value: "10+" },
                { label: "Combat", value: "None" },
                { label: "VR Style", value: "Free-Roam" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center px-4 py-3 rounded-xl border border-emerald-800/20 bg-emerald-900/5">
                  <span className="text-[#7DD3FC]/60 text-xs font-orbitron">{label}</span>
                  <span className="font-orbitron text-sm font-bold text-white">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 border-t border-emerald-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="font-orbitron text-xs tracking-[0.3em] text-emerald-400 uppercase mb-3">Screenshots</p>
          <h2 className="font-orbitron text-2xl font-black text-white mb-6">Engineerium <span className="text-emerald-400">Screenshots</span></h2>
          <div className="grid grid-cols-2 gap-3">
            {GALLERY.map((src, i) => (
              <div key={i} className="relative aspect-video rounded-xl overflow-hidden">
                <Image src={src} alt={`Engineerium screenshot ${i + 1}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 border-t border-emerald-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="font-orbitron text-xs tracking-[0.3em] text-emerald-400 uppercase mb-3">Highlights</p>
          <h2 className="font-orbitron text-2xl font-black text-white mb-8">What Engineerium <span className="text-emerald-400">Offers</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f, i) => (
              <div key={f.title} className="relative overflow-hidden rounded-2xl group border border-emerald-800/20 bg-emerald-900/5 hover:border-emerald-500/30 transition-colors">
                <div className={`relative ${i === 0 ? "h-72" : "h-60"}`}>
                  <Image src={f.img} alt={f.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000C1A]/90 via-[#000C1A]/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-orbitron text-sm font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">{f.title}</h3>
                    <p className="text-xs text-[#7DD3FC]/80 leading-relaxed">{f.desc}</p>
                  </div>
                  <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-emerald-500/60 rounded-tl-lg pointer-events-none" />
                  <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-emerald-500/60 rounded-tr-lg pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini CTA */}
      <section className="relative overflow-hidden py-14 mx-4 sm:mx-6 mb-12 rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-cyan-900/40 to-[#000C1A] rounded-2xl" />
        <div className="absolute inset-0 opacity-[0.04] rounded-2xl" style={{ backgroundImage: 'linear-gradient(rgba(52,211,153,1) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <p className="font-orbitron text-xs tracking-[0.3em] text-emerald-400 uppercase mb-3">Book a Session</p>
          <h2 className="font-orbitron text-2xl md:text-3xl font-black text-white mb-3">
            Book Engineerium at <span className="text-emerald-400">Zero Latency Webster, Houston</span>
          </h2>
          <p className="text-[#7DD3FC] text-sm mb-8">1–8 players. 20-minute no-combat free-roam VR session. Ages 10 and up. Available now in Houston, Texas — book your Engineerium session online.</p>
          <BookGameButton label="Book Engineerium" source="game-cta" />
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
