import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

SwiperCore.use([Navigation]);

const BrandSlider = () => {
  const data: { id: number, img: string }[] = [
    {
      id: 1,
      img: 'brand-1.png',
    },
    {
      id: 2,
      img: 'brand-2.png',
    },
    {
      id: 3,
      img: 'brand-3.png',
    },
    {
      id: 4,
      img: 'brand-4.png',
    },
    {
      id: 5,
      img: 'brand-5.png',
    },
    {
      id: 6,
      img: 'brand-6.png',
    },
  ];

  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        loop={true}
        navigation={{
          prevEl: '.custom_prev_br1',
          nextEl: '.custom_next_br1',
        }}
        className='carousel-6-columns text-center'
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <div className='brand-logo'>
              <Image
                className='img-grey-hover'
                src={`/assets/images/banner/${item.img}`}
                alt=''
                width={203}
                height={79}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className='slider-arrow slider-arrow-2 carousel-6-columns-arrow'
        id='carousel-6-columns-3-arrows'
      >
        <span className='slider-btn slider-prev slick-arrow custom_prev_br1'>
          <i className='fi-rs-angle-left'></i>
        </span>
        <span className='slider-btn slider-next slick-arrow custom_next_br1'>
          <i className='fi-rs-angle-right'></i>
        </span>
      </div>
    </>
  );
};

export default BrandSlider;
