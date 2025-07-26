import Script from 'next/script';
import Hero from '../components/Hero';
import Services from '../components/Services';
import QuoteForm from '../components/QuoteForm';
import Footer from '../components/Footer';
import { format } from 'date-fns'; // Already installed

export const metadata = {
  title: 'Mobile Mechanic in The Woodlands TX - Top Tech Mobile: ASE-Certified Services',
  description: 'Reliable mobile mechanic near me in The Woodlands, Kingwood, and Montgomery County TX. On-site auto repairs, diagnostics, oil changes, and hybrid/EV services at competitive prices.',
};

export default function Home() {
  const currentDate = new Date();
  const promoEndDate = new Date('2025-08-20');
  const isPromoActive = currentDate <= promoEndDate;
  const formattedDate = format(currentDate, 'MMMM d, yyyy, h:mm a'); // 09:37 PM CDT, Friday, July 25, 2025

  return (
    <main>
      <Hero />
      <Services />
      <QuoteForm />
      <Footer />
      {isPromoActive && (
        <p className="promo-text">New Customer Special: 10% off your first service! Valid until August 20, 2025. (As of {formattedDate})</p>
      )}
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
            "streetAddress": "123 Example St", // Replace with your real address
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
          "sameAs": [
            "https://twitter.com/toptechmobile", // Replace with real links or remove
            "https://facebook.com/toptechmobile"
          ],
          // Temporarily removed offers to isolate error
          // "offers": [
          //   {
          //     "@type": "Offer",
          //     "name": "Mobile Auto Diagnostics",
          //     "description": "Advanced diagnostic tools for vehicles in The Woodlands TX",
          //     "priceCurrency": "USD",
          //     "price": "100",
          //     "availability": "https://schema.org/InStock"
          //   }
          // ]
        })}
      </Script>
    </main>
  );
}