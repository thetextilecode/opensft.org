import 'react-input-range/lib/css/index.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Provider } from 'react-redux';
import 'react-responsive-modal/styles.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import store from '../redux/store';
import StorageWrapper from '../components/ecommerce/storage-wrapper';
import '../../public/assets/css/main.css';
import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { AppProps } from 'next/app';
// Swiper Slider
import 'swiper/css';
import 'swiper/css/navigation';
import Preloader from '../components/elements/Preloader';
import SSRProvider from 'react-bootstrap/SSRProvider';
import Fonts from '../lib/fonts';
import {
  blogConfig,
  footerConfig,
  headerConfig,
  homeConfig,
  infoConfig,
  languages,
  menuItems,
  mobileConfig,
  seoConfig,
  sidebarConfig,
  siteConfig,
  socialConfig,
} from '../../opensft.config';

function MyApp({ Component, config, newsletterId, newsletterUser, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    Fonts();
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    if (typeof window !== 'undefined') {
      // @ts-ignore
      window.WOW = require('wowjs');
    }
    // @ts-ignore
    new WOW.WOW().init();
  }, []);
  return (
    <>
      {!loading ? (
        <Provider store={store}>
          <SSRProvider>
            <StorageWrapper>
              <ToastContainer />
              <Component
                config={config}
                newsletterId={newsletterId}
                newsletterUser={newsletterUser}
                {...pageProps}
              />
            </StorageWrapper>
          </SSRProvider>
        </Provider>
      ) : (
        <Preloader />
      )}
    </>
  );
}

MyApp.getInitialProps = async () => {
  return {
    config: {
      configBlog: blogConfig,
      configFooter: footerConfig,
      configHeader: headerConfig,
      configHome: homeConfig,
      configInfo: infoConfig,
      configLanguages: languages,
      configMobile: mobileConfig,
      configSeo: seoConfig,
      configSidebar: sidebarConfig,
      configSite: siteConfig,
      configSocial: socialConfig,
      menu: menuItems,
    },
    newsletterId: String(process.env.REACT_APP_MAILCHIMP_ID),
    newsletterUser: String(process.env.REACT_APP_MAILCHIMP_U),
  };
};

export default MyApp;
