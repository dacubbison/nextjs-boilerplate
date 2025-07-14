'use client';

import { useState } from 'react';

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="bg-blue-900 text-white py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Top Tech Mobile: Your ASE-Certified Mobile Mechanic</h1>
        <p className="text-xl mb-6">Serving The Woodlands, TX, Montgomery County, Kingwood, and surrounding areas with on-site repairs, diagnostics, hybrid/EV services, and more.</p>
        <p className="mb-8">Over 20 years of experience – Fast, affordable, and we come to you!</p>
        <div className="space-x-4">
          <a href="/book?service=general&location=the-woodlands-tx" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">Book Now</a>
          <button onClick={() => setShowModal(true)} className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600">Call Now</button>
        </div>
        <img src="/images/ase-badge.png" alt="ASE Master Technician Certified" className="mx-auto mt-4 w-24" />

        {/* Modal for Call/Text */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg text-black">
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <a href="tel:+19365294748" className="block bg-blue-500 text-white px-4 py-2 rounded mb-2 hover:bg-blue-600">Call Now</a>
              <a href="sms:+19365294748" className="block bg-gray-500 text-white px-4 py-2 rounded mb-2 hover:bg-gray-600">Text Now</a>
              <button onClick={() => setShowModal(false)} className="block w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Close</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}