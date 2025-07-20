'use client';

import { useState } from 'react';
import Image from 'next/image';
import Script from 'next/script';

export const metadata = {
  title: 'Mobil 1 Oil Change Near Me in Montgomery County TX | Top Tech Mobile',
  description: 'Convenient mobile oil changes using high-quality Mobil 1 oil in The Woodlands and Kingwood TX with fair and upfront pricing.',
  keywords: 'mobil 1 oil change near me Montgomery County TX, mobile oil service The Woodlands TX, synthetic oil change Kingwood TX',
};

export default function MobilOilChange() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [address, setAddress] = useState('');
  const [zip, setZip] = useState('');
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [vin, setVin] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const toggleBookModal = () => setIsBookModalOpen(!isBookModalOpen);

  const safeZips = ['77301', '77302', '77303', '77304', '77305', '77306', '77316', '77318', '77327', '77328', '77353', '77354', '77355', '77356', '77357', '77362', '77365', '77372', '77373', '77378', '77380', '77381', '77382', '77384', '77385', '77386', '77388', '77389', '77393'];

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanedZip = zip.trim().replace(/-/g, '');
    if (!safeZips.includes(cleanedZip)) {
      setErrorMessage('You may be outside our service area. Please call us at 936-529-4748 for assistance.');
      return;
    }
    setErrorMessage('');
    const calendlyUrl = `https://calendly.com/david-toptechmobile/mobil-1-oil-change-fluid-check-120?a1=${encodeURIComponent(cleanedZip)}&a2=${encodeURIComponent(address)}&a3=${encodeURIComponent(year)}&a4=${encodeURIComponent(make)}&a5=${encodeURIComponent(model)}&a6=${encodeURIComponent(vin)}`;
    window.open(calendlyUrl, '_blank');
    toggleBookModal();
  };

  const years = Array.from({ length: 46 }, (_, i) => (2025 - i).toString());
  const makes = ['Acura', 'Audi', 'BMW', 'Cadillac', 'Chevrolet', 'Chrysler', 'Dodge', 'Fiat', 'Ford', 'GMC', 'Honda', 'Hyundai', 'Infiniti', 'Jaguar', 'Jeep', 'Kia', 'Land Rover', 'Lexus', 'Lincoln', 'Mazda', 'Mercedes-Benz', 'Mini', 'Mitsubishi', 'Nissan', 'Porsche', 'Ram', 'Subaru', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo'];

  return (
    <main>
      <section className="service-hero">
        <h1>Mobil 1 Oil Change Near Me in Montgomery County TX</h1>
        <p>Premium synthetic oil changes with fluid checks on-site in The Woodlands TX with fair and upfront pricing.</p>
        <Image src="/images/mobile-oil-change-woodlands.jpg" alt="Mobile mechanic performing Mobil 1 oil change in Montgomery County TX" width={800} height={400} loading="lazy" />
      </section>

      <section className="service-details">
        <h2>Our Mobil 1 Oil Change Services</h2>
        <p>High-quality oil and filter replacement to keep your engine running smoothly.</p>
        <ul>
          <li>Premium Mobil 1 synthetic oil</li>
          <li>Fluid level checks and top-ups</li>
          <li>Filter replacement included</li>
        </ul>
      </section>

      <section className="faqs">
        <h2>FAQs about Oil Changes in Montgomery County TX</h2>
        <details>
          <summary>How often should I change oil?</summary>
          <p>Every 5,000-7,500 miles for synthetic; we can advise based on your vehicle.</p>
        </details>
        <details>
          <summary>What is included in the service?</summary>
          <p>Oil, filter, and basic checks for $120.</p>
        </details>
      </section>

      <div className="cta-buttons">
        <button onClick={toggleBookModal} className="book-now-btn">Book Now ($120)</button>
        <a href="tel:9365294748" className="call-now-btn">Call Now</a>
      </div>

      {isBookModalOpen && (
        <div className="modal-overlay" aria-modal="true" role="dialog">
          <div className="book-modal-content">
            <div className="modal-header">Book Oil Change</div>
            <form onSubmit={handleBookSubmit} className="book-form">
              <label htmlFor="address">Full Address</label>
              <input id="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />

              <label htmlFor="zip">ZIP Code</label>
              <input id="zip" type="text" value={zip} onChange={(e) => setZip(e.target.value)} required placeholder="e.g., 77381" />

              <label htmlFor="year">Vehicle Year</label>
              <select id="year" value={year} onChange={(e) => setYear(e.target.value)} required>
                <option value="">Select Year</option>
                {years.map((y) => <option key={y} value={y}>{y}</option>)}
              </select>

              <label htmlFor="make">Vehicle Make</label>
              <select id="make" value={make} onChange={(e) => setMake(e.target.value)} required>
                <option value="">Select Make</option>
                {makes.map((m) => <option key={m} value={m}>{m}</option>)}
              </select>

              <label htmlFor="model">Vehicle Model</label>
              <input id="model" type="text" value={model} onChange={(e) => setModel(e.target.value)} required />

              <label htmlFor="vin">VIN (Optional)</label>
              <input id="vin" type="text" value={vin} onChange={(e) => setVin(e.target.value)} />

              {errorMessage && <p className="error-message">{errorMessage} <a href="tel:9365294748">Call Now</a></p>}

              <button type="submit" className="modal-btn submit-btn">Submit & Book</button>
              <button type="button" onClick={toggleBookModal} className="modal-btn close-btn">Close</button>
            </form>
          </div>
        </div>
      )}

      <Script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Mobil 1 Oil Change",
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
          "description": "Mobile oil change services using Mobil 1 with fair pricing."
        })}
      </Script>
    </main>
  );
}