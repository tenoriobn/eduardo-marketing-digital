import Head from 'next/head';
import { DefaultSEOProps } from './defaultSEO.type';

export function DefaultSEO({ seo }: DefaultSEOProps) {
  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content={seo.author} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={seo.websiteUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image.url} />
      <meta property="og:url" content={seo.websiteUrl} />
      <meta property="og:site_name" content={seo.siteName} />
      <meta property="og:locale" content="pt_BR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image.url} />
      <meta name="twitter:site" content={seo.twitterSite} />
      <meta name="twitter:creator" content={seo.twitterSite} />

      <link rel="shortcut icon" href={seo.favicon.url} type="image/svg+xml" />
      <link rel="preload" as="image" href="/images/featured-card-bg.jpg"/>
      <meta name="theme-color" content="#2D2D2D" />
    </Head>
  );
}
