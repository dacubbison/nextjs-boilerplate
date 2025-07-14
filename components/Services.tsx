import Image from 'next/image';

const services = [
  { name: 'Blower Motor Repair', image: '/images/blower-motor-repair.jpg', alt: 'On-site blower motor replacement in The Woodlands, TX', description: 'Fixing HVAC issues right at your location.' },
  { name: 'Engine Diagnostics', image: '/images/engine-diagnostics.jpg', alt: 'Mobile engine diagnostics Montgomery County', description: 'Advanced tools for accurate problem identification.' },
  { name: 'Brake Service', image: '/images/brake-service.jpg', alt: 'Brake repairs near Kingwood', description: 'Safe, efficient brake inspections and replacements.' },
  { name: 'A/C Recharge & Repair', image: '/images/ac-recharge.jpg', alt: 'A/C system service in surrounding areas', description: 'Keeping you cool with on-site A/C fixes.' },
  { name: 'Hybrid/EV Services', image: '/images/hybrid-ev.jpg', alt: 'Hybrid battery repair The Woodlands', description: 'Specialized high-voltage repairs.' },
];

export default function Services() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.name} className="border p-4 rounded-lg shadow">
              <Image src={service.image} alt={service.alt} width={400} height={300} className="w-full h-48 object-cover mb-4" loading="lazy" />
              <h3 className="text-xl font-bold mb-2">{service.name}</h3>
              <p className="mb-4">{service.description}</p>
              <a href={`/book?service=${service.name.toLowerCase().replace(/ /g, '-')}&location=the-woodlands-tx`} className="bg-blue-500 text-white px-4 py-2 rounded">Book Now</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}