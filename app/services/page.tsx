// app/services/page.tsx
import Link from 'next/link';
import { getAllServices } from '@/lib/services'; // Adjust the import path if needed

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <p className="mb-8">We offer a wide range of services to keep your vehicle running smoothly. Please call or text us for more details.</p>
      <ul className="space-y-6">
        {services.map((service) => (
          <li key={service.slug} className="border-b pb-4">
            <Link href={`/services/${service.slug}`} className="text-blue-600 hover:underline text-xl font-semibold">
              {service.title}
            </Link>
            <p className="mt-2 text-gray-600">{service.desc.substring(0, 150)}...</p> {/* Short excerpt; adjust as needed */}
            <p className="mt-2 text-sm text-gray-500">Call or text for details.</p>
          </li>
        ))}
      </ul>
    </div>
  );
}