import Layout from '../components/layout/Layout';
import Link from 'next/link';

function Success({ config, newsletterId, newsletterUser }) {
  return (
    <Layout
      parent="Home"
      sub="Contact"
      // subChild='Success'
      {...config}
      newsletterId={newsletterId}
      newsletterUser={newsletterUser}
    >
      <section className="hero-2">
        <div className="hero-content">
          <div className="container">
            <div className="text-center">
              <h4 className="text-brand mb-20">Successfully submitted</h4>
              <h1 className="mb-20 wow fadeIn animated font-xxl fw-900">Thanks!</h1>
              <p className="w-50 m-auto mb-50 wow fadeIn animated">
                We'll get in contact with you as soon as we can.
              </p>
              <p className="wow fadeIn animated">
                <Link href="/">
                  <a className="btn btn-brand btn-lg font-weight-bold text-white border-radius-5 btn-shadow-brand hover-up">
                    Home
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Success;
