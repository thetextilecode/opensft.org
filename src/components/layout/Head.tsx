import NextHead from 'next/head';
import { useRouter } from 'next/router';
import { IMetaProps } from '../../../types';
import { seoConfig, siteConfig } from '../../../opensft.config';

const Head = ({ customMeta }: { customMeta?: IMetaProps }): JSX.Element => {
  const router = useRouter();

  return (
    <NextHead>
      <title>{customMeta.title ?? siteConfig.title}</title>
      <style>@import
        url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Spartan:wght@300;400;500;600;700&display=swap');
      </style>

      {/*<!-- Favicon -->*/}
      {/*<link rel='icon' href={ siteConfig.favicon } />*/}
      <link rel='icon'
            href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌿</text></svg>' />

      <link rel='canonical' href={`${siteConfig.url}${router.asPath}`} />

      {/*<meta name="description" content="{% if page.excerpt %}{{ page.excerpt | strip_html | strip_newlines | truncate: 160 }}{% else %}{{ site.description }}{% endif %}" />*/}
      <meta property='og:description' content={customMeta.description ?? seoConfig.meta_og_description} />
      <meta property='og:image' content={customMeta.image ?? seoConfig.meta_og_image} />
      <meta property='og:site_name' content={siteConfig.title} />
      <meta property='og:title' content={customMeta.title ?? seoConfig.meta_og_title} />
      <meta property='og:type' content={customMeta.type ?? seoConfig.meta_og_type} />
      <meta property='og:url' content={`${siteConfig.url}${router.asPath}`} />
      <meta name='twitter:card' content={seoConfig.meta_twitter_card} />
      <meta name='twitter:site' content={seoConfig.meta_twitter_site} />
      <meta name='twitter:creator' content={seoConfig.meta_twitter_creator} />
      <meta name='twitter:description' content={customMeta.description ?? siteConfig.description} />
      <meta name='twitter:image' content={customMeta.image ?? siteConfig.shareImage} />
      {customMeta.date && (
        <meta property='article:published_time' content={customMeta.date} />
      )}
    </NextHead>
  );
};

export default Head;
