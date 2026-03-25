import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Arcade Houston | VR Arcade & Entertainment Guide',
  description: "Arcade Houston covers every arcade in the Houston metro area and operates Zero Latency Houston — the city's only free-roam VR arena. 2,000 sq ft arena, 8 games, 2-8 players. Webster TX.",
  alternates: { canonical: 'https://arcadehouston.com/about' },
  openGraph: {
    title: 'About Arcade Houston | VR Arcade & Entertainment Guide',
    description: "Arcade Houston covers every arcade in Houston and operates Zero Latency VR. 2,000 sq ft arena, 8 games. Webster TX.",
    url: 'https://arcadehouston.com/about',
    siteName: 'Arcade Houston',
  },
  robots: { index: true, follow: true },
};

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://arcadehouston.com/about',
  url: 'https://arcadehouston.com/about',
  name: 'About Arcade Houston',
  description: "Arcade Houston is a comprehensive guide to every arcade in Houston and operates Zero Latency Houston — the city's only free-roam VR arena.",
  publisher: { '@id': 'https://arcadehouston.com/#organization' },
};

const stats = [
  { value: '8', label: 'Games' },
  { value: '2–8', label: 'Players' },
  { value: '2,000 sq ft', label: 'Arena' },
  { value: '7 Days', label: 'a Week' },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">

          {/* Heading */}
          <div className="mb-10">
            <h1 className="font-orbitron font-black text-4xl md:text-5xl text-[#ECFEFF] mb-6">
              About Zero Latency Houston
            </h1>
            <div className="glass rounded-2xl p-6">
              <p className="text-sm text-[#7DD3FC]/80 leading-relaxed">
                Zero Latency Houston is Houston&apos;s only free-roam virtual reality arena where groups of 2 to 8 players move freely through a 2,000 sq ft arena — no cables, no controllers tethered to a station. Players wear wireless VR backpacks and headsets tracked in real time.
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-6 text-center">
                <p className="font-orbitron font-black text-2xl text-cyan-400">{stat.value}</p>
                <p className="text-xs text-[#7DD3FC]/80 mt-1 font-orbitron">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Content sections */}
          <div className="space-y-6">

            <div className="glass rounded-2xl p-6">
              <h2 className="font-orbitron text-lg font-bold text-white mb-3">The Experience</h2>
              <p className="text-sm text-[#7DD3FC]/80 leading-relaxed">
                Zero Latency Houston offers 8 games spanning zombie survival, sci-fi missions, PvP esports, and family-friendly worlds. Sessions run 30 to 50 minutes depending on the game selected. Game Masters guide every session from arrival through the post-game replay — no prior VR experience required.
              </p>
            </div>

            <div className="glass rounded-2xl p-6">
              <h2 className="font-orbitron text-lg font-bold text-white mb-3">The Technology</h2>
              <p className="text-sm text-[#7DD3FC]/80 leading-relaxed">
                The arena runs on wireless TPCAST VR backpacks with sub-millisecond positional tracking across the full 2,000 sq ft space. Spatial audio immerses players in each game world while custom avatars make every player visible to teammates in real time. At the end of each session, a replay video is delivered via YouTube link so groups can relive their highlights.
              </p>
            </div>

            <div className="glass rounded-2xl p-6">
              <h2 className="font-orbitron text-lg font-bold text-white mb-3">Our Team</h2>
              <p className="text-sm text-[#7DD3FC]/80 leading-relaxed">
                Zero Latency Houston&apos;s Game Masters are trained VR facilitators. They run the pre-game briefing, monitor the session in real time, and respond within seconds if any player needs assistance. Every session has a dedicated Game Master on-site from start to finish.
              </p>
            </div>

            <div className="glass rounded-2xl p-6">
              <h2 className="font-orbitron text-lg font-bold text-white mb-3">Location</h2>
              <p className="text-sm text-[#7DD3FC]/80 leading-relaxed">
                20801 Gulf Fwy Suite 5, BayWay Village Shopping Center, Webster TX 77598. Free parking is available on-site. We are 10 minutes from NASA Johnson Space Center and 20 minutes from downtown Houston. Zero Latency Houston serves Houston, Clear Lake, League City, Pearland, Friendswood, and Galveston County.
              </p>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href="https://booking.zerolatencyvr.com/en/book-now/webster"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-orbitron font-black text-sm px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#000C1A] transition-colors duration-200 tracking-wide"
            >
              Book Your Zero Latency Houston Session
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
