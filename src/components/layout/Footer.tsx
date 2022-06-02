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
                    <Image
                      src={infoConfig.logo}
                      alt={infoConfig.companyName + ' logo'}
                      width={infoConfig.logoWidth}
                      height={infoConfig.logoHeight}
                    />
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
                Install App
              </h5>
              <div className='row'>
                <div className='col-md-8 col-lg-12'>
                  <p className='wow fadeIn animated'>
                    From App Store or Google Play
                  </p>
                  <div className='download-app wow fadeIn animated'>
                    <a
                      href='src/components/layout/Footer#'
                      className='hover-up mb-sm-4 mb-lg-0'
                    >
                      <Image
                        className='active'
                        src='/assets/images/theme/app-store.jpg'
                        alt=''
                        width={166}
                        height={47}
                      />
                    </a>
                    <a href='src/components/layout/Footer#' className='hover-up'>
                      <Image
                        src='/assets/images/theme/google-play.jpg'
                        alt=''
                        width={166}
                        height={47}
                      />
                    </a>
                  </div>
                </div>
                <div className='col-md-4 col-lg-12 mt-md-3 mt-lg-0'>
                  <p className='mb-20 wow fadeIn animated'>
                    Secured Payment Gateways
                  </p>
                  <Image
                    className='wow fadeIn animated'
                    src='/assets/images/theme/payment-method.png'
                    alt=''
                    height={32}
                    width={224}
                  />
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
