import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top Tech Mobile Mechanic',
  description: 'ASE-certified mobile mechanic in The Woodlands, TX',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}