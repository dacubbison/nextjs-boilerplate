// app/contact/page.tsx (Updated with correct email)
'use client';

import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add emailJS or form submission logic here
    console.log('Form submitted:', { name, email, message });
    alert("Message sent! I'll get back to you soon.");
    setSubmitted(true);
  };

  return (
    <main className="py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full p-2 border rounded h-32"
          />
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Send</button>
          {submitted && <p className="text-green-500">Message sent!</p>}
        </form>
        <div>
          <h2 className="text-2xl mb-4">Our Location</h2>
          <p>Phone: 936-529-4748</p>
          <p>Email: david@toptechmobile.com</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789012345678!2d-95.4613!3d30.1658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA5JzU2LjkiTiA5NcKwMjcnNDEuNyJX!5e0!3m2!1sen!2sus!4v1627489200000!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </main>
  );
}