import Link from 'next/link';
import Image from 'next/image';

import { useState } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { addToCart, decreaseQuantity, increaseQuantity } from '../../redux/action/cart';
import { addToCompare } from '../../redux/action/compareAction';
import { addToWishlist } from '../../redux/action/wishlistAction';
import ResourceTab from '../elements/ResourceTab';
import RelatedSlider from '../sliders/Related';
import ThumbSlider from '../sliders/Thumb';
import ShareIcons from '../elements/ShareIcons';

export interface IResourceDetails {
  addToCart?: any;
  addToCompare?: any;
  addToWishlist?: any;
  cartItems?: any;
  decreaseQuantity?: any;
  increaseQuantity?: any;
  resource?: any;
  quickView?: any;
}

const ResourceDetails = ({
  resource,
  cartItems,
  addToCompare,
  addToCart,
  addToWishlist,
  increaseQuantity,
  decreaseQuantity,
  quickView,
}: IResourceDetails) => {
  const [quantity, setQuantity] = useState(1);

  const handleCart = (resource) => {
    addToCart(resource);
    toast.success('Add to Cart !');
  };

  const handleCompare = (resource) => {
    addToCompare(resource);
    toast.success('Add to Compare !');
  };

  const handleWishlist = (resource) => {
    addToWishlist(resource);
    toast.success('Add to Saved !');
  };

  const inCart = cartItems.find((cartItem) => cartItem.id === resource.id);

  // console.log(inCart);

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
                        <ThumbSlider resource={resource} />
                      </div>
                    </div>

                    <ShareIcons />
                  </div>
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="detail-info">
                      <h2 className="title-detail">{resource.title}</h2>
                      <div className="product-detail-rating">
                        <div className="pro-details-brand">
                          <span>
                            Brands:
                            <Link href="/index">
                              <a>{resource.brand}</a>
                            </Link>
                          </span>
                        </div>
                        <div className="product-rate-cover text-end">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{
                                width: '90%',
                              }}
                            ></div>
                          </div>
                          <span className="font-small ml-5 text-muted">(25 reviews)</span>
                        </div>
                      </div>
                      <div className="clearfix product-price-cover">
                        <div className="product-price primary-color float-left">
                          <ins>
                            <span className="text-brand">${resource.price}</span>
                          </ins>
                          <ins>
                            <span className="old-price font-md ml-15">${resource.oldPrice}</span>
                          </ins>
                          <span className="save-price  font-md color3 ml-15">
                            {resource.discount.percentage}% Off
                          </span>
                        </div>
                      </div>
                      <div className="bt-1 border-color-1 mt-15 mb-15"></div>
                      <div className="short-desc mb-30">
                        <p>{resource.desc}</p>
                      </div>
                      <div className="product_sort_info font-xs mb-30">
                        <ul>
                          <li className="mb-10">
                            <i className="fi-rs-crown mr-5"></i>1 Year AL Jazeera Brand Warranty
                          </li>
                          <li className="mb-10">
                            <i className="fi-rs-refresh mr-5"></i>
                            30 Day Return Policy
                          </li>
                          <li>
                            <i className="fi-rs-credit-card mr-5"></i>
                            Cash on Delivery available
                          </li>
                        </ul>
                      </div>
                      <div className="attr-detail attr-color mb-15">
                        <strong className="mr-10">Color</strong>
                        <ul className="list-filter color-filter">
                          {resource.variations.map((clr, i) => (
                            <li key={i}>
                              <a href="src/components/ecommerce/ResourceDetails#">
                                <span className={`product-color-${clr}`}></span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="attr-detail attr-size">
                        <strong className="mr-10">Size</strong>
                        <ul className="list-filter size-filter font-small">
                          {/* {resource.sizes.map(
                            (size, i) => (
                                <li>
                                    <a href="/#">
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
                                ? setQuantity(quantity > 1 ? quantity - 1 : 1)
                                : decreaseQuantity(resource?.id)
                            }
                            className="qty-down"
                          >
                            <i className="fi-rs-angle-small-down"></i>
                          </a>
                          <span className="qty-val">{inCart?.quantity || quantity}</span>
                          <a
                            onClick={() =>
                              !inCart ? setQuantity(quantity + 1) : increaseQuantity(resource.id)
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
                                ...resource,
                                quantity: quantity || 1,
                              })
                            }
                            className="button button-add-to-cart"
                          >
                            Add to cart
                          </button>
                          <a
                            aria-label="Add To Saved"
                            className="action-btn hover-up"
                            onClick={(e) => handleWishlist(resource)}
                          >
                            <i className="fi-rs-heart"></i>
                          </a>
                          <a
                            aria-label="Compare"
                            className="action-btn hover-up"
                            onClick={(e) => handleCompare(resource)}
                          >
                            <i className="fi-rs-shuffle"></i>
                          </a>
                        </div>
                      </div>
                      <ul className="product-meta font-xs color-grey mt-50">
                        <li className="mb-5">
                          SKU:
                          <a href="src/components/ecommerce/ResourceDetails#">FWM15VKT</a>
                        </li>
                        <li className="mb-5">
                          Tags:
                          <a
                            href="src/components/ecommerce/ResourceDetails#"
                            rel="tag"
                            className="me-1"
                          >
                            Cloth,
                          </a>
                        </li>
                        <li>
                          Availability:
                          <span className="in-stock text-success ml-5">
                            {resource.stock} Items In Stock
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {quickView ? null : (
                  <>
                    <ResourceTab />
                    <div className="row mt-60">
                      <div className="col-12">
                        <h3 className="section-title style-1 mb-30">Related resources</h3>
                      </div>
                      <div className="col-12">
                        <div className="row related-products position-relative">
                          <RelatedSlider />
                        </div>
                      </div>
                    </div>
                    <div className="banner-img banner-big wow fadeIn f-none animated mt-50">
                      <div style={{ width: '100%' }}>
                        <Image
                          className="border-radius-10"
                          src="/assets/images/banner/banner-4.png"
                          alt=""
                          layout={'responsive'}
                          width={1320}
                          height={300}
                        />
                      </div>
                      <div className="banner-text">
                        <h4 className="mb-15 mt-40">Repair Services</h4>
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

export default connect(mapStateToProps, mapDispatchToProps)(ResourceDetails);
