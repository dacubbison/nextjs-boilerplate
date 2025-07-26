import Script from 'next/script';
import Hero from '../components/Hero';
import About from '../components/About'; // New import
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
  const formattedDate = format(currentDate, 'MMMM d, yyyy, h:mm a'); // e.g., July 26, 2025, 12:00 PM

  return (
    <main>
      <Hero />
      <About />
      <Services />
      {/* Real Testimonials Section (All 5-Star) (Good for trust) */}
      <section className="testimonials-section py-10 text-center bg-gray-100">
        <h2 className="text-2xl font-bold mb-6">What Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-center mb-2">
              ⭐⭐⭐⭐⭐
            </div>
            <p className="italic">"I highly recommend Top Tech Mobile! They showed up on time, finished my brakes on the same day. No mess left behind!!! Job well done Top Tech!"</p>
            <p className="mt-2 font-semibold">- Mandie Vaughn, 1 day ago</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-center mb-2">
              ⭐⭐⭐⭐⭐
            </div>
            <p className="italic">(No detailed review provided)</p>
            <p className="mt-2 font-semibold">- B TheReal, 1 day ago</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-center mb-2">
              ⭐⭐⭐⭐⭐
            </div>
            <p className="italic">(No detailed review provided)</p>
            <p className="mt-2 font-semibold">- Joseph Quinn, 4 days ago</p>
          </div>
        </div>
      </section>
      <QuoteForm />
      <Footer />
      {isPromoActive && (
        <p className="promo-text">New Customer Special: 10% off your first service! Valid until August 20, 2025. (As of {formattedDate}) Beat any shop quote by up to 50%!</p>
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
            "streetAddress": "15392 Rusty Oak Trl Ste 200",
            "addressLocality": "Conroe",
            "addressRegion": "TX",
            "postalCode": "77302",
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
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://toptechmobile.com"
            }]
          },
          "review": [ // All 5-star reviews
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "author": { "@type": "Person", "name": "Mandie Vaughn" },
              "reviewBody": "I highly recommend Top Tech Mobile! They showed up on time, finished my brakes on the same day. No mess left behind!!! Job well done Top Tech!",
              "datePublished": "2025-07-25"
            },
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "author": { "@type": "Person", "name": "B TheReal" },
              "reviewBody": "(No detailed review provided)",
              "datePublished": "2025-07-25"
            },
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "author": { "@type": "Person", "name": "Joseph Quinn" },
              "reviewBody": "(No detailed review provided)",
              "datePublished": "2025-07-22"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5", // All 5-star
            "reviewCount": "3" // Total reviews
          },
          "potentialAction": {
            "@type": "ReserveAction",
            "target": "https://calendly.com/your-username/your-event",
            "result": { "@type": "Reservation", "name": "Book Mobile Mechanic Service" }
          },
          "faqPage": {
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What areas do you serve as a mobile mechanic?",
              "acceptedAnswer": { "@type": "Answer", "text": "I serve The Woodlands, Kingwood, and Montgomery County TX." }
            }]
          }
        })}
      </Script>
    </main>
  );
}