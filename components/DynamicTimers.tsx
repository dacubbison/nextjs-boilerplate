// components/DynamicTimers.tsx (New client component)
'use client';

import { useState, useEffect } from 'react';
import { formatDistanceToNow, differenceInDays } from 'date-fns';

interface DynamicTimersProps {
  promoEndDate: Date;
}

export default function DynamicTimers({ promoEndDate }: DynamicTimersProps) {
  const [daysLeft, setDaysLeft] = useState(0);
  const [mandieDaysAgo, setMandieDaysAgo] = useState('');
  const [josephDaysAgo, setJosephDaysAgo] = useState('');

  useEffect(() => {
    const updateTimers = () => {
      const now = new Date();
      setDaysLeft(differenceInDays(promoEndDate, now) > 0 ? differenceInDays(promoEndDate, now) : 0);

      const mandieDate = new Date('2025-07-24');
      setMandieDaysAgo(formatDistanceToNow(mandieDate, { addSuffix: true }));

      const josephDate = new Date('2025-07-21');
      setJosephDaysAgo(formatDistanceToNow(josephDate, { addSuffix: true }));
    };

    updateTimers();
    const interval = setInterval(updateTimers, 60000); // Update every minute
    return () => clearInterval(interval);
  }, [promoEndDate]);

  return (
    <>
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
      <p className="promo-text text-center mt-4 text-green-500 font-bold">New Customer Special: 10% off your first service! (Ends in {daysLeft} days - Valid through 8/20/2025) Beat any shop quote by up to 50%!</p>
    </>
  );
}