import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Arcade Houston | Best Arcades, VR, Games & Entertainment Guide (2026)",
  description: "Houston has 6 top arcades with 275+ games, free-roam VR, retro classics, and party venues. Cidercade charges $12 for all-day play. Zero Latency VR runs $35-50 per session. Complete guide to every arcade in Houston TX.",
  openGraph: {
    title: "Arcade Houston | Best Arcades, VR, Games & Entertainment Guide (2026)",
    description: "Houston has 6 top arcades with 275+ games, free-roam VR, retro classics, and party venues. Complete guide to every arcade in Houston TX.",
    url: "https://arcadehouston.com/",
    siteName: "Arcade Houston",
    images: [{ url: "https://arcadehouston.com/OG.jpg", width: 1200, height: 630, alt: "Arcade Houston — best arcades and VR gaming in Houston TX" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arcade Houston | Best Arcades, VR, Games & Entertainment Guide (2026)",
    description: "6 top arcades in Houston TX. Retro, VR, bar arcades, family gaming. Complete guide.",
    images: ["https://arcadehouston.com/OG.jpg"],
  },
  alternates: { canonical: "https://arcadehouston.com/" },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "What is the best arcade in Houston?",
    a: "Zero Latency Webster, Houston is the best arcade in Houston — rated 5.0 stars from 424+ Google reviews, the only free-roam VR arena in the city. 8 multiplayer VR games for 2–8 players, wireless backpacks, no cables. For traditional arcade machines, Cidercade has the most games (275+ on free play for $12). For retro gaming, The Game Preserve has pinball and classic cabinets. For food and sports, Dave & Buster's.",
  },
  {
    q: "What is the biggest arcade in Houston?",
    a: "Cidercade Houston has the most games at 275+. The Game Preserve NASA location in Webster has the largest floor space at 11,000 sq ft with 100+ retro games. Zero Latency Webster, Houston has a 2,000 sq ft VR arena dedicated to free-roam virtual reality.",
  },
  {
    q: "Are there arcades in Houston for adults?",
    a: "Yes. Zero Latency Webster, Houston is the top adult arcade — 8 VR games built for groups of adults, perfect for date nights, birthdays, and bachelor/bachelorette parties. Cidercade switches to 18+ at 9pm with a full craft beer and cider bar. Dave & Buster's has cocktails at every Houston location.",
  },
  {
    q: "Are there arcades in Houston for kids?",
    a: "Yes. The Game Preserve is family-oriented and allows all ages (under 16 must be with an adult). Cidercade is kid-friendly during daytime hours (18+ starts at 9pm). Zero Latency Webster, Houston has Engineerium, a non-combat VR game for ages 6 and up.",
  },
  {
    q: "How much does it cost to go to an arcade in Houston?",
    a: "Cidercade costs $12 for all-day free play on 275+ games. Game Preserve charges $15 for a day pass with unlimited play. Zero Latency Webster, Houston VR sessions run $35-50 per person for 30-50 minutes. Dave & Buster's uses a Power Card system where you load credits (prices vary by game).",
  },
  {
    q: "Is there a free-play arcade in Houston?",
    a: "Yes. Cidercade ($12 all-day) and The Game Preserve ($15 day pass) both set all games to free play — no tokens, no quarters, no Power Cards. Press start and play as many times as you want.",
  },
  {
    q: "What is free-roam VR?",
    a: "Free-roam VR is full-body virtual reality where players physically walk, run, and move through a large tracked space while wearing wireless headsets and backpacks. Zero Latency Webster, Houston operates a 2,000 sq ft free-roam VR arena where up to 8 players move together through virtual worlds with no cables attached.",
  },
  {
    q: "Can I host a birthday party at a Houston arcade?",
    a: "Yes. Every major Houston arcade offers party options. Zero Latency Webster, Houston has private arena sessions with a Game Master. Game Preserve rents a private party room for $250 (10 people, 2 hours). Cidercade has private party zones. Dave & Buster's has birthday packages with food and Power Card credits.",
  },
  {
    q: "Which Houston arcade has a bar?",
    a: "Cidercade Houston and Dave & Buster's both have full bars. Cidercade brews their own hard ciders and craft beers. Dave & Buster's serves classic cocktails and specialty drinks. Cidercade is 18+ after 9pm.",
  },
  {
    q: "Is Zero Latency Webster, Houston an arcade?",
    a: "Zero Latency Webster, Houston is a VR arcade — a free-roam virtual reality arena with 8 multiplayer games. Players wear wireless backpacks and VR headsets to physically move through a 2,000 sq ft space. Games include zombie survival, sci-fi missions, PvP esports, and family adventures for 2-8 players per session.",
  },
  {
    q: "Where is Cidercade Houston located?",
    a: "Cidercade Houston is at 2320 Canal St Suite 100 in East Downtown Houston (EaDo), near Daikin Park and Shell Energy Stadium.",
  },
  {
    q: "Do any Houston arcades have VR?",
    a: "Zero Latency Webster, Houston has the most advanced VR — wireless free-roam arena-scale virtual reality for up to 8 players. Dave & Buster's has some seated VR games on the Power Card system. AR Entertainment Hub in Baytown has a Valo Arena mixed-reality experience.",
  },
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EntertainmentBusiness"],
  "name": "Arcade Houston - Zero Latency VR",
  "image": "https://arcadehouston.com/OG.jpg",
  "url": "https://arcadehouston.com/",
  "telephone": "+14694049149",
  "email": "zero@zlwebster.com",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "424",
    "bestRating": "5",
    "worstRating": "1",
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 29.5377, "longitude": -95.1183 },
  "hasMap": "https://maps.google.com/?q=Zero+Latency+Houston",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "BayWay Village Shopping Center, 20801 Gulf Fwy suite 5",
    "addressLocality": "Webster",
    "addressRegion": "TX",
    "postalCode": "77598",
    "addressCountry": "US",
  },
  "areaServed": [
    { "@type": "GeoCircle", "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 29.5377, "longitude": -95.1183 }, "geoRadius": 80000 },
    { "@type": "City", "name": "Houston" },
    { "@type": "City", "name": "Clear Lake" },
    { "@type": "City", "name": "League City" },
    { "@type": "City", "name": "Pearland" },
    { "@type": "City", "name": "Friendswood" },
    { "@type": "City", "name": "Pasadena" },
    { "@type": "City", "name": "Sugar Land" },
    { "@type": "City", "name": "Katy" },
    { "@type": "City", "name": "The Woodlands" },
    { "@type": "City", "name": "Baytown" },
    { "@type": "City", "name": "La Porte" },
    { "@type": "City", "name": "Galveston" },
    { "@type": "City", "name": "Nassau Bay" },
    { "@type": "City", "name": "Seabrook" },
    { "@type": "City", "name": "Kemah" },
    { "@type": "AdministrativeArea", "name": "Harris County" },
    { "@type": "AdministrativeArea", "name": "Galveston County" },
    { "@type": "AdministrativeArea", "name": "Brazoria County" },
  ],
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday"], "opens": "15:00", "closes": "23:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Wednesday", "Thursday"], "opens": "14:00", "closes": "23:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Friday", "Saturday", "Sunday"], "opens": "11:00", "closes": "23:00" },
  ],
  "sameAs": [
    "https://www.facebook.com/zerolatencywebstr",
    "https://www.instagram.com/zerolatencywebstr",
    "https://www.tiktok.com/@zerolatencywebstr",
    "https://www.youtube.com/@ZeroLatencyWebster",
    "https://twitter.com/zlwebster",
  ],
  "potentialAction": { "@type": "ReserveAction", "target": "https://booking.zerolatencyvr.com/en/book-now/webster" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Arcade and Entertainment Hubs: A Comprehensive Guide",
  "description": "Houston has 6 major arcade venues covering retro free-play, VR arenas, and bar-cade concepts. This guide covers all arcades in Houston TX.",
  "url": "https://arcadehouston.com/",
  "publisher": { "@id": "https://arcadehouston.com/#organization" },
  "datePublished": "2026-03-01",
  "dateModified": "2026-03-25",
};

