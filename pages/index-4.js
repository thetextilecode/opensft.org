import Layout from "../components/layout/Layout";
import CategoryProduct from "./../components/ecommerce/CategoryProduct";
import FeatchTab from "./../components/ecommerce/fetchTab";
import FetchTabSlider from "./../components/ecommerce/fetchTabSlider";
import PriceRangeSlider from "./../components/ecommerce/PriceRangeSlider";
import Banner2 from "./../components/elements/Banner2";
import Banner3 from "./../components/elements/Banner3";
import Banner4 from "./../components/elements/Banner4";
import Banner5 from "./../components/elements/Banner5";
import Banner6 from "./../components/elements/Banner6";
import BannerFeatures from "./../components/elements/BannerFeatures";
import Deals1 from "./../components/elements/Deals1";
import Deals2 from "./../components/elements/Deals2";
import HomeBlog from "./../components/elements/HomeBlog";
import IntroPopup from "./../components/elements/IntroPopup";
import BrandSlider from "./../components/sliders/Brand";
import CategorySlider from "./../components/sliders/Category";
import Intro4 from "./../components/sliders/intro4";
import NewArrival from "./../components/sliders/NewArrival";
import Bottom from './../components/elements/Bottom';

function Test() {
    return (
        <>
            <IntroPopup />
            <Layout noBreadcrumb="d-none" headerStyle="header-style-4">
                <section className="home-slider position-relative mb-30">
                    <div className="container">
                        <div className="home-slide-cover bg-grey-10 mt-30">
                            <Intro4 />
                        </div>
                    </div>
                </section>
                <section className="banners mb-15">
                    <div className="container">
                        <div className="row">
                            <Banner5 />
                        </div>
                    </div>
                </section>

                <section className="product-tabs pt-25 pb-20 wow fadeIn animated">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="widget-category mb-30">
                                    <h5 className="section-title style-1 mb-30 wow fadeIn animated">
                                        Category
                                    </h5>
                                    <CategoryProduct />
                                </div>
                                {/* <div className="widget-category mb-30">
                                    <h5 className="section-title style-1 mb-30 wow fadeIn animated">
                                        Price Range
                                    </h5>
                                    <PriceRangeSlider />
                                </div> */}
                                <Banner6 />
                            </div>
                            <div className="col-lg-9">
                                <FeatchTab />
                            </div>
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
                    <div className="container wow fadeIn animated">
                        <h3 className="section-title mb-20">
                            <span>New</span> Arrivals
                        </h3>
                        <div className="carausel-6-columns-cover position-relative">
                            <NewArrival />
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
                        <FetchTabSlider />
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

                <section className="featured section-padding">
                    <div className="container">
                        <div className="row">
                            <BannerFeatures />
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default Test;
