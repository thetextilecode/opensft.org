import Link from 'next/link';
import Image from 'next/image';
import SocialIcons from '../elements/SocialIcons';
import Newsletter from '../elements/Newsletter';

export interface IFooter {
  configFooter: any;
  configInfo: any;
  configSocial: any;
  newsletterId?: string;
  newsletterUser?: string;
}

const Footer = ({
  configInfo,
  configFooter,
  configSocial,
  newsletterId,
  newsletterUser,
}: IFooter) => {
  return (
    <footer className="main">
      {/* Footer Top (wide newsletter) */}
      {configFooter.showFooterTop &&
        configFooter.footerTop.showNewsletter &&
        newsletterUser &&
        newsletterId && <Newsletter newsletterId={newsletterId} newsletterUser={newsletterUser} />}

      {/* Footer Mid */}
      {configFooter.showFooterMid && (
        <section className="section-padding footer-mid">
          <div className="container pt-15 pb-20">
            <div className="row">
              <div className="col-lg-5 col-md-6">
                <div className="widget-about font-md mb-md-5 mb-lg-0">
                  <h5 className="widget-title wow fadeIn animated">Contact</h5>
                  <p className="wow fadeIn animated">
                    <strong>Address: </strong>
                    {configInfo.addressLine1}
                    <br />
                    {configInfo.addressLine2}, {configInfo.addressCity} {configInfo.addressPostcode}
                  </p>
                  <p className="wow fadeIn animated">
                    <strong>Phone: </strong>
                    {configInfo.phone}
                  </p>
                  <p className="wow fadeIn animated">
                    <strong>Hours: </strong>
                    {configInfo.hours}
                  </p>
                  <h5 className="mb-10 mt-30 fw-600 text-grey-4 wow fadeIn animated">Follow Us</h5>
                  <SocialIcons
                    facebook={configSocial.facebook}
                    instagram={configSocial.instagram}
                    twitter={configSocial.twitter}
                  />
                </div>
              </div>
              <div className="col-lg-5 col-md-5">
                <h5 className="widget-title wow fadeIn animated">Info</h5>
                <ul className="footer-list wow fadeIn animated mb-sm-5 mb-md-0">
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms">Terms &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link href="/credits">Credits</Link>
                  </li>
                  <li>
                    <a href="/sitemap.xml" target={'_blank'} rel={'noreferrer'}>
                      Sitemap
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-1">
                <div
                  className="logo logo-width-1 wow fadeIn animated mx-auto"
                  style={{ width: '120px', margin: '1.5em 0.5em' }}
                >
                  <Image
                    src={configInfo.logoIllustration}
                    width={configInfo.logoIllustrationWidth}
                    height={configInfo.logoIllustrationHeight}
                    layout={'responsive'}
                    alt={configInfo.companyName + ' logo'}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer Bottom */}
      {configFooter.showFooterBottom && (
        <div className="container pb-20 wow fadeIn animated">
          <div className="row">
            <div className="col-12 mb-20">
              <div className="footer-bottom"></div>
            </div>
            <div className="col-lg-6">
              <p className="float-md-left font-sm text-muted mb-0">
                {configFooter.footerBottom.leftCopy}
              </p>
            </div>
            <div className="col-lg-6">
              <p className="text-lg-end text-start font-sm text-muted mb-0">
                {configFooter.footerBottom.rightCopy}
              </p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
