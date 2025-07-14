'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="relative bg-blue-900 text-white py-20 text-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute top-4 left-4">
        <Image src="/images/cartoon-mechanic-logo.jpg" alt="Top Tech Mobile Mechanic Logo" width={100} height={100} />
      </div>
      <div className="absolute top-4 right-4">
        <Image src="/images/piston-wrench-logo.jpg', alt="Top Tech Mobile Service Logo" width= {100} height={100} />
      </div>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Top Tech: Mobile Mechanic in The Woodlands</h1>
        <p className="text-xl mb-6">ASE Certified Technicians</p>
        <p className="text-2xl mb-4">Your Mobile Mechanic in The Woodlands and Montgomery County</p>
        <p className="text-xl mb-6">Quality Work, Reasonable Prices</p>
        <p className="text-xl mb-8">Call or Text for a Free Quote: 936-529-4748</p>
        <p className="text-xl mb-6">Send Us Your Shop Quotes - We'll Try to Cut Them in Half!</p>
        <button onClick={() => setShowModal(true)} className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600">Click Here to Call Now</button>
        <img src="/images/ase-badge.png" alt="ASE Certified Master Technician" className="mx-auto mt-4 w-24" />

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