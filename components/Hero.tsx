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

  const safeZips = ['77382', '77381', '77380', '77384', '77389', '77354', '77355', '77385', '77316', '77356', '77379', '77069', '77375', '77388', '77301', '77302', '77303', '77304', '77306', '77318', '77327', '77328', '77357', '77362', '77365', '77372', '77378', '77393', '77090', '77014'];

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanedZip = zip.trim().replace(/-/g, ''); // Normalize input
    if (!safeZips.includes(cleanedZip)) {
      setErrorMessage('You may be outside our service area. Please call us at 936-529-4748 for assistance.');
      return;
    }
    setErrorMessage('');
    const calendlyUrl = `https://calendly.com/david-toptechmobile/general-vehicle-diagnostic-100?a1=${encodeURIComponent(cleanedZip)}&a2=${encodeURIComponent(address)}&a3=${encodeURIComponent(year)}&a4=${encodeURIComponent(make)}&a5=${encodeURIComponent(model)}&a6=${encodeURIComponent(vin)}`;
    window.open(calendlyUrl, '_blank');
    toggleBookModal();
  };

  const years = Array.from({ length: 46 }, (_, i) => (2025 - i).toString()); // 1980-2025
  const makes = ['Acura', 'Audi', 'BMW', 'Cadillac', 'Chevrolet', 'Chrysler', 'Dodge', 'Fiat', 'Ford', 'GMC', 'Honda', 'Hyundai', 'Infiniti', 'Jaguar', 'Jeep', 'Kia', 'Land Rover', 'Lexus', 'Lincoln', 'Mazda', 'Mercedes-Benz', 'Mini', 'Mitsubishi', 'Nissan', 'Porsche', 'Ram', 'Subaru', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo'];

  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1>Mobile Mechanic in The Woodlands TX - Top Tech: ASE-Certified</h1>
        <p>Your trusted mobile mechanic near me in The Woodlands, Montgomery County, and Kingwood TX.</p>
        <p>Fair and upfront pricing—share your shop quote, and we'll often beat it by up to 50%!</p>
        <p>Call or Text for a Free Quote: 936-529-4748</p>
      </div>
      <div className="hero-buttons">
        <button onClick={toggleCallModal} className="call-now-btn" aria-label="Open contact modal for mobile mechanic near me in The Woodlands TX">Call Now</button>
        <button onClick={toggleBookModal} className="book-now-btn" aria-label="Open booking modal for mobile mechanic service in Montgomery County TX">Book Now</button>
      </div>

      {isBookModalOpen && (
        <div className="modal-overlay" aria-modal="true" role="dialog">
          <div className="book-modal-content">
            <div className="modal-header">Book Appointment</div>
            <form onSubmit={handleBookSubmit} className="book-form">
              <label htmlFor="address">Full Address</label>
              <input id="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} required aria-label="Enter full address for mobile mechanic service in The Woodlands TX" />

              <label htmlFor="zip">ZIP Code</label>
              <input id="zip" type="text" value={zip} onChange={(e) => setZip(e.target.value)} required aria-label="Enter ZIP code for mobile mechanic near me in Montgomery County TX" placeholder="e.g., 77381" />

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