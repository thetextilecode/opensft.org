import React from "react";
import Timer from "./Timer";
import Link from "next/link";

const Deals2 = () => {
    const fixDate = new Date();
    return (
        <>
            <div
                className="deal wow fadeIn animated mb-md-4 mb-sm-4 mb-lg-0"
                style={{
                    backgroundImage:
                        "url('assets/imgs/banner/menu-banner-8.jpg')",
                }}
            >
                <div className="deal-top">
                    <h2 className="text-brand">Men Clothing</h2>
                    <h5>Shirt & Bag</h5>
                </div>
                <div className="deal-content">
                    <h6 className="product-title">
                        <Link href="/products/shop-grid-right">
                            <a>Summer Collection New Morden Design</a>
                        </Link>
                    </h6>
                    <div className="product-price">
                        <span className="new-price">$178.00</span>
                        <span className="old-price">$256.99</span>
                    </div>
                </div>
                <div className="deal-bottom">
                    <p>Hurry Up! Offer End In:</p>
                    {/* <Timer endDateTime="2023-11-27 00:00:00" /> */}
                    <Timer
                        endDateTime={fixDate.setDate(fixDate.getDate() + 2)}
                    />
                    <Link href="/products/shop-grid-right">
                        <a className="btn hover-up">
                            Shop Now <i className="fi-rs-arrow-right"></i>
                        </a>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Deals2;
