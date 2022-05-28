import React from "react";
import Link from "next/link";
const Banner5 = () => {
    return (
        <>
            <div className="col-lg-4 col-md-6">
                <div className="banner-img wow fadeIn animated">
                    <img src="/assets/imgs/banner/banner-1.png" alt="" />
                    <div className="banner-text">
                        <span>Smart Offer</span>
                        <h4>
                            Save 20% on <br />
                            Woman Bag
                        </h4>
                        <Link href="/products">
                            <a>
                                Shop Now <i className="fi-rs-arrow-right"></i>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="banner-img wow fadeIn animated">
                    <img src="/assets/imgs/banner/banner-2.png" alt="" />
                    <div className="banner-text">
                        <span>Sale off</span>
                        <h4>
                            Great Summer <br />
                            Collection
                        </h4>
                        <Link href="/products">
                            <a>
                                Shop Now <i className="fi-rs-arrow-right"></i>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 d-md-none d-lg-flex">
                <div className="banner-img wow fadeIn animated  mb-sm-0">
                    <img src="/assets/imgs/banner/banner-3.png" alt="" />
                    <div className="banner-text">
                        <span>New Arrivals</span>
                        <h4>
                            Shop Today’s <br />
                            Deals & Offers
                        </h4>
                        <Link href="/products">
                            <a>
                                Shop Now <i className="fi-rs-arrow-right"></i>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner5;
