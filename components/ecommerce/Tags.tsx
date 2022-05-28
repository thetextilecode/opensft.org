import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateProductFilters } from "../../redux/action/productFiltersAction";

const Tags = ({ updateProductFilters }) => {
    const tags = [
        { value: "" },
        { value: "women" },
        { value: "dress" },
        { value: "shoe" },
    ];
    const [selectedTags, setTags] = useState([]);
    const [active, setActive] = useState(0);
    useEffect(() => {
        const filters = {
            tags: selectedTags, //
        };

        updateProductFilters(filters);
    }, [selectedTags]);

    const handleClick = (i, target) => {
        setTags(target);
        setActive(active == i ? 0 : i);
    };
    return (
        <>
            <ul class="categor-list">
                {tags.map((tag, i) => (
                    <li onClick={() => handleClick(i, tag.value)}>
                        <a
                            class={
                                active == i
                                    ? "cat-item text-brand"
                                    : "cat-item text-muted"
                            }
                        >
                            {i == 0 ? "All" : `${tag.value}`}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
};

const mapDidpatchToProps = {
    updateProductFilters,
};

export default connect(null, mapDidpatchToProps)(Tags);
