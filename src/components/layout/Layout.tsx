import { ReactNode, useState } from 'react';
import Breadcrumb from './Breadcrumb';
import Footer from './Footer';
import Head from 'next/head';
import Header from './Header';
import MobileMenu from './MobileMenu';
import { IMetaProps } from '../../../types';
import { seoConfig, siteConfig } from '../../../opensft.config';
import { useRouter } from 'next/router';

export interface ILayout {
  children?: ReactNode,
  customMeta?: IMetaProps,
  headerStyle?: any,
  newsletterId?: string;
  newsletterUser?: string;
  noBreadcrumb?: any,
  parent?: ReactNode,
  sub?: any,
  subChild?: any
}

const Layout = ({ children, customMeta, newsletterId, newsletterUser, parent, sub, subChild, noBreadcrumb, headerStyle }: ILayout) => {
  const [isToggled, setToggled] = useState<boolean>(false);
  const router = useRouter();

  const toggleClick = () => {
    setToggled(!isToggled);
    isToggled ? document.querySelector('body').classList.remove('mobile-menu-active') : document.querySelector('body').classList.add('mobile-menu-active');
  };

  return (
    <>
      <Head>
        <title>{customMeta?.title ?? siteConfig.title}</title>
        <style>@import
          url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Cedarville+Cursive&family=Quando&display=swap');
        </style>

        {/*<!-- Favicon -->*/}
        {/*<link rel='icon' href={ siteConfig.favicon } />*/}
        <link rel='icon'
              href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌿</text></svg>' />

        <link rel='canonical' href={`${siteConfig.url}${router.asPath}`} />

        <meta property='og:description' content={customMeta?.description ?? seoConfig.meta_og_description} />
        <meta property='og:image' content={customMeta?.image ?? seoConfig.meta_og_image} />
        <meta property='og:site_name' content={siteConfig.title} />
        <meta property='og:title' content={customMeta?.title ?? seoConfig.meta_og_title} />
        <meta property='og:type' content={customMeta?.type ?? seoConfig.meta_og_type} />
        <meta property='og:url' content={`${siteConfig.url}${router.asPath}`} />
        <meta name='twitter:card' content={seoConfig.meta_twitter_card} />
        <meta name='twitter:site' content={seoConfig.meta_twitter_site} />
        <meta name='twitter:creator' content={seoConfig.meta_twitter_creator} />
        <meta name='twitter:description' content={customMeta?.description ?? siteConfig.description} />
        <meta name='twitter:image' content={customMeta?.image ?? siteConfig.shareImage} />
        {customMeta?.date && (
          <meta property='article:published_time' content={customMeta.date} />
        )}
      </Head>


      {isToggled && <div className='body-overlay-1' onClick={toggleClick}></div>}

      <Header headerStyle={headerStyle} isToggled={isToggled} toggleClick={toggleClick} />
      <MobileMenu isToggled={isToggled} toggleClick={toggleClick} />
      <main className='main'>
        <Breadcrumb parent={parent} sub={sub} subChild={subChild} noBreadcrumb={noBreadcrumb} />
        {children}
      </main>
      <Footer newsletterId={newsletterId} newsletterUser={newsletterUser} />
    </>
  );
};

export default Layout;
