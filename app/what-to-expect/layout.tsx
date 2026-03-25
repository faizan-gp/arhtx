import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What to Expect at Arcade Houston | VR Visitor Guide',
  description: 'First time at our Houston VR arcade? 5-step guide: book online, check in, gear up, play, and debrief. Arrive 10-15 minutes early. Closed-toe shoes required.',
  keywords: [
    'what to expect arcade houston',
    'arcade houston visitor guide',
    'vr arcade houston first time',
    'free roam vr houston guide',
    'arcade houston how it works',
    'vr gaming houston tx',
    'houston arcade visit guide',
    'arcade houston',
  ],
  alternates: { canonical: 'https://arcadehouston.com/what-to-expect' },
  openGraph: {
    title: 'What to Expect at Arcade Houston | VR Visitor Guide',
    description: 'First time at Houston\'s VR arcade? 5-step guide: book, check in, gear up, play, debrief. Arrive 10-15 minutes early.',
    url: 'https://arcadehouston.com/what-to-expect',
    siteName: 'Arcade Houston',
    type: 'website',
    images: [{ url: 'https://arcadehouston.com/og-what-to-expect.webp', width: 1200, height: 630, alt: 'What to Expect at Arcade Houston VR Arcade' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What to Expect at Arcade Houston | VR Visitor Guide',
    description: '5-step guide to your Arcade Houston VR visit — booking, arrival, gear-up, gameplay, and debrief.',
  },
};

export default function WhatToExpectLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
