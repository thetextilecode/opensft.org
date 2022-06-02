import Link from 'next/link';
import Image from 'next/image';
import { homeConfig, infoConfig, socialConfig } from '../../../opensft.config';
import SocialIcons from '../elements/SocialIcons';
import Newsletter from '../elements/Newsletter';

const Footer = () => {
  return (
    <footer className='main'>
      {homeConfig.showNewsletter && (
        <Newsletter />
      )}
      <section className='section-padding footer-mid'>
        <div className='container pt-15 pb-20'>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='widget-about font-md mb-md-5 mb-lg-0'>
                <div className='logo logo-width-1 wow fadeIn animated'>
                  <Link href='/'>
                    <a>
                    <Image
                      src={infoConfig.logo}
                      alt={infoConfig.companyName + ' logo'}
                      width={infoConfig.logoWidth}
                      height={infoConfig.logoHeight}
                    />
                    </a>
                  </Link>
                </div>
                <h5 className='mt-20 mb-10 fw-600 text-grey-4 wow fadeIn animated'>
                  Contact
                </h5>
                <p className='wow fadeIn animated'>
                  <strong>Address: </strong>{infoConfig.addressLine1} {infoConfig.addressLine2} {infoConfig.addressCity} {infoConfig.addressPostcode}
                </p>
                <p className='wow fadeIn animated'>
                  <strong>Phone: </strong>{infoConfig.phone}
                </p>
                <p className='wow fadeIn animated'>
                  <strong>Hours: </strong>{infoConfig.hours}
                </p>
                <h5 className='mb-10 mt-30 fw-600 text-grey-4 wow fadeIn animated'>
                  Follow Us
                </h5>
                <SocialIcons facebook={socialConfig.facebook} instagram={socialConfig.instagram}
                             twitter={socialConfig.twitter} />
              </div>
            </div>
            <div className='col-lg-2 col-md-3'>
              <h5 className='widget-title wow fadeIn animated'>
                About
              </h5>
              <ul className='footer-list wow fadeIn animated mb-sm-5 mb-md-0'>
                <li>
                  <Link href='/about'>About Us</Link>
                </li>
                <li>
                  <Link href='/privacy-policy'>Privacy Policy</Link>
                </li>
                <li>
                  <Link href='/terms'>Terms &amp; Conditions</Link>
                </li>
                <li>
                  <Link href='/contact'>Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className='col-lg-2  col-md-3'>
              <h5 className='widget-title wow fadeIn animated'>
                My Account
              </h5>
              <ul className='footer-list wow fadeIn animated'>
                <li>
                  <Link href='/login-register'>Sign In</Link>
                </li>
                <li>
                  <Link href='/saved'>My Saved Items</Link>
                </li>
              </ul>
            </div>
            <div className='col-lg-4'>
              <h5 className='widget-title wow fadeIn animated'>
                Subscribe
              </h5>
              <div className='row'>
                <div className='col-md-8 col-lg-12'>
                  {/* }<!-- Begin Mailchimp Signup Form -->{*/}

                  {/*<div id="mc_embed_signup" className='download-app wow fadeIn animated'>*/}
                  {/*  <form action="https://spoolbox.us7.list-manage.com/subscribe/post?u=871c25f5e6e64d7c20422cfe4&amp;id=54202e9780"*/}
                  {/*        method="post"*/}
                  {/*        id="mc-embedded-subscribe-form"*/}
                  {/*        name="mc-embedded-subscribe-form"*/}
                  {/*        className="form-subscriber d-flex wow fadeIn animated validate"*/}
                  {/*        target="_blank" noValidate={true}>*/}
                  {/*    <div id="mc_embed_signup_scroll call">*/}
                  {/*      <input type="email" name="EMAIL" className="email form-control bg-white font-small" id="mce-EMAIL" placeholder="email address" required/>*/}
                  {/*      /!*}<!-- real people should not fill this in and expect good things - do not remove this or risk*/}
                  {/*   form bot signups-->{*!/*/}
                  {/*      <div style={{position: 'absolute', left: '-5000px', ariahidden: true }}>*/}
                  {/*        <input type="text" name="b_871c25f5e6e64d7c20422cfe4_54202e9780" tabIndex="-1"/>*/}
                  {/*      </div>*/}
                  {/*      <input type="submit" placeholder="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="btn"/>*/}

                  {/*    </div>*/}
                  {/*  </form>*/}
                  {/*</div>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='container pb-20 wow fadeIn animated'>
        <div className='row'>
          <div className='col-12 mb-20'>
            <div className='footer-bottom'></div>
          </div>
          <div className='col-lg-6'>
            <p className='float-md-left font-sm text-muted mb-0'>
              &copy; {new Date().getFullYear()},
              <strong className='text-brand'>{infoConfig.companyName}</strong>
            </p>
          </div>
          <div className='col-lg-6'>
            <p className='text-lg-end text-start font-sm text-muted mb-0'>
              {infoConfig.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
