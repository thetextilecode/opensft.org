/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://opensft.org',
  exclude: [
    '/404*',
    '/account*',
    '/checkout',
    '/compare*',
    '/login-register*',
    '/privacy-policy*',
    '/products*',
    '/saved*',
    '/success*',
    '/terms*',
    '/wishlist*',
  ],
  generateRobotsTxt: true, // (optional)
};

module.exports = config;
