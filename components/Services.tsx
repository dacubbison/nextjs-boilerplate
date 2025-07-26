'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentService, setCurrentService] = useState('');
  const [address, setAddress] = useState('');
  const [zip, setZip] = useState('');
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [vin, setVin] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const safeZips = ['77382', '77381', '77380', '77384', '77389', '77354', '77355', '77385', '77316', '77356', '77301', '77302', '77303', '77304', '77306', '77318', '77327', '77328', '77333', '77339', '77353', '77357', '77358', '77362', '77365', '77372', '77378', '77387', '77393', '77447', '77873'];

  const openModal = (service) => {
    setCurrentService(service);
    setIsModalOpen(true);
    setErrorMessage('');
    setAddress('');
    setZip('');
    setYear('');
    setMake('');
    setModel('');
    setVin('');
    setLicensePlate('');
    setSymptoms('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanedZip = zip.trim().replace(/-/g, '');
    if (!safeZips.includes(cleanedZip)) {
      setErrorMessage('You may be outside our service area. Please call us at 936-529-4748 for assistance.');
      return;
    }
    setErrorMessage('');
    alert("We'll review your shop quote and call you back soon!");
    setIsModalOpen(false);
  };

  return (
    <section className="services-section">
      <h2>Mobile Auto Services in The Woodlands TX and Montgomery County</h2>

      {/* Group 1: Diagnostic & Inspection Services */}
      <h3 className="text-xl font-bold mt-8 mb-4 text-center">Diagnostic & Inspection Services</h3>
      <div className="service-card">
        <div className="service-item">
          <h3>Mobile Auto Diagnostics in Kingwood TX</h3>
          <Image 
            src="/images/mobile-auto-diagnostics-woodlands.jpg"
            alt="Mobile auto diagnostics and check engine light diagnostic near me in Kingwood TX with advanced tools in Montgomery County TX"
            width={400}
            height={300}
            loading="lazy"
          />
          <ul>
            <li>Advanced diagnostic tools for vehicles in The Woodlands TX</li>
            <li>Check engine light diagnosis near me</li>
            <li>Quick and accurate results in Montgomery County TX</li>
          </ul>
          <div className="buttons-container">
            <a href="/services/auto-diagnostics" className="learn-more">Learn More</a>
          </div>
        </div>

        <div className="service-item">
          <h3>New Car Inspection</h3>
          <Image 
            src="/images/mobile-mechanic-woodlands.jpg"
            alt="New car inspection near me in The Woodlands TX by ASE-certified mobile mechanic"
            width={400}
            height={300}
            loading="lazy"
          />
          <ul>
            <li>Thorough pre-purchase inspection in Montgomery County TX</li>
            <li>Check for hidden issues</li>
            <li>Peace of mind for buyers near me in Kingwood TX</li>
          </ul>
          <div className="buttons-container">
            <a href="/services/new-car-inspection" className="learn-more">Learn More</a>
          </div>
        </div>

        <div className="service-item">
          <h3>Battery Electrical Check</h3>
          <Image 
            src="/images/battery-test-3.jpg"
            alt="Battery electrical check near me in The Woodlands TX for reliable starting and charging systems"
            width={400}
            height={300}
            loading="lazy"
          />
          <ul>
            <li>Battery testing and replacement in Kingwood TX</li>
            <li>Alternator and starter checks</li>
            <li>Electrical system diagnosis near me in Montgomery County TX</li>
          </ul>
          <div className="buttons-container">
            <a href="/services/battery-electrical" className="learn-more">Learn More</a>
          </div>
        </div>

        <div className="service-item">
          <h3>General Vehicle Diagnostic</h3>
          <Image 
            src="/images/fuel-pump-repair.jpg"
            alt="General vehicle diagnostic near me in Montgomery County TX with comprehensive checks"
            width={400}
            height={300}
            loading="lazy"
          />
          <ul>
            <li>Full system scan in The Woodlands TX</li>
            <li>Identify performance issues</li>
            <li>Accurate results near me in Kingwood TX</li>
          </ul>
          <div className="buttons-container">
            <a href="/services/general-diagnostic" className="learn-more">Learn More</a>
          </div>
        </div>

        <div className="service-item">
          <h3>AC Diagnostic Check</h3>
          <Image 
            src="/images/ac-recharge.jpg"
            alt="AC diagnostic check near me in Kingwood TX for cooling system repairs"
            width={400}
            height={300}
            loading="lazy"
          />
          <ul>
            <li>AC system inspection in Montgomery County TX</li>
            <li>Leak detection and recharge</li>
            <li>Efficient cooling solutions near me in The Woodlands TX</li>
          </ul>
          <div className="buttons-container">
            <a href="/services/ac-diagnostic" className="learn-more">Learn More</a>
          </div>
        </div>

        <div className="service-item">
          <h3>Brake Inspection</h3>
          <Image 
            src="/images/brake-service.jpg"
            alt="Brake inspection near me in The Woodlands TX by mobile mechanic"
            width={400}
            height={300}
            loading="lazy"
          />
          <ul>
            <li>Full brake system check in Kingwood TX</li>
            <li>Pad, rotor, and fluid inspection</li>
            <li>Safety-focused service near me</li>
          </ul>
          <div className="buttons-container">
            <a href="/services/brake-inspection" className="learn-more">Learn More</a>
          </div>
        </div>

        <div className="service-item">
          <h3>Mobil 1 Oil Change</h3>
          <Image 
            src="/images/mobile-oil-change-woodlands.jpg"
            alt="Mobil 1 oil change near me in Montgomery County TX with fluid check"
            width={400}
            height={300}
            loading="lazy"
          />
          <ul>
            <li>Premium synthetic oil change in The Woodlands TX</li>
            <li>Fluid levels and filter replacement</li>
            <li>Convenient mobile service near me in Kingwood TX</li>
          </ul>
          <div className="buttons-container">
            <a href="/services/mobil-oil-change" className="learn-more">Learn More</a>
          </div>
        </div>
      </div>

      {/* Group 2: Other Mobile Services */}
      <h3 className="text-xl font-bold mt-8 mb-4 text-center">Other Mobile Services</h3>
      <div className="service-card">
        <div className="service-item">
          <h3>Mobile Mechanic in The Woodlands TX</h3>
          <Image 
            src="/images/mobile-mechanic-woodlands.jpg"
            alt="Mobile mechanic near me in The Woodlands TX for on-site auto repair, tune-ups, and brake service in Kingwood TX"
            width={400}
            height={300}
            loading="lazy"
          />
          <ul>
            <li>On-site repairs at your home or office in Kingwood TX</li>
            <li>Tune-ups and maintenance</li>
            <li>Brake service and repair</li>
            <li>Suspension and steering</li>
            <li>Engine and transmission work in Montgomery County TX</li>
          </ul>
          <div className="buttons-container">
            <a href="/services/mobile-mechanic" className="learn-more">Learn More</a>
          </div>
        </div>

        <div className="service-item">
          <h3>Car Accessories Installation in Montgomery County TX</h3>
          <Image 
            src="/images/car-install-montgomerytx.jpg"
            alt="Car accessories installation near me in Montgomery County TX for dash cams, GPS, and audio upgrades in The Woodlands TX"
            width={400}
            height={300}
            loading="lazy"
          />
          <ul>
            <li>Dash cams and GPS systems</li>
            <li>Audio and entertainment upgrades in The Woodlands TX</li>
            <li>Custom lighting and more near me in Kingwood TX</li>
          </ul>
          <div className="buttons-container">
            <a href="/services/car-accessories" className="learn-more">Learn More</a>
          </div>
        </div>

        <div className="service-item">
          <h3>Fleet Maintenance Near Me in The Woodlands TX</h3>
          <Image 
            src="/images/fleet-repair-montgomerytx.jpg"
            alt="Fleet maintenance services near me in The Woodlands TX with regular inspections and repairs in Kingwood TX"
            width={400}
            height={300}
            loading="lazy"
          />
          <ul>
            <li>Tailored plans for businesses in Kingwood TX</li>
            <li>Regular inspections and repairs</li>
            <li>Minimize downtime near me in The Woodlands TX</li>
          </ul>
          <div className="buttons-container">
            <a href="/services/fleet-maintenance" className="learn-more">Learn More</a>
          </div>
        </div>

        <div className="service-item">
          <h3>Hybrid and EV Services Near Me in Montgomery County TX</h3>
          <Image 
            src="/images/hybrid-ev.jpg"
            alt="Hybrid and EV repair near me in Montgomery County TX with battery diagnostics and specialized repairs in The Woodlands TX"
            width={400}
            height={300}
            loading="lazy"
          />
          <ul>
            <li>Battery diagnostics and replacement in The Woodlands TX</li>
            <li>Specialized hybrid repairs</li>
            <li>Eco-friendly solutions near me in Montgomery County TX</li>
          </ul>
          <div className="buttons-container">
            <a href="/services/hybrid-ev" className="learn-more">Learn More</a>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" aria-modal="true" role="dialog">
          <div className="book-modal-content">
            <div className="modal-header">Send Shop Quote for {currentService}</div>
            <form onSubmit={handleSubmit} className="book-form">
              <label htmlFor="address">Full Address</label>
              <input
                id="address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address"
                required
                aria-label="Enter full address for auto service in The Woodlands"
              />

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

              <label htmlFor="licensePlate">License Plate (Optional)</label>
              <input id="licensePlate" type="text" value={licensePlate} onChange={(e) => setLicensePlate(e.target.value)} aria-label="Enter license plate for additional vehicle info" />

              <label htmlFor="symptoms">Description of Issue / Symptoms</label>
              <textarea id="symptoms" value={symptoms} onChange={(e) => setSymptoms(e.target.value)} rows={3} aria-label="Describe issues for mobile mechanic service in The Woodlands TX" />

              {errorMessage && <p className="error-message">{errorMessage} <a href="tel:9365294748">Call Now</a></p>}

              <button type="submit" className="modal-btn submit-btn" aria-label="Submit shop quote">Submit Shop Quote</button>
              <button type="button" onClick={() => setIsModalOpen(false)} className="modal-btn close-btn">Close</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}