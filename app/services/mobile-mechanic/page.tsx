// Updated MobileMechanic page.tsx
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import { ChevronRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function MobileMechanic() {
  const daysLeft = Math.floor((new Date('2025-08-20').getTime() - new Date().getTime()) / (1000 * 3600 * 24));

  return (
    <main className="max-w-4xl mx-auto p-6">
      {/* Hero Section - Visual + Value Prop */}
      <section className="service-hero text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Mobile Mechanic Services in The Woodlands TX</h1>
        <p className="text-lg mb-4">On-site auto repairs and maintenance in The Woodlands TX with fair and upfront pricing - often beat shop quotes by 50%!</p>
        <p className="text-green-500 font-bold mb-4">New Customer Special: 10% off! (Hurry—ends in {daysLeft} days)</p>
        <Image 
          src="/images/mobile-mechanic-woodlands.jpg" 
          alt="Mobile mechanic near me in The Woodlands TX for on-site auto repair, tune-ups, and brake service in Kingwood TX"
          width={400} 
          height={200} 
          loading="lazy" 
          className="rounded mx-auto max-w-full"
        />
      </section>

      {/* Details Section - What We Check + Benefits */}
      <section className="service-details mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center"><CheckCircleIcon className="h-6 w-6 mr-2 text-green-500" /> Our Mobile Mechanic Services</h2>
        <p className="mb-4">Expert repairs brought to your location for convenience and savings in Kingwood TX. We handle everything on-site.</p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li className="flex items-start"><ChevronRightIcon className="h-5 w-5 mr-2 text-blue-500" /> On-site repairs at your home or office in Kingwood TX</li>
          <li className="flex items-start"><ChevronRightIcon className="h-5 w-5 mr-2 text-blue-500" /> Tune-ups and maintenance</li>
          <li className="flex items-start"><ChevronRightIcon className="h-5 w-5 mr-2 text-blue-500" /> Brake service and repair</li>
          <li className="flex items-start"><ChevronRightIcon className="h-5 w-5 mr-2 text-blue-500" /> Suspension and steering</li>
          <li className="flex items-start"><ChevronRightIcon className="h-5 w-5 mr-2 text-blue-500" /> Engine and transmission work in Montgomery County TX</li>
        </ul>
        <p className="font-bold">Pricing: Varies by service—contact for quote. Benefits: No towing, fast service - 10% off for new customers!</p>
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

      {/* CTAs */}
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