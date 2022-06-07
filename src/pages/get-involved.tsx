import Layout from '../components/layout/Layout';
import { GetStaticProps } from 'next';
import Link from 'next/link';

function GetInvolved({ newsletterId, newsletterUser }) {
  return (
    <Layout
      parent="Home"
      sub="Get Involved"
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
                  Do you own a business that relates to fashion and textiles?
                  Then we want to hear from you. We are in the process of
                  building state-of-the-art software for businesses like you.
                  Have a seat at the table and help determine which features to
                  prioritise.
                </p>
                <ul>
                  <li>Product development</li>
                  <li>Content generation</li>
                </ul>
                <p />
                <h4>Developers</h4>
                <p>
                  Are you a developer with open source experience? Do you have
                  experience with or an interest in ecommerce and fashion? You
                  could help pave the way to a better industry by helping us
                  develop relevant products for businesses and professionals.
                </p>
                <ul>
                  <li>Development toolchain</li>
                  <li>Application lifecycle management</li>
                  <li>Community development and advocacy</li>
                  <li>Open source security and licensing</li>
                </ul>
                <p />
                <h4>Other areas</h4>
                <ul>
                  <li>Marketing and content generation</li>
                  <li>Graphic design</li>
                </ul>
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

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      newsletterId: String(process.env.REACT_APP_MAILCHIMP_ID),
      newsletterUser: String(process.env.REACT_APP_MAILCHIMP_U),
    },
  };
};
