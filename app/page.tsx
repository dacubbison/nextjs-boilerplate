import Script from 'next/script';
import Hero from '../components/Hero';
import Services from '../components/Services';
import QuoteForm from '../components/QuoteForm';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Mobile Mechanic in The Woodlands TX - Top Tech Mobile: ASE-Certified Services',
  description: 'Reliable mobile mechanic near me in The Woodlands, Kingwood, and Montgomery County TX with on-site repairs and diagnostics.',
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <QuoteForm />
      <Footer />
      <Script
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Top Tech Mobile Mechanic",
          "description": "ASE-certified mobile mechanic near me serving The Woodlands, Kingwood, and Montgomery County TX with on-site repairs and diagnostics.",
          "telephone": "936-529-4748",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Your Address Here",
            "addressLocality": "The Woodlands",
            "addressRegion": "TX",
            "postalCode": "77381",
            "addressCountry": "US"
          },
          "serviceArea": { 
            "@type": "GeoCircle", 
            "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 30.1658, "longitude": -95.4613 }, 
            "geoRadius": "50000" 
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "08:00",
            "closes": "18:00"
          },
          "url": "https://toptechmobile.com",
          "priceRange": "$$",
          "sameAs": ["https://twitter.com/yourhandle", "https://facebook.com/yourpage"] // Add social links for E-E-A-T
        })}
      </Script>
    </main>
  );
}