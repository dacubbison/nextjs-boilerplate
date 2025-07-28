// lib/services.ts
// Static data; replace with a DB/API if scaling up
const servicesData = [
  {
    slug: 'mobile-mechanic-the-woodlands-tx',
    title: 'Mobile Mechanic in The Woodlands TX',
    desc: 'On-site repairs and maintenance performed at your location for ultimate convenience.',
    image: '/images/mobile-mechanic-woodlands.jpg',
  },
  {
    slug: 'mobil-1-oil-change',
    title: 'Mobil 1 Oil Change',
    desc: 'Premium synthetic oil changes delivered mobile to keep your engine running smoothly.',
    image: '/images/mobile-oil-change-woodlands.jpg',
  },
  {
    slug: 'a-c-check-and-repairs',
    title: 'AC Diagnostic Check',
    desc: 'Mobile AC system inspections and repairs to ensure your vehicle stays cool on the road.',
    image: '/images/ac-service.jpg',
  },
  {
    slug: 'brake-inspection',
    title: 'Brake Inspection',
    desc: 'Safety-focused brake checks and repairs done at your location.',
    image: '/images/brake-service-2.jpg',
  },
  {
    slug: 'battery-electrical-check',
    title: 'Battery Electrical Check',
    desc: 'Testing for batteries and electrical systems with mobile diagnostics.',
    image: '/images/battery-test-3.jpg',
  },
  {
    slug: 'mobile-auto-diagnostic-kingwood-tx',
    title: 'Mobile Auto Diagnostic in Kingwood TX',
    desc: 'Advanced diagnostic tools for vehicles, brought directly to you.',
    image: '/images/fuel-pump-repair.jpg',
  },
  {
    slug: 'car-accessories-installation',
    title: 'Car Accessories Installation',
    desc: 'Mobile installation for dash cams, GPS, and other accessories.',
    image: '/images/car-install-montgomerytx.jpg',
  },
  {
    slug: 'fleet-maintenance',
    title: 'Fleet Maintenance',
    desc: 'Custom plans for business fleets with on-site service.',
    image: '/images/fleet-repair-montgomerytx.jpg',
  },
  {
    slug: 'hybrid-ev-repair',
    title: 'Hybrid & EV Repair',
    desc: 'Specialized mobile repair for hybrid and electric vehicles.',
    image: '/images/hybrid-ev.jpg',
  },
  // Add more services from your real website if needed (e.g., tune-ups, fuel injection) without pricing mentions
];

export function getAllServices() {
  return servicesData;
}

export function getServiceBySlug(slug: string) {
  return servicesData.find((service) => service.slug === slug) || null;
}