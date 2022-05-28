import Link from "next/link";
import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import {
    addToCart,
    decreaseQuantity,
    increaseQuantity,
} from "../../redux/action/cart";
import { addToCompare } from "../../redux/action/compareAction";
import { addToWishlist } from "../../redux/action/wishlistAction";
import ProductTab from "../elements/ProductTab";
import RelatedSlider from "../sliders/Related";
import ThumbSlider from "../sliders/Thumb";

const ProductDetails = ({
    product,
    cartItems,
    addToCompare,
    addToCart,
    addToWishlist,
    increaseQuantity,
    decreaseQuantity,
    quickView,
}) => {
    const [quantity, setQuantity] = useState(1);

    const handleCart = (product) => {
        addToCart(product);
        toast.success("Add to Cart !");
    };

    const handleCompare = (product) => {
        addToCompare(product);
        toast.success("Add to Compare !");
    };

    const handleWishlist = (product) => {
        addToWishlist(product);
        toast.success("Add to Wishlist !");
    };

    const inCart = cartItems.find((cartItem) => cartItem.id === product.id);

    console.log(inCart);

    return (
        <>
            <section className="mt-50 mb-50">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-12">
                            <div className="product-detail accordion-detail">
                                <div className="row mb-50">
                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                        <div className="detail-gallery">
                                            <span className="zoom-icon">
                                                <i className="fi-rs-search"></i>
                                            </span>

                                            <div className="product-image-slider">
                                                <ThumbSlider
                                                    product={product}
                                                />
                                            </div>
                                        </div>

                                        <div className="social-icons single-share">
                                            <ul className="text-grey-5 d-inline-block">
                                                <li>
                                                    <strong className="mr-10">
                                                        Share this:
                                                    </strong>
                                                </li>
                                                <li className="social-facebook">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/imgs/theme/icons/icon-facebook.svg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </li>
                                                <li className="social-twitter">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/imgs/theme/icons/icon-twitter.svg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </li>
                                                <li className="social-instagram">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/imgs/theme/icons/icon-instagram.svg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </li>
                                                <li className="social-linkedin">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/imgs/theme/icons/icon-pinterest.svg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                        <div className="detail-info">
                                            <h2 className="title-detail">
                                                {product.title}
                                            </h2>
                                            <div className="product-detail-rating">
                                                <div className="pro-details-brand">
                                                    <span>
                                                        Brands:
                                                        <Link href="/products">
                                                            <a>
                                                                {product.brand}
                                                            </a>
                                                        </Link>
                                                    </span>
                                                </div>
                                                <div className="product-rate-cover text-end">
                                                    <div className="product-rate d-inline-block">
                                                        <div
                                                            className="product-rating"
                                                            style={{
                                                                width: "90%",
                                                            }}
                                                        ></div>
                                                    </div>
                                                    <span className="font-small ml-5 text-muted">
                                                        (25 reviews)
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="clearfix product-price-cover">
                                                <div className="product-price primary-color float-left">
                                                    <ins>
                                                        <span className="text-brand">
                                                            ${product.price}
                                                        </span>
                                                    </ins>
                                                    <ins>
                                                        <span className="old-price font-md ml-15">
                                                            ${product.oldPrice}
                                                        </span>
                                                    </ins>
                                                    <span className="save-price  font-md color3 ml-15">
                                                        {
                                                            product.discount
                                                                .percentage
                                                        }
                                                        % Off
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="bt-1 border-color-1 mt-15 mb-15"></div>
                                            <div className="short-desc mb-30">
                                                <p>{product.desc}</p>
                                            </div>
                                            <div className="product_sort_info font-xs mb-30">
                                                <ul>
                                                    <li className="mb-10">
                                                        <i className="fi-rs-crown mr-5"></i>
                                                        1 Year AL Jazeera Brand
                                                        Warranty
                                                    </li>
                                                    <li className="mb-10">
                                                        <i className="fi-rs-refresh mr-5"></i>
                                                        30 Day Return Policy
                                                    </li>
                                                    <li>
                                                        <i className="fi-rs-credit-card mr-5"></i>
                                                        Cash on Delivery
                                                        available
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="attr-detail attr-color mb-15">
                                                <strong className="mr-10">
                                                    Color
                                                </strong>
                                                <ul className="list-filter color-filter">
                                                    {product.variations.map(
                                                        (clr, i) => (
                                                            <li key={i}>
                                                                <a href="#">
                                                                    <span
                                                                        class={`product-color-${clr}`}
                                                                    ></span>
                                                                </a>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                            <div className="attr-detail attr-size">
                                                <strong className="mr-10">
                                                    Size
                                                </strong>
                                                <ul className="list-filter size-filter font-small">
                                                    {/* {product.sizes.map(
                                                        (size, i) => (
                                                            <li>
                                                                <a href="#">
                                                                    {size}
                                                                </a>
                                                            </li>
                                                        )
                                                    )} */}

                                                    <li className="active">
                                                        <a>M</a>
                                                    </li>
                                                    <li>
                                                        <a>L</a>
                                                    </li>
                                                    <li>
                                                        <a>XL</a>
                                                    </li>
                                                    <li>
                                                        <a>XXL</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bt-1 border-color-1 mt-30 mb-30"></div>
                                            <div className="detail-extralink">
                                                <div className="detail-qty border radius">
                                                    <a
                                                        onClick={(e) =>
                                                            !inCart
                                                                ? setQuantity(
                                                                      quantity >
                                                                          1
                                                                          ? quantity -
                                                                                1
                                                                          : 1
                                                                  )
                                                                : decreaseQuantity(
                                                                      product?.id
                                                                  )
                                                        }
                                                        className="qty-down"
                                                    >
                                                        <i className="fi-rs-angle-small-down"></i>
                                                    </a>
                                                    <span className="qty-val">
                                                        {inCart?.quantity ||
                                                            quantity}
                                                    </span>
                                                    <a
                                                        onClick={() =>
                                                            !inCart
                                                                ? setQuantity(
                                                                      quantity +
                                                                          1
                                                                  )
                                                                : increaseQuantity(
                                                                      product.id
                                                                  )
                                                        }
                                                        className="qty-up"
                                                    >
                                                        <i className="fi-rs-angle-small-up"></i>
                                                    </a>
                                                </div>
                                                <div className="product-extra-link2">
                                                    <button
                                                        onClick={(e) =>
                                                            handleCart({
                                                                ...product,
                                                                quantity:
                                                                    quantity ||
                                                                    1,
                                                            })
                                                        }
                                                        className="button button-add-to-cart"
                                                    >
                                                        Add to cart
                                                    </button>
                                                    <a
                                                        aria-label="Add To Wishlist"
                                                        className="action-btn hover-up"
                                                        onClick={(e) =>
                                                            handleWishlist(
                                                                product
                                                            )
                                                        }
                                                    >
                                                        <i className="fi-rs-heart"></i>
                                                    </a>
                                                    <a
                                                        aria-label="Compare"
                                                        className="action-btn hover-up"
                                                        onClick={(e) =>
                                                            handleCompare(
                                                                product
                                                            )
                                                        }
                                                    >
                                                        <i className="fi-rs-shuffle"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <ul className="product-meta font-xs color-grey mt-50">
                                                <li className="mb-5">
                                                    SKU:
                                                    <a href="#">FWM15VKT</a>
                                                </li>
                                                <li className="mb-5">
                                                    Tags:
                                                    <a
                                                        href="#"
                                                        rel="tag"
                                                        className="me-1"
                                                    >
                                                        Cloth,
                                                    </a>
                                                </li>
                                                <li>
                                                    Availability:
                                                    <span className="in-stock text-success ml-5">
                                                        {product.stock} Items In
                                                        Stock
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {quickView ? null : (
                                    <>
                                        <ProductTab />
                                        <div className="row mt-60">
                                            <div className="col-12">
                                                <h3 className="section-title style-1 mb-30">
                                                    Related products
                                                </h3>
                                            </div>
                                            <div className="col-12">
                                                <div className="row related-products position-relative">
                                                    <RelatedSlider />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="banner-img banner-big wow fadeIn f-none animated mt-50">
                                            <img
                                                className="border-radius-10"
                                                src="/assets/imgs/banner/banner-4.png"
                                                alt=""
                                            />
                                            <div className="banner-text">
                                                <h4 className="mb-15 mt-40">
                                                    Repair Services
                                                </h4>
                                                <h2 className="fw-600 mb-20">
                                                    We're an Apple <br />
                                                    Authorised Service Provider
                                                </h2>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

const mapStateToProps = (state) => ({
    cartItems: state.cart,
});

const mapDispatchToProps = {
    addToCompare,
    addToWishlist,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
