import Link from 'next/link';
import Image from 'next/image';

const Banner3 = () => {
  return (
    <>
      <div className='col-md-6'>
        <div className='banner-img banner-1 wow fadeIn animated'>
          <div style={{ width: '100%' }}>
          <Image src='/assets/images/banner/banner-5.jpg' alt='' layout={'responsive'} width={306} height={363} />
          </div>
          <div className='banner-text'>
            <span>News</span>
            <h4>
              Do You Own a <br />
              Fashion Brand?
            </h4>
            <Link href='/index'>
              <a>
                We Want to Hear<br/> From You <i className='fi-rs-arrow-right'></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className='col-md-6'>
        <div className='banner-img mb-15 wow fadeIn animated'>
          <div style={{ width: '100%' }}>
          <Image src='/assets/images/banner/banner-6.jpg' alt='' layout={'responsive'} width={306} height={170} />
          </div>
          <div className='banner-text'>
            <span>Get Involved</span>
            <h4>
              Learn How <br />
              You Can Help
            </h4>
            <Link href='/index'>
              <a>
                Start Now <i className='fi-rs-arrow-right'></i>
              </a>
            </Link>
          </div>
        </div>
        <div className='banner-img banner-2 wow fadeIn animated'>
          <div style={{ width: '100%' }}>
          <Image src='/assets/images/banner/banner-7.jpg' alt='' width={306} height={170} layout={'responsive'} />
          </div>
          <div className='banner-text'>
            <span>Fashion's</span>
            <h4>
              State of <br />
              Technology
            </h4>
            <Link href='/index'>
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
