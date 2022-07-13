import Document, { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { seoConfig } from '../../opensft.config';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          {/*<!-- Google Tag Manager -->*/}
          <Script
            strategy="afterInteractive"
            id={'tag-manager'}
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${seoConfig.googleTagManager}');`,
            }}
          ></Script>
          {/*<!-- End Google Tag Manager -->*/}
        </Head>
        <body>
          <Main />
          <NextScript />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${seoConfig.googleTagManager}"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          ></noscript>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
