import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top Tech Mobile Mechanic Services in The Woodlands, Kingwood, and Montgomery County TX',
  description: 'ASE-certified mobile mechanic services including diagnostics, inspections, and repairs near you with competitive pricing.',
  keywords: 'mobile mechanic near me, auto diagnostics The Woodlands TX, brake inspection Kingwood TX, battery check Montgomery County TX, oil change near me, hybrid repair The Woodlands, fleet maintenance Kingwood, car accessories installation Montgomery County',
  robots: 'index, follow',
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
    <div className="min-h-screen bg-gray-100"> {/* Optional styling */}
      {children}
    </div>
  );
}