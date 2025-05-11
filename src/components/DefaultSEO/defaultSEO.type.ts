export interface DefaultSEOProps {
  seo: SEOItems;
}

export interface SEOItems {
  author: string;
  description: string;
  favicon: Favicon
  image: SEOImage;
  keywords: string;
  siteName: string;
  title: string;
  twitterSite: string;
  websiteUrl: string;
}

export interface SEOImage {
  url: string;
}

export interface Favicon {
  url: string;
}
