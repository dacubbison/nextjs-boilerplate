// components/Services.tsx
import Image from 'next/image';
import Link from 'next/link';
import { getAllServices } from '@/lib/services';

export default function Services() {
  const services = getAllServices();

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Mobile Auto Services in The Woodlands TX and Montgomery County</h2>
        <p className="text-center mb-8">As your local ASE-certified mobile mechanic near The Woodlands TX, we specialize in convenient, on-site services. From routine maintenance to complex repairs, we handle it all with precision and care right at your home or office in Kingwood TX or Montgomery County. Limited time: 10% off first service!</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <div className="flex justify-between">
                  <Link href={`/services/${service.slug}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Learn More
                  </Link>
                  <Link href="/contact" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-blue-600 underline">Additional Services</p>
      </div>
    </section>
  );
}