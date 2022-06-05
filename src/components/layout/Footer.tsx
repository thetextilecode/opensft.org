import Link from 'next/link';
import Image from 'next/image';
import { homeConfig, infoConfig, socialConfig } from '../../../opensft.config';
import SocialIcons from '../elements/SocialIcons';
import Newsletter from '../elements/Newsletter';

export interface IFooter {
  newsletterId?: string;
  newsletterUser?: string;
}

const Footer = ({ newsletterId, newsletterUser }: IFooter) => {
  return (
    <footer className='main'>
      {homeConfig.showNewsletter && newsletterUser && newsletterId && (
        <Newsletter  newsletterId={newsletterId} newsletterUser={newsletterUser} />
      )}
      <section className='section-padding footer-mid'>
        <div className='container pt-15 pb-20'>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='widget-about font-md mb-md-5 mb-lg-0'>
                {/*<div className='logo logo-width-1 wow fadeIn animated'>*/}
                {/*  <Link href='/'>*/}
                {/*    <a>*/}
                {/*    <Image*/}
                {/*      src={infoConfig.logo}*/}
                {/*      alt={infoConfig.companyName + ' logo'}*/}
                {/*      width={infoConfig.logoWidth}*/}
                {/*      height={infoConfig.logoHeight}*/}
                {/*    />*/}
                {/*    </a>*/}
                {/*  </Link>*/}
                {/*</div>*/}
                {/*<h5 className='mt-20 mb-10 fw-600 text-grey-4 wow fadeIn animated'>*/}
                <h5 className='widget-title wow fadeIn animated'>
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
            <div className='col-lg-4 col-md-5'>
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
            <div className='col-lg-2'>
              <div className='row'>
                <div className='col-md-8 col-lg-12'>
                  <div className='logo logo-width-1 wow fadeIn animated mx-auto'>
                    <Image
                      src={infoConfig.logoIllustration}
                      alt={infoConfig.companyName + ' logo'}
                      width={infoConfig.logoIllustrationWidth}
                      height={infoConfig.logoIllustrationHeight}
                    />
                  </div>
                  {/*<Newsletter newsletterId={newsletterId} newsletterUser={newsletterUser}/>*/}
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
