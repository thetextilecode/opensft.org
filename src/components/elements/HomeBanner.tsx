import Link from 'next/link';
import Image from 'next/image';

const HomeBanner = () => {
  return (
    <div className={'row'}>
      <div className="col-md-6 col-sm-12">
        <div className={'row'}>
          <div className="banner-img banner-1 wow fadeIn animated">
            <div style={{ width: '100%' }}>
              <Image
                src="/assets/images/banner/banner-osft-left.png"
                alt=""
                layout={'responsive'}
                width={600}
                height={712}
              />
            </div>
            <div className="banner-text">
              <span>News</span>
              <h4>
                Do You Own a <br />
                Fashion Brand?
              </h4>
              <Link href="/get-involved">
                <a>
                  We Want to Hear
                  <br /> From You <i className="fi-rs-arrow-right"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-sm-12">
        <div className={'row'}>
          <div className="banner-img mb-15 wow fadeIn animated col-md-12 col-sm-6">
            <div style={{ width: '100%' }}>
              <Image
                src="/assets/images/banner/banner-osft-sm-right.png"
                alt=""
                layout={'responsive'}
                width={600}
                height={334}
              />
            </div>
            <div className="banner-text">
              <span>Get Involved</span>
              <h4>
                Learn How <br />
                You Can Help
              </h4>
              <Link href="/get-involved">
                <a>
                  Get Started <i className="fi-rs-arrow-right"></i>
                </a>
              </Link>
            </div>
          </div>
          <div className="banner-img banner-2 wow fadeIn animated col-md-12 col-sm-6">
            <div style={{ width: '100%' }}>
              <Image
                src="/assets/images/banner/banner-osft-sm-left.png"
                alt=""
                layout={'responsive'}
                width={600}
                height={334}
              />
            </div>
            <div className="banner-text">
              <span>Resources</span>
              <h4>
                Open Source <br />
                Projects
              </h4>
              <Link href="/resources">
                <a>
                  Let's Go <i className="fi-rs-arrow-right"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
