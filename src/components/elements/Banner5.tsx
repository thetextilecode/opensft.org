
import Link from 'next/link';
import Image from 'next/image';

const Banner5 = () => {
  return (
    <>
      <div className='col-lg-4 col-md-6'>
        <div className='banner-img wow fadeIn animated'>
          <div style={{ width: '100%' }}>
            <Image src='/assets/images/banner/banner-1.png' alt='' layout={'responsive'} width={600} height={255} />
          </div>
          <div className='banner-text'>
            <span>Smart Offer</span>
            <h4>
              Save 20% on <br />
              Women's Bags
            </h4>
            <Link href='/index'>
              <a>
                Shop Now <i className='fi-rs-arrow-right'></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className='col-lg-4 col-md-6'>
        <div className='banner-img wow fadeIn animated'>
          <div style={{ width: '100%' }}>
            <Image src='/assets/images/banner/banner-2.png' alt='' layout={'responsive'} width={600} height={255} />
          </div>
          <div className='banner-text'>
            <span>Sale off</span>
            <h4>
              Great Summer <br />
              Collection
            </h4>
            <Link href='/index'>
              <a>
                Shop Now <i className='fi-rs-arrow-right'></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className='col-lg-4 d-md-none d-lg-flex'>
        <div className='banner-img wow fadeIn animated mb-sm-0'>
          {/*<div style={{ width: '100%' }}>*/}
            {/*<Image src='/assets/images/banner/banner-3.png' alt='' layout={'responsive'} width={600} height={255} />*/}
            {/*<Image src='/assets/images/banner/banner-3.png' alt='' layout={'fill'} objectFit={'contain'} />*/}
            <img src='/assets/images/banner/banner-3.png' alt='' />
          {/*</div>*/}
          <div className='banner-text'>
            <span>New Arrivals</span>
            <h4>
              Shop Today’s <br />
              Deals & Offers
            </h4>
            <Link href='/index'>
              <a>
                Shop Now <i className='fi-rs-arrow-right'></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner5;
