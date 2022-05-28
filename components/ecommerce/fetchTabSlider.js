import React, { useEffect, useState } from "react";
// import { fetchByCatagory } from "../../redux/action/product";
import { server } from "../../config/index";
import FeaturedSlider from "../sliders/Featured";
import NewArrivalTabSlider from "../sliders/NewArrivalTab";
import TrendingSlider from "../sliders/Trending";
import Link from "next/link"

function FeatchTabSlider() {
    const [active, setActive] = useState("1");
    const [featured, setFeatured] = useState([]);
    const [trending, setTrending] = useState([]);
    const [newArrival, setNewArrival] = useState([]);

    const featuredProduct = async () => {
        const request = await fetch(`${server}/static/product.json`);
        const allProducts = await request.json();
        const featuedItem = allProducts.filter((item) => item.featured);
        setFeatured(featuedItem);
        setActive("1");
    };

    const trendingProduct = async () => {
        const request = await fetch(`${server}/static/product.json`);
        const allProducts = await request.json();
        const trendingItem = allProducts.filter((item) => item.trending);
        setTrending(trendingItem);
        setActive("2");
    };
    const newArrivalProduct = async () => {
        const request = await fetch(`${server}/static/product.json`);
        const allProducts = await request.json();
        const newArrivalItem = allProducts.sort(function (a, b) {
            return a.created > b.created ? -1 : 1;
        });
        setNewArrival(newArrivalItem);
        setActive("3");
    };

    useEffect(() => {
        featuredProduct();
    }, []);

    return (
        <>
            <div className="heading-tab d-flex">
                <div className="heading-tab-left wow fadeIn animated">
                    <h3 className="section-title mb-20">
                        <span>Monthly</span> Best Sell
                    </h3>
                </div>
                <div className="heading-tab-right wow fadeIn animated">
                    <ul className="nav nav-tabs right no-border" id="myTab-1" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className={active === "1" ? "nav-link active" : "nav-link"} onClick={featuredProduct}>
                                Featured
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className={active === "2" ? "nav-link active" : "nav-link"} onClick={trendingProduct}>
                                Popular
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className={active === "3" ? "nav-link active" : "nav-link"} onClick={newArrivalProduct}>
                                New added
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-3 d-none d-lg-flex">
                    <div className="banner-img style-2 wow fadeIn animated">
                        <img src="assets/imgs/banner/banner-9.jpg" alt="" />
                        <div className="banner-text">
                            <span>Woman Area</span>
                            <h4 className="mt-5">
                                Save 17% on <br />
                                Clothing
                            </h4>

                            <Link href="/products">
                                <a className="text-white">
                                    Shop Now <i className="fi-rs-arrow-right"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 col-md-12">
                    <div className="tab-content wow fadeIn animated" id="myTabContent">
                        <div className={active === "1" ? "tab-pane fade show active" : "tab-pane fade"}>
                            <div className="carausel-4-columns-cover card-product-small arrow-center position-relative">
                                <FeaturedSlider products={featured} />
                            </div>
                        </div>

                        <div className={active === "2" ? "tab-pane fade show active" : "tab-pane fade"}>
                            <div className="carausel-4-columns-cover card-product-small arrow-center position-relative">
                                <TrendingSlider products={trending} />
                            </div>
                        </div>
                        <div className={active === "3" ? "tab-pane fade show active" : "tab-pane fade"}>
                            <div className="carausel-4-columns-cover card-product-small arrow-center position-relative">
                                <NewArrivalTabSlider products={newArrival} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default FeatchTabSlider;
