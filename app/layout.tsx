import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top Tech Mobile Mechanic',
  description: 'ASE-certified mobile mechanic in The Woodlands, TX',
  robots: 'index, follow', // For SEO
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" as="style" />
        <link rel="preload" href="/images/mobile-mechanic-kingwood-tx.png" as="image" />
      </head>
      <body>{children}</body>
    </html>
  );
}