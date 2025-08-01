// app/blog/page.tsx
import Link from 'next/link';

const posts = [
  { slug: '5-reasons-mobile-mechanic', title: '5 Reasons You Need a Mobile Mechanic in The Woodlands TX', excerpt: 'In a world where time is money, discover how on-site auto repairs can transform your maintenance routine and save you from the hassle of traditional shops.', date: '2025-07-29' }, // Monday
  { slug: 'ev-maintenance-tips', title: 'Essential EV Maintenance Tips for Montgomery County Drivers', excerpt: 'As electric vehicles surge in popularity, learn expert strategies to keep your EV performing at its best amid Texas\' challenging climate.', date: '2025-07-22' }, // Monday
  { slug: 'brake-safety-guide', title: 'The Ultimate Brake Safety Guide: When and Why to Inspect in Kingwood TX', excerpt: 'Brakes are your vehicle\'s most critical safety feature—uncover the signs of wear, prevention tips, and why regular checks are non-negotiable for safe driving.', date: '2025-07-15' }, // Monday
  // Add more posts here, dated to previous Mondays
];

export default function Blog() {
  return (
    <main className="blog-main py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Top Tech Mobile Mechanic Blog</h1>
      <p className="text-center mb-10">Insights on auto repairs, tips for The Woodlands TX drivers, and more from your local mobile mechanic near me.</p>
      <ul className="blog-list space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
            <p className="text-gray-500 mb-2">{post.date}</p>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}