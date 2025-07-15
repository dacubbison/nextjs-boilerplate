'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="relative bg-blue-900 text-white py-20 text-center overflow-hidden">
      {/* Background Image with Lighter Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/mobile-mechanic-kingwood-tx.png" // Confirm this file is in public/images
          alt="Mobile Mechanic Service in Kingwood TX - Top Tech Working on Car in Driveway"
          fill
          style={{ objectFit: 'cover' }}
          priority
          onError={() => console.log('Image load error - check path or file in public/images')}
        />
        <div className="absolute inset-0 bg-blue-900 opacity-30" /> {/* Lightened haze */}
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Top Tech: Mobile Mechanic in The Woodlands</h1>
        <p className="text-xl md:text-2xl mb-6">ASE Certified Technicians</p>
        <p className="text-2xl mb-4">Your Mobile Mechanic in The Woodlands, Montgomery County, and Kingwood</p>
        <p className="text-xl mb-6">Quality Work, Reasonable Prices</p>
        <p className="text-xl mb-8">Call or Text for a Free Quote: 936-529-4748</p>
        <p className="text-xl mb-6">Send Us Your Shop Quotes - We'll Try to Cut Them in Half!</p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600"
            aria-label="Open contact modal to call or text Top Tech Mobile Mechanic"
          >
            Click Here to Call Now
          </button>
          <a
            href="https://calendly.com/your-username/mobile-quote" // Replace with your Calendly link
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600"
            aria-label="Book an appointment with Top Tech Mobile Mechanic via Calendly"
          >
            Book Now
          </a>
        </div>

        {/* Modal for Call/Text */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" aria-modal="true" role="dialog">
            <div className="bg-white p-6 rounded-lg text-black max-w-sm w-full">
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <a
                href="tel:+19365294748"
                className="block bg-blue-500 text-white px-4 py-2 rounded mb-2 hover:bg-blue-600"
                aria-label="Call Top Tech Mobile Mechanic at 936-529-4748"
              >
                Call Now
              </a>
              <a
                href="sms:+19365294748"
                className="block bg-gray-500 text-white px-4 py-2 rounded mb-2 hover:bg-gray-600"
                aria-label="Text Top Tech Mobile Mechanic at 936-529-4748"
              >
                Text Now
              </a>
              <button
                onClick={() => setShowModal(false)}
                className="block w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                aria-label="Close contact modal"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}