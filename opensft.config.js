const dev = process.env.NODE_ENV !== 'production';

export const server = dev
  ? 'http://localhost:3000'
  : 'https://opensft.org';

export const blogConfig = {
  author: 'Rachel Yordán',
  postsPerSidebar: 5,
  postsPerPage: 8,
  showDate: true,
};

export const siteConfig = {
  favicon: '/favicon.ico',
  url: 'https://www.opensft.org',
  title: 'Open Source Fashion & Textiles | nonprofit for FOSS in fashion',
  description: 'Bridging the worlds of open source technology and fashion & textiles by providing you with' +
    ' resources and training.',
  // shareImage: 'https://nextjs-mdx-blog-starter.vercel.app/img/screenshot.png',
  shareImage: '/assets/images/theme/screenshot.png',
  shareImageAlt: 'Open Source Fashion & Textiles',
};

export const homeConfig = {
  showBanner2: false,
  showBanner4: false,
  showBanner5: false,
  showBlogPosts: true,
  showBottom: true,
  showDeals: false,
  showFeaturedBrands: false,
  showFeaturesBanner: false,
  showFetchTab2: false,
  showHomeSlider: true,
  showPopupModal: false,
  showNewArrivals: false,
  showNewsletter: true,
  showPopularBrands: false,
  showPopularCategories: false,
  showProductTabs: false,
  showQuickView: true
};

export const headerConfig = {
  showHeaderTop: true,
  showHeaderMiddle: true,
  showHeaderBottom: true,
  showLanguages: true,
  bottom: {
    showBrowseCategories: false,
    showHotline: false,
    showIconCompare: true,
    showIconCart: false,
    showIconSaved: true,
    showMobilePromo: false
  },
  middle: {},
  top: {
    showNewsflash: true,
    newsflash: {
      callToAction: ' View details',
      href: '/products/shop-grid-right',
      text: 'Get great devices up to 50% off',
    }
  }
};

export const menuConfig = {};

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
  logo: '/assets/images/theme/osft.jpg',
  // logo: '/assets/images/theme/logo.svg',
  logoWidth: 256,
  logoHeight: 92,
  phone: '+44 20 8036 4986',
};

export const seoConfig = {
  googleAnalytics: '',
  meta_og_title: 'Open Source Fashion & Textiles',
  meta_og_type: 'website',
  // meta_twitter_card: 'summary',
  meta_og_url: 'https://www.opensft.org',
  meta_og_description: 'Bridging the worlds of open source technology and fashion & textiles by providing you with' +
    ' resources and training.',
  meta_og_image: '',
  meta_twitter_card: 'summary_large_image',
  meta_twitter_site: '@opensourceft',
  meta_twitter_creator: '@opensourceft',
};

export const socialConfig = {
  facebook: 'opensft',
  github: 'opensft',
  instagram: 'opensft',
  pinterest: 'opensft',
  twitter: 'opensourceft',
  // youtube: ''
};

export const languages = [
  // {
  //   flag: '',
  //   flagWidth: 0,
  //   flagHeight: 0,
  //   href: '',
  //   label: 'English',
  // },
  {
    flag: '/assets/images/theme/flag-dt.png',
    flagWidth: 50,
    flagHeight: 30,
    href: '',
    label: 'Deutsch',
  },
  // {
  //   flag: '/assets/images/theme/flag-es.png',
  //   flagWidth: 0,
  //   flagHeight: 0,
  //   href: '',
  //   label: 'Español'
  // },
  {
    flag: '/assets/images/theme/flag-fr.png',
    flagWidth: 50,
    flagHeight: 33,
    href: '',
    label: 'Français',
  },
  {
    flag: '/assets/images/theme/flag-ru.png',
    flagWidth: 50,
    flagHeight: 33,
    href: '',
    label: 'Pусский',
  },
];
