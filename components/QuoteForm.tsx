'use client';

export default function QuoteForm() {
  return (
    <section className="quote-form-section">
      <h2>Share Your Shop Quote - We Often Beat It by Up to 50%! (Mobile Mechanic Near Me in The Woodlands, Kingwood, Montgomery County TX)</h2>
      <form className="quote-form" action="/submit-quote" method="POST">
        <input type="text" placeholder="Your Name" name="name" required aria-label="Your Name for mobile mechanic quote near me in The Woodlands TX" />
        <input type="email" placeholder="Your Email" name="email" required aria-label="Your Email for mobile mechanic quote in Montgomery County TX" />
        <input type="text" placeholder="Vehicle Make/Model" name="vehicle" required aria-label="Vehicle Make/Model for mobile mechanic near me in Kingwood TX" />
        <textarea placeholder="Please describe any issues you're having thoroughly" name="description" rows={4} aria-label="Describe issues for mobile mechanic service in The Woodlands TX" />
        <div className="file-upload">
          <label htmlFor="file">Upload Your Shop Quote Here (Screenshot, PDF, Photo)</label>
          <input type="file" id="file" name="quote-file" accept="image/*,.pdf" aria-label="Upload file for mobile mechanic quote near me in Kingwood TX" />
        </div>
        <button type="submit" aria-label="Submit quote for mobile mechanic service in Montgomery County TX">Submit Quote</button>
      </form>
    </section>
  );
}