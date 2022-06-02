import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateProductFilters } from "../../redux/action/productFiltersAction";
import CheckBox from "./Checkbox";

export interface IConditionFilter {
    updateProductFilters?: any
}

const ConditionFilter = ({ updateProductFilters }: IConditionFilter) => {
    // console.log(updateProductFilters);

    const [sizes, setSizeCheckbox] = useState<{value: string;}[]>([
        { value: "new" },
        { value: "refurbished " },
        { value: "used" },
    ]);

    const Router = useRouter();
    const searchTerm = Router.query.search;

    const [selectedSizes, setSizes] = useState([]);

    useEffect(() => {
        const filters = {
            condition: selectedSizes,
        };

        updateProductFilters(filters);
    }, [sizes, searchTerm]);

    const handleCheckBox = (
        event,
        filters,
        updateFilters,
        selectFilter,
        text
    ) => {
        const value = event.target.value;
        const updateSizes = filters;

        updateSizes.forEach((item) => {
            if (item.value === value) {
                if (item.checked) {
                    item.checked = false;
                    const newsize = text.filter((item) => item !== value);
                    selectFilter([...newsize]);
                } else {
                    item.checked = true;
                    const newsize = text.includes(value)
                        ? text
                        : [...text, value];
                    selectFilter([...newsize]);
                }
            }
        });

        updateFilters([...updateSizes]);
    };

    return (
        <>
            <div className="custome-checkbox">
                <CheckBox
                    heading="Select Size"
                    filters={sizes}
                    handleCheckBox={(e) => {
                        handleCheckBox(
                            e,
                            sizes,
                            setSizeCheckbox,
                            setSizes,
                            selectedSizes
                        );
                    }}
                />
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    products: state.products.items,
});

const mapDidpatchToProps = {
    updateProductFilters,
};

export default connect(mapStateToProps, mapDidpatchToProps)(ConditionFilter);
