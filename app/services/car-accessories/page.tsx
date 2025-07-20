import Image from 'next/image';
import Script from 'next/script';

export const metadata = {
  title: 'Car Accessories Installation Near Me in Montgomery County TX | Top Tech Mobile',
  description: 'Professional mobile installation of car accessories like dash cams, GPS, and audio upgrades in The Woodlands and Kingwood TX with fair and upfront pricing.',
  keywords: 'car accessories installation Montgomery County TX, mobile dash cam install The Woodlands TX, audio upgrade near me Kingwood TX',
};

export default function CarAccessories() {
  return (
    <main>
      <section className="service-hero">
        <h1>Car Accessories Installation Near Me in Montgomery County TX</h1>
        <p>Expert mobile installation for dash cams, GPS systems, audio upgrades, and more in The Woodlands TX with fair and upfront pricing.</p>
        <Image src="/images/car-install-montgomerytx.jpg" alt="Mechanic installing car accessories in Montgomery County TX" width={800} height={400} loading="lazy" />
      </section>

      <section className="service-details">
        <h2>Our Car Accessories Services</h2>
        <p>Get custom installations at your location without the hassle of a shop visit. We ensure compatibility and quality work.</p>
        <ul>
          <li>Dash cams and GPS tracking systems</li>
          <li>Audio and entertainment system upgrades</li>
          <li>Custom lighting and interior enhancements</li>
        </ul>
      </section>

      <section className="faqs">
        <h2>FAQs about Car Accessories Installation in Montgomery County TX</h2>
        <details>
          <summary>What types of accessories do you install?</summary>
          <p>We handle electronics like dash cams, stereos, and lights for most vehicles.</p>
        </details>
        <details>
          <summary>Is installation warrantied?</summary>
          <p>Yes, with fair pricing and satisfaction guarantee.</p>
        </details>
      </section>

      <div className="cta-buttons">
        <a href="tel:9365294748" className="call-now-btn">Call Now</a>
      </div>

      <Script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Car Accessories Installation",
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
          "description": "Mobile car accessories installation services with fair pricing."
        })}
      </Script>
    </main>
  );
}