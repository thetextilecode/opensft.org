import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { updateResourceFilters } from '../../redux/action/resourceFiltersAction';

export interface ITags {
  updateResourceFilters?: any;
}

const Tags = ({ updateResourceFilters }: ITags) => {
  const tags: { value: string }[] = [
    { value: '' },
    { value: 'women' },
    { value: 'dress' },
    { value: 'shoe' },
  ];

  const [selectedTags, setTags] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const filters = {
      tags: selectedTags, //
    };

    updateResourceFilters(filters);
  }, [selectedTags]);

  const handleClick = (i, target) => {
    setTags(target);
    setActive(active == i ? 0 : i);
  };

  return (
    <ul className="category-list">
      {tags.map((tag, i) => (
        <li onClick={() => handleClick(i, tag.value)} key={i}>
          <a className={active == i ? 'cat-item text-brand' : 'cat-item text-muted'}>
            {i == 0 ? 'All' : `${tag.value}`}
          </a>
        </li>
      ))}
    </ul>
  );
};

const mapDidpatchToProps = {
  updateResourceFilters,
};

export default connect(null, mapDidpatchToProps)(Tags);
