// Updated HybridEV page.tsx
export const metadata = {
  title: 'Hybrid and EV Repair Near Me in Montgomery County TX | Top Tech Mobile',
  description: 'Specialized mobile repair for hybrid and electric vehicles in The Woodlands and Kingwood TX, including battery diagnostics with fair and upfront pricing.',
  keywords: 'hybrid ev repair near me Montgomery County TX, mobile EV battery service The Woodlands TX, eco-friendly auto repair Kingwood TX',
};

export default function HybridEV() {
  // Countdown for urgency (ends 8/20/2025)
  const daysLeft = Math.floor((new Date('2025-08-20').getTime() - new Date().getTime()) / (1000 * 3600 * 24));

  return (
    <main className="max-w-4xl mx-auto p-6">
      {/* Hero Section - Visual + Value Prop */}
      <section className="service-hero text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Hybrid and EV Repair Near Me in Montgomery County TX</h1>
        <p className="text-lg mb-4">Specialized mobile services for hybrids and EVs, including battery replacement and repairs in The Woodlands TX with fair and upfront pricing—often beat shop quotes by 50%!</p>
        <p className="text-green-500 font-bold mb-4">New Customer Special: 10% off! (Hurry—ends in {daysLeft} days)</p>
        <Image 
          src="/images/hybrid-ev.jpg" 
          alt="Hybrid and EV repair near me in Montgomery County TX with battery diagnostics and specialized repairs in The Woodlands TX"
          width={400} 
          height={200} 
          loading="lazy" 
          className="rounded mx-auto max-w-full"
        />
      </section>

      {/* Details Section - What We Check + Benefits */}
      <section className="service-details mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center"><CheckCircleIcon className="h-6 w-6 mr-2 text-green-500" /> Our Hybrid and EV Services</h2>
        <p className="mb-4">Specialized care for electric and hybrid vehicles using the latest tools and techniques in Kingwood TX. We come to you for convenience.</p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li className="flex items-start"><ChevronRightIcon className="h-5 w-5 mr-2 text-blue-500" /> Battery diagnostics and replacement</li>
          <li className="flex items-start"><ChevronRightIcon className="h-5 w-5 mr-2 text-blue-500" /> Specialized hybrid system repairs</li>
          <li className="flex items-start"><ChevronRightIcon className="h-5 w-5 mr-2 text-blue-500" /> Eco-friendly maintenance solutions near me in Montgomery County TX</li>
        </ul>
        <p className="font-bold">Pricing: Varies by service—contact for quote. Benefits: Expert EV/hybrid care without the shop hassle, 10% off for new customers!</p>
      </section>

      {/* FAQs Section - Upgraded to Accordions */}
      <section className="faqs mb-8">
        <h2 className="text-2xl font-bold mb-4">FAQs About Hybrid and EV Repair in Montgomery County TX</h2>
        <details className="mb-2 bg-white p-4 rounded shadow">
          <summary className="font-bold cursor-pointer">Do you service Tesla and other EVs?</summary>
          <p>Yes, we handle most major brands with certified techs in The Woodlands TX.</p>
        </details>
        <details className="mb-2 bg-white p-4 rounded shadow">
          <summary className="font-bold cursor-pointer">What is the cost for battery check?</summary>
          <p>Starting at $80 with transparent pricing on-site in Kingwood TX.</p>
        </details>
      </section>

      {/* Related Services - Cross-Selling */}
      <section className="related-services mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Related Mobile Services</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <li><Link href="/services/auto-diagnostics" className="text-blue-600 hover:underline flex items-center justify-center"><ChevronRightIcon className="h-5 w-5 mr-1" /> Auto Diagnostics</Link></li>
          <li><Link href="/services/battery-electrical" className="text-blue-600 hover:underline flex items-center justify-center"><ChevronRightIcon className="h-5 w-5 mr-1" /> Battery Electrical Check</Link></li>
          <li><Link href="/services/general-diagnostic" className="text-blue-600 hover:underline flex items-center justify-center"><ChevronRightIcon className="h-5 w-5 mr-1" /> General Vehicle Diagnostic</Link></li>
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
          "serviceType": "Hybrid and EV Repair",
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
            "priceRange": "  $$",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Battery Diagnostics"
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
          "description": "Specialized mobile repair for hybrid and electric vehicles near me in The Woodlands TX, Kingwood TX, and Montgomery County TX, including battery diagnostics with fair pricing."
        })}
      </Script>
    </main>
  );
}