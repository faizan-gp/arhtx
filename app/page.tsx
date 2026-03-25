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

      {/* Hero — full-height with background image */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/hero_img.webp"
          alt="Free-roam VR arena at Zero Latency Webster, Houston"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay layers */}
        <div className="absolute inset-0 bg-[#000C1A]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000C1A]/30 via-transparent to-[#000C1A]" />
        {/* Cyan radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.18)_0%,transparent_65%)]" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-24">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-cyan-500/50 bg-cyan-500/10 backdrop-blur-sm">
            <span className="text-yellow-400 text-sm">★★★★★</span>
            <span className="text-cyan-300 text-sm font-mono">5.0 · 424+ Google Reviews · Houston&apos;s #1 Rated Arcade</span>
          </div>

          <h1 className="font-orbitron text-5xl md:text-7xl font-black text-white mb-6 leading-[1.05] tracking-tight">
            Arcade<br className="md:hidden" />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">Houston</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-3 max-w-2xl mx-auto font-light leading-relaxed">
            Zero Latency Webster is Houston&apos;s only free-roam VR arena — 8 multiplayer games, wireless backpacks, 2,000 sq ft. No cables.
          </p>
          <p className="text-base text-gray-400 mb-10 max-w-xl mx-auto">
            Plus every other Houston arcade reviewed: Cidercade, Game Preserve, Dave &amp; Buster&apos;s, and more.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://booking.zerolatencyvr.com/en/book-now/webster"
              className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 active:scale-95 text-black font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/25 text-base"
            >
              Book VR Session
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </a>
            <Link
              href="/arcades-in-houston"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 hover:bg-white/5 text-white px-8 py-4 rounded-xl transition-all duration-200 text-base"
            >
              Compare All 7 Arcades
            </Link>
          </div>

          {/* Trust strip */}
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
            {[
              { icon: "🏆", text: "#1 Rated in Houston" },
              { icon: "🎮", text: "8 VR Games" },
              { icon: "👥", text: "2–8 Players" },
              { icon: "📍", text: "Webster, TX" },
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 text-xs animate-bounce">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-cyan-950/40 border-y border-cyan-900/40 py-5">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { num: "5.0★", label: "Google Rating" },
              { num: "424+", label: "Verified Reviews" },
              { num: "8", label: "VR Games" },
              { num: "2–8", label: "Players / Session" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-orbitron font-black text-2xl text-cyan-400">{stat.num}</span>
                <span className="text-xs text-gray-400 mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main pillar article */}
      <article className="max-w-4xl mx-auto px-4 py-16 text-gray-200">

        {/* H2: Find an Arcade Near You */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest">Houston Arcade Guide</span>
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mt-2 mb-3">Find an Arcade Near You</h2>
            <p className="text-gray-400 max-w-2xl">
              Houston has 7 arcade and entertainment venues, from $12 all-day free play to $50 VR sessions. The right one depends on what you want: most games, most immersive, or best bar scene.
            </p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-white/10 shadow-xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/5 text-gray-400 uppercase text-xs tracking-wider border-b border-white/10">
                  <th className="text-left px-5 py-3.5">Venue</th>
                  <th className="text-left px-5 py-3.5 hidden sm:table-cell">Location</th>
                  <th className="text-left px-5 py-3.5">Price</th>
                  <th className="text-left px-5 py-3.5 hidden md:table-cell">Best For</th>
                </tr>
              </thead>
              <tbody>
                {venues.map((v, i) => (
                  <tr
                    key={i}
                    className={`border-t border-white/5 transition-colors hover:bg-white/3 ${
                      v.featured
                        ? "bg-gradient-to-r from-cyan-500/10 to-transparent border-l-2 border-l-cyan-500"
                        : ""
                    }`}
                  >
                    <td className={`px-5 py-3.5 font-medium ${v.featured ? "text-cyan-400" : "text-white"}`}>
                      {v.featured && <span className="mr-1 text-yellow-400 text-xs">★</span>}
                      {v.name.replace("★ ", "")}
                    </td>
                    <td className="px-5 py-3.5 text-gray-400 hidden sm:table-cell">{v.address}</td>
                    <td className={`px-5 py-3.5 font-bold tabular-nums ${v.featured ? "text-cyan-300" : "text-cyan-400/80"}`}>{v.price}</td>
                    <td className={`px-5 py-3.5 hidden md:table-cell ${v.featured ? "text-white font-medium" : "text-gray-400"}`}>{v.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
            <span>★ Editor&apos;s pick</span>
            <Link href="/arcades-in-houston" className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1">
              Full profiles for all 7 arcades
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </section>

        {/* Featured: Zero Latency spotlight */}
        <section className="mb-20 rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl shadow-cyan-950/50">
          {/* Top hero image */}
          <div className="relative w-full h-72 md:h-96">
            <Image
              src="/hero_img.webp"
              alt="Players in free-roam VR at Zero Latency Webster, Houston"
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000C1A] via-[#000C1A]/20 to-transparent" />
            <div className="absolute top-4 left-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/50 bg-black/60 backdrop-blur-sm text-cyan-400 text-xs font-mono uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Houston&apos;s #1 Rated Arcade
              </span>
            </div>
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
              <div>
                <h2 className="font-orbitron text-2xl md:text-3xl font-black text-white drop-shadow-lg">
                  Zero Latency Webster, Houston
                </h2>
                <p className="text-gray-300 text-sm mt-1">The only free-roam VR arena in Houston</p>
              </div>
              <div className="flex items-center gap-1.5 bg-black/70 backdrop-blur-sm rounded-xl px-3 py-2 shrink-0">
                <span className="text-yellow-400 text-sm leading-none">★★★★★</span>
                <div>
                  <div className="text-white text-sm font-bold leading-none">5.0</div>
                  <div className="text-gray-400 text-xs leading-none mt-0.5">424+ reviews</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-[#000C1A] to-[#001525] p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1 min-w-0">
                <p className="text-gray-300 mb-5 leading-relaxed">
                  Players wear wireless backpacks and VR headsets and <strong className="text-white">physically walk through a 2,000 sq ft virtual world</strong> — no cables, no fixed stations. Up to 8 players share the same virtual space simultaneously across 8 different games.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "5.0 stars from 424+ Google reviews — highest-rated arcade in Houston",
                    "8 multiplayer games — zombie survival, sci-fi, PvP, family, horror",
                    "2–8 players per session — more players = more immersive",
                    "Private arena booking for birthdays, corporate events, and parties",
                    "Game Masters guide every session — zero experience required",
                    "Webster TX — 20–30 min from most Houston neighborhoods",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://booking.zerolatencyvr.com/en/book-now/webster"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 active:scale-95 text-black font-bold px-6 py-3 rounded-xl transition-all duration-200 text-sm shadow-lg shadow-cyan-500/20"
                  >
                    Book Your Session Now
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </a>
                  <Link href="/experiences" className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-6 py-3 rounded-xl transition-all duration-200 text-sm">
                    View All 8 Games
                  </Link>
                  <Link href="/arcades-in-houston#rank-1" className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 px-3 py-3 transition-colors text-sm">
                    Full Profile →
                  </Link>
                </div>
              </div>

              <div className="md:w-52 shrink-0 space-y-3">
                {/* Side image grid */}
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { src: "/outbreak-group-fun.webp", alt: "Group playing VR together" },
                    { src: "/pvp-experience.webp", alt: "PvP VR competition" },
                    { src: "/party.webp", alt: "Birthday party at Zero Latency" },
                    { src: "/post-game-group.jpg", alt: "Post-game group photo" },
                  ].map((img, i) => (
                    <div key={i} className="relative aspect-square rounded-lg overflow-hidden ring-1 ring-white/10">
                      <Image src={img.src} alt={img.alt} fill sizes="110px" className="object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                  ))}
                </div>
                {/* Quick facts */}
                <div className="rounded-xl border border-cyan-900/40 bg-cyan-950/30 p-4 space-y-2">
                  {[
                    { label: "Price", value: "$35–50 / person" },
                    { label: "Duration", value: "30–50 min" },
                    { label: "Min Age", value: "6+ (13+ most games)" },
                    { label: "Location", value: "Webster, TX" },
                  ].map((f, i) => (
                    <div key={i} className="flex justify-between text-xs">
                      <span className="text-gray-500">{f.label}</span>
                      <span className="text-white font-medium">{f.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* H2: Arcade Games, Attractions & Activities */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest">What to Play</span>
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mt-2">Arcade Games, Attractions, &amp; Activities</h2>
          </div>

          {/* H3: Types of Arcade Games */}
          <div className="mb-12">
            <h3 className="font-orbitron text-xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-cyan-700" />
              Types of Arcade Games
            </h3>
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
            <h3 className="font-orbitron text-xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-cyan-700" />
              VR Experiences
            </h3>

            {/* Arena banner */}
            <div className="relative w-full h-52 md:h-64 rounded-2xl overflow-hidden mb-8">
              <Image
                src="/venue-arena.webp"
                alt="Inside the Zero Latency free-roam VR arena in Webster, Houston"
                fill
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#000C1A]/80 via-[#000C1A]/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center px-8">
                <p className="text-cyan-400 text-xs font-mono uppercase tracking-widest mb-2">Free-Roam VR Arena · Webster, TX</p>
                <p className="text-white text-xl md:text-2xl font-bold max-w-sm leading-snug">
                  2,000 sq ft · Wireless · 8 Players · No Cables
                </p>
                <p className="text-gray-300 text-sm mt-2 max-w-xs">
                  Houston&apos;s only free-roam VR arcade — the most immersive experience in the metro area.
                </p>
              </div>
            </div>

            {/* 4 tech feature cards with images */}
            <div className="grid md:grid-cols-2 gap-5 mb-10">
              {[
                {
                  title: "Full-Body Movement VR",
                  body: "Zero Latency Webster, Houston's 2,000 sq ft arena tracks every player's movements in real time. Players walk, run, crouch, and dodge — no cables, no fixed stations. 8 players move simultaneously.",
                  img: "/outbreak-group-fun.webp",
                  imgAlt: "Players in full-body VR at Zero Latency",
                  link: null,
                },
                {
                  title: "Wireless VR",
                  body: "Every player wears a wireless backpack computer and VR headset. No cables to external machines — sub-millisecond tracking keeps the virtual world locked to each player.",
                  img: "/player-vr-weapon.webp",
                  imgAlt: "Player wearing wireless VR backpack headset",
                  link: null,
                },
                {
                  title: "Zero Latency Tech",
                  body: "Zero Latency is the world's largest free-roam VR platform, operating in 50+ countries. Precision cameras, spatial audio, custom avatars, and real-time multiplayer for 8 simultaneous players.",
                  img: "/arena-action.jpg",
                  imgAlt: "Zero Latency VR arena action",
                  link: null,
                },
                {
                  title: "PvP Esports VR",
                  body: "Sol Raiders splits 4–8 players into 2 rival squads for objective-based combat. No AI enemies — human vs human only. The most competitive VR format in Houston.",
                  img: "/pvp-experience.webp",
                  imgAlt: "PvP VR esports at Zero Latency Sol Raiders",
                  link: { href: "/games/sol-raiders", label: "View Sol Raiders →" },
                },
              ].map((card, i) => (
                <div key={i} className="border border-white/10 rounded-xl overflow-hidden group hover:border-cyan-500/30 transition-colors">
                  <div className="relative w-full h-40">
                    <Image
                      src={card.img}
                      alt={card.imgAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 448px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000C1A] via-[#000C1A]/20 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h4 className="text-base font-bold text-white mb-2">{card.title}</h4>
                    <p className="text-gray-400 text-sm mb-3 leading-relaxed">{card.body}</p>
                    {card.link && (
                      <Link href={card.link.href} className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors">
                        {card.link.label}
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Game categories — image beside text */}
            <div className="space-y-5">
              {[
                {
                  category: "Zombie Survival",
                  title: "Zombie Survival VR",
                  body: "2 games: Outbreak and Undead Arena. Outbreak puts 2–8 players in post-apocalyptic streets fighting coordinated zombie hordes with shared ammo pools. 30-min sessions. Undead Arena is wave-based with competitive scoring.",
                  img: "/zombie-experience.webp",
                  imgAlt: "Zombie survival VR game at Zero Latency",
                  links: [
                    { href: "/games/outbreak", label: "Outbreak →" },
                    { href: "/games/undead-arena", label: "Undead Arena →" },
                  ],
                  color: "from-red-900/20",
                },
                {
                  category: "Sci-Fi Missions",
                  title: "Sci-Fi Missions VR",
                  body: "2 games: Space Marine VR (Warhammer 40,000) and Singularity. Teams of 2–8 breach alien space stations for up to 45-min sessions. Singularity is non-violent — navigate a rogue AI space station through puzzle-solving and exploration.",
                  img: "/Sci-fi.webp",
                  imgAlt: "Sci-fi VR missions Space Marine Singularity",
                  links: [
                    { href: "/games/space-marine-vr", label: "Space Marine VR →" },
                    { href: "/games/singularity", label: "Singularity →" },
                  ],
                  color: "from-blue-900/20",
                },
                {
                  category: "Family Adventures",
                  title: "Family Adventures VR",
                  body: "Engineerium is for ages 6+. No combat, no time pressure, no enemies. Players explore impossible geometric structures in a non-violent abstract world. Perfect for first-time VR players and families with younger children.",
                  img: "/Family-Adventure.webp",
                  imgAlt: "Family playing VR Engineerium at Zero Latency",
                  links: [
                    { href: "/games/engineerium", label: "View Engineerium →" },
                  ],
                  color: "from-green-900/20",
                },
              ].map((game, i) => (
                <div key={i} className={`flex gap-5 rounded-xl border border-white/10 overflow-hidden bg-gradient-to-r ${game.color} to-transparent hover:border-white/20 transition-colors`}>
                  <div className="relative w-32 md:w-44 shrink-0">
                    <Image
                      src={game.img}
                      alt={game.imgAlt}
                      fill
                      sizes="176px"
                      className="object-cover"
                    />
                  </div>
                  <div className="py-5 pr-5 flex flex-col justify-center">
                    <span className="text-xs font-mono text-cyan-500 uppercase tracking-wider mb-1">{game.category}</span>
                    <h4 className="text-base font-bold text-white mb-2">{game.title}</h4>
                    <p className="text-gray-400 text-sm mb-3 leading-relaxed">{game.body}</p>
                    <div className="flex flex-wrap gap-4">
                      {game.links.map((l, j) => (
                        <Link key={j} href={l.href} className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors">
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link href="/experiences" className="inline-flex items-center gap-2 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black px-6 py-3 rounded-xl transition-all duration-200 font-medium text-sm">
                View All 8 VR Games
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>

          {/* H3: Indoor Playground + Other Activities */}
          <div className="mb-8">
            <h3 className="font-orbitron text-xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-cyan-700" />
              Other Activities
            </h3>
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
        <section className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest">Before You Go</span>
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mt-2">Planning Your Visit</h2>
          </div>

          <div className="mb-10">
            <h3 className="font-orbitron text-xl font-bold text-cyan-400 mb-5 flex items-center gap-3">
              <span className="w-8 h-px bg-cyan-700" />
              Admission &amp; Pricing
            </h3>
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
            <h3 className="font-orbitron text-xl font-bold text-cyan-400 mb-5 flex items-center gap-3">
              <span className="w-8 h-px bg-cyan-700" />
              Memberships &amp; Parties
            </h3>
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
            <h3 className="font-orbitron text-xl font-bold text-cyan-400 mb-5 flex items-center gap-3">
              <span className="w-8 h-px bg-cyan-700" />
              Events &amp; Specials
            </h3>
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
            <h3 className="font-orbitron text-xl font-bold text-cyan-400 mb-5 flex items-center gap-3">
              <span className="w-8 h-px bg-cyan-700" />
              Food &amp; Drink
            </h3>
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
            <h3 className="font-orbitron text-xl font-bold text-cyan-400 mb-5 flex items-center gap-3">
              <span className="w-8 h-px bg-cyan-700" />
              Tips for a Great Experience
            </h3>
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
        <section className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest">Need to Know</span>
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mt-2">Additional Information</h2>
          </div>

          <div className="mb-10">
            <h3 className="font-orbitron text-xl font-bold text-cyan-400 mb-5 flex items-center gap-3">
              <span className="w-8 h-px bg-cyan-700" />
              Hours
            </h3>
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
            <h3 className="font-orbitron text-xl font-bold text-cyan-400 mb-5 flex items-center gap-3">
              <span className="w-8 h-px bg-cyan-700" />
              Location
            </h3>
            <p className="text-gray-300 mb-3">
              Zero Latency Webster, Houston is at BayWay Village Shopping Center, 20801 Gulf Fwy Suite 5, Webster, TX 77598. Ample free parking on site.
            </p>
            <p className="text-gray-400 text-sm mb-3">
              The venue serves Houston, Clear Lake, League City, Pearland, Friendswood, Pasadena, Sugar Land, Katy, The Woodlands, Baytown, La Porte, Galveston, Nassau Bay, Seabrook, and Kemah — covering Harris, Galveston, and Brazoria counties.
            </p>
            <Link href="/contact-us" className="text-cyan-400 hover:underline text-sm">Get directions and contact info →</Link>
          </div>

          <div className="mb-10">
            <h3 className="font-orbitron text-xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-cyan-700" />
              Frequently Asked Questions
            </h3>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-white/10 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer px-5 py-4 bg-white/2 hover:bg-white/5 transition-colors list-none">
                    <h4 className="font-medium text-white text-sm">{faq.q}</h4>
                    <svg className="w-4 h-4 text-cyan-500 shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <div className="px-5 pb-4 pt-2 border-t border-white/5">
                    <p className="text-gray-300 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </details>
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
        <section className="relative rounded-2xl overflow-hidden text-center">
          <div className="absolute inset-0">
            <Image src="/hero_img.webp" alt="" fill sizes="896px" className="object-cover object-center opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#000C1A]/90 via-cyan-950/70 to-[#000C1A]/90" />
          </div>
          <div className="relative z-10 px-8 py-16">
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-cyan-500/40 bg-cyan-500/10">
              <span className="text-yellow-400 text-sm">★★★★★</span>
              <span className="text-cyan-300 text-sm">5.0 · 424+ reviews</span>
            </div>
            <h2 className="font-orbitron text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
              Book Houston&apos;s Best<br />VR Arcade
            </h2>
            <p className="text-gray-300 mb-8 max-w-md mx-auto">
              Zero Latency Webster is Houston&apos;s only free-roam VR arena. 8 games, 2–8 players, wireless. Sessions fill fast on weekends — book online to lock your slot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://booking.zerolatencyvr.com/en/book-now/webster"
                className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 active:scale-95 text-black font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-cyan-500/30"
              >
                Book Your Session Now
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </a>
              <Link
                href="/arcades-in-houston"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 hover:bg-white/5 text-white px-8 py-4 rounded-xl transition-all duration-200"
              >
                Compare All Houston Arcades
              </Link>
            </div>
          </div>
        </section>

      </article>
    </>
  );
}
