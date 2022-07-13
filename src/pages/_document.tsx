import Document, { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          {/*<!-- Global site tag (gtag.js) - Google Analytics -->*/}
          <Script
            strategy="afterInteractive"
            async
            src={'https://www.googletagmanager.com/gtag/js?id=G-9WS3JV03MY'}
            id={'site-tag-01'}
          ></Script>
          <Script
            strategy="afterInteractive"
            id={'site-tag-02'}
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-9WS3JV03MY');`,
            }}
          ></Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
