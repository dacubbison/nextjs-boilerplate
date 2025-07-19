'use client';

import { useState } from 'react';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="hero-section">
      <h1>Mobile Mechanic in The Woodlands TX - Top Tech: ASE-Certified</h1>
      <p>Your trusted mobile mechanic near me in The Woodlands, Montgomery County, and Kingwood TX.</p>
      <p>Call or Text for a Free Quote: 936-529-4748</p>
      <p>Share Your Shop Quote - We Often Beat It by Up to 50%!</p>
      <div className="hero-buttons">
        <button onClick={toggleModal} className="call-now-btn">Call Now</button>
        <a href="https://calendly.com/your-username/your-event" target="_blank" rel="noopener noreferrer" className="book-now-btn">Book Now</a>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">Contact Us</div>
            <a href="tel:9365294748" className="modal-btn call-btn">Call Now</a>
            <a href="sms:9365294748" className="modal-btn text-btn">Text Now</a>
            <button onClick={toggleModal} className="modal-btn close-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}