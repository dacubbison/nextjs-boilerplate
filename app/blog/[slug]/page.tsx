// app/services/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import { ChevronRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const serviceData = {
  'tune-ups': {
    title: 'Mobile Tune-Ups Near Me in The Woodlands TX',
    desc: `I optimize your engine's performance for smoother operation, better fuel efficiency, and reduced emissions—perfect for vehicles facing the Texas heat in The Woodlands TX. From spark plugs to filters, I handle it on-site.`,
    image: '/images/mobile-mechanic-woodlands.jpg', // Placeholder
    faqs: [
      { q: 'How often should I get a tune-up?', a: 'Every 30,000 miles or if you notice rough idling—essential for Montgomery County drivers. Call or text for details.' },
    ],
  },
  'fuel-injection-service': {
    title: 'Fuel Injection Service in Kingwood TX',
    desc: `Cleaning or replacing fuel injectors to ensure efficient fuel delivery and prevent rough idling or poor acceleration near me in Kingwood TX. Includes diagnostic scan and cleaning.`,
    image: '/images/fuel-pump-repair.jpg', // Reused
    faqs: [
      { q: 'Signs of fuel injection issues?', a: 'Poor mileage or check engine light—common in humid Montgomery County. Call or text for details.' },
    ],
  },
  'oil-and-oil-filter-changes': {
    title: 'Mobil 1 Oil Change Near Me in Montgomery County TX',
    desc: `Quick, mess-free services using premium oils to keep your engine lubricated and protected, with a full fluid check included for Montgomery County drivers.`,
    image: '/images/mobile-oil-change-woodlands.jpg',
    faqs: [
      { q: 'How often should I change oil?', a: 'Every 5,000-7,500 miles for synthetic; we can advise based on your vehicle in The Woodlands TX.' },
      { q: 'What is included?', a: 'Oil, filter, fluid checks, and basic inspection. Call or text for details.' },
      { q: 'Why Mobil 1 synthetic?', a: 'Better protection and performance for modern engines—recommended for most vehicles near me.' },
    ],
  },
  'brake-pads-rotors-and-shoes': {
    title: 'Mobile Brake Inspection Near Me in The Woodlands TX',
    desc: `Thorough inspections and replacements to ensure your braking system is safe and responsive, with on-site service in The Woodlands TX.`,
    image: '/images/brake-service.jpg',
    faqs: [
      { q: 'When should I get brakes inspected?', a: 'Every 6 months or if you hear squeaking in Kingwood TX.' },
      { q: 'What is the inspection?', a: 'Clear repair recommendations. Call or text for details.' },
      { q: 'How often should I inspect brakes in Texas heat?', a: 'More frequently due to wear—every 6 months recommended for safety.' },
    ],
  },
  'a-c-check-and-repairs': {
    title: 'AC Diagnostic and Repair in The Woodlands Kingwood and Montgomery County TX',
    desc: `Diagnose and fix air conditioning issues to keep you cool on hot Texas days, including leak detection and refrigerant recharge near me.`,
    image: '/images/ac-recharge.jpg',
    faqs: [
      { q: 'Why is my AC not cooling?', a: 'Common causes like low refrigerant—diagnosed quickly on-site.' },
      { q: 'What is the diagnostic?', a: 'No hidden fees. Call or text for details.' },
    ],
  },
  'preventive-maintenance': {
    title: 'Preventive Maintenance in The Woodlands TX',
    desc: `Scheduled check-ups to catch issues early, extend your vehicle's lifespan, and avoid costly breakdowns—tailored for busy folks in The Woodlands TX.`,
    image: '/images/mobile-mechanic-woodlands.jpg', // Placeholder
    faqs: [
      { q: 'What does preventive maintenance include?', a: 'Full inspections and minor adjustments to keep your car running smoothly.' },
    ],
  },
  'cooling-systems-repairs': {
    title: 'Cooling Systems Repairs in Montgomery County TX',
    desc: `Flush, repair, or replace radiators and hoses to prevent overheating, especially important in our humid Montgomery County climate.`,
    image: '/images/fuel-pump-repair.jpg', // Reused
    faqs: [
      { q: 'Signs of cooling system issues?', a: 'Overheating or leaks—call for on-site diagnosis.' },
    ],
  },
  'starting-and-charging-systems': {
    title: 'Battery and Electrical Check Near Me in The Woodlands TX',
    desc: `Battery, starter, and alternator testing and replacement to restore reliable starting—I'll come to you in Kingwood TX for fast diagnostics.`,
    image: '/images/battery-test-3.jpg',
    faqs: [
      { q: 'How do I know if my battery is bad?', a: 'Slow starting or dim lights—our mobile test with advanced tools can confirm on-site in Kingwood TX.' },
      { q: 'What is the check?', a: 'Transparent recommendations. Call or text for details.' },
    ],
  },
  'suspension-services': {
    title: 'Suspension Services in Montgomery County TX',
    desc: `Inspect and repair shocks, struts, and components for a smoother, quieter, and safer ride—ideal for bumpy roads in Montgomery County.`,
    image: '/images/mobile-mechanic-woodlands.jpg', // Placeholder
    faqs: [
      { q: 'Signs of suspension problems?', a: 'Bumpy ride or unusual noises—on-site fix available.' },
    ],
  },
  'timing-belts-and-chains': {
    title: 'Timing Belts and Chains Replacement in Kingwood TX',
    desc: `Timely replacements to avoid major engine damage, with expert advice on when to schedule based on your vehicle's mileage near me in Kingwood TX.`,
    image: '/images/mobile-mechanic-woodlands.jpg', // Placeholder
    faqs: [
      { q: 'When to replace timing belt?', a: 'Every 60,000-100,000 miles—prevent costly repairs.' },
    ],
  },
  'roadside-flat-tire-changes': {
    title: 'Roadside Flat Tire Changes in The Woodlands TX',
    desc: `On-the-spot fixes or swaps to get you moving quickly, without the hassle of towing in The Woodlands area.`,
    image: '/images/brake-service.jpg', // Reused
    faqs: [
      { q: 'How fast can you arrive?', a: 'Typically within 30 minutes in The Woodlands area.' },
    ],
  },
  'lockouts': {
    title: 'Emergency Lockout Assistance in Montgomery County TX',
    desc: `Quick, damage-free assistance to regain access to your vehicle—available for emergency calls in Montgomery County TX.`,
    image: '/images/mobile-mechanic-woodlands.jpg', // Placeholder
    faqs: [
      { q: 'Do you damage the vehicle?', a: 'No, damage-free methods used every time.' },
    ],
  },
  'auto-diagnostics': {
    title: 'Mobile Auto Diagnostics in The Woodlands, Kingwood, and Montgomery County TX',
    desc: `Advanced diagnostic tools for vehicles—call or text for details.`,
    image: '/images/mobile-auto-diagnostics-woodlands.jpg',
    faqs: [
      { q: 'What does auto diagnostics cover?', a: 'Full scan for engine codes, performance issues, and more using advanced tools in The Woodlands, Kingwood, and Montgomery County TX.' },
      { q: 'What is the diagnostic?', a: 'No hidden fees. Call or text for details.' },
    ],
  },
  'car-accessories': {
    title: 'Car Accessories Installation Near Me in Montgomery County TX',
    desc: `Expert mobile installation for dash cams, GPS systems, audio upgrades, and more in The Woodlands TX.`,
    image: '/images/car-install-montgomerytx.jpg',
    faqs: [
      { q: 'What types of accessories do you install?', a: 'We handle electronics like dash cams, stereos, and lights for most vehicles in The Woodlands TX.' },
      { q: 'Is installation warrantied?', a: 'Yes, with satisfaction guarantee in Kingwood TX. Call or text for details.' },
    ],
  },
  'fleet-maintenance': {
    title: 'Fleet Maintenance Services Near Me in The Woodlands TX',
    desc: `Custom maintenance plans for business fleets in Montgomery County TX to keep your operations running smoothly.`,
    image: '/images/fleet-repair-montgomerytx.jpg',
    faqs: [
      { q: 'What fleets do you service?', a: 'Delivery vans, company cars, trucks—any business vehicles in Kingwood TX and surrounding areas.' },
      { q: 'How do plans work?', a: 'Customized recommendations with no hidden fees in Montgomery County TX—contact us for details.' },
    ],
  },
  'general-diagnostic': {
    title: 'General Vehicle Diagnostic Near Me in Montgomery County TX',
    desc: `Full system scans to identify performance issues in The Woodlands TX.`,
    image: '/images/fuel-pump-repair.jpg',
    faqs: [
      { q: 'What is included in a general diagnostic?', a: 'Engine, transmission, electrical, and more for a complete check on-site in The Woodlands TX.' },
      { q: 'How long does it take?', a: 'Typically 30-60 minutes at your location in Kingwood TX.' },
    ],
  },
  'hybrid-ev': {
    title: 'Hybrid and EV Repair Near Me in Montgomery County TX',
    desc: `Specialized mobile services for hybrids and EVs, including battery replacement and repairs in The Woodlands TX.`,
    image: '/images/hybrid-ev.jpg',
    faqs: [
      { q: 'Do you service Tesla and other EVs?', a: 'Yes, we handle most major brands with certified techs in The Woodlands TX.' },
      { q: 'What is the battery check?', a: 'Transparent recommendations on-site in Kingwood TX. Call or text for details.' },
    ],
  },
  'mobile-mechanic': {
    title: 'Mobile Mechanic Services in The Woodlands TX',
    desc: `On-site auto repairs and maintenance in The Woodlands TX.`,
    image: '/images/mobile-mechanic-woodlands.jpg',
    faqs: [
      { q: 'What types of repairs do you offer?', a: 'We handle brakes, suspension, engine, transmission, and more on-site in Kingwood TX.' },
      { q: 'Do you service hybrids/EVs?', a: 'Yes, specialized repairs for hybrids and EVs near me.' },
    ],
  },
  'new-car-inspection': {
    title: 'Pre-Purchase New Car Inspection Near Me in The Woodlands TX',
    desc: `Uncover hidden issues before you buy with our ASE-certified mobile inspections in Montgomery County TX.`,
    image: '/images/mobile-mechanic-woodlands.jpg',
    faqs: [
      { q: 'What does the inspection cover?', a: 'Engine, brakes, electrical, fluids, tires, and more for a complete evaluation on-site in Kingwood TX.' },
      { q: 'How long does it take?', a: 'About 1-2 hours at your location—no shop visit needed near me in Montgomery County TX.' },
    ],
  },
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = serviceData[resolvedParams.slug as keyof typeof serviceData];
  if (!service) return notFound();

  return (
    <main className="max-w-4xl mx-auto p-6">
      <section className="service-hero text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
        <p className="text-lg mb-4">{service.desc}</p>
        <p className="text-green-500 font-bold mb-4">New Customer Special! Call or text for details.</p>
        <Image 
          src={service.image}
          alt={`${service.title} service by mobile mechanic in The Woodlands TX`}
          width={400}
          height={200}
          loading="lazy"
          className="rounded mx-auto max-w-full"
        />
      </section>

      <section className="service-details mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center"><CheckCircleIcon className="h-6 w-6 mr-2 text-green-500" /> Service Details</h2>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li className="flex items-start"><ChevronRightIcon className="h-5 w-5 mr-2 text-blue-500" /> On-site diagnostics and repairs</li>
          <li className="flex items-start"><ChevronRightIcon className="h-5 w-5 mr-2 text-blue-500" /> No hidden fees</li>
        </ul>
        <p className="font-bold">Call or text for details and to schedule.</p>
      </section>

      <section className="faqs mb-8">
        <h2 className="text-2xl font-bold mb-4">FAQs</h2>
        {service.faqs.map((faq, i) => (
          <details key={i} className="mb-2 bg-white p-4 rounded shadow">
            <summary className="font-bold cursor-pointer">{faq.q}</summary>
            <p>{faq.a}</p>
          </details>
        ))}
      </section>

      <section className="related-services mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Related Services</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <li><Link href="/services/auto-diagnostics" className="text-blue-600 hover:underline flex items-center justify-center"><ChevronRightIcon className="h-5 w-5 mr-1" /> Auto Diagnostics</Link></li>
          <li><Link href="/services/brake-pads-rotors-and-shoes" className="text-blue-600 hover:underline flex items-center justify-center"><ChevronRightIcon className="h-5 w-5 mr-1" /> Brake Inspection</Link></li>
          <li><Link href="/services/hybrid-ev" className="text-blue-600 hover:underline flex items-center justify-center"><ChevronRightIcon className="h-5 w-5 mr-1" /> Hybrid & EV</Link></li>
        </ul>
      </section>

      <div className="text-center mb-8">
        <a href="tel:9365294748" className="bg-blue-600 text-white py-2 px-4 rounded">Call Now: 936-529-4748</a>
      </div>

      <Script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": service.title.replace(' in The Woodlands TX', ''),
          "provider": {
            "@type": "LocalBusiness",
            "name": "Top Tech Mobile Mechanic",
            "telephone": "936-529-4748",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "15392 Rusty Oak Trl Ste 200",
              "addressLocality": "Conroe",
              "addressRegion": "TX",
              "postalCode": "77302"
            },
          },
          "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 30.1658,
              "longitude": -95.4613
            },
            "geoRadius": "50000"
          },
          "description": service.desc
        })}
      </Script>
    </main>
  );
}