/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://bit-chat.in',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    additionalSitemaps: [
      'https://bit-chat.in/sitemap.xml',
    ],
  },
  exclude: ['/api/*', '/admin/*'],
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
} 