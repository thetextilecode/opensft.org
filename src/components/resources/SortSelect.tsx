import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { updateResourceFilters } from '../../redux/action/resourceFiltersAction';

const SortSelect = ({ updateResourceFilters }) => {
  const Router = useRouter();
  const searchTerm = Router.query.search;

  const [featured, setFeatured] = useState('');

  useEffect(() => {
    const filters = {
      featured,
    };

    updateResourceFilters(filters);
  }, [searchTerm, featured]);

  const selectOption = (e) => {
    setFeatured(e.target.value);
  };

  return (
    <>
      <div className="sort-by-product-wrap">
        <div className="sort-by">
          <span>
            <i className="fi-rs-apps-sort"></i>
            Sort by:
          </span>
        </div>
        <div className="sort-by-dropdown-wrap custom-select">
          <select onChange={(e) => selectOption(e)}>
            <option value="">Defaults</option>
            <option value="featured">Featured</option>
            <option value="lowToHigh">Low To High</option>
            <option value="highToLow">High To Low</option>
          </select>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  resources: state.resources.items,
});

const mapDidpatchToProps = {
  updateResourceFilters,
};

export default connect(mapStateToProps, mapDidpatchToProps)(SortSelect);
