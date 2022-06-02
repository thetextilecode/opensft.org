import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';

SwiperCore.use([Navigation, Autoplay]);

const CategorySlider = () => {
  const data: { id: number, title: string, img: string, imgOriginalWidth: number, imgOriginalHeight: number }[] = [
    {
      id: 1,
      title: 'T-Shirt',
      img: 'category-thumb-1.jpg',
      imgOriginalWidth: 440,
      imgOriginalHeight: 440,
    },
    {
      id: 2,
      title: 'Bags',
      img: 'category-thumb-2.jpg',
      imgOriginalWidth: 440,
      imgOriginalHeight: 440,
    },
    {
      id: 3,
      title: 'Sandan',
      img: 'category-thumb-3.jpg',
      imgOriginalWidth: 440,
      imgOriginalHeight: 440,
    },
    {
      id: 4,
      title: 'Scarf Cap',
      img: 'category-thumb-4.jpg',
      imgOriginalWidth: 440,
      imgOriginalHeight: 440,
    },
    {
      id: 5,
      title: 'Shoes',
      img: 'category-thumb-5.jpg',
      imgOriginalWidth: 440,
      imgOriginalHeight: 440,
    },
    {
      id: 6,
      title: 'Pillowcase',
      img: 'category-thumb-6.jpg',
      imgOriginalWidth: 440,
      imgOriginalHeight: 440,
    },
    {
      id: 7,
      title: 'Jumpsuits',
      img: 'category-thumb-7.jpg',
      imgOriginalWidth: 440,
      imgOriginalHeight: 440,
    },
    {
      id: 8,
      title: 'Hats',
      img: 'category-thumb-8.jpg',
      imgOriginalWidth: 440,
      imgOriginalHeight: 440,
    },
  ];
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={{
          prevEl: '.custom_prev_ct1',
          nextEl: '.custom_next_ct1',
        }}
        className='custom-class'
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <div className='card-1'>
              <figure className='img-hover-scale overflow-hidden'>
                <Link href='/products/shop-grid-right'>
                  <div style={{ width: '100%' }}>
                    <a>
                      <Image
                        src={`/assets/images/shop/${item.img}`}
                        alt=''
                        layout={'responsive'}
                        width={item.imgOriginalWidth}
                        height={item.imgOriginalHeight}
                      />
                    </a>
                  </div>
                </Link>
              </figure>
              <h5>
                <Link href='/products/shop-grid-right'>
                  <a>{item.title}</a>
                </Link>
              </h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className='slider-arrow slider-arrow-2 carousel-6-columns-arrow'
        id='carousel-6-columns-arrows'
      >
        <span className='slider-btn slider-prev slick-arrow custom_prev_ct1'>
          <i className='fi-rs-angle-left'></i>
        </span>
        <span className='slider-btn slider-next slick-arrow custom_next_ct1'>
          <i className='fi-rs-angle-right'></i>
        </span>
      </div>
    </>
  );
};

export default CategorySlider;
