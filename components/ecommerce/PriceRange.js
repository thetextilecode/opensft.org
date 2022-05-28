import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateProductFilters } from "../../redux/action/productFiltersAction";
import ProductId from "./../../pages/products/[slug]";

const PriceRange = ({ updateProductFilters }) => {

    const Router = useRouter();
    const searchTerm = Router.query.search;

    const [price, setPrice] = useState({ value: { min: 0, max: 500 } });
    const [active, setActive] = useState(0);

    useEffect(() => {
        const filters = {
            price: price.value,
        };

        updateProductFilters(filters);
    }, [price, searchTerm]);

    const data = [
        {
            min: 0,
            max: 500,
        },
        {
            min: 50,
            max: 100,
        },
        {
            min: 100,
            max: 150,
        },
        {
            min: 150,
            max: 200,
        },
        {
            min: 200,
            max: 250,
        },
        {
            min: 250,
            max: 300,
        },
        {
            min: 300,
            max: 350,
        },
        {
            min: 350,
            max: 400,
        },
    ];

    const handleClick = (i, min, max) => {
        setActive(active == i ? 0 : i);
        setPrice({ value: { min, max } });
    };

    return (
        <>
            <ul class="categor-list">
                {data.map((item, i) => (
                    <>
                        <li onClick={() => handleClick(i, item.min, item.max)}>
                            <a
                                class={
                                    active == i
                                        ? "cat-item text-brand"
                                        : "cat-item text-muted"
                                }
                            >
                                {i == 0
                                    ? "All"
                                    : `$${item.min}.00 - $${item.max}.00`}
                            </a>
                        </li>
                    </>
                ))}
            </ul>
        </>
    );
};

const mapStateToProps = (state) => ({
    products: state.products.items,
});

const mapDidpatchToProps = {
    updateProductFilters,
};

export default connect(mapStateToProps, mapDidpatchToProps)(PriceRange);
