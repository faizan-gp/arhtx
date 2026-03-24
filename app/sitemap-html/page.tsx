import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Site Map | Zero Latency Houston',
  description: 'Complete HTML sitemap for Zero Latency Houston — all pages including games, blog posts, experiences, and booking information.',
  alternates: { canonical: 'https://zerolatencyhouston.com/sitemap-html' },
  robots: { index: true, follow: true },
};

const mainPages = [
  { label: 'Home', href: '/' },
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
  { label: 'Zero Latency Houston Complete Guide', slug: 'zero-latency-houston-complete-guide' },
  { label: 'Free-Roam VR Houston Texas', slug: 'free-roam-vr-houston-texas' },
  { label: 'Virtual Reality Houston Experience', slug: 'virtual-reality-houston-experience' },
  { label: 'VR Gaming Houston: What to Expect', slug: 'vr-gaming-houston-what-to-expect' },
  { label: 'Zero Latency Technology Houston', slug: 'zero-latency-technology-houston' },
  { label: 'Things to Do in Houston This Weekend', slug: 'things-to-do-houston-texas-this-weekend' },
  { label: 'Things to Do in Clear Lake Houston', slug: 'things-to-do-clear-lake-houston' },
  { label: 'Houston Entertainment Guide: VR', slug: 'houston-entertainment-guide-vr' },
  { label: 'Best Attractions in Houston TX', slug: 'best-attractions-houston-tx' },
  { label: 'Birthday Party Ideas Houston', slug: 'birthday-party-ideas-houston' },
  { label: 'Team Building Activities Houston', slug: 'team-building-activities-houston' },
  { label: 'Bachelor Party Houston VR', slug: 'bachelor-party-houston-vr' },
  { label: 'Group Activities Houston TX', slug: 'group-activities-houston-tx' },
  { label: 'Space Marine VR Houston', slug: 'space-marine-vr-houston' },
  { label: 'Best VR Games Houston: Zero Latency', slug: 'best-vr-games-houston-zero-latency' },
  { label: 'Zombie VR Games Houston', slug: 'zombie-vr-games-houston' },
  { label: 'VR Horror Experience Houston', slug: 'vr-horror-experience-houston' },
  { label: 'Zero Latency Houston Prices', slug: 'zero-latency-houston-prices' },
  { label: 'Date Night Ideas Houston', slug: 'date-night-ideas-houston' },
  { label: 'VR for Kids Houston', slug: 'vr-for-kids-houston' },
  { label: 'Far Cry VR Houston', slug: 'far-cry-vr-houston' },
  { label: 'Sol Raiders PvP VR Houston', slug: 'sol-raiders-pvp-vr-houston' },
  { label: 'Bachelorette Party Ideas Houston', slug: 'bachelorette-party-ideas-houston' },
  { label: 'Things to Do in Webster TX', slug: 'things-to-do-webster-tx' },
  { label: 'VR Arcade Houston', slug: 'vr-arcade-houston' },
  { label: 'Engineerium VR Houston', slug: 'engineerium-vr-houston' },
  { label: 'Houston Corporate Events & Team Building', slug: 'houston-corporate-events-team-building' },
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
