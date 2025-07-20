// Hero.tsx
'use client';

import { useState } from 'react';

export default function Hero() {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [address, setAddress] = useState('');
  const [zip, setZip] = useState('');
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [vin, setVin] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const toggleCallModal = () => setIsCallModalOpen(!isCallModalOpen);
  const toggleBookModal = () => setIsBookModalOpen(!isBookModalOpen);

  const safeZips = ['77316', '77318', '77339', '77345', '77354', '77355', '77356', '77379', '77381', '77382', '77384', '77385', '77386', '77388', '77389'];

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!safeZips.includes(zip)) {
      setErrorMessage('You may be outside our service area. Please call us at 936-529-4748 for assistance.');
      return;
    }
    setErrorMessage('');
    const calendlyUrl = `https://calendly.com/david-toptechmobile/general-vehicle-diagnostic-100?a1=${encodeURIComponent(zip)}&a2=${encodeURIComponent(address)}&a3=${encodeURIComponent(year)}&a4=${encodeURIComponent(make)}&a5=${encodeURIComponent(model)}&a6=${encodeURIComponent(vin)}`;
    window.open(calendlyUrl, '_blank');
    toggleBookModal();
  };

  const years = Array.from({ length: 46 }, (_, i) => (2025 - i).toString()); // 1980-2025
  const makes = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'Hyundai', 'Kia', 'Subaru', 'Volkswagen', 'Mazda', 'BMW', 'Mercedes-Benz', 'Audi', 'Lexus', 'Acura', 'Jeep', 'Ram', 'GMC', 'Cadillac', 'Tesla'];

  return (
    <div className="hero-section"> {/* Assume this has background-image CSS */}
      <div className="hero-text"> {/* Add this for overlay styling */}
        <h1>Mobile Mechanic in The Woodlands TX - Top Tech: ASE-Certified</h1>
        <p>Your trusted mobile mechanic near me in The Woodlands, Montgomery County, and Kingwood TX.</p>
        <p>Call or Text for a Free Quote: 936-529-4748</p>
        <p>Share Your Shop Quote - We Often Beat It by Up to 50%!</p>
      </div>
      <div className="hero-buttons">
        <button onClick={toggleCallModal} className="call-now-btn" aria-label="Open contact modal for mobile mechanic near me in The Woodlands TX">Call Now</button>
        <button onClick={toggleBookModal} className="book-now-btn" aria-label="Open booking modal for mobile mechanic service in Montgomery County TX">Book Now</button>
      </div>

      {/* Call Modal - unchanged (assuming it's defined elsewhere or add it here if needed) */}

      {isBookModalOpen && (
        <div className="modal-overlay" aria-modal="true" role="dialog">
          <div className="book-modal-content">
            <div className="modal-header">Book Appointment</div>
            <form onSubmit={handleBookSubmit} className="book-form">
              <label htmlFor="address">Full Address</label>
              <input id="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} required aria-label="Enter full address for mobile mechanic service in The Woodlands TX" />

              <label htmlFor="zip">ZIP Code</label>
              <select id="zip" value={zip} onChange={(e) => setZip(e.target.value)} required aria-label="Select ZIP code for mobile mechanic near me in Montgomery County TX">
                <option value="">Select ZIP</option>
                {safeZips.map((z) => <option key={z} value={z}>{z}</option>)}
              </select>

              <label htmlFor="year">Vehicle Year</label>
              <select id="year" value={year} onChange={(e) => setYear(e.target.value)} required aria-label="Select vehicle year for ASE-certified mobile mechanic service in Montgomery County TX">
                <option value="">Select Year</option>
                {years.map((y) => <option key={y} value={y}>{y}</option>)}
              </select>

              <label htmlFor="make">Vehicle Make</label>
              <select id="make" value={make} onChange={(e) => setMake(e.target.value)} required aria-label="Select vehicle make for mobile auto repair near me in Kingwood TX">
                <option value="">Select Make</option>
                {makes.map((m) => <option key={m} value={m}>{m}</option>)}
              </select>

              <label htmlFor="model">Vehicle Model</label>
              <input id="model" type="text" value={model} onChange={(e) => setModel(e.target.value)} required aria-label="Enter vehicle model for mobile mechanic diagnostics in The Woodlands TX" />

              <label htmlFor="vin">VIN (Optional)</label>
              <input id="vin" type="text" value={vin} onChange={(e) => setVin(e.target.value)} aria-label="Enter VIN for mobile mechanic quote in Montgomery County TX" />

              {errorMessage && <p className="error-message">{errorMessage} <a href="tel:9365294748">Call Now</a></p>}

              <button type="submit" className="modal-btn submit-btn" aria-label="Submit booking for ASE-certified mobile mechanic">Submit & Book</button>
              <button type="button" onClick={toggleBookModal} className="modal-btn close-btn">Close</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}