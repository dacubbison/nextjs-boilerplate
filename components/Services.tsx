import Image from 'next/image';

const services = [
  { name: 'Mobile Mechanic', image: '/images/mobile-mechanic-kingwood-tx.png', alt: 'Mobile mechanic in Kingwood TX', bullets: ['On-site repairs at your location', 'Tune-ups, brake service, and more', 'Fast, reliable, ASE-certified technicians'] },
  { name: 'Mobile Auto Diagnostics', image: '/images/mobile-auto-diagnostics-montgomerytx.jpg', alt: 'Mobile auto diagnostics Montgomery County', bullets: ['Advanced on-site diagnostics', 'Identify issues before they worsen', 'Quick and accurate results'] },
  { name: 'Car Accessories Installation', image: '/images/car-install-montgomerytx.jpg', alt: 'Car accessories installation Montgomery County', bullets: ['Professional installation of dash cams, GPS, and more', 'Custom solutions for your vehicle', 'Hassle-free setup'] },
  { name: 'Fleet Maintenance', image: '/images/fleet-repair-montgomerytx.jpg', alt: 'Fleet repair Montgomery County TX', bullets: ['Regular maintenance for business fleets', 'Minimize downtime with on-site service', 'Tailored plans for your needs'] },
  { name: 'Mobil One Oil Changes', image: '/images/mobile-oil-change.jpg', alt: 'Mobile oil change The Woodlands TX', bullets: ['High-quality oil and filters', 'Maintain engine health and performance in Montgomery County', 'Quick, on-site service'] },
  { name: 'Hybrid/EV Services', image: '/images/hybrid-ev.jpg', alt: 'Hybrid EV services The Woodlands TX', bullets: ['Specialized high-voltage repairs', 'Battery testing and replacement', 'Eco-friendly vehicle maintenance'] },
];

export default function Services() {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Mobile Auto Services in The Woodlands, TX and Montgomery County</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.name} className="border p-4 rounded-lg shadow bg-white">
              <Image src={service.image} alt={service.alt} width={600} height={300} className="w-full h-64 object-cover mb-4" loading="lazy" />
              <h3 className="text-xl font-bold mb-2">{service.name}</h3>
              <ul className="list-disc pl-5 mb-4">
                {service.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="/book?service=general&location=the-woodlands-tx" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">Book a Service Now</a>
        </div>
      </div>
    </section>
  );
}