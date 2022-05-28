import Link from "next/link";
import React from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
// import { useToasts } from "react-toast-notifications";
import { addToCart } from "../../redux/action/cart";
import { addToCompare } from "../../redux/action/compareAction";
import { openQuickView } from "../../redux/action/quickViewAction";
import { addToWishlist } from "../../redux/action/wishlistAction";
// 

const SingleProductList = ({
    product,
    addToCart,
    addToCompare,
    addToWishlist,
    openQuickView,
}) => {
    console.log(product);

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
    return (
        <>
            <div className="product-list mb-30">
                <div className="product-cart-wrap">
                    <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                            <div className="product-img-inner">
                                <Link
                                    href="/products/[slug]"
                                    as={`/products/${product.slug}`}
                                >
                                    <a>
                                        <img
                                            className="default-img"
                                            src={product.images[0].img}
                                            alt=""
                                        />
                                        <img
                                            className="hover-img"
                                            src={product.images[1].img}
                                            alt=""
                                        />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="product-action-1">
                            <a
                                aria-label="Quick view"
                                className="action-btn hover-up"
                                data-bs-toggle="modal"
                                // data-bs-target="#quickViewModal"
                                onClick={(e) => openQuickView(product)}
                            >
                                <i className="fi-rs-eye"></i>
                            </a>
                            <a
                                aria-label="Add To Wishlist"
                                className="action-btn hover-up"
                                onClick={(e) => handleWishlist(product)}
                            >
                                <i className="fi-rs-heart"></i>
                            </a>
                            <a
                                aria-label="Compare"
                                className="action-btn hover-up"
                                onClick={(e) => handleCompare(product)}
                            >
                                <i className="fi-rs-shuffle"></i>
                            </a>
                        </div>

                        <div className="product-badges product-badges-position product-badges-mrg">
                            {product.trending && (
                                <span className="hot">Hot</span>
                            )}
                            {product.created && (
                                <span className="new">New</span>
                            )}
                            {product.totalSell > 100 && (
                                <span className="best">Best Sell</span>
                            )}
                            {product.discount.isActive && (
                                <span className="sale">Sale</span>
                            )}
                            {product.discount.percentage >= 5 && (
                                <span className="hot">
                                    {product.discount.percentage}%
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="product-content-wrap">
                        <div className="product-category">
                            <Link href="/products">
                                <a>{product.brand}</a>
                            </Link>
                        </div>
                        <h2>
                            <Link
                                href="/products/[slug]"
                                as={`/products/${product.slug}`}
                            >
                                <a>{product.title}</a>
                            </Link>
                        </h2>
                        <div className="product-price">
                            <span>${product.price} </span>
                            <span className="old-price">
                                ${product.oldPrice}
                            </span>
                        </div>

                        <p className="mt-15">{product.desc}</p>

                        <div className="product-action-1 show">
                            <a
                                aria-label="Add To Cart"
                                className="action-btn hover-up"
                                onClick={(e) => handleCart(product)}
                            >
                                <i className="fi-rs-shopping-bag-add"></i>
                                Add to Cart
                            </a>
                            <div className="rating-result" title="90%">
                                <span>
                                    <span>{product.ratingScore}%</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    );
};

const mapDispatchToProps = {
    addToCart,
    addToCompare,
    addToWishlist,
    openQuickView,
};

export default connect(null, mapDispatchToProps)(SingleProductList);
