import Script from 'next/script';

// Sample post content (expand with real content or MDX)
const postData = {
  'how-to-choose-mobile-mechanic-woodlands-tx': {
    title: 'How to Choose a Mobile Mechanic in The Woodlands TX',
    content: 'When searching for a mobile mechanic near me in The Woodlands TX, look for ASE-certified techs like Top Tech Mobile. We offer on-site repairs in Montgomery County with fair pricing... [Full article text here].',
    date: 'July 15, 2025',
    keywords: 'choose mobile mechanic The Woodlands TX, best auto repair Montgomery County, ASE-certified near me Kingwood TX',
  },
  'check-engine-light-diagnosis-kingwood-tx': {
    title: 'What Does a Check Engine Light Mean? Diagnostics in Kingwood TX',
    content: 'A check engine light can indicate issues like sensor failures. Our mobile diagnostics in Kingwood TX provide quick fixes... [Full article text here].',
    date: 'July 10, 2025',
    keywords: 'check engine light meaning Kingwood TX, mobile diagnostics The Woodlands TX, car trouble Montgomery County',
  },
  // Add more posts
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = await params; // Await params in Next.js for dynamic routes
  const post = postData[slug];
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | Top Tech Mobile Blog`,
    description: post.content.substring(0, 160),
    keywords: post.keywords,
  };
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = await params; // Await params
  const post = postData[slug];
  if (!post) return <h1>Post Not Found</h1>;

  return (
    <article className="blog-post">
      <h1>{post.title}</h1>
      <p>Published: {post.date}</p>
      <p>{post.content}</p>

      <Script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "datePublished": post.date,
          "author": { "@type": "Person", "name": "Top Tech Mobile Team" },
          "publisher": { "@type": "Organization", "name": "Top Tech Mobile" },
          "description": post.content.substring(0, 160),
        })}
      </Script>
    </article>
  );
}

// For static generation
export async function generateStaticParams() {
  return Object.keys(postData).map((slug) => ({ slug }));
}