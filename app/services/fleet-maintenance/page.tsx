import Image from 'next/image';
import Script from 'next/script';

export const metadata = {
  title: 'Fleet Maintenance Services Near Me in The Woodlands TX | Top Tech Mobile',
  description: 'Tailored fleet maintenance and repairs for businesses in The Woodlands, Montgomery County, and Kingwood TX with fair and upfront pricing to minimize downtime.',
  keywords: 'fleet maintenance near me The Woodlands TX, mobile fleet repair Montgomery County, business vehicle service Kingwood TX',
};

export default function FleetMaintenance() {
  return (
    <main>
      <section className="service-hero">
        <h1>Fleet Maintenance Services Near Me in The Woodlands TX</h1>
        <p>Custom maintenance plans for business fleets in Montgomery County TX with fair and upfront pricing to keep your operations running smoothly.</p>
        <Image src="/images/fleet-repair-montgomerytx.jpg" alt="Mechanic performing fleet maintenance in The Woodlands TX" width={800} height={400} loading="lazy" />
      </section>

      <section className="service-details">
        <h2>Our Fleet Maintenance Services</h2>
        <p>Regular inspections, repairs, and preventive care designed for commercial vehicles to reduce costs and downtime.</p>
        <ul>
          <li>Tailored plans for businesses</li>
          <li>Regular inspections and on-site repairs</li>
          <li>Minimize operational disruptions</li>
        </ul>
      </section>

      <section className="faqs">
        <h2>FAQs about Fleet Maintenance in The Woodlands TX</h2>
        <details>
          <summary>What fleets do you service?</summary>
          <p>Delivery vans, company cars, trucks—any business vehicles in the area.</p>
        </details>
        <details>
          <summary>How do pricing plans work?</summary>
          <p>Fair, customized quotes with no hidden fees.</p>
        </details>
      </section>

      <div className="cta-buttons">
        <a href="tel:9365294748" className="call-now-btn">Call Now</a>
      </div>

      <Script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Fleet Maintenance",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Top Tech Mobile",
            "telephone": "936-529-4748",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "The Woodlands",
              "addressRegion": "TX"
            }
          },
          "areaServed": "The Woodlands TX, Montgomery County TX, Kingwood TX",
          "description": "Mobile fleet maintenance services for businesses with fair pricing."
        })}
      </Script>
    </main>
  );
}