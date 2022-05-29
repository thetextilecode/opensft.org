/**
 * Custom type definitions
 */

declare global {
  interface Window {
    products: any[];
    WOW: any;
  }
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

