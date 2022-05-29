import Link from 'next/link';
import Image from 'next/image';

const Banner3 = () => {
  return (
    <>
      <div className='col-md-6'>
        <div className='banner-img banner-1 wow fadeIn animated'>
          <Image src='/assets/imgs/banner/banner-5.jpg' alt='' width={306} height={363} />
          <div className='banner-text'>
            <span>Accessories</span>
            <h4>
              Save 17% on <br />
              Autumn Hat
            </h4>
            <Link href='/index'>
              <a>
                Shop Now <i className='fi-rs-arrow-right'></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className='col-md-6'>
        <div className='banner-img mb-15 wow fadeIn animated'>
          <Image src='/assets/imgs/banner/banner-6.jpg' alt='' width={306} height={170} />
          <div className='banner-text'>
            <span>Big Offer</span>
            <h4>
              Save 20% on <br />
              Women's socks
            </h4>
            <Link href='/index'>
              <a>
                Shop Now <i className='fi-rs-arrow-right'></i>
              </a>
            </Link>
          </div>
        </div>
        <div className='banner-img banner-2 wow fadeIn animated'>
          <Image src='/assets/imgs/banner/banner-7.jpg' alt='' width={306} height={170} />
          <div className='banner-text'>
            <span>Smart Offer</span>
            <h4>
              Save 20% on <br />
              Eardrop
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

export default Banner3;
