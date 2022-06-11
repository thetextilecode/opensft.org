import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { addToCart } from '../../redux/action/cart';
import { addToCompare } from '../../redux/action/compareAction';
import { openQuickView } from '../../redux/action/quickViewAction';
import { addToWishlist } from '../../redux/action/wishlistAction';
import Loader from '../elements/Loader';
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

  const handleCompare = (resource: IResource) => {
    addToCompare(resource);
    toast.success('Added to Comparisons');
  };

  const handleWishlist = (resource: IResource) => {
    addToWishlist(resource);
    toast.success('Added to Saved');
  };

  return (
    <>
      {!loading ? (
        <div className="product-cart-wrap mb-30">
          <div className="product-content-wrap">
            <br />
            <h2>
              <a onClick={(e) => openQuickView(resource)}>{resource.title}</a>
            </h2>
            <div className="rating-result" title="90%">
              <span>
                <span>{resource.ratingScore}%</span>
              </span>
            </div>
            <div className="product-price">
              <p>{resource.categoryLabel}</p>
            </div>
            <div className="product-action-1 show">
              <a
                aria-label="View"
                className="action-btn hover-up"
                onClick={(e) => openQuickView(resource)}
              >
                <i className="fi-rs-eye"></i>
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
