'use client';

import { useState } from 'react';
import Image from 'next/image';
import Script from 'next/script';

export default function NewCarInspection() {
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
    const calendlyUrl = `https://calendly.com/david-toptechmobile/new-car-inspection-100?a1=${encodeURIComponent(cleanedZip)}&a2=${encodeURIComponent(address)}&a3=${encodeURIComponent(year)}&a4=${encodeURIComponent(make)}&a5=${encodeURIComponent(model)}&a6=${encodeURIComponent(vin)}`;
    window.open(calendlyUrl, '_blank');
    toggleBookModal();
  };

  const years = Array.from({ length: 46 }, (_, i) => (2025 - i).toString());
  const makes = ['Acura', 'Audi', 'BMW', 'Cadillac', 'Chevrolet', 'Chrysler', 'Dodge', 'Fiat', 'Ford', 'GMC', 'Honda', 'Hyundai', 'Infiniti', 'Jaguar', 'Jeep', 'Kia', 'Land Rover', 'Lexus', 'Lincoln', 'Mazda', 'Mercedes-Benz', 'Mini', 'Mitsubishi', 'Nissan', 'Porsche', 'Ram', 'Subaru', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo'];

  return (
    <main>
      <section className="service-hero">
        <h1>Pre-Purchase New Car Inspection Near Me in The Woodlands TX</h1>
        <p>Mobile inspections to uncover hidden issues before you buy, in Montgomery County TX with fair and upfront pricing.</p>
        <Image src="/images/mobile-mechanic-woodlands.jpg" alt="Mechanic inspecting new car in The Woodlands TX" width={800} height={400} loading="lazy" />
      </section>

      <section className="service-details">
        <h2>Our New Car Inspection Services</h2>
        <p>Comprehensive checks for peace of mind on your next vehicle purchase.</p>
        <ul>
          <li>Thorough pre-purchase inspections</li>
          <li>Check for hidden defects</li>
          <li>Detailed reports provided</li>
        </ul>
      </section>

      <section className="faqs">
        <h2>FAQs about New Car Inspections in The Woodlands TX</h2>
        <details>
          <summary>What does the inspection cover?</summary>
          <p>Engine, brakes, electrical, and more for complete evaluation.</p>
        </details>
        <details>
          <summary>How long does it take?</summary>
          <p>About 1-2 hours on-site.</p>
        </details>
      </section>

      <div className="cta-buttons">
        <button onClick={toggleBookModal} className="book-now-btn">Book Now ($100)</button>
        <a href="tel:9365294748" className="call-now-btn">Call Now</a>
      </div>

      {isBookModalOpen && (
        <div className="modal-overlay" aria-modal="true" role="dialog">
          <div className="book-modal-content">
            <div className="modal-header">Book New Car Inspection</div>
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
          "serviceType": "New Car Inspection",
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
          "description": "Mobile pre-purchase car inspection services with fair pricing."
        })}
      </Script>
    </main>
  );
}