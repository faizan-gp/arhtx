import type { Metadata } from "next";
import "./globals.css";
import { seoKeywords } from "@/lib/seoKeywords";
import Script from "next/script";
import { orbitron, inter } from './fonts';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileNav from "@/components/MobileNav";
import AnalyticsProvider from "@/components/AnalyticsProvider";
import { Suspense } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const siteUrl = "https://zerolatencyhouston.com";

export const metadata: Metadata = {
  title: "Zero Latency Houston | Free-Roam VR Gaming in Houston TX",
  description: "Houston's premier free-roam VR arena. Up to 8 players. Zombie survival, sci-fi missions, PvP esports, and family-friendly worlds. Book now at Zero Latency Houston.",
  keywords: seoKeywords,
  authors: [{ name: "Zero Latency Houston" }],
  creator: "Zero Latency Houston",
  publisher: "Zero Latency Houston",
  applicationName: "Zero Latency Houston",
  generator: "Next.js",
  metadataBase: new URL("https://zerolatencyhouston.com/"),
  referrer: "origin-when-cross-origin",
  openGraph: {
    title: "Zero Latency Houston | Free-Roam VR Gaming in Houston TX",
    description: "Houston's premier free-roam VR arena. Up to 8 players. Zombie survival, sci-fi missions, PvP esports, and family-friendly worlds.",
    siteName: "Zero Latency Houston",
    url: "https://zerolatencyhouston.com/",
    images: [{ url: "https://zerolatencyhouston.com/OG.jpg", width: 1200, height: 630, alt: "Players enjoying a VR experience at Zero Latency Houston" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero Latency Houston | Free-Roam VR Gaming in Houston TX",
    description: "Houston's premier free-roam VR arena. Up to 8 players. Book now.",
    images: ["https://zerolatencyhouston.com/OG.jpg"],
    creator: "@zlwebster",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://zerolatencyhouston.com/",
    languages: { "en-US": "https://zerolatencyhouston.com/" },
  },
};

// ── JSON-LD Schemas ─────────────────────────────────────────────────────────
// NOTE: These use plain <script> tags (not next/script) so they appear in the
// raw HTML output — visible to crawlers that don't execute JavaScript.

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://zerolatencyhouston.com/#organization",
  "name": "Zero Latency Houston",
  "legalName": "Zero Latency Houston",
  "url": "https://zerolatencyhouston.com/",
  "logo": "https://zerolatencyhouston.com/ZL-W.png",
  "foundingDate": "2025",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+14694049149",
    "contactType": "Customer Service",
    "email": "zero@zlwebster.com",
    "areaServed": "US",
    "availableLanguage": "en"
  },
  "sameAs": [
    "https://www.facebook.com/zerolatencywebstr",
    "https://www.instagram.com/zerolatencywebstr",
    "https://www.tiktok.com/@zerolatencywebstr",
    "https://www.youtube.com/@ZeroLatencyWebster",
    "https://twitter.com/zlwebster"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "BayWay Village Shopping Center, 20801 Gulf Fwy suite 5",
    "addressLocality": "Webster",
    "addressRegion": "TX",
    "postalCode": "77598",
    "addressCountry": "US"
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://zerolatencyhouston.com/#website",
  "url": "https://zerolatencyhouston.com/",
  "name": "Zero Latency Houston",
  "description": "Houston's premier free-roam VR arena. Up to 8 players. Zombie survival, sci-fi missions, PvP esports, and family-friendly worlds.",
  "publisher": { "@id": "https://zerolatencyhouston.com/#organization" },
  "potentialAction": {
    "@type": "SearchAction",
    "target": { "@type": "EntryPoint", "urlTemplate": "https://zerolatencyhouston.com/?s={search_term_string}" },
    "query-input": "required name=search_term_string"
  }
};

// SiteNavigationElement — each nav item is its own schema entity
const navSchemas = [
  { "@context": "https://schema.org", "@type": "SiteNavigationElement", "name": "Experiences", "url": `${siteUrl}/experiences` },
  { "@context": "https://schema.org", "@type": "SiteNavigationElement", "name": "Games",       "url": `${siteUrl}/games` },
  { "@context": "https://schema.org", "@type": "SiteNavigationElement", "name": "Private Events", "url": `${siteUrl}/private-events` },
  { "@context": "https://schema.org", "@type": "SiteNavigationElement", "name": "Blog",        "url": `${siteUrl}/blog` },
  { "@context": "https://schema.org", "@type": "SiteNavigationElement", "name": "Contact Us",  "url": `${siteUrl}/contact-us` },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="msvalidate.01" content="999B6B7BDDC8D9C46D790CCA519C9266" />
        {/* JSON-LD — plain <script> tags render in static HTML, visible to crawlers */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        {navSchemas.map((schema, i) => (
          <script key={`nav-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}
      </head>
      <body className={`${orbitron.variable} ${inter.variable} antialiased`}>
        <Script id="meta-pixel" strategy="lazyOnload" dangerouslySetInnerHTML={{ __html: `
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1446504206776301');
          fbq('track', 'PageView');
        ` }} />
        {GA_ID && (
          <>
            <Script id="ga4" src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { send_page_view: false });
            `}</Script>
          </>
        )}
        <a href="#main-content" className="sr-only focus:not-sr-only">Skip to content</a>
        <Suspense><Header /></Suspense>
        <AnalyticsProvider>
          <main id="main-content" role="main">{children}</main>
          <Footer />
          <MobileNav />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
