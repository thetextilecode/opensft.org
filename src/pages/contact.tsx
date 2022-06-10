import Layout from '../components/layout/Layout';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { NetlifyForm, Honeypot } from 'react-netlify-forms';

function Contact({ newsletterId, newsletterUser }) {
  return (
    <Layout
      parent="Home"
      subChild="Contact"
      newsletterId={newsletterId}
      newsletterUser={newsletterUser}
    >
      <section className="hero-2 bg-green">
        <div className="hero-content">
          <div className="container">
            <div className="text-center">
              <h4 className="text-brand mb-20">Get in touch</h4>
              <h1 className="mb-20 wow fadeIn animated font-xxl fw-900">
                We Want to <br />
                Hear From <span className="text-style-1">You</span>
              </h1>
              <p className="w-50 m-auto mb-50 wow fadeIn animated">
                If we want to collectively be a better industry that puts our values at the
                forefront of our decisions, we need to work together to do it. Whether it's an idea
                for an open source project, advice, or complaints⎯we want to hear it.
              </p>
              <p className="wow fadeIn animated">
                <Link href="/about">
                  <a className="btn btn-brand btn-lg font-weight-bold text-white border-radius-5 btn-shadow-brand hover-up">
                    About Us
                  </a>
                </Link>
                <a className="btn btn-outline btn-lg btn-brand-outline font-weight-bold text-brand bg-white text-hover-white ml-15 border-radius-5 btn-shadow-brand hover-up">
                  Support Center
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-50 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10 m-auto">
              <div className="contact-form-area padding-20-row-col wow FadeInUp">
                <h3 className="mb-10 text-center">Drop Us a Line</h3>
                <p className="text-muted mb-30 text-center font-sm">
                  We're a small team, so it might take a few days to get back to you, but we will as
                  soon as we can.
                  <br />
                  Alternatively, send us an email at hello[at]opensft.org (replace [at] with @).
                </p>
                <NetlifyForm name="Contact" action="/success" honeypotName="bot-field">
                  {({ handleChange, success, error }) => (
                    <div className={'contact-form-style text-center'}>
                      <Honeypot />
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="input-style mb-20">
                            <input
                              name="name"
                              placeholder="Name (required)"
                              onChange={handleChange}
                              type="text"
                              required={true}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="input-style mb-20">
                            <input
                              name="email"
                              placeholder="Your Email (required)"
                              onChange={handleChange}
                              type="email"
                              required={true}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="input-style mb-20">
                            <input
                              name="telephone"
                              placeholder="Your Phone"
                              onChange={handleChange}
                              type="tel"
                              required={false}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="input-style mb-20">
                            <input
                              name="subject"
                              placeholder="Subject"
                              onChange={handleChange}
                              type="text"
                              required={false}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="textarea-style mb-30">
                            <textarea
                              name="message"
                              placeholder="Message"
                              onChange={handleChange}
                              required={true}
                            ></textarea>
                          </div>
                          {success && (
                            <p className="text-success mb-30 text-center font-sm">
                              Thanks for contacting us!
                            </p>
                          )}
                          {error && (
                            <p className="text-danger mb-30 text-center font-sm">
                              Sorry, we could not reach our servers. Please try again later.
                            </p>
                          )}
                          <button className="submit submit-auto-width" type="submit">
                            Send message
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </NetlifyForm>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Contact;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      newsletterId: String(process.env.REACT_APP_MAILCHIMP_ID),
      newsletterUser: String(process.env.REACT_APP_MAILCHIMP_U),
    },
  };
};
