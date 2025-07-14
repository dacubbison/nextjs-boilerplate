import Head from 'next/head';
import Hero from '../components/Hero';
import QuoteForm from '../components/QuoteForm';
import Services from '../components/Services';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Top Tech Mobile: ASE-Certified Mobile Mechanic in The Woodlands, TX</title>
        <meta name="description" content="Mobile mechanic services in The Woodlands, Montgomery County, Kingwood & surrounding areas. Hybrid/EV repairs, diagnostics, and more." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@type": "LocalBusiness",
          "name": "Top Tech Mobile",
          "description": "ASE-certified mobile mechanic serving The Woodlands, TX.",
          "serviceArea": { "@type": "GeoCircle", "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 30.1658, "longitude": -95.4613 }, "geoRadius": "50000" }
        }) }} />
      </Head>
      <Hero />
      <Services />
      <QuoteForm />
    </div>
  );
}