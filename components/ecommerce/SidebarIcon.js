import { connect } from "react-redux";
import { openCart } from "../../redux/action/cart";
import { openCompareModal } from "../../redux/action/compareAction";
import { openWishlistModal } from "../../redux/action/wishlistAction";

const SideBarIcons = ({
    openCompareModal,
    openCart,
    totalCartItems,
    totalCompareItems,
    totalWishlistItems,
    openWishlistModal,
}) => {
    return (
        <>
            <div className="right-sidebar-popup-btn">
                <div className="popup-btn cart" onClick={openCart}>
                    {/* <i className="icofont-basket"></i>  */}
                    Cart
                    <span> {totalCartItems}</span>
                </div>
                <div className="popup-btn wishlist" onClick={openWishlistModal}>
                    {/* <i className="icofont-heart"></i> */}
                    Wishlist
                    <span> {totalWishlistItems}</span>
                </div>

                <div
                    className="popup-btn compare"
                    onClick={openCompareModal}
                    style={{ top: "60%" }}
                >
                    {/* <i className="icofont-binoculars"></i>  */}
                    compare
                    <span> {totalCompareItems}</span>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    totalCartItems: state.cart.length,
    totalCompareItems: state.compare.items.length,
    totalWishlistItems: state.wishlist.items.length,
});

const mapDispatchToProps = {
    openCompareModal,
    openWishlistModal,
    openCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBarIcons);
