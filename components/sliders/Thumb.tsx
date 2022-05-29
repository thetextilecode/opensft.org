import { useState } from 'react';
import SwiperCore, { Navigation, Thumbs } from 'swiper';
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from 'swiper/react';
import Zoom from 'react-img-zoom';
import Image from 'next/image';

SwiperCore.use([Navigation, Thumbs]);

export interface IThumbSlider {
  product?: any;
}

const ThumbSlider = ({ product }: IThumbSlider) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        className='mySwiper2'
      >
        {product.gallery.map((item, i: number) => (
          <SwiperSlide key={i}>
            <Image src={item.thumb} alt='evara' layout='fill' />
            {/* <Zoom
                img={item.thumb}
                zoomScale={5}
                width={500}
                height={500}
                ransitionTime={0.5}
            /> */}
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        className='mySwiper'
      >
        {product.gallery.map((item, i: number) => (
          <SwiperSlide key={i}>
            <Image src={item.thumb} alt='evara' layout='fill' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ThumbSlider;
