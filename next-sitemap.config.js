/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://toptechmobile.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ['/server-sitemap.xml'],
  transform: async (config, path) => {
    const priorities = {
      '/': 1.0,
      '/services/': 0.9,
      '/blog/': 0.8,
      '/service-area': 0.7,
    };
    const changefreqs = {
      '/': 'weekly',
      '/services/': 'monthly',
      '/blog/': 'daily',
      '/service-area': 'monthly',
    };
    return {
      loc: path,
      lastmod: new Date().toISOString(), // Use file mod time or custom logic later
      changefreq: changefreqs[path.split('/')[1]] || 'weekly',
      priority: priorities[path.split('/')[1]] || 0.7,
    };
  },
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
    ],
  },
};