import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-section bg-navy-900 text-white text-center py-5 text-sm">
      <p>Top Tech Mobile Mechanic - ASE-Certified Mobile Mechanic Near Me</p>
      <p>Serving The Woodlands, Kingwood, and Montgomery County TX</p>
      <p>Phone: 936-529-4748 | Address: 123 Example St, The Woodlands, TX 77381</p> {/* NAP for SEO */}
      <p>
        <a href="tel:9365294748" className="text-green-500">Call Me Now</a> | 
        <a href="https://calendly.com/your-username/your-event" className="text-green-500">Book Appointment</a> | 
        <Link href="/blog" className="text-green-500">Blog</Link> | 
        <Link href="/service-area" className="text-green-500">Service Area</Link>
      </p>
      <p>© 2025 Top Tech Mobile. All rights reserved.</p>
    </footer>
  );
}