import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateProductRating } from "../../redux/action/productFiltersAction";

const Rating = ({ updateProductRating }) => {
    const ratings = [
        { value: "" },
        { value: "5" },
        { value: "4" },
        { value: "3" },
        { value: "2 " },
        { value: "1" },
    ];

    const [productRating, setProductRating] = useState("");
    const [active, setActive] = useState(0);
    useEffect(() => {
        const filters = {
            rating: productRating,
        };
        updateProductRating(filters);
    }, [productRating]);

    const handleClick = (i, target) => {
        setProductRating(target);
        setActive(active == i ? 0 : i);
    };

    return (
        <>
            {ratings.map((rate, i) => (
                <>
                    <div
                        class={active == i && "active"}
                        onClick={() => handleClick(i, rate.value)}
                    >
                        <a>
                            {i == 0 ? (
                                "All"
                            ) : (
                                <>
                                    <div class="product-rate-cover">
                                        <div class="product-rate d-inline-block">
                                            {rate.value == 1 && (
                                                <div
                                                    class="product-rating"
                                                    style={{ width: "20%" }}
                                                ></div>
                                            )}
                                            {rate.value == 2 && (
                                                <div
                                                    class="product-rating"
                                                    style={{ width: "40%" }}
                                                ></div>
                                            )}
                                            {rate.value == 3 && (
                                                <div
                                                    class="product-rating"
                                                    style={{ width: "60%" }}
                                                ></div>
                                            )}
                                            {rate.value == 4 && (
                                                <div
                                                    class="product-rating"
                                                    style={{ width: "80%" }}
                                                ></div>
                                            )}
                                            {rate.value == 5 && (
                                                <div
                                                    class="product-rating"
                                                    style={{ width: "100%" }}
                                                ></div>
                                            )}
                                        </div>
                                    </div>
                                </>
                            )}
                        </a>
                    </div>
                </>
            ))}
        </>
    );
};

const mapDidpatchToProps = {
    updateProductRating,
};

export default connect(null, mapDidpatchToProps)(Rating);
