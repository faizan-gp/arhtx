import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { allGames } from "@/lib/gamesData";
import BookGameButton from "@/components/BookBtn";

export const metadata: Metadata = {
  title: "VR Games Houston | Zero Latency Houston — 8 Free-Roam Games",
  description: "Zero Latency Houston offers 8 free-roam VR games for groups of 2 to 8 players — zombie survival, sci-fi wave defense, PvP esports, horror, family exploration, and tropical action. Book in Houston TX.",
  alternates: { canonical: "https://zerolatencyhouston.com/games" },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "item": { "name": "Home", "id": "https://zerolatencyhouston.com/" } },
    { "@type": "ListItem", "position": 2, "item": { "name": "Games", "id": "https://zerolatencyhouston.com/games" } },
  ],
};

export default function GamesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="font-orbitron text-4xl md:text-5xl font-black text-white">Zero Latency Houston <span className="text-stroke-cyan">Game Library</span></h1>
            <p className="mt-4 max-w-2xl mx-auto text-[#7DD3FC] text-base">8 free-roam VR games available at Zero Latency Houston for groups of 2 to 8 players — including zombie survival, Warhammer 40K, PvP esports, horror, and family exploration.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {allGames.map((game, i) => (
              <Link key={game.slug} href={`/games/${game.slug}`} className="group block glass rounded-2xl overflow-hidden hover:border-cyan-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/20">
                <div className="relative aspect-square">
                  <Image src={game.imageSrc} alt={game.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" priority={i === 0} className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000C1A] via-[#000C1A]/30 to-transparent" />
                </div>
                <div className="p-4">
                  <h2 className="font-orbitron text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">{game.title}</h2>
                  <p className="mt-1 text-xs text-[#7DD3FC]/60">Free-roam VR · Zero Latency Houston</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-14">
            <p className="text-[#7DD3FC] mb-4">Not sure which game to pick? Zero Latency Houston's Game Masters will match your group to the right session before you step in.</p>
            <BookGameButton label="Book at Zero Latency Houston" source="games-listing" />
          </div>
        </div>
      </section>
    </>
  );
}
