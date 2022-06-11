import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import { fetchByCategory } from '../../redux/action/resource';
import SingleResource from '../resources/SingleResource';

SwiperCore.use([Navigation]);

export interface IRelatedSlider {
  related?: any;
}

const RelatedSlider = ({}: IRelatedSlider) => {
  const [related, setRelated] = useState<any>([]);

  useEffect(() => {
    let isMounted = true;

    fetchResources().then((resources) => {
      if (isMounted) {
        // do something
        // setRelated(resources);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const fetchResources = async () => {
    // With Category
    const allResources = await fetchByCategory('/static/resource.json');
    setRelated(allResources);
  };

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        navigation={{
          prevEl: '.custom_prev_n',
          nextEl: '.custom_next_n',
        }}
        className="custom-class"
      >
        {related.map((resource, i) => (
          <SwiperSlide key={i}>
            <SingleResource resource={resource} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="slider-arrow slider-arrow-2 carousel-6-columns-arrow">
        <span className="slider-btn slider-prev slick-arrow custom_prev_n">
          <i className="fi-rs-angle-left"></i>
        </span>
        <span className="slider-btn slider-next slick-arrow custom_next_n">
          <i className="fi-rs-angle-right"></i>
        </span>
      </div>
    </>
  );
};

export default RelatedSlider;
