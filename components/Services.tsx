// components/Services.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Services() {
  const mainServices = [
    { title: 'Mobile Mechanic in The Woodlands TX', desc: 'On-site repairs and maintenance.', image: '/images/mobile-mechanic-woodlands.jpg', slug: 'mobile-mechanic' },
    { title: 'Mobil 1 Oil Change', desc: 'Premium synthetic oil change.', image: '/images/mobile-oil-change-woodlands.jpg', slug: 'oil-and-oil-filter-changes' },
    { title: 'AC Diagnostic Check', desc: 'AC system inspections and repairs.', image: '/images/ac-service.jpg', slug: 'a-c-check-and-repairs' },
    { title: 'Brake Inspection', desc: 'Safety-focused brake checks.', image: '/images/brake-service-2.jpg', slug: 'brake-pads-rotors-and-shoes' },
    { title: 'Battery Electrical Check', desc: 'Testing for batteries and electrical systems.', image: '/images/battery-test-3.jpg', slug: 'starting-and-charging-systems' },
    { title: 'Mobile Auto Diagnostic in Kingwood TX', desc: 'Advanced diagnostic tools for vehicles.', image: '/images/fuel-pump-repair.jpg', slug: 'auto-diagnostics' },
    { title: 'Car Accessories Installation', desc: 'Installation for dash cams, GPS.', image: '/images/car-install-montgomerytx.jpg', slug: 'car-accessories' },
    { title: 'Fleet Maintenance', desc: 'Custom plans for business fleets.', image: '/images/fleet-repair-montgomerytx.jpg', slug: 'fleet-maintenance' },
    { title: 'Hybrid & EV Repair', desc: 'Specialized repair for hybrids and EVs.', image: '/images/hybrid-ev.jpg', slug: 'hybrid-ev' },
  ];

  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const toggleQuoteModal = () => setIsQuoteModalOpen(!isQuoteModalOpen);

  return (
    <section className="services-section py-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-navy-900">Mobile Auto Services in The Woodlands TX and Montgomery County</h2>
      <p className="text-center max-w-3xl mx-auto mb-10">As your local ASE-certified mobile mechanic near me in The Woodlands TX, I specialize in convenient, on-site services. From routine maintenance to complex repairs, I handle it all with precision and care right at your home or office in Kingwood TX or Montgomery County. Limited time: 10% off first service!</p>

      {/* Card Grid for Main Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
        {mainServices.map((service) => (
          <div key={service.slug} className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <Image 
              src={service.image} 
              alt={`${service.title} by ASE-certified mobile mechanic in The Woodlands TX - Top Tech Mobile`} 
              width={200} 
              height={150} 
              className="rounded mx-auto mb-4 object-cover" 
              loading="lazy" 
            />
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="mb-4">{service.desc}</p>
            <div className="flex justify-center gap-4">
              <Link href={`/services/${service.slug}`} className="bg-blue-600 text-white py-2 px-4 rounded" aria-label={`Learn more about ${service.title} in The Woodlands TX`}>Learn More</Link>
              <button onClick={toggleQuoteModal} className="bg-green-500 text-white py-2 px-4 rounded" aria-label={`Get free quote for ${service.title} - mobile mechanic near me`}>Get Free Quote</button>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Services Text Section without Pic */}
      <div className="additional-services max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-4 text-blue-600">Additional Services</h3>
        <div className="service-group mb-8">
          <h4 className="text-xl font-bold text-center mb-4">Maintenance & Diagnostics</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Tune-Ups:</strong> I optimize your engine's performance for smoother operation, better fuel efficiency, and reduced emissions—perfect for vehicles facing the Texas heat in The Woodlands TX.</li>
            <li><strong>Fuel Injection Service:</strong> Cleaning or replacing fuel injectors to ensure efficient fuel delivery and prevent rough idling or poor acceleration near me in Kingwood TX.</li>
            <li><strong>Oil and Oil Filter Changes:</strong> Quick, mess-free services using premium oils to keep your engine lubricated and protected, with a full fluid check included for Montgomery County drivers.</li>
            <li><strong>Preventive Maintenance:</strong> Scheduled check-ups to catch issues early, extend your vehicle's lifespan, and avoid costly breakdowns—tailored for busy folks in The Woodlands TX.</li>
            <li><strong>A/C Check and Repairs:</strong> Diagnose and fix air conditioning issues to keep you cool on hot Texas days, including leak detection and refrigerant recharge near me.</li>
            <li><strong>Cooling Systems Repairs:</strong> Flush, repair, or replace radiators and hoses to prevent overheating, especially important in our humid Montgomery County climate.</li>
            <li><strong>Starting and Charging Systems:</strong> Battery, starter, and alternator testing and replacement to restore reliable starting—I'll come to you in Kingwood TX for fast diagnostics.</li>
          </ul>
        </div>
        <div className="service-group mb-8">
          <h4 className="text-xl font-bold text-center mb-4">Repairs & Roadside Assistance</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Brake Pads, Rotors, and Shoes:</strong> Thorough inspections and replacements to ensure your braking system is safe and responsive, with on-site service in The Woodlands TX.</li>
            <li><strong>Suspension Services:</strong> Inspect and repair shocks, struts, and components for a smoother, quieter, and safer ride—ideal for bumpy roads in Montgomery County.</li>
            <li><strong>Timing Belts and Chains:</strong> Timely replacements to avoid major engine damage, with expert advice on when to schedule based on your vehicle's mileage near me in Kingwood TX.</li>
            <li><strong>Roadside Flat Tire Changes:</strong> On-the-spot fixes or swaps to get you moving quickly, without the hassle of towing in The Woodlands area.</li>
            <li><strong>Lockouts:</strong> Quick, damage-free assistance to regain access to your vehicle—available for emergency calls in Montgomery County TX.</li>
            <li><strong>Jumpstart / No Start Service:</strong> Quick battery jumpstarts and diagnostics for no-start issues to get you back on the road fast in The Woodlands TX.</li>
          </ul>
        </div>
      </div>
      <p className="text-center mt-8">If you don't see your need, call me at 936-529-4748 for a custom quote. Committed to honest pricing and fast service in The Woodlands TX! Beat any shop quote by up to 50%.</p>

      {/* Placeholder for AI Chatbot */}
      <div className="ai-chatbot" onClick={() => alert('AI Chatbot coming soon - integrate with xAI API for instant quotes!')}>
        Chat with AI Mechanic
      </div>

      {/* Quote Modal (Reused from Hero) */}
      {isQuoteModalOpen && (
        <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={toggleQuoteModal}>
          <div className="modal-content bg-white p-6 rounded-lg max-w-md" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold mb-4 text-center">Get a Free Quote</h2>
            <p className="mb-4 text-center">Call or text me at <a href="tel:9365294748" className="text-blue-600 underline">936-529-4748</a> for a personalized quote!</p>
            <p className="mb-4 text-center">Or leave your details below, and I’ll reach out:</p>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" required aria-label="Your Name" />
              <input type="tel" placeholder="Your Phone" className="w-full p-2 border rounded" required aria-label="Your Phone Number" />
              <input type="email" placeholder="Your Email (optional)" className="w-full p-2 border rounded" aria-label="Your Email" />
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Submit</button>
            </form>
            <button onClick={toggleQuoteModal} className="mt-4 w-full bg-red-500 text-white py-2 rounded">Close</button>
          </div>
        </div>
      )}
    </section>
  );
}