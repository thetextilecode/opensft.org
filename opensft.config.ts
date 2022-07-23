import { IMobileMenu } from './src/components/layout/MobileMenu';

const dev = process.env.NODE_ENV !== 'production';
import { ICategory, IConfigMobile, ITag } from './types';

export const server = dev ? 'http://localhost:3000' : 'https://opensft.org';

export const blogConfig = {
  author: 'Rachel Yordán',
  postsPerSidebar: 5,
  postsPerPage: 8,
  showComments: false,
  showDate: true,
};

export const postCategories: ICategory[] = [
  {
    label: 'Business',
    value: 'business',
  },
  {
    label: 'News',
    value: 'news',
  },
  {
    label: 'Supply Chain',
    value: 'supply-chain',
  },
  {
    label: 'Technology',
    value: 'technology',
  },
];

export const postTags: ITag[] = [
  {
    label: 'AI',
    value: 'ai',
    description: '',
  },
  {
    label: 'Automation',
    value: 'automation',
    description: '',
  },
  {
    label: 'Blockchain',
    value: 'blockchain',
    description: '',
  },
  {
    label: 'Business Intelligence',
    value: 'business-intelligence',
    description: '',
  },
  {
    label: 'ERP',
    value: 'erp',
    description: '',
  },
  {
    label: 'IoT',
    value: 'iot',
    description: '',
  },
  {
    label: 'Materials',
    value: 'materials',
    description: '',
  },
  {
    label: 'Open Source',
    value: 'open source',
    description: '',
  },
  {
    label: 'PLM',
    value: 'plm',
    description: '',
  },
  {
    label: 'Retail',
    value: 'retail',
    description: '',
  },
  {
    label: 'SCM',
    value: 'scm',
    description: '',
  },
  {
    label: 'Transparency',
    value: 'transparency',
    description: '',
  },
];

export const siteConfig = {
  favicon: '/favicon.ico',
  url: 'https://www.opensft.org',
  title: 'Open Source Fashion & Textiles | nonprofit for FOSS in fashion',
  description:
    'Bridging the worlds of open source technology and fashion & textiles by providing you with' +
    ' resources and training.',
  shareImage: '/assets/images/logo/screenshot.png',
  shareImageAlt: 'Open Source Fashion & Textiles',
};

export const homeConfig = {
  showBanner2: false,
  showBanner4: false,
  showBanner5: false,
  showBlogPosts: true,
  showBottom: false,
  showDeals: false,
  showFeaturedBrands: false,
  showFeaturesBanner: false,
  showHomeSlider: true,
  showPopupModal: false,
  showPopularBrands: false,
  showPopularCategories: false,
  showQuickView: true,
};

export const headerConfig = {
  showHeaderTop: true,
  showHeaderMiddle: false,
  showHeaderBottom: true,
  bottom: {
    showBrowseCategories: false,
    showHotline: false,
    showIconCompare: false,
    showIconCart: false,
    showIconSaved: false,
    showMobilePromo: false,
  },
  middle: {
    showSearch: true,
    showCompareCartSaved: false,
  },
  top: {
    showLanguages: false,
    showLocation: false,
    showLoginSignup: false,
    showNewsflash: true,
    showPhone: false,
    newsflash: {
      callToAction: '',
      href: '/#',
      text: '',
    },
  },
};

export const infoConfig = {
  addressCity: 'London',
  addressLine1: '71-75, Shelton Street',
  addressLine2: 'Covent Garden',
  addressPostcode: 'WC2H 9JQ',
  companyName: 'Open Source Fashion & Textiles',
  companiesHouseNumber: '14083675',
  copyright: 'Copyright 2022 © Open Source Fashion & Textiles',
  email: 'hello@opensft.org',
  hours: '10:00 - 18:00, Mon - Sat',
  logo: '/assets/images/logo/logo.png',
  logoIllustration: '/assets/images/logo/illustration-light-sm.png',
  logoIllustrationWidth: 185,
  logoIllustrationHeight: 239,
  logoWidth: 351,
  logoHeight: 97,
  phone: '+44 20 8036 4986',
};

// Needs to remain below `infoConfig`
export const footerConfig = {
  showFooterBottom: true,
  showFooterMid: true,
  showFooterTop: true,
  footerBottom: {
    leftCopy: infoConfig.copyright,
    rightCopy: 'Registered in England and Wales. Company No: ' + infoConfig.companiesHouseNumber,
  },
  footerMid: {},
  footerTop: {
    showNewsletter: true,
  },
};

export const menuItems = [
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Resources',
    href: '/resources',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

export const mobileConfig: IConfigMobile = {
  showCart: false,
  showCategories: false,
  showCompare: false,
  showMegaMenu: false,
  showFooterContact: false,
  showFooterSocial: true,
  showSearch: false,
};

export const seoConfig = {
  meta_og_title: 'Open Source Fashion & Textiles',
  meta_og_type: 'website',
  // meta_twitter_card: 'summary',
  meta_og_url: 'https://www.opensft.org',
  meta_og_description:
    'Bridging the worlds of open source technology and fashion & textiles by providing you with' +
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
  twitter: 'opensft',
  // youtube: ''
};

export const sidebarConfig = {
  showBanner: false,
  showCategories: true,
  showPopularTags: false,
  showSearch: false,
  showTrendingPosts: true,
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
