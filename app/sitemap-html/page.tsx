import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Site Map | Arcade Houston',
  description: 'Complete HTML sitemap for Arcade Houston — all pages including Houston arcade guides, VR games, blog posts, experiences, and booking information.',
  alternates: { canonical: 'https://arcadehouston.com/sitemap-html' },
  robots: { index: true, follow: true },
};

const mainPages = [
  { label: 'Home', href: '/' },
  { label: 'Arcades in Houston', href: '/arcades-in-houston' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Games', href: '/games' },
  { label: 'What to Expect', href: '/what-to-expect' },
  { label: 'Private Events', href: '/private-events' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact Us', href: '/contact-us' },
];

const gamePages = [
  { label: 'Outbreak', href: '/games/outbreak' },
  { label: 'Outbreak 2: Mall Mayhem', href: '/games/outbreak-2-mall-mayhem' },
  { label: 'Space Marine VR', href: '/games/space-marine-vr' },
  { label: 'Far Cry VR: The Expedition', href: '/games/far-cry-vr' },
  { label: 'Sol Raiders', href: '/games/sol-raiders' },
  { label: 'Singularity', href: '/games/singularity' },
  { label: 'Undead Arena', href: '/games/undead-arena' },
  { label: 'Engineerium', href: '/games/engineerium' },
  { label: 'Haunted', href: '/games/haunted' },
];

const blogSlugs = [
  { label: 'Best Arcades in Houston TX (2026)', slug: 'best-arcades-in-houston' },
  { label: 'Cidercade Houston Review', slug: 'cidercade-houston-review' },
  { label: 'Game Preserve Houston Review', slug: 'game-preserve-houston-review' },
  { label: 'Retro Arcade Houston', slug: 'retro-arcade-houston' },
  { label: 'Arcade Bar Houston', slug: 'arcade-bar-houston' },
  { label: 'Arcades in Houston for Kids', slug: 'arcades-in-houston-for-kids' },
  { label: 'Arcades in Houston for Adults', slug: 'arcades-in-houston-for-adults' },
  { label: 'Free Play Arcades Houston', slug: 'free-play-arcades-houston' },
  { label: 'Houston Arcade Birthday Party Guide', slug: 'houston-arcade-birthday-party-guide' },
  { label: 'Bachelor & Bachelorette Party Houston', slug: 'bachelor-bachelorette-party-houston' },
  { label: 'VR Arcade Houston', slug: 'vr-arcade-houston' },
  { label: 'Best VR Games in Houston', slug: 'best-vr-games-houston-zero-latency' },
  { label: 'Zero Latency Webster, Houston Complete Guide', slug: 'zero-latency-houston-complete-guide' },
  { label: 'Things to Do in Houston This Weekend', slug: 'things-to-do-houston-texas-this-weekend' },
  { label: 'Things to Do in Clear Lake Houston', slug: 'things-to-do-clear-lake-houston' },
  { label: 'Things to Do in Webster TX', slug: 'things-to-do-webster-tx' },
  { label: 'Birthday Party Ideas Houston', slug: 'birthday-party-ideas-houston' },
  { label: 'Team Building Activities Houston', slug: 'team-building-activities-houston' },
  { label: 'Date Night Ideas Houston', slug: 'date-night-ideas-houston' },
  { label: 'Group Activities Houston TX', slug: 'group-activities-houston-tx' },
];

const legalPages = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'About Us', href: '/about' },
  { label: 'Editorial Guidelines', href: '/editorial-guidelines' },
];

export default function SitemapHtmlPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">

        <h1 className="font-orbitron font-black text-4xl md:text-5xl text-[#ECFEFF] mb-12">
          Site Map
        </h1>

        <div className="space-y-10">

          {/* Main Pages */}
          <div className="glass rounded-2xl p-6">
            <h2 className="font-orbitron font-black text-lg text-cyan-400 mb-5">
              Main Pages
            </h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              {mainPages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-sm text-[#7DD3FC]/80 hover:text-white transition-colors"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Games */}
          <div className="glass rounded-2xl p-6">
            <h2 className="font-orbitron font-black text-lg text-cyan-400 mb-5">
              Games
            </h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              {gamePages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-sm text-[#7DD3FC]/80 hover:text-white transition-colors"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog */}
          <div className="glass rounded-2xl p-6">
            <h2 className="font-orbitron font-black text-lg text-cyan-400 mb-5">
              Blog
            </h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              {blogSlugs.map(({ label, slug }) => (
                <li key={slug}>
                  <Link
                    href={`/blog/${slug}`}
                    className="text-sm text-[#7DD3FC]/80 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="glass rounded-2xl p-6">
            <h2 className="font-orbitron font-black text-lg text-cyan-400 mb-5">
              Legal
            </h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              {legalPages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-sm text-[#7DD3FC]/80 hover:text-white transition-colors"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
