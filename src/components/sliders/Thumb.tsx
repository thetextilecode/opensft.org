import { CSSProperties, useState } from 'react';
import SwiperCore, { Navigation, Thumbs } from 'swiper';
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Zoom from 'react-img-zoom';
import Image from 'next/image';
import { infoConfig } from '../../../opensft.config';

SwiperCore.use([Navigation, Thumbs]);

export interface IThumbSlider {
  product?: any;
  resource?: any;
}

const ThumbSlider = ({ product, resource }: IThumbSlider) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <Swiper
        style={
          {
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          } as CSSProperties
        }
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper2"
      >
        {resource?.gallery &&
          resource.gallery.map((item, i: number) => (
            <SwiperSlide key={i}>
              <div style={{ width: '100%' }}>
                <Image
                  src={item.thumb}
                  alt="evara"
                  layout="responsive"
                  height={600}
                  width={600}
                  priority={true}
                />
              </div>
              {/* <Zoom
                img={item.thumb}
                zoomScale={5}
                width={500}
                height={500}
                ransitionTime={0.5}
            /> */}
            </SwiperSlide>
          ))}
        {product?.gallery &&
          product.gallery.map((item, i: number) => (
            <SwiperSlide key={i}>
              <div style={{ width: '100%' }}>
                <Image
                  src={item.thumb}
                  alt="evara"
                  layout="responsive"
                  height={600}
                  width={600}
                  priority={true}
                />
              </div>
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
        className="mySwiper"
      >
        {resource && (
          <>
            {resource.gallery ? (
              resource.gallery.map((item, i: number) => (
                <SwiperSlide key={i}>
                  <div style={{ position: 'relative', height: 'auto', width: '100%' }}>
                    <Image
                      src={item.thumb}
                      alt="OpenSFT"
                      layout="responsive"
                      height={600}
                      width={600}
                    />
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <Image
                src={'/assets/images/page/placeholder.png'}
                alt="OpenSFT"
                layout="responsive"
                height={600}
                width={600}
              />
            )}
          </>
        )}
        {product?.gallery &&
          product.gallery.map((item, i: number) => (
            <SwiperSlide key={i}>
              <div style={{ position: 'relative', height: 'auto', width: '100%' }}>
                <Image
                  src={item.thumb}
                  alt="OpenSFT"
                  layout="responsive"
                  height={600}
                  width={600}
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default ThumbSlider;
