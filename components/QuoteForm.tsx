'use client';

import { useState } from 'react';

export default function QuoteForm() {
  const [formData, setFormData] = useState({ name: '', email: '', vehicle: '', description: '', file: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., EmailJS or API call)
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-10 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Share Your Shop Quote - We Often Beat It by Up to 50%!</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="block w-full mb-4 p-2 bg-blue-800 text-white placeholder-white border border-blue-700 rounded" // Changed placeholder to white
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="block w-full mb-4 p-2 bg-blue-800 text-white placeholder-white border border-blue-700 rounded" // Changed to white
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required 
          />
          <input 
            type="text" 
            placeholder="Vehicle Make/Model" 
            className="block w-full mb-4 p-2 bg-blue-800 text-white placeholder-white border border-blue-700 rounded" // Changed to white
            onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
            required 
          />
          <textarea 
            placeholder="Describe or Paste Shop Quote" 
            className="block w-full mb-4 p-2 bg-blue-800 text-white placeholder-white border border-blue-700 rounded" // Changed to white
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required 
          />
          <input 
            type="file" 
            className="block w-full mb-4 text-white" // File input doesn't need placeholder, but ensure text is visible
            onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })}
          />
          <button type="submit" className="block w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
            Submit Quote
          </button>
        </form>
      </div>
    </section>
  );
}