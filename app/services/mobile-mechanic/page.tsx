'use client';

import { useState } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import { ChevronRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function MobileMechanic() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [address, setAddress] = useState('');
  const [zip, setZip] = useState('');
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [vin, setVin] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const toggleBookModal = () => setIsBookModalOpen(!isBookModalOpen);

  const safeZips = ['77301', '77302', '77303', '77304', '77305', '77306', '77316', '77318', '77327', '77328', '77353', '77354', '77355', '77356', '77357', '77362', '77365', '77372', '77373', '77378', '77380', '77381', '77382', '77384', '77385', '77386', '77388', '77389', '77393'];

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanedZip = zip.trim().replace(/-/g, '');
    if (!safeZips.includes(cleanedZip)) {
      setErrorMessage('You may be outside our service area. Please call us at 936-529-4748 for assistance.');
      return;
    }
    setErrorMessage('');
    const calendlyUrl = `https://calendly.com/david-toptechmobile/general-vehicle-diagnostic-100?a1=${encodeURIComponent(cleanedZip)}&a2=${encodeURIComponent(address)}&a3=${encodeURIComponent(year)}&a4=${encodeURIComponent(make)}&a5=${encodeURIComponent(model)}&a6=${encodeURIComponent(vin)}`;
    window.open(calendlyUrl, '_blank');
    toggleBookModal();
  };

  const years = Array.from({ length: 46 }, (_, i) => (2025 - i).toString());
  const makes = ['Acura', 'Audi', 'BMW', 'Cadillac', 'Chevrolet', 'Chrysler', 'Dodge', 'Fiat', 'Ford', 'GMC', 'Honda', 'Hyundai', 'Infiniti', 'Jaguar', 'Jeep', 'Kia', 'Land Rover', 'Lexus', 'Lincoln', 'Mazda', 'Mercedes-Benz', 'Mini', 'Mitsubishi', 'Nissan', 'Porsche', 'Ram', 'Subaru', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo'];

  // Countdown for urgency (ends 8/20/2025)
  const daysLeft = Math.floor((new Date('2025-08-20').getTime() - new Date().getTime()) / (1000 * 3600 * 24));

  return (
    <main className="max-w-4xl mx-auto p-6">
      {/* Hero Section - Visual + Value Prop */}
      <section className="service-hero text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Mobile Mechanic Services in The Woodlands TX</h1>
        <p className="text-lg mb-4">On-site auto repairs and maintenance in The Woodlands TX with fair and upfront pricing—often beat shop quotes by 50%!</p>
        <p className="text-green-500 font-bold mb-4">New Customer Special: 10% off! (Hurry—ends in {daysLeft} days)</p>
        <Image 
          src="/images/mobile-mechanic-woodlands.jpg" 
          alt="Mobile mechanic performing on-site auto repair near me in The Woodlands TX" 
          width={800} 
          height={400} 
          loading="lazy" 
          className="rounded mx-auto"
        />
      </section>

      {/* Details Section - What We Check + Benefits */}
      <section className="service-details mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center"><CheckCircleIcon className="h-6 w-6 mr-2 text-green-500" /> Our Mobile Mechanic Services</h2>
        <p className="mb-4">Expert repairs brought to your location for convenience and savings in Kingwood TX. We handle everything on-site.</p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li className="flex items-start"><ChevronRightIcon className="h-5 w-5 mr-2 text-blue-500" /> On-site repairs at your home or office</li>
          <li className="flex items-start"><ChevronRightIcon className="h-5 w-5 mr-2 text-blue-500" /> Tune-ups and preventive maintenance</li>
          <li className="flex items-start"><ChevronRightIcon className="h-5 w-5 mr-2 text-blue-500" /> Brake service and repair</li>
          <li className="flex items-start"><ChevronRightIcon className="h-5 w-5 mr-2 text-blue-500" /> Suspension and steering adjustments</li>
          <li className="flex items-start"><ChevronRightIcon className="h-5 w-5 mr-2 text-blue-500" /> Engine and transmission work near me in Montgomery County TX</li>
        </ul>
        <p className="font-bold">Pricing: Varies by service—contact for quote. Benefits: No towing, fast service, 10% off for new customers!</p>
      </section>

      {/* FAQs Section - Upgraded to Accordions */}
      <section className="faqs mb-8">
        <h2 className="text-2xl font-bold mb-4">FAQs About Mobile Mechanic Services in The Woodlands TX</h2>
        <details className="mb-2 bg-white p-4 rounded shadow">
          <summary className="font-bold cursor-pointer">What types of repairs do you offer?</summary>
          <p>We handle brakes, suspension, engine, transmission, and more on-site in Kingwood TX.</p>
        </details>
        <details className="mb-2 bg-white p-4 rounded shadow">
          <summary className="font-bold cursor-pointer">How much do you save compared to shops?</summary>
          <p>Up to 50% by coming to you—share your quote for a match in Montgomery County TX!</p>
        </details>
        <details className="mb-2 bg-white p-4 rounded shadow">
          <summary className="font-bold cursor-pointer">Do you service hybrids/EVs?</summary>
          <p>Yes, specialized repairs for hybrids and EVs near me.</p>
        </details>
      </section>

      {/* Related Services - Cross-Selling */}
      <section className="related-services mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Related Mobile Services</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <li><Link href="/services/auto-diagnostics" className="text-blue-600 hover:underline flex items-center justify-center"><ChevronRightIcon className="h-5 w-5 mr-1" /> Auto Diagnostics</Link></li>
          <li><Link href="/services/mobil-oil-change" className="text-blue-600 hover:underline flex items-center justify-center"><ChevronRightIcon className="h-5 w-5 mr-1" /> Mobil 1 Oil Change</Link></li>
          <li><Link href="/services/brake-inspection" className="text-blue-600 hover:underline flex items-center justify-center"><ChevronRightIcon className="h-5 w-5 mr-1" /> Brake Inspection</Link></li>
        </ul>
      </section>

      {/* CTAs - Removed Book Now */}
      <div className="cta-buttons text-center mb-8">
        <a href="tel:9365294748" className="call-now-btn">Call Now: 936-529-4748</a>
      </div>

      {/* Enhanced Schema for SEO */}
      <Script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Mobile Mechanic Services",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Top Tech Mobile Mechanic",
            "telephone": "936-529-4748",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "The Woodlands",
              "addressRegion": "TX",
              "postalCode": "77381"
            },
            "priceRange": "$$",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Mobile Mechanic Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "On-Site Auto Repairs"
                  }
                }
              ]
            }
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
          "description": "On-site auto repairs, tune-ups, brake service, suspension, and engine work near me in The Woodlands TX, Kingwood TX, and Montgomery County TX with fair pricing."
        })}
      </Script>
    </main>
  );
}