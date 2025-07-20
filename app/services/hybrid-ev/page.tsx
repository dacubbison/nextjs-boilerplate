import Image from 'next/image';
import Script from 'next/script';

export const metadata = {
  title: 'Hybrid and EV Repair Near Me in Montgomery County TX | Top Tech Mobile',
  description: 'Specialized mobile repair for hybrid and electric vehicles in The Woodlands and Kingwood TX, including battery diagnostics with fair and upfront pricing.',
  keywords: 'hybrid ev repair near me Montgomery County TX, mobile EV battery service The Woodlands TX, eco-friendly auto repair Kingwood TX',
};

export default function HybridEV() {
  return (
    <main>
      <section className="service-hero">
        <h1>Hybrid and EV Repair Near Me in Montgomery County TX</h1>
        <p>Expert mobile services for hybrids and EVs, including battery replacement and repairs in The Woodlands TX with fair and upfront pricing.</p>
        <Image src="/images/hybrid-ev.jpg" alt="Mechanic repairing hybrid EV in Montgomery County TX" width={800} height={400} loading="lazy" />
      </section>

      <section className="service-details">
        <h2>Our Hybrid and EV Services</h2>
        <p>Specialized care for electric and hybrid vehicles using the latest tools and techniques.</p>
        <ul>
          <li>Battery diagnostics and replacement</li>
          <li>Specialized hybrid system repairs</li>
          <li>Eco-friendly maintenance solutions</li>
        </ul>
      </section>

      <section className="faqs">
        <h2>FAQs about Hybrid and EV Repair in Montgomery County TX</h2>
        <details>
          <summary>Do you service Tesla and other EVs?</summary>
          <p>Yes, we handle most major brands with certified techs.</p>
        </details>
        <details>
          <summary>What is the cost for battery check?</summary>
          <p>Starting at $80 with transparent pricing.</p>
        </details>
      </section>

      <div className="cta-buttons">
        <a href="tel:9365294748" className="call-now-btn">Call Now</a>
      </div>

      <Script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Hybrid and EV Repair",
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
          "description": "Mobile hybrid and EV repair services with fair pricing."
        })}
      </Script>
    </main>
  );
}