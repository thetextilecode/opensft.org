import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SingleResource from '../resources/SingleResource';

SwiperCore.use([Navigation]);

export interface IFeaturedResourceSlider {
  featured?: any[];
  resources?: any[];
}

const FeaturedResourceSlider = ({ resources }: IFeaturedResourceSlider) => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        grid={{
          rows: 2,
        }}
        loop={true}
        navigation={{
          prevEl: '.custom_prev_f',
          nextEl: '.custom_next_f',
        }}
        className="custom-class"
      >
        {resources.map((resource, i) => (
          <SwiperSlide key={i}>
            <SingleResource resource={resource} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="slider-arrow slider-arrow-2 carousel-4-columns-arrow">
        <span className="slider-btn slider-prev slick-arrow custom_prev_f">
          <i className="fi-rs-angle-left"></i>
        </span>
        <span className="slider-btn slider-next slick-arrow custom_next_f">
          <i className="fi-rs-angle-right"></i>
        </span>
      </div>
    </>
  );
};

export default FeaturedResourceSlider;
