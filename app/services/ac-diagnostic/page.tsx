// Updated ACDiagnostic page.tsx
'use client';

import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import { ChevronRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function ACDiagnostic() {
  // Countdown for urgency (ends 8/20/2025) - dynamic based on current date
  const daysLeft = Math.floor((new Date('2025-08-20').getTime() - new Date().getTime()) / (1000 * 3600 * 24));

  return (
    <main className="max-w-4xl mx-auto p-6">
      {/* Hero Section - Visual + Value Prop */}
      <section className="service-hero text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">AC Diagnostic and Repair in The Woodlands Kingwood and Montgomery County TX</h1>
        <p className="text-lg mb-4">Mobile AC inspections leak detection and recharges with fair and upfront pricing—often beat shop quotes by 50%!</p>
        <p className="text-green-500 font-bold mb-4">New Customer Special: 10% off! (Hurry—ends in {daysLeft} days)</p>
        <Image 
          src="/images/ac-recharge.jpg"  // Replace with 'https://images.unsplash.com/photo-1567098274474-9b92f1e1174e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80' for a professional mechanic fixing AC-like system (free from Unsplash)
          alt="ASE-certified mechanic diagnosing car AC near me"
          width={400} 
          height={200} 
          loading="lazy" 
          className="rounded mx-auto max-w-full"
        />
      </section>

      {/* Details Section - What We Check + Benefits */}
      <section className="service-details mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center"><CheckCircleIcon className="h-6 w-6 mr-2 text-green-500" /> Our AC Diagnostic Services</h2>
        <p className="mb-4">Fix cooling issues fast with on-site diagnostics and repairs in The Woodlands Kingwood and Montgomery County TX.</p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li className="flex items-start"><ChevronRightIcon className="h-5 w-5 mr-2 text-blue-500" /> AC system inspections</li>
          <li className="flex items-start"><ChevronRightIcon className="h-5 w-5 mr-2 text-blue-500" /> Leak detection and recharge</li>
          <li className="flex items-start"><ChevronRightIcon className="h-5 w-5 mr-2 text-blue-500" /> Efficient cooling restorations near me</li>
        </ul>
        <p className="font-bold">Pricing: Starts at $80. Benefits: Stay cool—10% off for new customers!</p>
      </section>

      {/* FAQs Section - Upgraded to Accordions */}
      <section className="faqs mb-8">
        <h2 className="text-2xl font-bold mb-4">FAQs About AC Diagnostics in The Woodlands Kingwood and Montgomery County TX</h2>
        <details className="mb-2 bg-white p-4 rounded shadow">
          <summary className="font-bold cursor-pointer">Why is my AC not cooling?</summary>
          <p>Common causes like low refrigerant—diagnosed quickly on-site.</p>
        </details>
        <details className="mb-2 bg-white p-4 rounded shadow">
          <summary className="font-bold cursor-pointer">What is the diagnostic cost?</summary>
          <p>$80 with no hidden fees.</p>
        </details>
      </section>

      {/* Related Services - Cross-Selling */}
      <section className="related-services mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Related Mobile Services</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <li><Link href="/services/battery-electrical" className="text-blue-600 hover:underline flex items-center justify-center"><ChevronRightIcon className="h-5 w-5 mr-1" /> Battery Check</Link></li>
          <li><Link href="/services/general-diagnostic" className="text-blue-600 hover:underline flex items-center justify-center"><ChevronRightIcon className="h-5 w-5 mr-1" /> General Diagnostic</Link></li>
          <li><Link href="/services/hybrid-ev" className="text-blue-600 hover:underline flex items-center justify-center"><ChevronRightIcon className="h-5 w-5 mr-1" /> Hybrid & EV Services</Link></li>
        </ul>
      </section>

      {/* CTAs */}
      <div className="cta-buttons text-center mb-8">
        <a href="tel:9365294748" className="call-now-btn">Call Now: 936-529-4748</a>
      </div>

      {/* Enhanced Schema for SEO */}
      <Script type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "AC Diagnostic",
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
            "priceRange": "$$  ",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AC Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AC Diagnostic Check"
                  },
                  "price": "80",
                  "priceCurrency": "USD"
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
          "description": "Mobile AC diagnostic and repair services near me in The Woodlands Kingwood and Montgomery County TX with fair pricing."
        })}
      </Script>
    </main>
  );
}