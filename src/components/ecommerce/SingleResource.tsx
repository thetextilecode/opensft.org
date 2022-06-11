import Link from 'next/link';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { addToCart } from '../../redux/action/cart';
import { addToCompare } from '../../redux/action/compareAction';
import { openQuickView } from '../../redux/action/quickViewAction';
import { addToWishlist } from '../../redux/action/wishlistAction';
import Loader from '../elements/Loader';
import Image from 'next/image';
import { IResource } from '../../../types';

export interface ISingleResource {
  addToCart?: any;
  addToCompare?: any;
  addToWishlist?: any;
  openQuickView?: any;
  resource: IResource;
}

const SingleResource = ({
  resource,
  addToCart,
  addToCompare,
  addToWishlist,
  openQuickView,
}: ISingleResource) => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    setLoading(true);
    setTimeout(() => {
      if (isMounted) {
        setLoading(false);
      }
    }, 2000);

    return () => {
      isMounted = false;
    };
  }, []);

  const handleCart = (resource: IResource) => {
    addToCart(resource);
    toast.success('Add to Cart !');
  };

  const handleCompare = (resource: IResource) => {
    addToCompare(resource);
    toast.success('Add to Compare !');
  };

  const handleWishlist = (resource: IResource) => {
    addToWishlist(resource);
    toast.success('Add to Saved !');
  };

  return (
    <>
      {!loading ? (
        <div className="product-cart-wrap mb-30">
          <div className="product-img-action-wrap">
            <div className="product-img product-img-zoom">
              <Link href="/resources/[slug]" as={`/resources/${resource.slug}`}>
                <a>
                  {/*<div style={{ width: '100%' }}>*/}
                  <Image
                    className="default-img"
                    src={resource.images[0].img}
                    alt=""
                    layout={'fill'}
                    // layout={'responsive'}
                    // width={resource.images[0].width}
                    // height={resource.images[0].height}
                  />
                  {/*</div>*/}

                  <div style={{ width: '100%' }}>
                    <Image
                      className="hover-img"
                      src={resource.images[1].img}
                      alt=""
                      // layout={'fill'}
                      layout={'responsive'}
                      width={resource.images[1].width}
                      height={resource.images[1].height}
                    />
                  </div>
                </a>
              </Link>
            </div>
            <div className="product-action-1">
              <a
                aria-label="Quick view"
                className="action-btn hover-up"
                data-bs-toggle="modal"
                onClick={(e) => openQuickView(resource)}
              >
                <i className="fi-rs-eye"></i>
              </a>
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

            <div className="product-badges product-badges-position product-badges-mrg">
              {resource.trending && <span className="hot">Hot</span>}
              {resource.created && <span className="new">New</span>}
              {resource.totalSell > 100 && <span className="best">Best Sell</span>}
              {resource.discount.isActive && <span className="sale">Sale</span>}
              {resource.discount.percentage >= 5 && (
                <span className="hot">{resource.discount.percentage}%</span>
              )}
            </div>
          </div>
          <div className="product-content-wrap">
            <div className="product-category">
              <Link href="/index">
                <a>{resource.brand}</a>
              </Link>
            </div>
            <h2>
              <Link href="/resources/[slug]" as={`/resources/${resource.slug}`}>
                <a>{resource.title}</a>
              </Link>
            </h2>
            <div className="rating-result" title="90%">
              <span>
                <span>{resource.ratingScore}%</span>
              </span>
            </div>
            <div className="product-price">
              <span>${resource.price} </span>
              <span className="old-price">{resource.oldPrice && `$ ${resource.oldPrice}`}</span>
            </div>
            <div className="product-action-1 show">
              <a
                aria-label="Add To Cart"
                className="action-btn hover-up"
                onClick={(e) => handleCart(resource)}
              >
                <i className="fi-rs-shopping-bag-add"></i>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

const mapDispatchToProps = {
  addToCart,
  addToCompare,
  addToWishlist,
  openQuickView,
};

export default connect(null, mapDispatchToProps)(SingleResource);
