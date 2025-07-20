'use client';

export default function QuoteForm() {
  return (
    <section className="quote-form-section bg-navy-900 text-white py-10 px-5 text-center">
      <h2 className="text-2xl font-bold mb-6">Share Your Shop Quote - We Often Beat It by Up to 50%! (Mobile Mechanic Near Me in The Woodlands, Kingwood, Montgomery County TX)</h2>
      <form className="quote-form max-w-lg mx-auto flex flex-col gap-4" action="/submit-quote" method="POST">
        <input type="text" placeholder="Your Name" name="name" required aria-label="Your Name for mobile mechanic quote near me in The Woodlands TX" className="bg-navy-800 text-white p-2 rounded" />
        <input type="email" placeholder="Your Email" name="email" required aria-label="Your Email for mobile mechanic quote in Montgomery County TX" className="bg-navy-800 text-white p-2 rounded" />
        <input type="text" placeholder="Vehicle Make/Model" name="vehicle" required aria-label="Vehicle Make/Model for mobile mechanic near me in Kingwood TX" className="bg-navy-800 text-white p-2 rounded" />
        <textarea placeholder="Please describe any issues you're having thoroughly" name="description" rows={4} aria-label="Describe issues for mobile mechanic service in The Woodlands TX" className="bg-navy-800 text-white p-2 rounded resize-vertical" />
        <div className="file-upload flex flex-col items-center">
          <label htmlFor="file" className="text-sm mb-1">Upload Your Shop Quote Here (Screenshot, PDF, Photo)</label>
          <input type="file" id="file" name="quote-file" accept="image/*,.pdf" aria-label="Upload file for mobile mechanic quote near me in Kingwood TX" className="bg-navy-800 text-white p-2 rounded" />
        </div>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-full max-w-xs mx-auto" aria-label="Submit quote for mobile mechanic service in Montgomery County TX">Submit Quote</button>
      </form>
    </section>
  );
}