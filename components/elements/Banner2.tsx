import Image from 'next/image';
import Link from 'next/link';

const Banner2 = () => {
  return (
    <div className='banner-img banner-big wow fadeIn animated f-none'>
      <Image src='/assets/imgs/banner/banner-4.png' alt='' layout={'responsive'} width={1320} height={300} />
      <div className='banner-text d-md-block d-none'>
        <h4 className='mb-15 mt-40 text-brand'>Repair Services</h4>
        <h1 className='fw-600 mb-20'>
          We're an Apple <br />
          Authorised Service Provider
        </h1>

        <Link href='/index'>
          <a className='btn'>
            Learn More <i className='fi-rs-arrow-right'></i>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Banner2;
