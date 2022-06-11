import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { updateResourceFilters } from '../../redux/action/resourceFiltersAction';

export interface IColorFilter {
  updateResourceFilters?: any;
}

const ColorFilter = ({ updateResourceFilters }: IColorFilter) => {
  const colors: { value: string }[] = [
    { value: '' },
    { value: 'red' },
    { value: 'yellow' },
    { value: 'white' },
    { value: 'orange' },
    { value: 'cyan' },
    { value: 'green' },
    { value: 'purple' },
  ];

  const [selectedColor, setColor] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const filters = {
      color: selectedColor,
    };

    updateResourceFilters(filters);
  }, [selectedColor]);

  const handleClick = (i, target) => {
    setColor(target);
    setActive(active == i ? 0 : i);
  };

  return (
    <>
      <ul className="list-filter color-filter">
        {colors.map((tag, i) => (
          <li className={active == i && 'active'} onClick={() => handleClick(i, tag.value)} key={i}>
            <a>{i == 0 ? 'All' : <span className={`product-color-${tag.value}`}></span>}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

const mapDidpatchToProps = {
  updateResourceFilters,
};

export default connect(null, mapDidpatchToProps)(ColorFilter);
