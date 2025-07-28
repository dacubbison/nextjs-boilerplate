// app/services/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top Tech Mobile Mechanic',
  description: 'ASE-certified mobile mechanic in The Woodlands, TX',
  robots: 'index, follow', // For SEO
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>{children}</>
  );
}