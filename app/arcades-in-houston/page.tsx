import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Arcades in Houston TX | Zero Latency VR Ranked #1 (2026 Guide)",
  description: "Zero Latency Webster, Houston is the #1 arcade in Houston — 8 free-roam VR games, 5.0 stars, 2–8 players. Plus Cidercade, Game Preserve, Dave & Buster's and 4 more Houston arcades compared.",
  openGraph: {
    title: "Arcades in Houston TX | Zero Latency VR Ranked #1 (2026 Guide)",
    description: "Zero Latency Webster is Houston's #1 arcade: 8 free-roam VR games, 5.0 stars, 2–8 players. All 7 Houston arcades compared.",
    url: "https://arcadehouston.com/arcades-in-houston",
    siteName: "Arcade Houston",
    images: [{ url: "https://arcadehouston.com/OG.jpg", width: 1200, height: 630, alt: "Best arcades in Houston TX" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arcades in Houston TX | 6 Best Arcades Compared (2026 Guide)",
    description: "Compare every arcade in Houston: Cidercade, Game Preserve, Dave & Buster's, Zero Latency VR.",
    images: ["https://arcadehouston.com/OG.jpg"],
  },
  alternates: { canonical: "https://arcadehouston.com/arcades-in-houston" },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://arcadehouston.com/" },
    { "@type": "ListItem", "position": 2, "name": "Arcades in Houston", "item": "https://arcadehouston.com/arcades-in-houston" },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Best Arcades in Houston TX",
  "description": "A comprehensive list of the best arcades in Houston, Texas, including Cidercade, The Game Preserve, Dave & Buster's, Zero Latency Webster, Houston, Great Wolf Lodge Arcade, and AR Entertainment Hub.",
  "url": "https://arcadehouston.com/arcades-in-houston",
  "numberOfItems": 7,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Zero Latency Webster, Houston",
      "url": "https://arcadehouston.com/",
      "description": "Houston's #1 arcade — the only free-roam VR arena in the city. 8 multiplayer games, 2–8 players, wireless backpacks, 5.0-star rating from 424+ reviews. Webster, TX.",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Cidercade Houston",
      "url": "https://cidercade.com/houston/",
      "description": "275+ arcade games on free play for $12 all-day admission. Hand-crafted pizza, craft beer bar, East Downtown Houston.",
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "The Game Preserve - NASA",
      "url": "https://gamepreservehouston.com/",
      "description": "100+ retro arcade games on free play. $15 day pass. Pinball machines with Adaptive Flipper Control. Webster, TX.",
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "The Game Preserve - Woodlands",
      "url": "https://gamepreservehouston.com/",
      "description": "125 retro arcade games on free play. $15 day pass. Spring, TX.",
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Dave & Buster's",
      "url": "https://www.daveandbusters.com/",
      "description": "Arcade games on Power Card system, full restaurant, bar, and sports viewing on large HDTVs. Multiple Houston locations.",
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Great Wolf Lodge Northern Lights Arcade",
      "url": "https://www.greatwolf.com/webster/",
      "description": "Credit-based arcade inside Great Wolf Lodge waterpark resort. Webster, TX.",
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "AR Entertainment Hub",
      "url": "https://www.arsentertainmenthub.com/",
      "description": "72 arcade games plus roller skating, laser tag, bowling, escape rooms, and mini golf. Baytown, TX.",
    },
  ],
};

