import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
  title: 'Blog - Mobile Mechanic Tips in The Woodlands TX | Top Tech Mobile',
  description: 'Expert advice on auto repairs, maintenance, and mobile mechanic services in The Woodlands, Montgomery County, and Kingwood TX.',
  keywords: 'mobile mechanic blog The Woodlands TX, auto repair tips Montgomery County, car maintenance Kingwood TX',
};

// Sample posts data (add more or use MDX/CMS later)
const posts = [
  {
    slug: 'how-to-choose-mobile-mechanic-woodlands-tx',
    title: 'How to Choose a Mobile Mechanic in The Woodlands TX',
    excerpt: 'Tips for finding a reliable ASE-certified mobile mechanic near me in Montgomery County with fair pricing.',
    date: 'July 15, 2025',
  },
  {
    slug: 'check-engine-light-diagnosis-kingwood-tx',
    title: 'What Does a Check Engine Light Mean? Diagnostics in Kingwood TX',
    excerpt: 'Common causes and how our mobile diagnostics can fix it fast in Montgomery County.',
    date: 'July 10, 2025',
  },
  // Add more posts as needed
];

export default function Blog() {
  return (
    <main className="blog-main">
      <h1>Blog - Auto Repair Tips from Top Tech Mobile</h1>
      <p>Stay informed on mobile mechanic services, maintenance advice, and more for The Woodlands TX drivers.</p>

      <ul className="blog-list">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.excerpt}</p>
            <p>Published: {post.date}</p>
          </li>
        ))}
      </ul>

      <Script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Top Tech Mobile Blog",
          "description": "Articles on mobile mechanic services in Montgomery County TX.",
          "blogPost": posts.map((post) => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "datePublished": post.date,
            "url": `https://toptechmobile.com/blog/${post.slug}`,
          })),
        })}
      </Script>
    </main>
  );
}