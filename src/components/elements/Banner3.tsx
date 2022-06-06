import Link from 'next/link';
import Image from 'next/image';

const Banner3 = () => {
  return (
    <>
      <div className='col-md-6 col-sm-12'>
        <div className='banner-img banner-1 wow fadeIn animated'>
          <div style={{ width: '100%' }}>
            <Image src='/assets/images/banner/banner-osft-left.png'
                   alt=''
                   layout={'responsive'}
                   width={600}
                   height={712}
            />
          </div>
          <div className='banner-text'>
            <span>News</span>
            <h4>
              Do You Own a <br />
              Fashion Brand?
            </h4>
            <Link href='/get-involved'>
              <a>
                We Want to Hear<br /> From You <i className='fi-rs-arrow-right'></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className='col-md-6 col-xs-12'>
        <div className='banner-img mb-15 wow fadeIn animated col-xs-6'>
          <div style={{ width: '100%' }}>
            <Image src='/assets/images/banner/banner-osft-sm-right.png'
                   alt=''
                   layout={'responsive'}
                   width={600}
                   height={334}
            />
          </div>
          <div className='banner-text'>
            <span>Get Involved</span>
            <h4>
              Learn How <br />
              You Can Help
            </h4>
            <Link href='/get-involved'>
              <a>
                Get Started <i className='fi-rs-arrow-right'></i>
              </a>
            </Link>
          </div>
        </div>
        <div className='banner-img banner-2 wow fadeIn animated col-xs-6'>
          <div style={{ width: '100%' }}>
            <Image src='/assets/images/banner/banner-osft-sm-left.png'
                   alt=''
                   layout={'responsive'}
                   width={600}
                   height={334}
            />
          </div>
          <div className='banner-text'>
            <span>Fashion's</span>
            <h4>
              State of <br />
              Technology
            </h4>
            <Link href='/technology-trends-fashion'>
              <a>
                Learn <i className='fi-rs-arrow-right'></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner3;
