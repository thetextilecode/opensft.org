import Link from "next/link";
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, EffectFade]);

const Intro4 = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                effect={"fade"}
                fadeEffect={{
                    crossFade: true,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    prevEl: ".custom_prev_i3",
                    nextEl: ".custom_next_i3",
                }}
                className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1"
            >
                <SwiperSlide>
                    <div className="single-hero-slider single-animation-wrap">
                        <div className="container">
                            <div className="row align-items-center slider-animated-1">
                                <div className="col-lg-5 col-md-6">
                                    <div className="hero-slider-content-2">
                                        <h4 className="animated">
                                            Trade-In Offer
                                        </h4>
                                        <h3 className="animated fw-900">
                                            Supper Value Deals
                                        </h3>
                                        <h2 className="animated fw-900 text-brand">
                                            On All Products
                                        </h2>
                                        <p className="animated">
                                            Save more with coupons & up to 70%
                                            off
                                        </p>
                                        <Link href="/products/shop-grid-right">
                                        <a className="animated btn btn-brush btn-brush-3">
                                            Shop Now
                                        </a>
                                    </Link>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-6">
                                    <div className="single-slider-img single-slider-img-1">
                                        <img
                                            className="animated"
                                            src="assets/imgs/slider/slider-6.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-hero-slider single-animation-wrap">
                        <div className="container">
                            <div className="row align-items-center slider-animated-1">
                                <div className="col-lg-5 col-md-6">
                                    <div className="hero-slider-content-2">
                                        <h4 className="animated">
                                            Hot promotions
                                        </h4>
                                        <h3 className="animated fw-900">
                                            Fashion Trending
                                        </h3>
                                        <h2 className="animated fw-900 text-brand">
                                            Great Collection
                                        </h2>
                                        <p className="animated">
                                            Save more with coupons & up to 20%
                                            off
                                        </p>
                                        <Link href="/products/shop-grid-right">
                                        <a className="animated btn btn-brush btn-brush-3">
                                            Shop Now
                                        </a>
                                    </Link>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-6">
                                    <div className="single-slider-img single-slider-img-1">
                                        <img
                                            className="animated"
                                            src="assets/imgs/slider/slider-7.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="slider-arrow hero-slider-1-arrow">
                <span className="slider-btn slider-prev slick-arrow custom_prev_i3">
                    <i className="fi-rs-angle-left"></i>
                </span>
                <span className="slider-btn slider-next slick-arrow custom_next_i3">
                    <i className="fi-rs-angle-right"></i>
                </span>
            </div>
        </>
    );
};

export default Intro4;
