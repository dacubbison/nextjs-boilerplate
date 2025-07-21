import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top Tech Mobile Mechanic Services',
  description: 'ASE-certified mobile mechanic services in The Woodlands, Kingwood, and Montgomery County TX. Book diagnostics, inspections, and repairs near you.',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100"> {/* Optional styling */}
      {children}
    </div>
  );
}