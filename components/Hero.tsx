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

  const safeZips = ['77382', '77381', '77380', '77384', '77389', '77354', '77355', '77385', '77316', '77356', '77301', '77302', '77303', '77304', '77306', '77318', '77327', '77328', '77333', '77339', '77353', '77357', '77358', '77362', '77365', '77372', '77378', '77387', '77393', '77447', '77873'];

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanedZip = zip.trim().replace(/-/g, ''); // Normalize input
    if (!safeZips.includes(cleanedZip)) {
      setErrorMessage('You may be outside our service area. Please call us at 936-529-4748 for assistance.');
      return;
    }
    setErrorMessage('');
    const calendlyUrl = `https://calendly.com/david-toptechmobile/general-vehicle-diagnostic-100?a1=${encodeURIComponent(year)}&a2=${encodeURIComponent(make + ' ' + model)}&a3=${encodeURIComponent(address + ', ' + zip)}&a4=${encodeURIComponent(vin || 'N/A')}`;
    window.open(calendlyUrl, '_blank');
    toggleBookModal();
  };

  const years = Array.from({ length: 46 }, (_, i) => (2025 - i).toString()); // 1980-2025
  const makes = ['Acura', 'Audi', 'BMW', 'Cadillac', 'Chevrolet', 'Chrysler', 'Dodge', 'Fiat', 'Ford', 'GMC', 'Honda', 'Hyundai', 'Infiniti', 'Jaguar', 'Jeep', 'Kia', 'Land Rover', 'Lexus', 'Lincoln', 'Mazda', 'Mercedes-Benz', 'Mini', 'Mitsubishi', 'Nissan', 'Porsche', 'Ram', 'Subaru', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo'];

  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1>Top Tech Mobile Mechanic: ASE-Certified</h1>
        <p>Your trusted on-site auto service in The Woodlands, Montgomery County, and Kingwood areas.</p>
        <p>Fair pricing—share your shop quote, and we'll often beat it by up to 50%!</p>
        <p>Call or Text for a Free Quote: 936-529-4748</p>
        <p className="text-green-500 font-bold">New Customer Special: 10% off your first service! (Valid through 8/20/2025)</p>
      </div>
      <div className="hero-buttons">
        <button onClick={toggleCallModal} className="call-now-btn" aria-label="Open contact modal for mobile mechanic in The Woodlands">Call Now</button>
        <button onClick={toggleBookModal} className="book-now-btn" aria-label="Open booking modal for auto service in Montgomery County">Book Now</button>
      </div>

      {isCallModalOpen && (
        <div className="modal-overlay" aria-modal="true" role="dialog">
          <div className="book-modal-content">
            <div className="modal-header">Contact Us</div>
            <div className="book-form">
              <button onClick={() => window.location.href = 'tel:9365294748'} className="modal-btn call-btn">Call 936-529-4748</button>
              <button onClick={() => window.location.href = 'sms:9365294748'} className="modal-btn text-btn">Text 936-529-4748</button>
              <button type="button" onClick={toggleCallModal} className="modal-btn close-btn">Close</button>
            </div>
          </div>
        </div>
      )}

      {isBookModalOpen && (
        <div className="modal-overlay" aria-modal="true" role="dialog">
          <div className="book-modal-content">
            <div className="modal-header">Book Appointment</div>
            <form onSubmit={handleBookSubmit} className="book-form">
              <label htmlFor="address">Full Address</label>
              <input id="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} required aria-label="Enter full address for auto service in The Woodlands" />

              <label htmlFor="zip">ZIP Code</label>
              <input id="zip" type="text" value={zip} onChange={(e) => setZip(e.target.value)} required aria-label="Enter ZIP code for on-site repair in Montgomery County" placeholder="e.g., 77381" />

              <label htmlFor="year">Vehicle Year</label>
              <select id="year" value={year} onChange={(e) => setYear(e.target.value)} required aria-label="Select vehicle year for ASE-certified service">
                <option value="">Select Year</option>
                {years.map((y) => <option key={y} value={y}>{y}</option>)}
              </select>

              <label htmlFor="make">Vehicle Make</label>
              <select id="make" value={make} onChange={(e) => setMake(e.target.value)} required aria-label="Select vehicle make for mobile auto repair">
                <option value="">Select Make</option>
                {makes.map((m) => <option key={m} value={m}>{m}</option>)}
              </select>

              <label htmlFor="model">Vehicle Model</label>
              <input id="model" type="text" value={model} onChange={(e) => setModel(e.target.value)} required aria-label="Enter vehicle model for diagnostics" />

              <label htmlFor="vin">VIN (Optional)</label>
              <input id="vin" type="text" value={vin} onChange={(e) => setVin(e.target.value)} aria-label="Enter VIN for quote" />

              {errorMessage && <p className="error-message">{errorMessage} <a href="tel:9365294748">Call Now</a></p>}

              <button type="submit" className="modal-btn submit-btn" aria-label="Submit booking for ASE-certified mechanic">Submit & Book</button>
              <button type="button" onClick={toggleBookModal} className="modal-btn close-btn">Close</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}