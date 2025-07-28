// app/blog/page.tsx (Blog listing page)
import Link from 'next/link';

const posts = [
  { slug: '5-reasons-mobile-mechanic', title: '5 Reasons You Need a Mobile Mechanic in The Woodlands TX', excerpt: 'Discover why on-site repairs are the future for busy drivers in Montgomery County.', date: '2025-07-26' },
  // Add more posts here or fetch from a database/CMS
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