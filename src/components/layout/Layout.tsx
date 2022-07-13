import { ReactNode, useState } from 'react';
import Breadcrumb from './Breadcrumb';
import Footer from './Footer';
import Head from 'next/head';
import Header from './Header';
import MobileMenu from './MobileMenu';
import { IMenu, IMetaProps } from '../../../types';
import { useRouter } from 'next/router';
import Script from 'next/script';

export interface ILayout {
  children?: ReactNode;
  configFooter?: any;
  configHeader?: any;
  configInfo?: any;
  configLanguages?: any;
  configSeo?: any;
  configSite?: any;
  configSocial?: any;
  customMeta?: IMetaProps;
  configMobile: any;
  headerStyle?: any;
  menu: IMenu[];
  newsletterId?: string;
  newsletterUser?: string;
  noBreadcrumb?: any;
  parent?: ReactNode;
  sub?: any;
  subChild?: any;
}

const Layout = ({
  children,
  configFooter,
  configHeader,
  configInfo,
  configLanguages,
  configMobile,
  configSeo,
  configSite,
  configSocial,
  customMeta,
  menu,
  newsletterId,
  newsletterUser,
  parent,
  sub,
  subChild,
  noBreadcrumb,
  headerStyle,
}: ILayout) => {
  const [isToggled, setToggled] = useState<boolean>(false);
  const router = useRouter();

  const toggleClick = () => {
    setToggled(!isToggled);
    isToggled
      ? document.querySelector('body').classList.remove('mobile-menu-active')
      : document.querySelector('body').classList.add('mobile-menu-active');
  };

  return (
    <>
      <Head>
        <title>{customMeta?.title ?? configSite.title}</title>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Quando&display=swap');
        </style>

        {/*<!-- Favicon -->*/}
        {/*<link rel='icon' href={ configSite.favicon } />*/}
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌿</text></svg>"
        />

        <link rel="canonical" href={`${configSite.url}${router.asPath}`} />

        <meta
          property="og:description"
          content={customMeta?.description ?? configSeo.meta_og_description}
        />
        <meta property="og:image" content={customMeta?.image ?? configSeo.meta_og_image} />
        <meta property="og:site_name" content={configSite.title} />
        <meta property="og:title" content={customMeta?.title ?? configSeo.meta_og_title} />
        <meta property="og:type" content={customMeta?.type ?? configSeo.meta_og_type} />
        <meta property="og:url" content={`${configSite.url}${router.asPath}`} />
        <meta name="twitter:card" content={configSeo.meta_twitter_card} />
        <meta name="twitter:site" content={configSeo.meta_twitter_site} />
        <meta name="twitter:creator" content={configSeo.meta_twitter_creator} />
        <meta
          name="twitter:description"
          content={customMeta?.description ?? configSite.description}
        />
        <meta name="twitter:image" content={customMeta?.image ?? configSite.shareImage} />
        {customMeta?.date && <meta property="article:published_time" content={customMeta.date} />}
      </Head>

      {isToggled && <div className="body-overlay-1" onClick={toggleClick}></div>}

      <Header
        configHeader={configHeader}
        configInfo={configInfo}
        configLanguages={configLanguages}
        headerStyle={headerStyle}
        isToggled={isToggled}
        menu={menu}
        toggleClick={toggleClick}
      />
      <MobileMenu
        configFooter={configFooter}
        configHeader={configHeader}
        configInfo={configInfo}
        configMobile={configMobile}
        configSocial={configSocial}
        menu={menu}
        isToggled={isToggled}
        toggleClick={toggleClick}
      />
      <main className="main">
        <Breadcrumb parent={parent} sub={sub} subChild={subChild} noBreadcrumb={noBreadcrumb} />
        {children}
      </main>
      <Footer
        newsletterId={newsletterId}
        newsletterUser={newsletterUser}
        configFooter={configFooter}
        configInfo={configInfo}
        configSocial={configSocial}
      />
    </>
  );
};

export default Layout;
