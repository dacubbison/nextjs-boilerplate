'use client';

import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  vehicle: string;
  quoteDetails?: string;
  quoteFile?: FileList;
}

export default function QuoteForm() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const emailParams: Record<string, unknown> = {
        name: data.name,
        email: data.email,
        vehicle: data.vehicle,
        quoteDetails: data.quoteDetails,
      };

      if (data.quoteFile && data.quoteFile[0]) {
        const file = data.quoteFile[0];
        const base64 = await new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onload = (e: ProgressEvent<FileReader>) => resolve(e.target?.result as string || '');
          reader.readAsDataURL(file);
        });
        emailParams.quoteFile = base64;
        emailParams.fileName = file.name;
      }

      await emailjs.send('your_service_id', 'your_template_id', emailParams, 'your_user_id');
      alert('Quote submitted! We\'ll get back soon.');
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Error submitting quote. Please try again or contact us directly.');
    }
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
          <input {...register('quoteFile')} type="file" accept="image/*,application/pdf" className="block w-full mb-2" />
          <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded">Submit Quote</button>
        </form>
      </div>
    </section>
  );
}