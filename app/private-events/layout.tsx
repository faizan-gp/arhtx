import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Houston Arcade Party Venue | Birthday, Corporate, Groups | Arcade Houston',
  description: 'Book private arcade parties in Houston. VR arena sessions for birthdays, corporate team building, bachelor parties, and groups of 2-8. Private arena access at Arcade Houston in Webster TX.',
  keywords: [
    'arcade birthday party houston',
    'houston party venue',
    'corporate team building houston',
    'bachelor party houston vr',
    'private arcade events houston',
    'group activities houston tx',
    'vr party houston',
    'arcade houston private events',
    'arcade houston',
  ],
  alternates: { canonical: 'https://arcadehouston.com/private-events' },
  openGraph: {
    title: 'Houston Arcade Party Venue | Birthday, Corporate, Groups | Arcade Houston',
    description: 'Book private arcade parties in Houston. VR arena for birthdays, corporate events, bachelor parties. 2-8 players. Webster TX.',
    url: 'https://arcadehouston.com/private-events',
    siteName: 'Arcade Houston',
    type: 'website',
    images: [{ url: 'https://arcadehouston.com/og-private-events.webp', width: 1200, height: 630, alt: 'Private Arcade Party Venue at Arcade Houston Houston' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Houston Arcade Party Venue | Birthday, Corporate, Groups | Arcade Houston',
    description: 'Private VR arena for birthdays, team building, and bachelor parties in Houston TX.',
  },
};

export default function PrivateEventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
