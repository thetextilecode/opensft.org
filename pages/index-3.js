import FeatchTab from "../components/ecommerce/fetchTab";
import Banner2 from "../components/elements/Banner2";
import Layout from "../components/layout/Layout";
import FetchTabSlider from "./../components/ecommerce/fetchTabSlider";
import Banner3 from "./../components/elements/Banner3";
import Banner4 from "./../components/elements/Banner4";
import Banner5 from './../components/elements/Banner5';
import BannerFeatures from "./../components/elements/BannerFeatures";
import Deals1 from "./../components/elements/Deals1";
import Deals2 from "./../components/elements/Deals2";
import HomeBlog from "./../components/elements/HomeBlog";
import IntroPopup from './../components/elements/IntroPopup';
import BrandSlider from "./../components/sliders/Brand";
import CategorySlider from "./../components/sliders/Category";
import Intro3 from "./../components/sliders/intro3";
import NewArrival from "./../components/sliders/NewArrival";
import Link from "next/link";
import Bottom from './../components/elements/Bottom';


function Test() {
    return (
        <>
         <IntroPopup/>
         <Layout noBreadcrumb="d-none" headerStyle="header-style-3">
                <section className="home-slider position-relative pt-25 pb-20">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="position-relative">
                                    <Intro3 />
                                </div>
                            </div>
                            <div className="col-lg-3 d-md-none d-lg-block">
                                <div className="banner-img banner-1 wow fadeIn  animated home-3">
                                    <img
                                        className="border-radius-10"
                                        src="assets/imgs/banner/banner-5.jpg"
                                        alt=""
                                    />
                                    <div className="banner-text">
                                        <span>Accessories</span>
                                        <h4>
                                            Save 17% on <br />
                                            Autumn Hat
                                        </h4>
                                        <Link href="/products">
                            <a>
                                Shop Now <i className="fi-rs-arrow-right"></i>
                            </a>
                        </Link>
                                    </div>
                                </div>
                                <div className="banner-img banner-2 wow fadeIn  animated mb-0">
                                    <img
                                        className="border-radius-10"
                                        src="assets/imgs/banner/banner-7.jpg"
                                        alt=""
                                    />
                                    <div className="banner-text">
                                        <span>Smart Offer</span>
                                        <h4>
                                            Save 20% on <br />
                                            Eardrop
                                        </h4>
                                        <Link href="/products">
                            <a>
                                Shop Now <i className="fi-rs-arrow-right"></i>
                            </a>
                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="featured section-padding position-relative">
                    <div className="container">
                        <div className="row">
                            <BannerFeatures />
                        </div>
                    </div>
                </section>

                <section className="product-tabs section-padding position-relative wow fadeIn animated">
                    <div className="container">
                        <div className="col-lg-12">
                            <FeatchTab />
                        </div>
                    </div>
                </section>

                <section className="banner-2 section-padding pb-0">
                    <div className="container">
                        <Banner2 />
                    </div>
                </section>

                <section className="popular-categories section-padding mt-15 mb-25">
                    <div className="container wow fadeIn animated">
                        <h3 className="section-title mb-20">
                            <span>Popular</span> Categories
                        </h3>
                        <div className="carausel-6-columns-cover position-relative">
                            <div
                                className="carausel-6-columns"
                                id="carausel-6-columns"
                            >
                                <CategorySlider />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="banners mb-15">
                    <div className="container">
                        <div className="row">
                            <Banner5/>
                        </div>
                    </div>
                </section>

                <section className="section-padding">
                    <div className="container wow fadeIn animated">
                        <h3 className="section-title mb-20">
                            <span>New</span> Arrivals
                        </h3>
                        <div className="carausel-6-columns-cover position-relative">
                            <NewArrival />
                        </div>
                    </div>
                </section>

                <section className="deals section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 deal-co">
                                <Deals1 />
                            </div>
                            <div className="col-lg-6 deal-co">
                                <Deals2 />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-padding">
                    <div className="container">
                        <h3 className="section-title mb-20 wow fadeIn animated">
                            <span>Featured</span> Brands
                        </h3>
                        <div className="carausel-6-columns-cover position-relative wow fadeIn animated">
                            <BrandSlider />
                        </div>
                    </div>
                </section>

                <section className="bg-grey-9 section-padding">
                    <div className="container pt-25 pb-25">
                        <FetchTabSlider/>
                    </div>
                </section>

                <section className="section-padding">
                    <div className="container pt-25 pb-20">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3 className="section-title mb-20">
                                    <span>From</span> blog
                                </h3>
                                <HomeBlog />
                            </div>
                            <div className="col-lg-6">
                                <div className="row">
                                    <Banner3 />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <Banner4 />
                            </div>
                        </div>
                    </div>
                </section>

                <Bottom/>
            </Layout>
        </>
    );
}

export default Test;