const venues = [
  { name: "★ Zero Latency Webster, Houston", address: "20801 Gulf Fwy Suite 5, Webster", price: "$35–50/session", bestFor: "VR, groups, immersion — #1 rated in Houston", featured: true },
  { name: "Cidercade Houston", address: "2320 Canal St Suite 100, EaDo", price: "$12 all-day", bestFor: "Most games, bar, food", featured: false },
  { name: "Game Preserve - NASA", address: "20810 Gulf Freeway Suite Z, Webster", price: "$15 day pass", bestFor: "Retro, pinball, families", featured: false },
  { name: "Game Preserve - Woodlands", address: "473 Sawdust Road, Spring", price: "$15 day pass", bestFor: "Retro, 125 games", featured: false },
  { name: "Dave & Buster's", address: "Multiple Houston locations", price: "Power Card (varies)", bestFor: "Food, sports, bar", featured: false },
  { name: "Great Wolf Lodge Arcade", address: "Webster, TX", price: "Credits (varies)", bestFor: "Hotel guests, families", featured: false },
  { name: "AR Entertainment Hub", address: "Baytown, TX", price: "Varies", bestFor: "Multi-activity, kids", featured: false },
];

const hours = [
  { venue: "Cidercade Houston", hours: "10am–Midnight daily. 18+ at 9pm. Kitchen closes 11:45pm." },
  { venue: "Game Preserve (both)", hours: "11am–12am daily" },
  { venue: "Dave & Buster's", hours: "Varies by location (typically 11am–midnight)" },
  { venue: "Zero Latency Webster, Houston", hours: "Mon–Tue 3–11pm, Wed–Thu 2–11pm, Fri–Sun 11am–11pm" },
  { venue: "Great Wolf Lodge Arcade", hours: "Check lodge hours" },
  { venue: "AR Entertainment Hub", hours: "Check website" },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-black to-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.15)_0%,transparent_70%)]" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 text-sm font-mono">
            Houston&apos;s #1 Rated Arcade — 5.0 ★ from 424+ Google Reviews
          </div>
          <h1 className="font-orbitron text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Arcade Houston
          </h1>
          <p className="text-xl text-gray-300 mb-3 max-w-2xl mx-auto">
            Zero Latency Webster, Houston is the city&apos;s #1 rated arcade — the only free-roam VR arena in Houston with 8 multiplayer games for 2–8 players. No cables. No fixed stations. Full-body VR.
          </p>
          <p className="text-base text-gray-400 mb-8 max-w-2xl mx-auto">
            This guide also covers every other Houston arcade: Cidercade, Game Preserve, Dave &amp; Buster&apos;s, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://booking.zerolatencyvr.com/en/book-now/webster"
              className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Book VR Session
            </a>
            <Link
              href="/arcades-in-houston"
              className="inline-block border border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-lg transition-colors"
            >
              Compare All Arcades
            </Link>
          </div>
        </div>
      </section>

      {/* Main pillar article */}
      <article className="max-w-4xl mx-auto px-4 py-16 text-gray-200">

        {/* H2: Find an Arcade Near You */}
        <section className="mb-16">
          <h2 className="font-orbitron text-3xl font-bold text-white mb-6">Find an Arcade Near You</h2>
          <p className="text-gray-300 mb-8">
            Houston has 7 arcade and entertainment venues, ranging from $12 all-day free play to $50 VR sessions. The right one depends on what you want: the most games, the most immersive experience, or the best bar scene.
          </p>
          <div className="overflow-x-auto rounded-lg border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-gray-400 uppercase text-xs tracking-wider">
                  <th className="text-left px-4 py-3">Venue</th>
                  <th className="text-left px-4 py-3">Location</th>
                  <th className="text-left px-4 py-3">Price</th>
                  <th className="text-left px-4 py-3">Best For</th>
                </tr>
              </thead>
              <tbody>
                {venues.map((v, i) => (
                  <tr key={i} className={`border-t border-white/5 ${v.featured ? "bg-cyan-500/10 border-l-2 border-l-cyan-500" : ""}`}>
                    <td className={`px-4 py-3 font-medium ${v.featured ? "text-cyan-400" : "text-white"}`}>{v.name}</td>
                    <td className="px-4 py-3 text-gray-400">{v.address}</td>
                    <td className={`px-4 py-3 font-bold ${v.featured ? "text-cyan-300" : "text-cyan-400"}`}>{v.price}</td>
                    <td className={`px-4 py-3 ${v.featured ? "text-white font-medium" : "text-gray-300"}`}>{v.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            <Link href="/arcades-in-houston" className="text-cyan-400 hover:underline">View detailed profiles for all 7 Houston arcades →</Link>
          </p>
        </section>

        {/* Featured: Zero Latency spotlight */}
        <section className="mb-16 rounded-2xl border-2 border-cyan-500/40 bg-cyan-950/20 overflow-hidden">
          {/* Top hero image */}
          <div className="relative w-full h-64 md:h-80">
            <Image
              src="/hero_img.webp"
              alt="Players in free-roam VR at Zero Latency Webster, Houston"
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000C1A] via-[#000C1A]/40 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
              <div className="inline-block px-2 py-0.5 rounded border border-cyan-500/50 bg-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
                Houston&apos;s #1 Rated Arcade
              </div>
              <div className="flex items-center gap-1.5 bg-black/60 rounded-lg px-3 py-1.5">
                <span className="text-yellow-400 text-sm">★★★★★</span>
                <span className="text-white text-xs font-bold">5.0</span>
                <span className="text-gray-400 text-xs">424+ reviews</span>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <h2 className="font-orbitron text-2xl font-bold text-white mb-3">
                  Zero Latency Webster, Houston
                </h2>
                <p className="text-gray-300 mb-4">
                  The only free-roam VR arcade in Houston. Players wear wireless backpacks and VR headsets and <strong className="text-white">physically walk through a 2,000 sq ft virtual world</strong> — no cables, no fixed stations. Up to 8 players share the same virtual space simultaneously. 8 games across zombie survival, sci-fi missions, PvP esports, and family adventures.
                </p>
                <ul className="space-y-1.5 mb-6">
                  {[
                    "5.0 stars from 424+ Google reviews — highest-rated arcade in Houston",
                    "8 multiplayer games — zombie survival, sci-fi, PvP, family, horror",
                    "2–8 players per session — the more players, the more immersive",
                    "Private arena booking for birthdays, corporate events, and parties",
                    "Game Masters guide every session — zero experience required",
                    "Webster TX, 20–30 min from most Houston neighborhoods",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-cyan-400 mt-0.5 shrink-0">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://booking.zerolatencyvr.com/en/book-now/webster"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-6 py-3 rounded-lg transition-colors text-sm text-center"
                  >
                    Book Your Session Now
                  </a>
                  <Link href="/experiences" className="inline-block border border-white/30 hover:border-white/60 text-white px-6 py-3 rounded-lg transition-colors text-sm text-center">
                    View All 8 Games
                  </Link>
                  <Link href="/arcades-in-houston#rank-1" className="inline-block text-cyan-400 hover:text-white px-6 py-3 transition-colors text-sm text-center">
                    Full Profile →
                  </Link>
                </div>
              </div>
              <div className="md:w-48 shrink-0 space-y-3">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 text-center">
                  {[
                    { num: "5.0★", label: "Google Rating" },
                    { num: "424+", label: "Reviews" },
                    { num: "8", label: "VR Games" },
                    { num: "2–8", label: "Players" },
                  ].map((stat, i) => (
                    <div key={i} className="rounded-xl border border-cyan-500/20 bg-cyan-900/20 p-3">
                      <div className="font-orbitron font-black text-xl text-cyan-400">{stat.num}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
                {/* Side image grid */}
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { src: "/outbreak-group-fun.webp", alt: "Group playing VR together" },
                    { src: "/pvp-experience.webp", alt: "PvP VR competition" },
                    { src: "/party.webp", alt: "Birthday party at Zero Latency" },
                    { src: "/post-game-group.jpg", alt: "Post-game group photo" },
                  ].map((img, i) => (
                    <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
                      <Image src={img.src} alt={img.alt} fill sizes="100px" className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* H2: Arcade Games, Attractions & Activities */}
        <section className="mb-16">
          <h2 className="font-orbitron text-3xl font-bold text-white mb-6">Arcade Games, Attractions, &amp; Activities</h2>

          {/* H3: Types of Arcade Games */}
          <div className="mb-12">
            <h3 className="font-orbitron text-2xl font-bold text-cyan-400 mb-6">Types of Arcade Games</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold text-white mb-3">Classic Arcade Games</h4>
                <p className="text-gray-300">
                  Pac-Man, Donkey Kong, Space Invaders, and Galaga are the cornerstones of the classic arcade. The Game Preserve has 100+ classic cabinets across their 2 Houston-area locations. Cidercade includes retro classics in their 275+ game library. These cabinets run original hardware, not emulators — the authentic coin-op experience.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-3">Midway Games</h4>
                <p className="text-gray-300">
                  Skee-ball, basketball shooters, Whac-A-Mole, and ring toss fall under the midway category. Cidercade has skee-ball showdowns and rhythm dance-offs. AR Entertainment Hub in Baytown has a full midway arcade section alongside their 72 games total. Dave &amp; Buster&apos;s has midway-style games on their Power Card system.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-3">Redemption Games</h4>
                <p className="text-gray-300">
                  Ticket-earning games and crane machines let players win prizes. Cidercade has instant-prize crane machines (pay-to-play, separate from admission). Dave &amp; Buster&apos;s entire model runs on ticket redemption through Power Card credits — you earn tickets, redeem them at the prize counter. AR Entertainment Hub has a full redemption store.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-3">Retro Games</h4>
                <p className="text-gray-300">
                  Pinball machines, classic fighting games, and racing cabinets define the retro gaming category. The Game Preserve specializes in retro with Adaptive Flipper Control (AFC) for accessible pinball play. Their Webster NASA location has 100+ retro machines in 11,000 sq ft. The Woodlands location has 125 games in 6,500 sq ft.
                </p>
                <Link href="/blog/retro-arcade-houston" className="text-cyan-400 hover:underline text-sm mt-2 inline-block">Read the retro arcade Houston guide →</Link>
              </div>
            </div>
          </div>

          {/* H3: VR Experiences */}
          <div className="mb-12">
            <h3 className="font-orbitron text-2xl font-bold text-cyan-400 mb-6">VR Experiences</h3>
            <p className="text-gray-300 mb-8">
              Houston has one dedicated free-roam VR arcade: Zero Latency Webster, Houston in Webster. It operates a 2,000 sq ft wireless VR arena with 8 multiplayer games for 2–8 players. This is the most immersive arcade experience available in the Houston metro area.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  title: "Full-Body Movement VR",
                  body: "Zero Latency Webster, Houston's 2,000 sq ft arena tracks every player's movements in real time. Players walk, run, crouch, and dodge — no cables, no fixed stations, no tethers. 8 players move simultaneously through the same physical space.",
                  link: null,
                },
                {
                  title: "Wireless VR",
                  body: "Every player wears a wireless backpack computer and VR headset. The backpack carries its own processing unit — no cables run to external machines. Sub-millisecond tracking keeps the virtual world locked to each player.",
                  link: null,
                },
                {
                  title: "Zero Latency Tech",
                  body: "Zero Latency is the world's largest free-roam VR platform, operating in 50+ countries. Precision tracking cameras, spatial audio, custom avatars, and real-time multiplayer for 8 simultaneous players.",
                  link: null,
                },
                {
                  title: "PvP Esports VR",
                  body: "Sol Raiders splits 4–8 players into 2 rival squads for objective-based combat. No scripts, no AI enemies — human vs human only. The most competitive VR format available in Houston.",
                  link: { href: "/games/sol-raiders", label: "View Sol Raiders →" },
                },
              ].map((card, i) => (
                <div key={i} className="border border-white/10 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-white mb-3">{card.title}</h4>
                  <p className="text-gray-400 text-sm mb-2">{card.body}</p>
                  {card.link && <Link href={card.link.href} className="text-cyan-400 hover:underline text-sm">{card.link.label}</Link>}
                </div>
              ))}
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-white mb-3">Zombie Survival VR</h4>
                <p className="text-gray-300">
                  2 games: Outbreak and Undead Arena. Outbreak puts 2–8 players in post-apocalyptic streets fighting coordinated zombie hordes with shared ammo pools. 30-minute sessions. Undead Arena is wave-based with competitive scoring.
                </p>
                <div className="flex gap-4 mt-2">
                  <Link href="/games/outbreak" className="text-cyan-400 hover:underline text-sm">Outbreak →</Link>
                  <Link href="/games/undead-arena" className="text-cyan-400 hover:underline text-sm">Undead Arena →</Link>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-3">Sci-Fi Missions VR</h4>
                <p className="text-gray-300">
                  2 games: Space Marine VR (Warhammer 40,000) and Singularity. Teams of 2–8 breach alien space stations for up to 45-minute sessions. Singularity is non-violent — navigate a rogue AI space station through puzzle-solving and exploration.
                </p>
                <div className="flex gap-4 mt-2">
                  <Link href="/games/space-marine-vr" className="text-cyan-400 hover:underline text-sm">Space Marine VR →</Link>
                  <Link href="/games/singularity" className="text-cyan-400 hover:underline text-sm">Singularity →</Link>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-3">Family Adventures VR</h4>
                <p className="text-gray-300">
                  Engineerium is for ages 6+. No combat, no time pressure, no enemies. Players explore impossible geometric structures in a non-violent abstract world. The right choice for first-time VR players and families with younger children.
                </p>
                <Link href="/games/engineerium" className="text-cyan-400 hover:underline text-sm mt-2 inline-block">View Engineerium →</Link>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/experiences" className="inline-block border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black px-6 py-3 rounded-lg transition-colors font-medium">
                View All VR Experiences
              </Link>
            </div>
          </div>

          {/* H3: Indoor Playground + Other Activities */}
          <div className="mb-8">
            <h3 className="font-orbitron text-2xl font-bold text-cyan-400 mb-6">Other Activities</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Roller Skating", desc: "AR Entertainment Hub in Baytown offers roller skating alongside their 72 arcade games." },
                { title: "Laser Tag", desc: "AR Entertainment Hub has laser tag arenas. Zero Latency's Sol Raiders VR offers a more immersive version of team combat." },
                { title: "Bar Area Games", desc: "Cidercade Houston is the top arcade bar — hard ciders and craft beers brewed in-house, 18+ after 9pm. Dave & Buster's has cocktails at every location." },
                { title: "Bowling", desc: "AR Entertainment Hub offers bowling. Unreal XR Bowling adds augmented reality graphics to the lanes." },
                { title: "Black Light Mini Golf", desc: "AR Entertainment Hub in Baytown has an 18-hole black light mini golf course." },
                { title: "Escape Rooms", desc: "AR Entertainment Hub offers live escape room experiences." },
                { title: "Valo Arena", desc: "AR Entertainment Hub has a Valo Arena — a team-based mixed-reality gaming experience." },
                { title: "Soft Play Indoor Playground", desc: "AR Entertainment Hub has a soft play area for younger children. Great Wolf Lodge combines waterpark and arcade for families." },
              ].map((item, i) => (
                <div key={i} className="border border-white/10 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex gap-4 text-sm">
              <Link href="/blog/arcades-in-houston-for-kids" className="text-cyan-400 hover:underline">Kid-friendly arcade guide →</Link>
              <Link href="/blog/arcade-bar-houston" className="text-cyan-400 hover:underline">Arcade bar Houston guide →</Link>
            </div>
          </div>
        </section>

        {/* H2: Planning Your Visit */}
        <section className="mb-16">
          <h2 className="font-orbitron text-3xl font-bold text-white mb-6">Planning Your Visit</h2>

          <div className="mb-10">
            <h3 className="font-orbitron text-2xl font-bold text-cyan-400 mb-4">Admission &amp; Pricing</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div className="border border-white/10 rounded-lg p-6">
                <h4 className="text-xl font-bold text-white mb-3">Day Pass</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li><strong className="text-white">Game Preserve:</strong> $15 — unlimited play all day. All 100+ games set to free play. No tokens, no quarters.</li>
                  <li><strong className="text-white">Cidercade:</strong> $12 — all-day access to 275+ games on free play. Crane machines cost extra.</li>
                  <li><strong className="text-white">Zero Latency Webster, Houston:</strong> $35–50 per person. 30–50 minute sessions. 8 games to choose from.</li>
                </ul>
              </div>
              <div className="border border-white/10 rounded-lg p-6">
                <h4 className="text-xl font-bold text-white mb-3">Group Rate</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li><strong className="text-white">Game Preserve:</strong> $10/person for groups of 15 or more.</li>
                  <li><strong className="text-white">Zero Latency:</strong> Groups larger than 8 rotate through back-to-back sessions. Contact for group rates.</li>
                  <li><strong className="text-white">Dave &amp; Buster&apos;s:</strong> 25% more gameplay with $1,000+ group event bookings.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="font-orbitron text-2xl font-bold text-cyan-400 mb-4">Memberships &amp; Parties</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="border border-white/10 rounded-lg p-5">
                <h4 className="font-bold text-white mb-1">Individual Recurring Plan</h4>
                <p className="text-cyan-400 text-xl font-bold mb-2">$30/mo</p>
                <p className="text-gray-400 text-sm">Game Preserve membership. Both locations. 5 free guest passes/month. 2-month minimum.</p>
              </div>
              <div className="border border-white/10 rounded-lg p-5">
                <h4 className="font-bold text-white mb-1">Family Recurring Plan</h4>
                <p className="text-cyan-400 text-xl font-bold mb-2">$60/mo</p>
                <p className="text-gray-400 text-sm">Game Preserve. Covers all immediate family. Both locations. 10 guest passes/month.</p>
              </div>
              <div className="border border-white/10 rounded-lg p-5">
                <h4 className="font-bold text-white mb-1">Private Party Room</h4>
                <p className="text-cyan-400 text-xl font-bold mb-2">from $250</p>
                <p className="text-gray-400 text-sm">Game Preserve: 2 hours, 10 people, outside food welcome. $100 deposit required.</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Zero Latency Webster, Houston offers private VR arena sessions for birthdays, corporate events, and bachelor parties.{" "}
              <Link href="/private-events" className="text-cyan-400 hover:underline">View private event packages →</Link>
            </p>
          </div>

          <div className="mb-10">
            <h3 className="font-orbitron text-2xl font-bold text-cyan-400 mb-4">Events &amp; Specials</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-lg font-bold text-white mb-3">Birthday Specials</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li><strong className="text-white">Zero Latency Webster, Houston:</strong> Private arena session, dedicated Game Master.</li>
                  <li><strong className="text-white">Cidercade:</strong> Party zones with all-day free play.</li>
                  <li><strong className="text-white">Game Preserve:</strong> $250 private room with 10 people included.</li>
                  <li><strong className="text-white">Dave &amp; Buster&apos;s:</strong> Birthday packages with Power Card credits and reserved seating.</li>
                </ul>
                <Link href="/blog/houston-arcade-birthday-party-guide" className="text-cyan-400 hover:underline text-sm mt-3 inline-block">Full birthday party guide →</Link>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-3">Company Events</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li><strong className="text-white">Zero Latency:</strong> Co-op missions and PvP tournaments for team building. Game Masters facilitate everything.</li>
                  <li><strong className="text-white">Dave &amp; Buster&apos;s:</strong> Private meeting rooms. 25% more gameplay on group event bookings.</li>
                  <li><strong className="text-white">Cidercade:</strong> Full-arcade takeovers for large groups.</li>
                </ul>
                <Link href="/blog/team-building-activities-houston" className="text-cyan-400 hover:underline text-sm mt-3 inline-block">Team building guide →</Link>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border border-white/10 rounded-lg p-5">
                <h4 className="font-bold text-white mb-2">Extra Play Monday — Game Preserve</h4>
                <p className="text-gray-400 text-sm">Game Preserve runs Extra Play Monday specials at both the Woodlands and NASA locations.</p>
              </div>
              <div className="border border-white/10 rounded-lg p-5">
                <h4 className="font-bold text-white mb-2">UFC Fight Night: Adesanya vs Pyfer — Dave &amp; Buster&apos;s</h4>
                <p className="text-gray-400 text-sm">Dave &amp; Buster&apos;s shows UFC fights on large HDTVs. Check their website for upcoming cards and cover fees by location.</p>
              </div>
              <div className="border border-white/10 rounded-lg p-5">
                <h4 className="font-bold text-white mb-2">Game of the Week — Dave &amp; Buster&apos;s</h4>
                <p className="text-gray-400 text-sm">Dave &amp; Buster&apos;s features weekly sports viewing events with food and drink specials.</p>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="font-orbitron text-2xl font-bold text-cyan-400 mb-4">Food &amp; Drink</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-bold text-white mb-3">Award-Winning Food</h4>
                <p className="text-gray-300 text-sm mb-2">
                  Dave &amp; Buster&apos;s has a seasonal menu: smashed burgers, flatbreads, wings, and chicken strips. Their Eat &amp; Play Combo bundles a meal with $10 in Power Card credits from $19.99.
                </p>
                <p className="text-gray-300 text-sm">
                  Cidercade makes hand-crafted 12-inch artisan thin-crust pizzas in a rotary stone hearth oven. It&apos;s the best food of any Houston arcade.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-3">Drinks</h4>
                <p className="text-gray-300 text-sm mb-2">
                  Cidercade brews their own hard ciders and craft beers — dozens on tap. Unlimited soda for $4.
                </p>
                <p className="text-gray-300 text-sm">
                  Dave &amp; Buster&apos;s serves classic cocktails and specialty drinks. Leave Your Tastebuds Feeling Victorious with their gameday menu: wings, burgers, flatbreads.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-orbitron text-2xl font-bold text-cyan-400 mb-4">Tips for a Great Experience</h3>
            <ul className="space-y-3">
              {[
                { title: "Get Powered Up Before You Come In", tip: "Dave & Buster's: load your Power Card through the D&B Rewards App before arriving to skip kiosk lines." },
                { title: "Load Your Power Card", tip: "Download the Dave & Buster's app for digital card management, or grab a physical card at the front desk." },
                { title: "Don't Leave Yourself Unseated", tip: "Cidercade gets busy on weekends — book a dinner table in advance. Zero Latency: book your VR session online for Fridays and Saturdays." },
                { title: "Know the Age Policies", tip: "Cidercade is 18+ at 9pm. Game Preserve: under 16 needs an adult. Zero Latency: ages 13+ for most games, 6+ for Engineerium." },
                { title: "Arrive Early for VR", tip: "At Zero Latency Webster, Houston, arrive 10–15 minutes before your session. Wear comfortable closed-toe shoes." },
              ].map((item, i) => (
                <li key={i} className="border border-white/10 rounded-lg p-4 list-none">
                  <strong className="text-white">{item.title}: </strong>
                  <span className="text-gray-300 text-sm">{item.tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* H2: Additional Information */}
        <section className="mb-16">
          <h2 className="font-orbitron text-3xl font-bold text-white mb-6">Additional Information</h2>

          <div className="mb-10">
            <h3 className="font-orbitron text-xl font-bold text-cyan-400 mb-4">Hours</h3>
            <div className="border border-white/10 rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-white/5 text-gray-400 uppercase text-xs tracking-wider">
                    <th className="text-left px-4 py-3">Venue</th>
                    <th className="text-left px-4 py-3">Hours</th>
                  </tr>
                </thead>
                <tbody>
                  {hours.map((h, i) => (
                    <tr key={i} className="border-t border-white/5">
                      <td className="px-4 py-3 font-medium text-white">{h.venue}</td>
                      <td className="px-4 py-3 text-gray-300">{h.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="font-orbitron text-xl font-bold text-cyan-400 mb-4">Location</h3>
            <p className="text-gray-300 mb-3">
              Zero Latency Webster, Houston is at BayWay Village Shopping Center, 20801 Gulf Fwy Suite 5, Webster, TX 77598. Ample free parking on site.
            </p>
            <p className="text-gray-400 text-sm mb-3">
              The venue serves Houston, Clear Lake, League City, Pearland, Friendswood, Pasadena, Sugar Land, Katy, The Woodlands, Baytown, La Porte, Galveston, Nassau Bay, Seabrook, and Kemah — covering Harris, Galveston, and Brazoria counties.
            </p>
            <Link href="/contact-us" className="text-cyan-400 hover:underline text-sm">Get directions and contact info →</Link>
          </div>

          <div className="mb-10">
            <h3 className="font-orbitron text-xl font-bold text-cyan-400 mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-white/10 rounded-lg p-5">
                  <h4 className="font-bold text-white mb-2">{faq.q}</h4>
                  <p className="text-gray-300 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border border-white/10 rounded-lg p-5">
              <h3 className="font-orbitron text-lg font-bold text-cyan-400 mb-3">Careers</h3>
              <p className="text-gray-300 text-sm mb-3">
                Houston arcades hire game attendants, Game Masters, and front-of-house staff. Zero Latency Webster, Houston is hiring Game Masters and team members.
              </p>
              <Link href="/contact-us" className="text-cyan-400 hover:underline text-sm">Contact us about openings →</Link>
            </div>
            <div className="border border-white/10 rounded-lg p-5">
              <h3 className="font-orbitron text-lg font-bold text-cyan-400 mb-3">Gift Cards &amp; Vouchers</h3>
              <p className="text-gray-300 text-sm mb-3">
                Game Preserve sells gift cards for memberships and merchandise. Dave &amp; Buster&apos;s Power Card gift cards available in-store and online. Zero Latency Webster, Houston VR gift vouchers cover any session for 2–8 players and never expire.
              </p>
              <a href="https://booking.zerolatencyvr.com/en/book-now/webster" className="text-cyan-400 hover:underline text-sm">Buy VR gift vouchers →</a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center border border-cyan-500/30 rounded-2xl p-10 bg-cyan-500/5">
          <h2 className="font-orbitron text-2xl font-bold text-white mb-4">Book the Best VR Arcade in Houston</h2>
          <p className="text-gray-300 mb-6 max-w-lg mx-auto">
            Zero Latency Webster, Houston at Arcade Houston is the city&apos;s only free-roam VR arena. 8 games, 2–8 players, wireless — no cables. Sessions fill fast on weekends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://booking.zerolatencyvr.com/en/book-now/webster"
              className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Book Your Session
            </a>
            <Link
              href="/arcades-in-houston"
              className="inline-block border border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-lg transition-colors"
            >
              Compare All Houston Arcades
            </Link>
          </div>
        </section>

      </article>
    </>
  );
}
