import Layout from '../components/layout/Layout';
import { GetStaticProps } from 'next';
import Link from 'next/link';

function GetInvolved({ config, newsletterId, newsletterUser }) {
  return (
    <Layout
      parent="Home"
      sub="Get Involved"
      {...config}
      newsletterUser={newsletterUser}
      newsletterId={newsletterId}
    >
      <section className="mt-50 mb-50">
        <div className="container">
          <div className="row">
            <div className="single-page pr-30">
              <div className="single-header style-2">
                <h2>Get Involved</h2>
              </div>
              <div className="single-content">
                <h4>Businesses</h4>
                <p>
                  Do you own a business that relates to fashion and textiles? Then we want to hear
                  from you. We are building state-of-the-art software for businesses like yours.
                  Have a seat at the table and be part of the change.
                </p>
                <p />
                <p className="wow fadeIn animated">
                  <Link href="/contact">
                    <a className="btn btn-brand btn-lg font-weight-bold text-white border-radius-5 btn-shadow-brand hover-up">
                      Get Involved
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default GetInvolved;
