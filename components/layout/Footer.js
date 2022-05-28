import React from "react";
import Link from "next/link"

const Footer = () => {
    return (
        <>
            <footer className="main">
                <section className="newsletter p-30 mt-30 text-white wow fadeIn animated">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 mb-md-3 mb-lg-0">
                                <div className="row align-items-center">
                                    <div className="col flex-horizontal-center">
                                        <img
                                            className="icon-email"
                                            src="/assets/imgs/theme/icons/icon-email.svg"
                                            alt=""
                                        />
                                        <h4 className="font-size-20 mb-0 ml-3">
                                            Sign up to Newsletter
                                        </h4>
                                    </div>
                                    <div className="col my-4 my-md-0 des">
                                        <h5 className="font-size-15 ml-4 mb-0">
                                            ...and receive
                                            <strong>
                                                $25 coupon for first shopping.
                                            </strong>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <form className="form-subcriber d-flex wow fadeIn animated">
                                    <input
                                        type="email"
                                        className="form-control bg-white font-small"
                                        placeholder="Enter your email"
                                    />
                                    <button
                                        className="btn bg-dark text-white"
                                        type="submit"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-padding footer-mid">
                    <div className="container pt-15 pb-20">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="widget-about font-md mb-md-5 mb-lg-0">
                                    <div className="logo logo-width-1 wow fadeIn animated">
                                        <Link href="/"><a>
                                            <img
                                                src="/assets/imgs/theme/logo.svg"
                                                alt="logo"
                                            />
                                        </a>
                                        </Link>
                                    </div>
                                    <h5 className="mt-20 mb-10 fw-600 text-grey-4 wow fadeIn animated">
                                        Contact
                                    </h5>
                                    <p className="wow fadeIn animated">
                                        <strong>Address: </strong>562 Wellington
                                        Road, Street 32, San Francisco
                                    </p>
                                    <p className="wow fadeIn animated">
                                        <strong>Phone: </strong>+01 2222 365
                                        /(+91) 01 2345 6789
                                    </p>
                                    <p className="wow fadeIn animated">
                                        <strong>Hours: </strong>10:00 - 18:00,
                                        Mon - Sat
                                    </p>
                                    <h5 className="mb-10 mt-30 fw-600 text-grey-4 wow fadeIn animated">
                                        Follow Us
                                    </h5>
                                    <div className="mobile-social-icon wow fadeIn animated mb-sm-5 mb-md-0">
                                        <a href="#">
                                            <img
                                                src="/assets/imgs/theme/icons/icon-facebook.svg"
                                                alt=""
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="/assets/imgs/theme/icons/icon-twitter.svg"
                                                alt=""
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="/assets/imgs/theme/icons/icon-instagram.svg"
                                                alt=""
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="/assets/imgs/theme/icons/icon-pinterest.svg"
                                                alt=""
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="/assets/imgs/theme/icons/icon-youtube.svg"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3">
                                <h5 className="widget-title wow fadeIn animated">
                                    About
                                </h5>
                                <ul className="footer-list wow fadeIn animated mb-sm-5 mb-md-0">
                                    <li>
                                        <a href="#">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Delivery Information</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#">Terms &amp; Conditions</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Support Center</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-2  col-md-3">
                                <h5 className="widget-title wow fadeIn animated">
                                    My Account
                                </h5>
                                <ul className="footer-list wow fadeIn animated">
                                    <li>
                                        <a href="#">Sign In</a>
                                    </li>
                                    <li>
                                        <a href="#">View Cart</a>
                                    </li>
                                    <li>
                                        <a href="#">My Wishlist</a>
                                    </li>
                                    <li>
                                        <a href="#">Track My Order</a>
                                    </li>
                                    <li>
                                        <a href="#">Help</a>
                                    </li>
                                    <li>
                                        <a href="#">Order</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <h5 className="widget-title wow fadeIn animated">
                                    Install App
                                </h5>
                                <div className="row">
                                    <div className="col-md-8 col-lg-12">
                                        <p className="wow fadeIn animated">
                                            From App Store or Google Play
                                        </p>
                                        <div className="download-app wow fadeIn animated">
                                            <a
                                                href="#"
                                                className="hover-up mb-sm-4 mb-lg-0"
                                            >
                                                <img
                                                    className="active"
                                                    src="/assets/imgs/theme/app-store.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <a href="#" className="hover-up">
                                                <img
                                                    src="/assets/imgs/theme/google-play.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-lg-12 mt-md-3 mt-lg-0">
                                        <p className="mb-20 wow fadeIn animated">
                                            Secured Payment Gateways
                                        </p>
                                        <img
                                            className="wow fadeIn animated"
                                            src="/assets/imgs/theme/payment-method.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container pb-20 wow fadeIn animated">
                    <div className="row">
                        <div className="col-12 mb-20">
                            <div className="footer-bottom"></div>
                        </div>
                        <div className="col-lg-6">
                            <p className="float-md-left font-sm text-muted mb-0">
                                &copy; {new Date().getFullYear()},
                                <strong className="text-brand"> Evara</strong> - React Redux Nextjs
                                Ecommerce Template
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <p className="text-lg-end text-start font-sm text-muted mb-0">
                                Designed by 
                                <a href="http://alithemes.com" target="_blank"> Alithemes.com</a>
                                . All rights reserved
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
