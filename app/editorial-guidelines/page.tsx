import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Editorial Guidelines | Arcade Houston',
  description: 'Editorial standards for content published on Arcade Houston — accuracy, expertise, and transparency policies for our Houston arcade and VR gaming guide.',
  alternates: { canonical: 'https://arcadehouston.com/editorial-guidelines' },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: 'Who We Are',
    content: (
      <p className="text-sm text-[#7DD3FC]/80 leading-relaxed">
        Content published on arcadehouston.com is written and reviewed by the Zero Latency Webster, Houston team — staff with direct, hands-on experience running and playing free-roam VR sessions in Houston. Our writers have operated sessions, briefed hundreds of players, and tested every game title available in our arena.
      </p>
    ),
  },
  {
    title: 'Our Content Standards',
    content: (
      <ul className="text-sm text-[#7DD3FC]/80 leading-relaxed space-y-2 list-none">
        <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0 mt-0.5">—</span> Direct answers first — no padding or filler content.</li>
        <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0 mt-0.5">—</span> Specific numbers over vague claims whenever possible.</li>
        <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0 mt-0.5">—</span> Facts verified against Zero Latency VR&apos;s official game documentation and on-site experience.</li>
        <li className="flex items-start gap-2"><span className="text-cyan-400 flex-shrink-0 mt-0.5">—</span> No AI-generated content published without human review and factual verification.</li>
      </ul>
    ),
  },
  {
    title: 'Accuracy Policy',
    content: (
      <p className="text-sm text-[#7DD3FC]/80 leading-relaxed">
        Game specs, pricing, and session details published on this site reflect current operations at Zero Latency Webster, Houston. When details change, we update the relevant page within 7 days. Historical blog posts are reviewed quarterly to ensure accuracy.
      </p>
    ),
  },
  {
    title: 'Corrections Policy',
    content: (
      <p className="text-sm text-[#7DD3FC]/80 leading-relaxed">
        If we publish incorrect information, we correct it promptly and note the correction at the top of the affected post. We do not silently edit posts after publication — any factual change is disclosed.
      </p>
    ),
  },
  {
    title: 'Independence',
    content: (
      <p className="text-sm text-[#7DD3FC]/80 leading-relaxed">
        Zero Latency Webster, Houston creates content about its own services and the Houston VR and entertainment space. We are affiliated with Zero Latency VR (the global brand and technology provider). This relationship is disclosed where relevant to the content.
      </p>
    ),
  },
  {
    title: 'Contact',
    content: (
      <p className="text-sm text-[#7DD3FC]/80 leading-relaxed">
        Questions about our editorial standards? Email us at{' '}
        <a href="mailto:zero@zlwebster.com" className="text-cyan-400 hover:text-white transition-colors">
          zero@zlwebster.com
        </a>.
      </p>
    ),
  },
];

export default function EditorialGuidelinesPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-12">
          <h1 className="font-orbitron font-black text-4xl md:text-5xl text-[#ECFEFF] mb-6">
            Editorial Guidelines
          </h1>
          <div className="glass rounded-2xl p-6">
            <p className="text-sm text-[#7DD3FC]/80 leading-relaxed">
              All content published on arcadehouston.com meets the following editorial standards. Last reviewed: March 20, 2026.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {sections.map((section) => (
            <div key={section.title} className="glass rounded-2xl p-6">
              <h2 className="font-orbitron text-lg font-bold text-white mb-3">
                {section.title}
              </h2>
              {section.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
