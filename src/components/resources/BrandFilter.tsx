import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { updateResourceFilters } from '../../redux/action/resourceFiltersAction';

const BrandFilter = ({ updateResourceFilters }) => {
  const brands = [{ value: '' }, { value: 'armani' }, { value: 'adidas' }, { value: 'helix' }];

  const [selectedBrands, setBrands] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const filters = {
      brand: selectedBrands,
    };

    updateResourceFilters(filters);
  }, [selectedBrands]);

  const handleClick = (i, target) => {
    setBrands(target);
    setActive(active == i ? 0 : i);
  };

  return (
    <ul className="category-list">
      {brands.map((tag, i) => (
        <li onClick={() => handleClick(i, tag.value)} key={i}>
          <a className={active == i ? 'cat-item text-brand' : 'cat-item text-muted'}>
            {i == 0 ? 'All' : `${tag.value}`}
          </a>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  resources: state.resources.items,
});

const mapDidpatchToProps = {
  updateResourceFilters,
};

export default connect(mapStateToProps, mapDidpatchToProps)(BrandFilter);
