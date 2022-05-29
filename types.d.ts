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
  id: number;
  category?: string;
  date?: string;
  desc?: string;
  img?: string;
  imgOriginalHeight?: number;
  imgOriginalWidth?: number;
  title: string;
  views?: number;
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

