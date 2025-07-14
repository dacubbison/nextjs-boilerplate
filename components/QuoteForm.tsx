'use client';

import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

export default function QuoteForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Handle file as base64 if present
    if (data.quoteFile && data.quoteFile[0]) {
      const file = data.quoteFile[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target.result;
        const formData = { ...data, quoteFile: base64, fileName: file.name };
        sendEmail(formData);
      };
      reader.readAsDataURL(file);
    } else {
      sendEmail(data);
    }
  };

  const sendEmail = (formData) => {
    // Replace with your EmailJS credentials (signup at emailjs.com)
    emailjs.send('your_service_id', 'your_template_id', formData, 'your_user_id')
      .then(() => alert('Quote submitted! We\'ll get back soon.'))
      .catch((error) => console.error(error));
  };

  return (
    <section className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Share Your Shop Quote – We Often Beat It by Up to 50%!</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
          <input {...register('name')} placeholder="Your Name" className="block w-full mb-2 p-2 text-black" required />
          <input {...register('email')} placeholder="Your Email" type="email" className="block w-full mb-2 p-2 text-black" required />
          <input {...register('vehicle')} placeholder="Vehicle Make/Model" className="block w-full mb-2 p-2 text-black" required />
          <textarea {...register('quoteDetails')} placeholder="Describe or Paste Shop Quote" className="block w-full mb-2 p-2 text-black" />
          <input {...register('quoteFile')} type="file" accept="image/*,application/pdf" className="block w-full mb-2" /> {/* File upload for photo/SS */}
          <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded">Submit Quote</button>
        </form>
      </div>
    </section>
  );
}