import HeroHome from "@/components/HeroHome";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zero Latency Houston | Free-Roam Virtual Reality in Houston TX",
  description: "Houston's premier free-roam VR arena. Up to 8 players simultaneously. Zombie survival, sci-fi missions, PvP esports, and family-friendly worlds. No cables. No limits.",
  openGraph: {
    title: "Zero Latency Houston | Free-Roam Virtual Reality in Houston TX",
    description: "Step inside limitless VR worlds at Houston's biggest free-roam arena. Perfect for friends, birthdays, team building & bachelor parties.",
    url: "https://zerolatencyhouston.com/",
    siteName: "Zero Latency Houston",
    images: [{ url: "https://zerolatencyhouston.com/OG.jpg", width: 1200, height: 630, alt: "Players in Zero Latency Houston free-roam VR arena" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero Latency Houston | Free-Roam VR in Houston TX",
    description: "Up to 8 players. Zombie survival, sci-fi, PvP, family-friendly worlds.",
    images: ["https://zerolatencyhouston.com/OG.jpg"],
  },
  alternates: { canonical: "https://zerolatencyhouston.com/" },
  robots: { index: true, follow: true },
};

const faqs = [
  { q: "Will I experience motion sickness?", a: "Motion sickness is rarely an issue at Zero Latency Houston. Because you're physically moving through a real space, your body naturally syncs with the virtual environment — eliminating the disconnect that typically causes nausea. Only a tiny fraction of players have ever chosen to stop for this reason." },
  { q: "How many people can participate at once?", a: "Up to 8 players can share the same virtual world simultaneously. Larger groups can book consecutive sessions back-to-back." },
  { q: "Can I host a birthday party or private event here?", a: "Absolutely. We offer dedicated private event packages with access to a reserved event space and additional activities — perfect for birthdays, bachelor and bachelorette parties, corporate team-building, and other celebrations." },
  { q: "Is there a competitive multiplayer option?", a: "Yes! Sol Raiders is a PvP game where teams compete head-to-head in objective-based VR combat. We recommend a minimum of 4 players for the best experience." },
  { q: "Are all games combat-focused?", a: "Not at all. We offer Engineerium — a breathtaking, non-combat exploration game — and Singularity, a less intense sci-fi experience. Both are great for families and first-timers." },
  { q: "Do you accept walk-ins?", a: "Yes, walk-ins are welcome when slots are available. During peak hours and weekends, booking in advance is strongly recommended to guarantee your spot." },
  { q: "What is the minimum age requirement?", a: "Players must be at least 13 years old to participate. We have games suited to different comfort levels — from family-friendly to intense action." },
  { q: "How long is each game session?", a: "Session lengths vary by game — typically 15 to 45 minutes. Sol Raiders runs about 15 minutes; Space Marine VR can go up to 45. Check individual game pages for exact durations." },
  { q: "Do I need VR experience to play?", a: "None at all. Our Game Masters guide every group through the full experience before you start. Whether you're a VR veteran or trying it for the first time, you'll feel at home within minutes." },
  { q: "What should I wear?", a: "Comfortable, closed-toe shoes are ideal — sneakers work perfectly. We supply all VR equipment including headsets, controllers, and wireless backpacks. Dress for movement." },
  { q: "Can I play wearing glasses?", a: "Yes. Our VR headsets are designed to comfortably accommodate most prescription glasses." },
  { q: "Is parking available?", a: "Yes, we're situated in the BayWay Village Shopping Center with ample free parking available for all visitors." },
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EntertainmentBusiness"],
  "name": "Zero Latency Houston",
  "image": "https://zerolatencyhouston.com/OG.jpg",
  "url": "https://zerolatencyhouston.com/",
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

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <HeroHome faqs={faqs} />
    </>
  );
}
