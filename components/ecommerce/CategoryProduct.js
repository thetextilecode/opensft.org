import { useRouter } from "next/router";
import { connect } from "react-redux";
import { updateProductCategory } from "../../redux/action/productFiltersAction";

const CategoryProduct = ({ updateProductCategory }) => {
    const router = useRouter();

    const removeSearchTerm = () => {
        router.push({
            pathname: "/products",
        });
    };

    const selectCategory = (e, category) => {
        e.preventDefault();
        removeSearchTerm();
        updateProductCategory(category);
        // router.push('/')
    };
    return (
        <>
            <ul className="categories">
                <li onClick={(e) => selectCategory(e, "")}>
                    <a>All</a>
                </li>
                <li onClick={(e) => selectCategory(e, "jeans")}>
                    <a>Jeans</a>
                </li>
                <li onClick={(e) => selectCategory(e, "shoe")}>
                    <a>Shoe</a>
                </li>
                <li onClick={(e) => selectCategory(e, "jacket")}>
                    <a>Jacket</a>
                </li>
                <li onClick={(e) => selectCategory(e, "trousers")}>
                    <a>Trousers</a>
                </li>
                <li onClick={(e) => selectCategory(e, "accessories")}>
                    <a>Accessories</a>
                </li>
            </ul>
        </>
    );
};

export default connect(null, { updateProductCategory })(CategoryProduct);
