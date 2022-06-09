import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Image from 'next/image';

SwiperCore.use([Navigation, Pagination]);

const HomeSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={true}
        navigation={{
          prevEl: '.custom_prev_i1',
          nextEl: '.custom_next_i1',
        }}
        className="hero-slider-1 dot-style-1 dot-style-1-position-1"
      >
        <SwiperSlide>
          <div className="single-hero-slider single-animation-wrap">
            <div className="container">
              <div className="row align-items-center slider-animated-1">
                <div className="col-lg-5 col-md-6">
                  <div className="hero-slider-content-2">
                    <h4 className="animated">helping fashion build a more</h4>
                    <h2 className="animated fw-900 italicized font-xl">meaningful</h2>
                    <h1 className="animated fw-900 text-brand">supply chain</h1>
                    <p />
                    {/*<p className='animated'>*/}
                    {/*  using open source*/}
                    {/*</p>*/}
                    <Link href="/open-source-fashion">
                      <a className="animated btn btn-brush btn-brush-3">Learn How</a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-7 col-md-6">
                  <div className="single-slider-img single-slider-img-1">
                    <Image
                      className="animated slider-1-1"
                      src="/assets/images/slider/laptop.png"
                      alt={'photo of woman holding fabric, displayed in a laptop frame'}
                      priority={true}
                      layout={'responsive'}
                      width={1000}
                      height={613}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="slider-arrow hero-slider-1-arrow">
        <span className="slider-btn slider-prev slick-arrow custom_prev_i1">
          <i className="fi-rs-angle-left"></i>
        </span>
        <span className="slider-btn slider-next slick-arrow custom_next_i1">
          <i className="fi-rs-angle-right"></i>
        </span>
      </div>
    </>
  );
};

export default HomeSlider;
