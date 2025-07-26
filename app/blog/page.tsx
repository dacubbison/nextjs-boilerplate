export default function Blog() {
  return (
    <main className="blog-main">
      <h1>Top Tech Mobile Mechanic Blog</h1>
      <p>Insights on auto repairs, tips for The Woodlands TX drivers, and more from your local mobile mechanic near me.</p>
      <ul className="blog-list">
        <li>
          <h2>Common Car Issues in The Woodlands Heat</h2>
          <p>Learn how Texas summers affect your vehicle and how I can help with on-site repairs.</p>
          <a href="/blog/common-issues-woodlands">Read More</a>
        </li>
        {/* Add more posts */}
      </ul>
    </main>
  );
}