// components/DynamicTestimonials.tsx
'use client';

import { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';

export default function DynamicTestimonials() {
  const [mandieDaysAgo, setMandieDaysAgo] = useState('');
  const [josephDaysAgo, setJosephDaysAgo] = useState('');

  useEffect(() => {
    const updateTimers = () => {
      const mandieDate = new Date('2025-07-24');
      setMandieDaysAgo(formatDistanceToNow(mandieDate, { addSuffix: true }));

      const josephDate = new Date('2025-07-21');
      setJosephDaysAgo(formatDistanceToNow(josephDate, { addSuffix: true }));
    };

    updateTimers();
    const interval = setInterval(updateTimers, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials-section py-10 text-center bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">What Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-center mb-2">
            ⭐⭐⭐⭐⭐
          </div>
          <p className="italic">"I highly recommend Top Tech Mobile! They showed up on time, finished my brakes on the same day. No mess left behind!!! Job well done Top Tech!"</p>
          <p className="mt-2 font-semibold">- Mandie Vaughn, {mandieDaysAgo}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-center mb-2">
            ⭐⭐⭐⭐⭐
          </div>
          <p className="italic">"Top Tech Mobile did great replacing my compressor. They came out, replaced the part in my yard, and left no mess. They were very affordable and the owner was very helpful with diagnosing the issue and getting my car fixed quickly."</p>
          <p className="mt-2 font-semibold">- David Ridgely, Yesterday</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-center mb-2">
            ⭐⭐⭐⭐⭐
          </div>
          <p className="italic">(No detailed review provided)</p>
          <p className="mt-2 font-semibold">- Joseph Quinn, {josephDaysAgo}</p>
        </div>
      </div>
    </section>
  );
}