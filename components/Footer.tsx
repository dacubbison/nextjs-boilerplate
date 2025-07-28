// components/Footer.tsx
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
      {/* Embedded Google Maps for local SEO */}
      <iframe
        className="map-embed"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789012345678!2d-95.4613!3d30.1658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA5JzU2LjkiTiA5NcKwMjcnNDEuNyJX!5e0!3m2!1sen!2sus!4v1627489200000!5m2!1sen!2sus" // Replace with your API key/embed
        loading="lazy"
        allowFullScreen
        aria-label="Service area map for mobile mechanic in The Woodlands TX"
      ></iframe>
      <p>© 2025 Top Tech Mobile. All rights reserved.</p>
    </footer>
  );
}