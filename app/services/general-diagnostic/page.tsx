// Updated GeneralDiagnostic page.tsx
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import { ChevronRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function GeneralDiagnostic() {
  const daysLeft = Math.floor((new Date('2025-08-20').getTime() - new Date().getTime()) / (1000 * 3600 * 24));

  return (
    <main className="max-w-4xl mx-auto p-6">
      {/* Hero Section - Visual + Value Prop */}
      <section className="service-hero text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">General Vehicle Diagnostic Near Me in Montgomery County TX</h1>
        <p className="text-lg mb-4">Full system scans to identify performance issues in The Woodlands TX with fair and upfront pricing - often beat shop quotes by 50%!</p>
        <p className="text-green-500 font-bold mb-4">New Customer Special: 10% off! (Hurry—ends in {daysLeft} days)</p>
        <Image 
          src="/images/fuel-pump-repair.jpg" 
          alt="General vehicle diagnostic near me in Montgomery County TX with comprehensive checks"
          width={400} 
          height={200} 
          loading="lazy" 
          className="rounded mx-auto max-w-full"
        />
      </section>

      {/* Details Section - What We Check + Benefits */}
      <section className="service-details mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center"><CheckCircleIcon className="h-6 w-6 mr-2 text-green-500" /> Our General Diagnostic Services</h2>
        <p className="mb-4">Complete vehicle health checks using advanced tools for accurate diagnosis in Kingwood TX. We come to you for quick results.</p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li className="flex items-start"><ChevronRightIcon className="h-5 w-5 mr-2 text-blue-500" /> Full system scan in The Woodlands TX</li>
          <li className="flex items-start"><ChevronRightIcon className="h-5 w-5 mr-2 text-blue-500" /> Identify performance issues</li>
          <li className="flex items-start"><ChevronRightIcon className="h-5 w-5 mr-2 text-blue-500" /> Accurate results near me in Kingwood TX</li>
        </ul>
        <p className="font-bold">Pricing: Starts at $100. Benefits: Pinpoint problems fast - 10% off for new customers!</p>
      </section>

      {/* FAQs Section - Upgraded to Accordions */}
      <section className="faqs mb-8">
        <h2 className="text-2xl font-bold mb-4">FAQs About General Diagnostics in Montgomery County TX</h2>
        <details className="mb-2 bg-white p-4 rounded shadow">
          <summary className="font-bold cursor-pointer">What is included in a general diagnostic?</summary>
          <p>Engine, transmission, electrical, and more for a complete check on-site in The Woodlands TX.</p>
        </details>
        <details className="mb-2 bg-white p-4 rounded shadow">
          <summary className="font-bold cursor-pointer">How long does it take?</summary>
          <p>Typically 30-60 minutes at your location in Kingwood TX.</p>
        </details>
      </section>

      {/* Related Services - Cross-Selling */}
      <section className="related-services mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Related Mobile Services</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <li><Link href="/services/auto-diagnostics" className="text-blue-600 hover:underline flex items-center justify-center"><ChevronRightIcon className="h-5 w-5 mr-1" /> Auto Diagnostics</Link></li>
          <li><Link href="/services/battery-electrical" className="text-blue-600 hover:underline flex items-center justify-center"><ChevronRightIcon className="h-5 w-5 mr-1" /> Battery Electrical Check</Link></li>
          <li><Link href="/services/check-engine-light" className="text-blue-600 hover:underline flex items-center justify-center"><ChevronRightIcon className="h-5 w-5 mr-1" /> Check Engine Light</Link></li>
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
          "serviceType": "General Vehicle Diagnostic",
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
                    "name": "General Diagnostic"
                  },
                  "price": "100",
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
          "description": "Mobile general vehicle diagnostic services near me in The Woodlands TX, Kingwood TX, and Montgomery County TX with fair pricing."
        })}
      </Script>
    </main>
  );
}