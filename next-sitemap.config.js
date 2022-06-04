/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://opensft.org',
  generateRobotsTxt: true, // (optional)
};

export default config;
