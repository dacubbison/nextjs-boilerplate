import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top Tech Mobile Mechanic Services in The Woodlands, Kingwood, and Montgomery County TX',
  description: 'ASE-certified mobile mechanic services including diagnostics, inspections, and repairs near you with competitive pricing.',
  keywords: 'mobile mechanic near me The Woodlands TX Kingwood TX Montgomery County TX auto diagnostics brake inspection battery check oil change hybrid repair fleet maintenance car accessories installation',
  robots: 'index follow',
  openGraph: {
    title: 'Top Tech Mobile Mechanic Services',
    description: 'On-site auto repairs and diagnostics in The Woodlands, Kingwood, and Montgomery County TX.',
    url: 'https://toptechmobile.com/services',
    type: 'website',
    images: '/images/mobile-mechanic-woodlands.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Tech Mobile Mechanic Services',
    description: 'ASE-certified mobile services near you.',
    images: '/images/mobile-mechanic-woodlands.jpg',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      {children}
    </div>
  );
}