const arcadeFaqs = [
  {
    q: "Which Houston arcade has the most games?",
    a: "Zero Latency Webster, Houston has the most immersive games — 8 free-roam VR experiences where players physically move through virtual worlds. For traditional arcade machine volume, Cidercade has 275+ cabinets all on free play for $12. The Game Preserve has 100+ retro games on a $15 day pass.",
  },
  {
    q: "Which Houston arcade is closest to downtown?",
    a: "Cidercade Houston is the closest to downtown, located in East Downtown Houston (EaDo) at 2320 Canal St Suite 100, near Daikin Park and Shell Energy Stadium.",
  },
  {
    q: "Do Houston arcades serve alcohol?",
    a: "Yes. Cidercade Houston and Dave & Buster's both have full bars. Cidercade brews their own hard ciders and craft beers. Cidercade is 18+ after 9pm. Dave & Buster's serves cocktails at all locations.",
  },
  {
    q: "What is the cheapest arcade in Houston?",
    a: "For flat-admission arcades, Cidercade is $12 all-day and Game Preserve is $15. Zero Latency Webster, Houston runs $35–50 per person per session — a higher price for a categorically different experience. Most groups rate it the best value in Houston for the quality of the experience delivered.",
  },
  {
    q: "Are there any arcades in Houston open late?",
    a: "Cidercade and The Game Preserve are both open until midnight daily. Zero Latency Webster, Houston is open until 11pm (3pm start Mon-Tue, 2pm Wed-Thu, 11am Fri-Sun).",
  },
  {
    q: "Which Houston arcade is best for large groups?",
    a: "Zero Latency Webster, Houston is Houston's top group arcade — 2–8 players share the same virtual world simultaneously, with back-to-back sessions for larger parties. 5.0 stars from 424+ reviews, with corporate groups and private events consistently among the highest-rated experiences. Cidercade handles bigger parties with full-arcade takeovers. Dave & Buster's has private meeting rooms.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": arcadeFaqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

const venues = [
  {
    rank: 1,
    name: "Zero Latency Webster, Houston",
    tag: "★ Editor's Pick — Most Immersive Arcade in Houston",
    tagColor: "text-cyan-400 border-cyan-400/40 bg-cyan-400/10",
    address: "BayWay Village Shopping Center, 20801 Gulf Fwy Suite 5, Webster, TX 77598",
    price: "$35–50 per person per session",
    hours: "Mon–Tue 3–11pm, Wed–Thu 2–11pm, Fri–Sun 11am–11pm",
    gameCount: "8 VR games",
    highlight: "🏆 #1 RATED ARCADE IN HOUSTON — 5.0 stars from 424+ Google reviews",
    description: "Zero Latency Webster, Houston is Houston's highest-rated and most unique arcade experience — the only free-roam VR arena in the city. Players wear wireless backpacks and VR headsets and physically walk, run, and move through a 2,000 sq ft virtual world together. No cables, no fixed stations, no limits. Up to 8 players share the same virtual environment simultaneously across 8 different games. Nothing else in Houston comes close.",
    details: [
      "Houston's ONLY free-roam VR arena — 2,000 sq ft wireless arena, no cables",
      "Up to 8 players simultaneously in the same virtual world",
      "8 games: Outbreak, Outbreak 2, Undead Arena, Space Marine VR, Singularity, Sol Raiders, Engineerium, Far Cry VR, Haunted",
      "30–50 minute sessions — full adventure, not just a demo",
      "Expert Game Masters guide every session from start to finish",
      "5.0 stars from 424+ Google reviews — highest-rated Houston arcade",
      "Private arena sessions for birthdays, corporate events, bachelor/bachelorette parties",
      "Session footage recorded — replay link provided after your game",
      "Ages 13+ for most games, ages 6+ for Engineerium (family-friendly VR)",
      "Walk-ins welcome when slots are available — book online to guarantee your time slot",
    ],
    pros: [
      "Only free-roam VR arcade in Houston",
      "Highest-rated arcade (5.0 stars, 424+ reviews)",
      "Active full-body experience — not passive gaming",
      "Up to 8 players together in one virtual world",
      "Private events available for any group size",
      "Game Masters handle everything — zero setup stress",
    ],
    cons: ["Higher per-person cost than flat-admission arcades", "Sessions are 30–50 min per game (book back-to-back for more)", "Ages 13+ for most games (6+ for Engineerium)"],
    bestFor: "Groups, date nights, birthdays, corporate team building, bachelor/bachelorette parties, anyone who wants the most memorable arcade experience in Houston",
  },
  {
    rank: 2,
    name: "Cidercade Houston",
    tag: "Best for: Most Games & Bar Scene",
    tagColor: "text-orange-400 border-orange-400/30 bg-orange-400/10",
    address: "2320 Canal St Suite 100, East Downtown Houston (EaDo)",
    price: "$12 all-day admission",
    hours: "10am–Midnight daily. 18+ at 9pm. Kitchen closes 11:45pm.",
    gameCount: "275+",
    highlight: "Best for game volume — 275+ titles on free play",
    description: "Cidercade Houston is the largest arcade in Houston by game count — 275+ titles all set to free play. No Power Cards, no tokens. One $12 admission covers everything from retro classics and skee-ball to rhythm games and air hockey.",
    details: [
      "275+ games on free play — retro classics, modern titles, skee-ball, rhythm, racing, basketball",
      "Hand-crafted 12-inch artisan thin-crust pizzas from a rotary stone hearth oven",
      "Dozens of hard ciders and craft beers brewed in-house, all on tap",
      "Unlimited soda for $4",
      "Instant-prize crane machines (pay-to-play, separate from admission)",
      "Family-friendly during the day, 18+ starting at 9pm",
      "Private party zones and full-arcade takeovers for events",
    ],
    pros: ["Most games of any Houston arcade", "Best value ($12 all-day)", "Best food and bar", "Central location near downtown"],
    cons: ["18+ only after 9pm", "Gets crowded on weekends", "Passive gaming — individual machines only"],
    bestFor: "Large game selection, date nights, bar scene, group outings",
  },
  {
    rank: 3,
    name: "The Game Preserve - NASA (Webster)",

    tag: "Best for: Retro Gaming & Pinball",
    tagColor: "text-purple-400 border-purple-400/30 bg-purple-400/10",
    address: "20810 Gulf Freeway Suite Z, Webster, TX 77598",
    price: "$15 day pass",
    hours: "11am–12am daily",
    gameCount: "100+",
    highlight: "The best retro arcade in Houston",
    description: "The Game Preserve NASA location has 100+ retro and classic arcade games across 11,000 sq ft — the largest floor space of any Houston arcade. All games on free play with a $15 day pass. No one under 16 admitted without an adult.",
    details: [
      "100+ retro and classic arcade games in 11,000 sq ft",
      "All games on free play — no tokens, no quarters",
      "$15 day pass includes unlimited access all day",
      "Pinball machines with Adaptive Flipper Control (AFC) for one-handed play",
      "Monthly memberships: $30/individual, $60/family (covers both locations)",
      "5 free guest passes per month on individual plan",
      "Private party room: $250 (2 hours, 10 people, outside food welcome)",
      "Group rate: $10/person for groups of 15+",
    ],
    pros: ["Largest floor space", "Best retro/pinball selection", "AFC accessibility for pinball", "Day pass includes both locations"],
    cons: ["Fewer total games than Cidercade", "No under 16 without adult", "No food or bar on-site"],
    bestFor: "Retro gaming, pinball, nostalgia, families",
  },
  {
    rank: 4,
    name: "The Game Preserve - Woodlands",
    tag: "Best for: Retro Gaming (North Houston)",
    tagColor: "text-purple-400 border-purple-400/30 bg-purple-400/10",
    address: "473 Sawdust Road, Spring, TX 77380",
    price: "$15 day pass (same as NASA)",
    hours: "11am–12am daily",
    gameCount: "125",
    highlight: "Original location, 125 games in 6,500 sq ft",
    description: "The original Game Preserve location in The Woodlands has 125 games across 6,500 sq ft. The same $15 day pass and $30/month membership cover both The Woodlands and the NASA Webster location.",
    details: [
      "125 retro arcade games in 6,500 sq ft",
      "All games on free play",
      "Same membership covers both Game Preserve locations",
      "Best option for North Houston residents (Spring/Woodlands area)",
    ],
    pros: ["Convenient for North Houston", "Good game selection", "Same membership as NASA location"],
    cons: ["Smaller than NASA location", "No food or bar", "Under 16 needs an adult"],
    bestFor: "Woodlands and Spring residents, retro gaming",
  },
  {
    rank: 5,
    name: "Dave & Buster's",
    tag: "Best for: Food, Drinks & Sports",
    tagColor: "text-blue-400 border-blue-400/30 bg-blue-400/10",
    address: "Multiple Houston locations",
    price: "Power Card system (varies per game)",
    hours: "Varies by location (typically 11am–midnight)",
    gameCount: "Varies by location",
    highlight: "Best for food, sports viewing, and full bar experience",
    description: "Dave & Buster's is a full entertainment complex: arcade games on a Power Card system, full restaurant, bar with cocktails, and large HDTVs showing sports and UFC fights. Multiple Houston locations.",
    details: [
      "Power Card system — load credits, pay per game",
      "Award-winning seasonal food menu: smashed burgers, wings, flatbreads",
      "Eat & Play Combo from $19.99 (meal + $10 Power Card credits)",
      "Full bar with classic and specialty cocktails",
      "40-ft HDTVs for sports viewing — UFC Fight Nights, game days",
      "Half-price game Sundays, $1 wings Mon/Thu",
      "Private meeting rooms for corporate events",
      "Birthday packages with Power Card credits and reserved seating",
    ],
    pros: ["Best food of any arcade", "Full bar", "Sports viewing", "Multiple Houston locations"],
    cons: ["Pay-per-game model adds up quickly", "No free-play option", "Most expensive per-hour gaming"],
    bestFor: "Food + games combo, sports viewing, corporate events, date nights",
  },
  {
    rank: 6,
    name: "Great Wolf Lodge Northern Lights Arcade",
    tag: "Best for: Hotel Guests & Families",
    tagColor: "text-green-400 border-green-400/30 bg-green-400/10",
    address: "Webster, TX (inside Great Wolf Lodge)",
    price: "Credit-based (varies by game). Included with Wolf Pass, Paw Pass, Pup Pass.",
    hours: "Varies — check lodge hours",
    gameCount: "Varies",
    highlight: "Part of a larger waterpark resort experience",
    description: "The Northern Lights Arcade at Great Wolf Lodge in Webster is best suited for families already staying at the lodge or visiting the waterpark. The arcade is credit-based with re-loadable gaming currency. Attraction passes (Wolf Pass, Paw Pass, Pup Pass) include arcade access.",
    details: [
      "Credit-based arcade — re-loadable gaming currency, prices vary per game",
      "Included with Wolf Pass, Paw Pass, and Pup Pass attraction packages",
      "Part of Great Wolf Lodge waterpark resort — waterslides, MagiQuest, ropes course, bowling",
      "Best experience when combined with a lodge stay or day pass",
    ],
    pros: ["Part of a resort with many other attractions", "Included with lodge passes", "Great for young families"],
    cons: ["Credit-based (not free-play)", "Best value only when staying at the lodge", "Limited standalone arcade experience"],
    bestFor: "Families staying at Great Wolf Lodge, waterpark visitors",
  },
  {
    rank: 7,
    name: "AR Entertainment Hub",
    tag: "Best for: Multi-Activity Family Fun",
    tagColor: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
    address: "Baytown, TX",
    price: "Varies by activity",
    hours: "Check website",
    gameCount: "72",
    highlight: "Most activity types of any Houston arcade venue",
    description: "AR Entertainment Hub in Baytown has 72 arcade games across video, midway, and retro categories — plus roller skating, laser tag, bowling, black light mini golf, escape rooms, a soft play indoor playground, Valo Arena, Super Grid, QBIX 5D, and a full redemption store. The most activities under one roof.",
    details: [
      "72 arcade games: video, midway, and retro sections",
      "Full redemption store with prizes",
      "Roller skating",
      "Laser tag",
      "Bowling and Unreal XR Bowling (augmented reality lanes)",
      "Black light mini golf — 18 holes",
      "Live escape rooms",
      "Valo Arena — team-based mixed-reality",
      "Super Grid — interactive floor gaming",
      "QBIX 5D Game Box — motion-seat cinematic gaming",
      "Soft play indoor playground for younger children",
      "Bar area with games",
    ],
    pros: ["Most activity types", "Good for mixed-age groups", "Soft play for young kids"],
    cons: ["72 games is the smallest game count", "Located in Baytown (farther from central Houston)", "Pricing not all-inclusive"],
    bestFor: "Families with young children, mixed-age groups wanting multiple activities",
  },
];

export default function ArcadesInHoustonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        {/* Background image */}
        <Image
          src="/hero_img.webp"
          alt="Free-roam VR arena at Zero Latency Webster, Houston"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-[#000C1A]/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000C1A]/40 via-transparent to-[#000C1A]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.15)_0%,transparent_65%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-gray-200 transition-colors">Home</Link>
            <span className="mx-2 text-gray-600">/</span>
            <span className="text-gray-300">Arcades in Houston</span>
          </nav>
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-cyan-500/50 bg-cyan-500/10 backdrop-blur-sm text-cyan-300 text-sm font-mono">
            <span className="text-yellow-400">★★★★★</span>
            #1 Rated: Zero Latency Webster, Houston — 5.0 from 424+ reviews
          </div>
          <h1 className="font-orbitron text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Best Arcades in<br className="hidden sm:block" /> Houston TX
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            7 Houston arcades compared. Zero Latency Webster, Houston is ranked #1 — the city&apos;s only free-roam VR arcade with 8 games, 5.0 stars, and the most immersive experience available anywhere in Houston.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://booking.zerolatencyvr.com/en/book-now/webster"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 active:scale-95 text-black font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/25"
            >
              Book Zero Latency Now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </a>
            <a href="#rank-2" className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 hover:bg-white/5 text-white px-8 py-4 rounded-xl transition-all duration-200">
              Compare All 7 Arcades
            </a>
          </div>
        </div>
      </section>

      {/* Venue profiles */}
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">
        {venues.map((venue) => (
          <section
            key={venue.rank}
            id={`rank-${venue.rank}`}
            className={`rounded-2xl overflow-hidden ${venue.rank === 1 ? "border-2 border-cyan-500/60 shadow-lg shadow-cyan-900/30" : "border border-white/10"}`}
          >
            <div className={`px-6 py-5 border-b ${venue.rank === 1 ? "bg-cyan-950/40 border-cyan-500/30" : "bg-white/3 border-white/10"}`}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <span className={`font-orbitron text-2xl font-black ${venue.rank === 1 ? "text-cyan-400" : "text-white"}`}>#{venue.rank}</span>
                <div className="flex-1">
                  <h2 className="font-orbitron text-xl font-bold text-white">{venue.name}</h2>
                  <div className={`inline-block mt-1 text-xs px-2 py-0.5 rounded border ${venue.tagColor}`}>{venue.tag}</div>
                </div>
                <div className="text-right">
                  <div className="text-cyan-400 font-bold">{venue.price}</div>
                  <div className="text-gray-400 text-sm">{venue.gameCount} games</div>
                </div>
              </div>
              {venue.highlight && (
                <div className="mt-3 text-sm font-medium text-cyan-400">{venue.highlight}</div>
              )}
            </div>

            {/* Hero image strip — rank 1 only */}
            {venue.rank === 1 && (
              <div className="relative w-full h-56 md:h-72 overflow-hidden">
                <Image
                  src="/hero_img.webp"
                  alt="Players in free-roam VR at Zero Latency Webster, Houston"
                  fill
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000C1A]/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 text-white text-sm font-medium">
                  Houston&apos;s #1 Rated Arcade — Zero Latency Webster
                </div>
              </div>
            )}

            <div className="px-6 py-6">
              {/* Image gallery — rank 1 only */}
              {venue.rank === 1 && (
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {[
                    { src: "/outbreak-group-fun.webp", alt: "Group playing free-roam VR together at Zero Latency" },
                    { src: "/pvp-experience.webp", alt: "PvP VR battle at Zero Latency Webster" },
                    { src: "/party.webp", alt: "Birthday party VR session at Zero Latency Houston" },
                  ].map((img, i) => (
                    <div key={i} className="relative aspect-video rounded-lg overflow-hidden">
                      <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 33vw, 280px" className="object-cover" />
                    </div>
                  ))}
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-gray-300 mb-4">{venue.description}</p>
                  <div className="space-y-1 text-sm text-gray-400">
                    <div><span className="text-gray-500">Address:</span> {venue.address}</div>
                    <div><span className="text-gray-500">Hours:</span> {venue.hours}</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2 text-sm">What&apos;s included:</h3>
                  <ul className="space-y-1">
                    {venue.details.map((d, i) => (
                      <li key={i} className="text-gray-400 text-sm flex gap-2">
                        <span className="text-cyan-500 mt-0.5 shrink-0">›</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h3 className="text-green-400 font-bold text-sm mb-2">Pros</h3>
                  <ul className="space-y-1">
                    {venue.pros.map((p, i) => <li key={i} className="text-gray-400 text-sm">+ {p}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="text-red-400 font-bold text-sm mb-2">Cons</h3>
                  <ul className="space-y-1">
                    {venue.cons.map((c, i) => <li key={i} className="text-gray-400 text-sm">− {c}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm mb-2">Best For</h3>
                  <p className="text-gray-400 text-sm">{venue.bestFor}</p>
                </div>
              </div>

              {venue.name.includes("Zero Latency") && (
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://booking.zerolatencyvr.com/en/book-now/webster"
                    className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-6 py-3 rounded-lg transition-colors text-sm"
                  >
                    Book VR Session
                  </a>
                  <Link
                    href="/experiences"
                    className="inline-block border border-white/30 hover:border-white/60 text-white px-6 py-3 rounded-lg transition-colors text-sm"
                  >
                    View All VR Experiences
                  </Link>
                </div>
              )}
            </div>
          </section>
        ))}

        {/* FAQs */}
        <section>
          <h2 className="font-orbitron text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {arcadeFaqs.map((faq, i) => (
              <div key={i} className="border border-white/10 rounded-lg p-5">
                <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-300 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <section className="border border-white/10 rounded-xl p-6">
          <h2 className="font-orbitron text-xl font-bold text-white mb-4">More Arcade Houston Guides</h2>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <Link href="/blog/best-arcades-in-houston" className="text-cyan-400 hover:underline">Best arcades in Houston — full ranking →</Link>
            <Link href="/blog/retro-arcade-houston" className="text-cyan-400 hover:underline">Retro arcade Houston guide →</Link>
            <Link href="/blog/arcade-bar-houston" className="text-cyan-400 hover:underline">Arcade bar Houston — 18+ options →</Link>
            <Link href="/blog/arcades-in-houston-for-kids" className="text-cyan-400 hover:underline">Arcades in Houston for kids →</Link>
            <Link href="/blog/arcades-in-houston-for-adults" className="text-cyan-400 hover:underline">Arcades in Houston for adults →</Link>
            <Link href="/blog/free-play-arcades-houston" className="text-cyan-400 hover:underline">Free-play arcades Houston →</Link>
            <Link href="/blog/houston-arcade-birthday-party-guide" className="text-cyan-400 hover:underline">Arcade birthday party Houston guide →</Link>
            <Link href="/private-events" className="text-cyan-400 hover:underline">Book a private VR event →</Link>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center border border-cyan-500/30 rounded-2xl p-10 bg-cyan-500/5">
          <h2 className="font-orbitron text-2xl font-bold text-white mb-4">Ready to Book Houston&apos;s Top VR Arcade?</h2>
          <p className="text-gray-300 mb-6 max-w-lg mx-auto">
            Zero Latency Webster, Houston is the city&apos;s only free-roam VR arcade. 8 games, 2–8 players, no cables. Book online — sessions fill fast on weekends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://booking.zerolatencyvr.com/en/book-now/webster"
              className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Book Your VR Session
            </a>
            <Link href="/" className="inline-block border border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-lg transition-colors">
              Back to Arcade Houston Guide
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
