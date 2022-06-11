import Link from 'next/link';
import Image from 'next/image';

import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { addToCart, decreaseQuantity, increaseQuantity } from '../../redux/action/cart';
import { addToCompare } from '../../redux/action/compareAction';
import { addToWishlist } from '../../redux/action/wishlistAction';
import ResourceTab from './ResourceTab';
import RelatedSlider from '../sliders/Related';
import ThumbSlider from '../sliders/Thumb';
import ShareIcons from '../elements/ShareIcons';

export interface IResourceDetails {
  addToCompare?: any;
  addToWishlist?: any;
  resource?: any;
  quickView?: any;
}

const ResourceDetails = ({
  resource,
  addToCompare,
  addToWishlist,
  quickView,
}: IResourceDetails) => {
  const handleCompare = (resource) => {
    addToCompare(resource);
    toast.success('Add to Compare !');
  };

  const handleWishlist = (resource) => {
    addToWishlist(resource);
    toast.success('Add to Saved !');
  };

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
                      <div className="product-image-slider">
                        <ThumbSlider resource={resource} />
                      </div>
                    </div>

                    {/*<ShareIcons />*/}
                  </div>

                  <div className={'col-md-6 col-sm-12 col-xs-12'}>
                    <div className="detail-info">
                      <h2 className="title-detail">{resource.title}</h2>
                      <div className="product-detail-rating">
                        <div className="pro-details-brand">
                          <span>
                            Category:&nbsp;&nbsp;
                            <span className="badge bg-secondary">{resource.categoryLabel}</span>
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
                            <i className="fi-rs-world mr-5"></i>
                            Free or Open Source
                          </li>
                          {resource.license && (
                            <li className="mb-10">
                              <i className="fi-rs-crown mr-5"></i>
                              {resource.license}
                            </li>
                          )}
                          <li>
                            <i className="fi-rs-pencil mr-5"></i>
                            See something wrong? <Link href={'/contact'}>Let us know</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="bt-1 border-color-1 mt-30 mb-30"></div>
                      {resource.url && (
                        <div className="detail-extralink">
                          <a
                            className="button button-add-to-cart"
                            href={resource.url}
                            target={'_blank'}
                            rel={'noopener nofollow noreferrer'}
                          >
                            Learn More
                          </a>
                          {/*<a*/}
                          {/*  aria-label="Add To Saved"*/}
                          {/*  className="action-btn hover-up resource-extra-link"*/}
                          {/*  onClick={(e) => handleWishlist(resource)}*/}
                          {/*>*/}
                          {/*  <i className="fi-rs-heart"></i>*/}
                          {/*</a>*/}
                          {/*<a*/}
                          {/*  aria-label="Compare"*/}
                          {/*  className="action-btn hover-up resource-extra-link"*/}
                          {/*  onClick={(e) => handleCompare(resource)}*/}
                          {/*>*/}
                          {/*  <i className="fi-rs-shuffle"></i>*/}
                          {/*</a>*/}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {quickView ? null : (
                  <>
                    <ResourceTab />
                    <div className="row mt-60">
                      <div className="col-12">
                        <h3 className="section-title style-1 mb-30">Related Resources</h3>
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
                        <h4 className="mb-15 mt-40">Know of a Resource</h4>
                        <h2 className="fw-600 mb-20">
                          Let us Know <br />
                          Request to add a resource
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
};

export default connect(mapStateToProps, mapDispatchToProps)(ResourceDetails);
