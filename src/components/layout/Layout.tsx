import { ReactNode, useState } from 'react';
import Breadcrumb from './Breadcrumb';
import Footer from './Footer';
import Head from 'next/head';
import Header from './Header';
import MobileMenu from './MobileMenu';
import { seoConfig } from '../../../opensft.config';

export interface ILayout {
  children?: ReactNode,
  headerStyle?: any,
  noBreadcrumb?: any,
  parent?: ReactNode,
  sub?: any,
  subChild?: any
}

const Layout = ({ children, parent, sub, subChild, noBreadcrumb, headerStyle }: ILayout) => {
  const [isToggled, setToggled] = useState<boolean>(false);

  const toggleClick = () => {
    setToggled(!isToggled);
    isToggled ? document.querySelector('body').classList.remove('mobile-menu-active') : document.querySelector('body').classList.add('mobile-menu-active');
  };

  return (
    <>
      <Head>
        <title>{seoConfig.title}</title>
        <meta name='description' content={seoConfig.meta_og_description} />
        {/*<link rel='icon' href='/favicon.ico' />*/}
        <style>@import
          url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Spartan:wght@300;400;500;600;700&display=swap');
        </style>

        {/*<!-- Makeshift favicon -->*/}
        <link rel="icon"
              href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌿</text></svg>"/>

        {/*<meta name="description" content="{% if page.excerpt %}{{ page.excerpt | strip_html | strip_newlines | truncate: 160 }}{% else %}{{ site.description }}{% endif %}" />*/}
        <meta name="description" content={ seoConfig.meta_og_description  } />
          <meta property="og:title" content={ seoConfig.meta_og_title } />
          <meta property="og:type" content={ seoConfig.meta_og_type } />
          <meta property="og:url" content={ seoConfig.meta_og_url } />
          <meta property="og:image" content={ seoConfig.meta_og_image } />
          <meta property="og:description" content={ seoConfig.meta_og_description } />
          <meta name="twitter:card" content={ seoConfig.meta_twitter_card } />
          <meta name="twitter:site" content={ seoConfig.meta_twitter_site } />
          <meta name="twitter:creator" content={ seoConfig.meta_twitter_creator } />
      </Head>

      {isToggled && <div className='body-overlay-1' onClick={toggleClick}></div>}

      <Header headerStyle={headerStyle} isToggled={isToggled} toggleClick={toggleClick} />
      <MobileMenu isToggled={isToggled} toggleClick={toggleClick} />
      <main className='main'>
        <Breadcrumb parent={parent} sub={sub} subChild={subChild} noBreadcrumb={noBreadcrumb} />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
