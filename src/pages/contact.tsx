import Layout from '../components/layout/Layout';
import Link from 'next/link';
import { GetStaticProps } from 'next';

function Contact({ newsletterId, newsletterUser }) {
  return (
    <Layout parent='Home'
      // sub='Pages'
      // subChild={'Contact'}
            subChild='Contact'
            newsletterId={newsletterId}
            newsletterUser={newsletterUser}>
      <section className='hero-2 bg-green'>
        <div className='hero-content'>
          <div className='container'>
            <div className='text-center'>
              <h4 className='text-brand mb-20'>
                Get in touch
              </h4>
              <h1 className='mb-20 wow fadeIn animated font-xxl fw-900'>
                We Want to <br />
                Hear From{' '}
                <span className='text-style-1'>You</span>
              </h1>
              <p className='w-50 m-auto mb-50 wow fadeIn animated'>
                If we want to collectively be a better industry that puts our values at the forefront of our decisions,
                we need to work together to do it. We always want to hear from you. Whether it's an idea for an open
                source project, advice, complaints--we want to hear it.
              </p>
              <p className='wow fadeIn animated'>
                <Link href='/about'>
                  <a
                    className='btn btn-brand btn-lg font-weight-bold text-white border-radius-5 btn-shadow-brand hover-up'>
                    About Us
                  </a>
                </Link>
                <a
                  className='btn btn-outline btn-lg btn-brand-outline font-weight-bold text-brand bg-white text-hover-white ml-15 border-radius-5 btn-shadow-brand hover-up'>
                  Support Center
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-50 pb-50'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-8 col-lg-10 m-auto'>
              <div className='contact-from-area padding-20-row-col wow FadeInUp'>
                <h3 className='mb-10 text-center'>
                  Drop Us a Line
                </h3>
                <p className='text-muted mb-30 text-center font-sm'>
                  We're a small team, so it might take a few days to get back to you, but we will as soon as we can.
                </p>
                <form
                  className='contact-form-style text-center'
                  id='contact-form'
                  action='/success'
                  data-netlify='true'
                  data-netlify-recaptcha='true'
                  method='post'
                  name={'contact-opensft'}
                  netlify-honeypot='dummy-field'
                  hidden
                >
                  <input type='hidden'
                         name='form-name'
                         value='contact-opensft' />
                  <div className='row'>
                    <div className='col-lg-6 col-md-6'>
                      <div className='input-style mb-20'>
                        <input
                          name='name'
                          placeholder='Name'
                          type='text'
                          required={true}
                        />
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6'>
                      <div className='input-style mb-20'>
                        <input
                          name='email'
                          placeholder='Your Email'
                          type='email'
                          required={true}
                        />
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6'>
                      <div className='input-style mb-20'>
                        <input
                          name='telephone'
                          placeholder='Your Phone'
                          type='tel'
                          required={true}
                        />
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6'>
                      <div className='input-style mb-20'>
                        <input
                          name='subject'
                          placeholder='Subject'
                          type='text'
                          required={false}
                        />
                      </div>
                    </div>
                    <div className='col-lg-12 col-md-12'>
                      <div className='textarea-style mb-30'>
                        <textarea
                          name='message'
                          placeholder='Message'
                          required={true}
                        ></textarea>
                      </div>
                      <button
                        className='submit submit-auto-width'
                        type='submit'
                      >
                        Send message
                      </button>
                    </div>
                  </div>
                </form>
                <p className='form-message'></p>
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
      newsletterId: process.env.REACT_APP_MAILCHIMP_ID,
      newsletterUser: process.env.REACT_APP_MAILCHIMP_U,
    },
  };
};

