/**
 * Custom type definitions
 */

declare global {
  interface Window {
    products: any[];
    WOW: any;
  }
}

export interface IBlogPost {
  // id: number;
  category?: string;
  date?: string;
  description?: string;
  draft?: boolean;
  image?: string;
  imageAlt?: string;
  imageCredit?: string;
  imageCreditUrl?: string;
  imageOriginalHeight?: number;
  imageOriginalWidth?: number;
  lastUpdated?: string;
  readTime?: number;
  slug: string;
  tags?: string[];
  title: string;
  trending?: boolean;
  views?: number;
}

export interface ICategory {
  label: string;
  quantity?: number;
  value: string;
  description?: string;
  image?: string;
  imageHeight?: number;
  imageWidth?: number;
  slug?: string;
}

export interface IConfig {
  configBlog: any;
  configFooter: any;
  configHome: any;
  configInfo: any;
  configLanguages: any;
  configSeo: any;
  configSidebar: any;
  configSite: any;
  configSocial: any;
}

export interface IMetaProps {
  date?: string;
  description?: string;
  image?: string;
  title?: string;
  /**
   * For the meta tag `og:type`
   */
  type?: string;
}

export interface IProduct {
  brand?: string;
  created?: boolean;
  desc?: string;
  discount?: {
    isActive?: boolean;
    percentage?: number;
  };
  images?: {
    img?: any;
    height: number;
    width: number;
  }[];
  items: any[];
  oldPrice?: any;
  price?: any;
  ratingScore?: any;
  slug?: string;
  title?: string;
  totalSell?: number;
  trending?: boolean;
}

export interface IResource {
  brand?: string;
  category?: string;
  categoryLabel?: string;
  created?: boolean;
  desc?: string;
  discount?: {
    isActive?: boolean;
    percentage?: number;
  };
  images?: {
    img?: any;
    height: number;
    width: number;
  }[];
  items: any[];
  oldPrice?: any;
  price?: any;
  ratingScore?: any;
  slug?: string;
  title?: string;
  totalSell?: number;
  trending?: boolean;
}

export interface ITag {
  description?: string;
  label: string;
  value: string;
  featured?: boolean;
}
