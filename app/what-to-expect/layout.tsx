import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What to Expect | Zero Latency Houston VR Visit Guide',
  description: 'Everything you need to know before visiting Zero Latency Houston. Step-by-step guide: booking, check-in, gear up, play, and rewatch your session. Houston free-roam VR explained.',
  keywords: [
    'what to expect Zero Latency Houston',
    'Zero Latency Houston guide',
    'VR experience Houston first time',
    'free roam VR Houston guide',
    'Zero Latency how it works',
    'VR gaming Houston TX',
    'Houston VR arena visit guide',
  ],
  alternates: { canonical: 'https://zerolatencyhouston.com/what-to-expect' },
  openGraph: {
    title: 'What to Expect | Zero Latency Houston VR Visit Guide',
    description: 'Step-by-step guide to your Zero Latency Houston visit — booking, arrival, gear-up, gameplay, and post-session highlights.',
    url: 'https://zerolatencyhouston.com/what-to-expect',
    siteName: 'Zero Latency Houston',
    type: 'website',
    images: [{ url: 'https://zerolatencyhouston.com/og-what-to-expect.webp', width: 1200, height: 630, alt: 'What to Expect at Zero Latency Houston' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What to Expect | Zero Latency Houston VR Visit Guide',
    description: 'Step-by-step guide to your Zero Latency Houston visit — booking, arrival, gear-up, gameplay, and post-session highlights.',
  },
};

export default function WhatToExpectLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
