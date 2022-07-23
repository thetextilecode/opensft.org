import 'react-input-range/lib/css/index.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Provider } from 'react-redux';
import 'react-responsive-modal/styles.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import store from '../redux/store';
import StorageWrapper from '../components/resources/storage-wrapper';
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
import { useRouter } from 'next/router';

type CustomAppProps = AppProps & {
  config?: any;
  newsletterId: any;
  newsletterUser: any;
};

// log the pageview with their URL
export const pageview = (url) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  });
};

// log specific events happening.
export const event = ({ action, params }) => {
  window.gtag('event', action, params);
};

function MyApp({ Component, config, newsletterId, newsletterUser, pageProps }: CustomAppProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    Fonts();
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };
    // When the component is mounted, subscribe to router changes
    // and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

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
