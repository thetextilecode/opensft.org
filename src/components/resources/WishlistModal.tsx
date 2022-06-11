import { connect } from 'react-redux';
import { Modal } from 'react-responsive-modal';
import { addToCart } from '../../redux/action/cart';
import { toast } from 'react-toastify';
import {
  clearWishlist,
  closeWishlistModal,
  deleteFromWishlist,
} from '../../redux/action/wishlistAction';
import Image from 'next/image';
import { IResource } from '../../../types';

export interface IWishlistModal {
  addToCart?: any;
  clearWishlist?: any;
  closeWishlistModal?: any;
  deleteFromWishlist?: any;
  wishlist?: any;
}

const WishlistModal = ({
  wishlist,
  clearWishlist,
  closeWishlistModal,
  deleteFromWishlist,
  addToCart,
}: IWishlistModal) => {
  const handleCart = (resource: IResource) => {
    addToCart(resource);
    toast.success('Add to Cart !');
  };

  return (
    <>
      <Modal
        open={!!wishlist.modal}
        onClose={closeWishlistModal}
        center={true}
        classNames={{ modal: 'full-modal' }}
      >
        {wishlist.items.length > 0 ? (
          <div className="table-responsive">
            <table className="table">
              <tbody>
                <tr>
                  {/* <td></td> */}
                  <td>
                    <strong>Name</strong>
                  </td>
                  <td>
                    <strong>Price</strong>
                  </td>
                  <td>
                    <strong>Quantity</strong>
                  </td>
                  <td>
                    <strong>Action</strong>
                  </td>
                </tr>

                {wishlist.items.map((resource, i: number) => (
                  <tr key={i}>
                    <td>
                      <Image
                        src={resource.image}
                        alt=""
                        className="img-fluid"
                        width="70"
                        layout={'fill'}
                      />
                    </td>

                    <td>${resource.price}</td>
                    <td style={{ width: '200px' }}>
                      <span onClick={(e) => handleCart(resource)}>Add To Cart</span>
                    </td>
                    <td style={{ width: '50px' }} className="text-center">
                      <span onClick={(e) => deleteFromWishlist(resource.id)}>
                        <button>Delete</button>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-right">
              <span className="clear-btn" onClick={clearWishlist}>
                Clear All
              </span>
            </div>
          </div>
        ) : (
          <h4 className="mb-0">No Resources</h4>
        )}
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  wishlist: state.wishlist,
});

const mapDispatchToProps = {
  closeWishlistModal,
  deleteFromWishlist,
  clearWishlist,
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(WishlistModal);
