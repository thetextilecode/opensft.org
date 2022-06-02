const dev = process.env.NODE_ENV !== 'production';

export const server = dev
  ? 'http://localhost:3000'
  : 'https://opensft.org';

export const blogConfig = {
  author: 'Rachel Yordán',
  postsPerPage: 8,
  showDate: true,
};

export const siteConfig = {
  url: 'https://www.opensft.org'
};

export const infoConfig = {
  addressCity: 'London',
  addressLine1: '71-75, Shelton Street, Covent Garden',
  addressLine2: '',
  addressPostcode: 'WC2H 9JQ',
  companyName: 'Open Source Fashion & Textiles',
  companiesHouseNumber: '14083675',
  copyright: 'Copyright 2022 © Open Source Fashion & Textiles',
  email: 'hello@opensft.org',
  hours: '10:00 - 18:00, Mon - Sat',
  logo: '/assets/imgs/theme/osft.jpg',
  logoWidth: 256,
  logoHeight: 92,
  phone: '+44 20 8036 4986',
};

export const seoConfig = {
  googleAnalytics: '',
  meta_og_title: 'Open Source Fashion & Textiles',
  meta_og_type: 'website',
  meta_og_url: 'https://www.opensft.org',
  meta_og_image: '',
  meta_og_description: 'Bridging the worlds of open source technology and fashion & textiles by providing you with' +
    ' resources and training.',
  meta_twitter_card: 'summary',
  meta_twitter_site: '@opensourceft',
  meta_twitter_creator: '@opensourceft',
  title: 'Open Source Fashion & Textiles | nonprofit for FOSS in fashion',
  shareImage: 'https://nextjs-mdx-blog-starter.vercel.app/img/screenshot.png',
  shareImageAlt: 'Next.js MDX Blog Starter Screenshot',
};

export const socialConfig = {
  facebook: 'opensft',
  github: 'opensft',
  instagram: 'opensft',
  pinterest: 'opensft',
  twitter: 'opensourceft',
  // youtube: ''
};
