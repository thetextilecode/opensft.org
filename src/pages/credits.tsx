import Layout from '../components/layout/Layout';
import { GetStaticProps } from 'next';
import Link from 'next/link';

function Credits({ config, newsletterId, newsletterUser }) {
  return (
    <Layout
      parent="Home"
      sub="Credits"
      {...config}
      newsletterUser={newsletterUser}
      newsletterId={newsletterId}
    >
      <section className="mt-50 mb-50">
        <div className="container">
          <div className="row">
            <div className="single-page pr-30">
              <div className="single-header style-2">
                <h2>Credits</h2>
                <p>
                  If you see anything missing, please don't hesitate to{' '}
                  <Link href={'/contact'}>let us know</Link>.
                </p>
              </div>
              <div className="single-content">
                <h4>Graphics</h4>

                <ul>
                  <li>
                    <Link href={'https://rawpixel.com'}>Rawpixel</Link>
                  </li>
                  <li>
                    <Link href={'https://unsplash.com'}>Unsplash</Link>
                  </li>
                </ul>
                <p />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Credits;
