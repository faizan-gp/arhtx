import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Arcade Houston',
  description: 'Privacy Policy for Arcade Houston. Learn how we collect, use, and protect your personal information.',
  alternates: { canonical: 'https://arcadehouston.com/privacy-policy' },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: 'Information We Collect',
    content: (
      <>
        <p className="text-sm text-[#7DD3FC]/80 leading-relaxed">
          We collect information you provide directly when using our booking form: your name, email address, and phone number. We also collect usage data — including page views and clicks — through Google Analytics and Meta Pixel. Additionally, we automatically collect your IP address and browser type when you visit our site.
        </p>
      </>
    ),
  },
  {
    title: 'How We Use Your Information',
    content: (
      <>
        <p className="text-sm text-[#7DD3FC]/80 leading-relaxed">
          We use your information to process bookings and send booking confirmations, to improve the site experience through analytics, and for marketing purposes. You may opt out of marketing communications at any time by contacting us at zero@zlwebster.com.
        </p>
      </>
    ),
  },
  {
    title: 'Cookies',
    content: (
      <>
        <p className="text-sm text-[#7DD3FC]/80 leading-relaxed">
          Zero Latency Webster, Houston uses Google Analytics (with anonymized IP addresses), Meta Pixel, and session cookies to improve your experience on our site. You can opt out of cookies at any time through your browser settings. Disabling cookies may affect certain site features.
        </p>
      </>
    ),
  },
  {
    title: 'Third-Party Services',
    content: (
      <>
        <p className="text-sm text-[#7DD3FC]/80 leading-relaxed">
          We use the following third-party services: Google Analytics for site usage analysis, Meta Pixel for advertising measurement, and the Zero Latency VR booking system at booking.zerolatencyvr.com for session reservations. We do not sell your personal data to any third party.
        </p>
      </>
    ),
  },
  {
    title: 'Data Retention',
    content: (
      <>
        <p className="text-sm text-[#7DD3FC]/80 leading-relaxed">
          Booking data is retained for 12 months following your session. Analytics data is retained according to Google's and Meta's respective data retention policies.
        </p>
      </>
    ),
  },
  {
    title: 'Your Rights',
    content: (
      <>
        <p className="text-sm text-[#7DD3FC]/80 leading-relaxed">
          You have the right to request deletion of your personal data and to opt out of marketing communications at any time. To exercise these rights, contact us at{' '}
          <a href="mailto:zero@zlwebster.com" className="text-cyan-400 hover:text-white transition-colors">
            zero@zlwebster.com
          </a>.
        </p>
      </>
    ),
  },
  {
    title: 'Contact',
    content: (
      <>
        <p className="text-sm text-[#7DD3FC]/80 leading-relaxed">
          Zero Latency Webster, Houston<br />
          20801 Gulf Fwy Suite 5, Webster TX 77598<br />
          <a href="mailto:zero@zlwebster.com" className="text-cyan-400 hover:text-white transition-colors">zero@zlwebster.com</a><br />
          <a href="tel:+14694049149" className="text-cyan-400 hover:text-white transition-colors">(469) 404-9149</a>
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-12">
          <h1 className="font-orbitron font-black text-4xl md:text-5xl text-[#ECFEFF] mb-6">
            Privacy Policy
          </h1>
          <div className="glass rounded-2xl p-6">
            <p className="text-sm text-[#7DD3FC]/80 leading-relaxed">
              Zero Latency Webster, Houston operates at 20801 Gulf Fwy Suite 5, Webster TX 77598. This policy explains what data we collect and how we use it. Last updated: March 20, 2026.
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
