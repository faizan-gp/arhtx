import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VR Experiences Houston | Zero Latency Houston',
  description: 'Explore six free-roam VR experience categories at Zero Latency Houston — zombie survival, sci-fi missions, PvP esports, family adventures, and VR horror. Up to 8 players, no controllers needed.',
  keywords: [
    'VR experiences Houston',
    'free roam VR Houston',
    'virtual reality experiences Houston TX',
    'Zero Latency Houston experiences',
    'group VR Houston',
    'zombie VR Houston',
    'VR horror Houston',
    'team VR Houston',
  ],
  alternates: { canonical: 'https://zerolatencyhouston.com/experiences' },
  openGraph: {
    title: 'VR Experiences Houston | Zero Latency Houston',
    description: 'Six free-roam VR categories in Houston — zombie survival, sci-fi, PvP esports, family, and horror. Up to 8 players.',
    url: 'https://zerolatencyhouston.com/experiences',
    siteName: 'Zero Latency Houston',
    type: 'website',
    images: [{ url: 'https://zerolatencyhouston.com/og-experiences.webp', width: 1200, height: 630, alt: 'VR Experiences at Zero Latency Houston' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VR Experiences Houston | Zero Latency Houston',
    description: 'Six free-roam VR categories in Houston — zombie survival, sci-fi, PvP esports, family, and horror.',
  },
};

export default function ExperiencesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
