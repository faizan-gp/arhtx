import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Private VR Events Houston | Birthday Parties & Corporate Team Building',
  description: 'Book a private VR event at Zero Latency Houston. Perfect for birthday parties, corporate team building, bachelor parties, and group outings in Houston TX. Up to 8 players in a private arena.',
  keywords: [
    'birthday party ideas Houston',
    'corporate team building Houston',
    'bachelor party Houston VR',
    'private VR events Houston',
    'group activities Houston TX',
    'VR party Houston',
    'Zero Latency Houston private events',
    'team outing Houston',
  ],
  alternates: { canonical: 'https://zerolatencyhouston.com/private-events' },
  openGraph: {
    title: 'Private VR Events Houston | Zero Latency Houston',
    description: 'Birthday parties, corporate team building, and bachelor parties in Houston\'s premier free-roam VR arena. Private arena for your group.',
    url: 'https://zerolatencyhouston.com/private-events',
    siteName: 'Zero Latency Houston',
    type: 'website',
    images: [{ url: 'https://zerolatencyhouston.com/og-private-events.webp', width: 1200, height: 630, alt: 'Private VR Events at Zero Latency Houston' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private VR Events Houston | Zero Latency Houston',
    description: 'Birthday parties, corporate team building, and bachelor parties in Houston\'s premier free-roam VR arena.',
  },
};

export default function PrivateEventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
