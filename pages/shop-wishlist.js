import { connect } from "react-redux";
import { toast } from "react-toastify";
import Layout from "../components/layout/Layout";
import { addToCart } from "../redux/action/cart";
import {
    clearWishlist,
    closeWishlistModal,
    deleteFromWishlist
} from "../redux/action/wishlistAction";

const Wishlist = ({
    wishlist,
    clearWishlist,
    closeWishlistModal,
    deleteFromWishlist,
    addToCart,
}) => {

    const handleCart = (product) => {
        addToCart(product);
        toast.success("Add to Cart !");
    };
    return (
        <>
            <Layout parent="Home" sub="Shop" subChild="Wishlist">
                <section className="mt-50 mb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {wishlist.items.length > 0 ? (
                                    <div className="table-responsive">
                                        <table className="table shopping-summery text-center">
                                            <thead>
                                                <tr className="main-heading">
                                                    <th scope="col" colspan="2">
                                                        Product
                                                    </th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">
                                                        Stock Status
                                                    </th>
                                                    <th scope="col">Action</th>
                                                    <th scope="col">Remove</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {wishlist.items.map(
                                                    (product) => (
                                                        <tr>
                                                            <td className="image product-thumbnail">
                                                                <img
                                                                    src={
                                                                        product
                                                                            .images[0]
                                                                            .img
                                                                    }
                                                                    alt=""
                                                                    className="img-fluid"
                                                                    width="70"
                                                                />
                                                            </td>

                                                            <td className="product-des product-name">
                                                                <h5 className="product-name">
                                                                    <a>
                                                                        {
                                                                            product.title
                                                                        }
                                                                    </a>
                                                                </h5>
                                                                <p className="font-xs">
                                                                    Maboriosam
                                                                    in a tonto
                                                                    nesciung
                                                                    eget
                                                                    <br />
                                                                    distingy
                                                                    magndapibus.
                                                                </p>
                                                            </td>
                                                            <td
                                                                className="price"
                                                                data-title="Price"
                                                            >
                                                                <span>
                                                                    $
                                                                    {
                                                                        product.price
                                                                    }
                                                                </span>
                                                            </td>
                                                            <td
                                                                className="text-center"
                                                                data-title="Stock"
                                                            >
                                                                {product.stock ===
                                                                0 ? (
                                                                    <span className="text-danger font-weight-bold">
                                                                        Out of
                                                                        stock
                                                                    </span>
                                                                ) : (
                                                                    <span className="color3 font-weight-bold">
                                                                        In Stock
                                                                    </span>
                                                                )}
                                                            </td>
                                                            <td
                                                                className="text-right"
                                                                data-title="Cart"
                                                            >
                                                                {product.stock ===
                                                                0 ? (
                                                                    <button className="btn btn-sm btn-secondary">
                                                                        <i className="fi-rs-headset mr-5"></i>
                                                                        Contact
                                                                        Us
                                                                    </button>
                                                                ) : (
                                                                    <button
                                                                        className="btn btn-sm"
                                                                        onClick={(
                                                                            e
                                                                        ) =>
                                                                            handleCart(
                                                                                product
                                                                            )
                                                                        }
                                                                    >
                                                                        <i className="fi-rs-shopping-bag mr-5"></i>
                                                                        Add to
                                                                        cart
                                                                    </button>
                                                                )}
                                                            </td>
                                                            <td
                                                                className="action"
                                                                data-title="Remove"
                                                            >
                                                                <a
                                                                    onClick={(
                                                                        e
                                                                    ) =>
                                                                        deleteFromWishlist(
                                                                            product.id
                                                                        )
                                                                    }
                                                                >
                                                                    <i className="fi-rs-trash"></i>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                            </tbody>
                                        </table>
                                        <div className="text-right">
                                            <span
                                                className="clear-btn"
                                                onClick={clearWishlist}
                                            >
                                                Clear All
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    <h4 className="mb-0">No Products</h4>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
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

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
