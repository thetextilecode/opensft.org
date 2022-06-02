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
  // category?: string;
  // tags?: string[];
  date?: string;
  description?: string;
  image?: string;
  imageOriginalHeight?: number;
  imageOriginalWidth?: number;
  lastUpdated?: string;
  slug: string;
  title: string;
  views?: number;
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

