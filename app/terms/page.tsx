import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Arcade Houston',
  description: 'Terms of Service for Arcade Houston VR arena. Read our booking, safety, and liability policies before your visit.',
  alternates: { canonical: 'https://arcadehouston.com/terms' },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: 'Eligibility',
    content: (
      <p className="text-sm text-[#7DD3FC]/80 leading-relaxed">
        Players must be a minimum of 13 years of age to participate. Players under 18 years of age require a parent or guardian waiver before entering the arena. Pregnant visitors and those with epilepsy, heart conditions, or motion sensitivity should consult a doctor before participating in VR sessions.
      </p>
    ),
  },
  {
    title: 'Bookings & Cancellations',
    content: (
      <p className="text-sm text-[#7DD3FC]/80 leading-relaxed">
        Sessions must be booked online at{' '}
        <a href="https://booking.zerolatencyvr.com/en/book-now/webster" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-white transition-colors">
          booking.zerolatencyvr.com
        </a>. Cancellations made with 48 or more hours' notice receive a full credit toward a future session. No-shows forfeit the session fee. Groups of 9 or more players must contact us directly to arrange back-to-back sessions.
      </p>
    ),
  },
  {
    title: 'Conduct & Safety',
    content: (
      <p className="text-sm text-[#7DD3FC]/80 leading-relaxed">
        All visitors must follow Game Master instructions at all times. Running, jumping, and aggressive physical contact are not permitted inside the arena. Players removed from a session for unsafe behavior will not receive a refund. Alcohol and drugs are strictly prohibited on the premises.
      </p>
    ),
  },
  {
    title: 'Equipment & Liability',
    content: (
      <p className="text-sm text-[#7DD3FC]/80 leading-relaxed">
        Equipment damage caused by negligence is the financial responsibility of the visitor who caused it. Zero Latency Webster, Houston is not liable for motion sickness, minor bumps, or disorientation that are typical of VR experiences. All visitors must sign a waiver before entering the arena.
      </p>
    ),
  },
  {
    title: 'Intellectual Property',
    content: (
      <p className="text-sm text-[#7DD3FC]/80 leading-relaxed">
        All game titles available at Zero Latency Webster, Houston are the property of their respective owners and are licensed to Zero Latency VR. All site content is &copy; 2026 Zero Latency Webster, Houston.
      </p>
    ),
  },
  {
    title: 'Changes to Terms',
    content: (
      <p className="text-sm text-[#7DD3FC]/80 leading-relaxed">
        We may update these Terms of Service from time to time. Continued use of our site or services following any changes constitutes your acceptance of the updated terms.
      </p>
    ),
  },
  {
    title: 'Contact',
    content: (
      <p className="text-sm text-[#7DD3FC]/80 leading-relaxed">
        Questions about these terms? Email{' '}
        <a href="mailto:zero@zlwebster.com" className="text-cyan-400 hover:text-white transition-colors">
          zero@zlwebster.com
        </a>{' '}
        or call{' '}
        <a href="tel:+14694049149" className="text-cyan-400 hover:text-white transition-colors">
          (469) 404-9149
        </a>.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-12">
          <h1 className="font-orbitron font-black text-4xl md:text-5xl text-[#ECFEFF] mb-6">
            Terms of Service
          </h1>
          <div className="glass rounded-2xl p-6">
            <p className="text-sm text-[#7DD3FC]/80 leading-relaxed">
              By booking a session or visiting Zero Latency Webster, Houston, you agree to these terms. Last updated: March 20, 2026.
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
