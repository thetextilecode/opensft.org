import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import InputRange from "react-input-range";
import { connect } from "react-redux";
import { updateProductFilters } from "../../redux/action/productFiltersAction";

const PriceRangeSlider = ({ updateProductFilters }) => {
    
    const Router = useRouter();
    const searchTerm = Router.query.search;

    const [price, setPrice] = useState({ value: { min: 0, max: 500 } });

    useEffect(() => {
        const filters = {
            price: price.value,
        };

        updateProductFilters(filters);
    }, [price, searchTerm]);

    return (
        <div className="evara_price_slider_amount">
            <InputRange
                formatLabel={(value) => `$${value}`}
                maxValue={500}
                minValue={0}
                value={price.value}
                onChange={(value) => setPrice({ value })}
            />
        </div>
    );
};

const mapStateToProps = (state) => ({
    products: state.products.items,
});

const mapDidpatchToProps = {
    updateProductFilters,
};

export default connect(mapStateToProps, mapDidpatchToProps)(PriceRangeSlider);
