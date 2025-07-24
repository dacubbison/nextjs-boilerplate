'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCalendlyBase, setCurrentCalendlyBase] = useState('');
  const [address, setAddress] = useState('');
  const [zip, setZip] = useState('');
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [vin, setVin] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const safeZips = ['77382', '77381', '77380', '77384', '77389', '77354', '77355', '77385', '77316', '77356', '77301', '77302', '77303', '77304', '77306', '77318', '77327', '77328', '77333', '77339', '77353', '77357', '77358', '77362', '77365', '77372', '77378', '77387', '77393', '77447', '77873'];

  const openModal = (calendlyBase: string) => {
    setCurrentCalendlyBase(calendlyBase);
    setIsModalOpen(true);
    setErrorMessage('');
    setAddress('');
    setZip('');
    setYear('');
    setMake('');
    setModel('');
    setVin('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanedZip = zip.trim().replace(/-/g, '');
    if (!safeZips.includes(cleanedZip)) {
      setErrorMessage('You may be outside our service area. Please call us at 936-529-4748 for assistance.');
      return;
    }
    setErrorMessage('');
    const calendlyUrl = `${currentCalendlyBase}?a1=${encodeURIComponent(cleanedZip)}&a2=${encodeURIComponent(address)}&a3=${encodeURIComponent(year)}&a4=${encodeURIComponent(make)}&a5=${encodeURIComponent(model)}&a6=${encodeURIComponent(vin)}`;
    window.open(calendlyUrl, '_blank');
    setIsModalOpen(false);
  };

  const years = Array.from({ length: 46 }, (_, i) => (2025 - i).toString()); // 1980-2025
  const makes = ['Acura', 'Audi', 'BMW', 'Cadillac', 'Chevrolet', 'Chrysler', 'Dodge', 'Fiat', 'Ford', 'GMC', 'Honda', 'Hyundai', 'Infiniti', 'Jaguar', 'Jeep', 'Kia', 'Land Rover', 'Lexus', 'Lincoln', 'Mazda', 'Mercedes-Benz', 'Mini', 'Mitsubishi', 'Nissan', 'Porsche', 'Ram', 'Subaru', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo'];

  return (
    <section className="services-section">
      <h2>Mobile Auto Services in The Woodlands, Kingwood, and Montgomery County TX</h2>

      {/* Group 1: Diagnostic & Inspection Services (Bookable) */}
      <h3 className="text-xl font-bold mt-8 mb-4 text-center">Diagnostic & Inspection Services</h3>
      <div className="service-card">
        <div className="service-item">
          <h3>Mobile Auto Diagnostics in The Woodlands, Kingwood, and Montgomery County TX</h3>
          <Image 
            src="/images/mobile-auto-diagnostics-woodlands.jpg"
            alt="Mobile auto diagnostics and check engine light diagnostic near me with advanced tools"
            width={400}
            height={300}
            loading="lazy"
          />
          <ul>
            <li>Advanced diagnostic tools for vehicles</li>
            <li>Check engine light diagnosis near me</li>
            <li>Quick and accurate results</li>
          </ul>
          <div className="buttons-container">
            <a href="/services/auto-diagnostics" className="learn-more">Learn More</a>
            <button onClick={() => openModal('https://calendly.com/david-toptechmobile/check-engine-light-diagnostic-100')} className="book-now-btn">Book Now ($100)</button>
          </div>
        </div>

        <div className="service-item">
          <h3>New Car Inspection in The Woodlands, Kingwood, and Montgomery County TX</h3>
          <Image 
            src="/images/mobile-mechanic-woodlands.jpg"
            alt="New car inspection near me by ASE-certified mobile mechanic"
            width={400}
            height={300}
            loading="lazy"
          />
          <ul>
            <li>Thorough pre-purchase inspection</li>
            <li>Check for hidden issues</li>
            <li>Peace of mind for buyers near me</li>
          </ul>
          <div className="buttons-container">
            <a href="/services/new-car-inspection" className="learn-more">Learn More</a>
            <button onClick={() => openModal('https://calendly.com/david-toptechmobile/new-car-inspection-100')} className="book-now-btn">Book Now ($100)</button>
          </div>
        </div>

        <div className="service-item">
          <h3>Battery Electrical Check in The Woodlands, Kingwood, and Montgomery County TX</h3>
          <Image 
            src="/images/battery-test-3.jpg"
            alt="Battery electrical check near me for reliable starting and charging systems"
            width={400}
            height={200}
            loading="lazy"
            className="object-cover"
          />
          <ul>
            <li>Battery testing and replacement</li>
            <li>Alternator and starter checks</li>
            <li>Electrical system diagnosis near me</li>
          </ul>
          <div className="buttons-container">
            <a href="/services/battery-electrical" className="learn-more">Learn More</a>
            <button onClick={() => openModal('https://calendly.com/david-toptechmobile/battery-electrical-check-80')} className="book-now-btn">Book Now ($80)</button>
          </div>
        </div>

        <div className="service-item">
          <h3>General Vehicle Diagnostic in The Woodlands, Kingwood, and Montgomery County TX</h3>
          <Image 
            src="/images/fuel-pump-repair.jpg"
            alt="General vehicle diagnostic near me with comprehensive checks"
            width={400}
            height={300}
            loading="lazy"
          />
          <ul>
            <li>Full system scan</li>
            <li>Identify performance issues</li>
            <li>Accurate results near me</li>
          </ul>
          <div className="buttons-container">
            <a href="/services/general-diagnostic" className="learn-more">Learn More</a>
            <button onClick={() => openModal('https://calendly.com/david-toptechmobile/general-vehicle-diagnostic-100')} className="book-now-btn">Book Now ($100)</button>
          </div>
        </div>

        <div className="service-item">
          <h3>AC Diagnostic Check in The Woodlands, Kingwood, and Montgomery County TX</h3>
          <Image 
            src="/images/ac-recharge.jpg"
            alt="AC diagnostic check near me for cooling system repairs"
            width={400}
            height={300}
            loading="lazy"
          />
          <ul>
            <li>AC system inspection</li>
            <li>Leak detection and recharge</li>
            <li>Efficient cooling solutions near me</li>
          </ul>
          <div className="buttons-container">
            <a href="/services/ac-diagnostic" className="learn-more">Learn More</a>
            <button onClick={() => openModal('https://calendly.com/david-toptechmobile/ac-diagnostic-check-80')} className="book-now-btn">Book Now ($80)</button>
          </div>
        </div>

        <div className="service-item">
          <h3>Brake Inspection in The Woodlands, Kingwood, and Montgomery County TX</h3>
          <Image 
            src="/images/brake-service-2.jpg"
            alt="Brake inspection near me by ASE-certified mobile mechanic with new rotors and pads"
            width={400}
            height={300}
            loading="lazy"
            className="object-cover"
          />
          <ul>
            <li>Full brake system check</li>
            <li>Pad, rotor, and fluid inspection</li>
            <li>Safety-focused service near me</li>
          </ul>
          <div className="buttons-container">
            <a href="/services/brake-inspection" className="learn-more">Learn More</a>
            <button onClick={() => openModal('https://calendly.com/david-toptechmobile/brake-inspection-80')} className="book-now-btn">Book Now ($80)</button>
          </div>
        </div>

        <div className="service-item">
          <h3>Mobil 1 Oil Change in The Woodlands, Kingwood, and Montgomery County TX</h3>
          <Image 
            src="/images/mobile-oil-change-woodlands.jpg"
            alt="Mobil 1 oil change near me with fluid check"
            width={400}
            height={300}
            loading="lazy"
          />
          <ul>
            <li>Premium synthetic oil change</li>
            <li>Fluid levels and filter replacement</li>
            <li>Convenient mobile service near me</li>
          </ul>
          <div className="buttons-container">
            <a href="/services/mobil-oil-change" className="learn-more">Learn More</a>
            <button onClick={() => openModal('https://calendly.com/david-toptechmobile/mobil-1-oil-change-fluid-check-120')} className="book-now-btn">Book Now ($120)</button>
          </div>
        </div>
      </div>

      {/* Group 2: Other Mobile Services (Non-bookable) */}
      <h3 className="text-xl font-bold mt-8 mb-4 text-center">Other Mobile Services</h3>
      <div className="service-card">
        <div className="service-item">
          <h3>Mobile Mechanic in The Woodlands, Kingwood, and Montgomery County TX</h3>
          <Image 
            src="/images/mobile-mechanic-woodlands.jpg"
            alt="Mobile mechanic near me for on-site auto repair, tune-ups, and brake service"
            width={400}
            height={300}
            loading="lazy"
          />
          <ul>
            <li>On-site repairs at your home or office</li>
            <li>Tune-ups and maintenance</li>
            <li>Brake service and repair</li>
            <li>Suspension and steering</li>
            <li>Engine and transmission work</li>
          </ul>
          <div className="buttons-container">
            <a href="/services/mobile-mechanic" className="learn-more">Learn More</a>
          </div>
        </div>

        <div className="service-item">
          <h3>Car Accessories Installation in The Woodlands, Kingwood, and Montgomery County TX</h3>
          <Image 
            src="/images/car-install-montgomerytx.jpg"
            alt="Car accessories installation near me for dash cams, GPS, and audio upgrades"
            width={400}
            height={300}
            loading="lazy"
          />
          <ul>
            <li>Dash cams and GPS systems</li>
            <li>Audio and entertainment upgrades</li>
            <li>Custom lighting and more near me</li>
          </ul>
          <div className="buttons-container">
            <a href="/services/car-accessories" className="learn-more">Learn More</a>
          </div>
        </div>

        <div className="service-item">
          <h3>Fleet Maintenance in The Woodlands, Kingwood, and Montgomery County TX</h3>
          <Image 
            src="/images/fleet-repair-montgomerytx.jpg"
            alt="Fleet maintenance services near me with regular inspections and repairs"
            width={400}
            height={300}
            loading="lazy"
          />
          <ul>
            <li>Tailored plans for businesses</li>
            <li>Regular inspections and repairs</li>
            <li>Minimize downtime near me</li>
          </ul>
          <div className="buttons-container">
            <a href="/services/fleet-maintenance" className="learn-more">Learn More</a>
          </div>
        </div>

        <div className="service-item">
          <h3>Hybrid and EV Services in The Woodlands, Kingwood, and Montgomery County TX</h3>
          <Image 
            src="/images/hybrid-ev.jpg"
            alt="Hybrid and EV repair near me with battery diagnostics and specialized repairs"
            width={400}
            height={300}
            loading="lazy"
          />
          <ul>
            <li>Battery diagnostics and replacement</li>
            <li>Specialized hybrid repairs</li>
            <li>Eco-friendly solutions near me</li>
          </ul>
          <div className="buttons-container">
            <a href="/services/hybrid-ev" className="learn-more">Learn More</a>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" aria-modal="true" role="dialog">
          <div className="book-modal-content">
            <div className="modal-header">Book Appointment</div>
            <form onSubmit={handleSubmit} className="book-form">
              <label htmlFor="address">Full Address</label>
              <input id="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} required aria-label="Enter full address for ASE-certified mobile mechanic service in Montgomery County TX" />

              <label htmlFor="zip">ZIP Code</label>
              <input id="zip" type="text" value={zip} onChange={(e) => setZip(e.target.value)} required placeholder="e.g., 77381" aria-label="Enter ZIP code for mobile mechanic near me in Montgomery County TX" />

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

              <button type="submit" className="modal-btn submit-btn" aria-label="Submit booking details for ASE-certified mobile mechanic near me">Submit & Book</button>
              <button type="button" onClick={() => setIsModalOpen(false)} className="modal-btn close-btn" aria-label="Close booking modal">Close</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}