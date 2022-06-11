import { connect } from 'react-redux';
import { updateProductCategory } from '../../redux/action/productFiltersAction';
import { useState } from 'react';

const CategoryFilter = ({ updateProductCategory }) => {
  const [active, setActive] = useState(0);

  const selectCategory = (i, category) => {
    // e.preventDefault();
    updateProductCategory(category);
    // router.push('/')
    setActive(active == i ? 0 : i);
  };

  const categories: { title: string }[] = [
    { title: '' },
    { title: 'analytics' },
    { title: 'customer-relations' },
    { title: 'ecommmerce' },
    { title: 'integration-automation' },
    { title: 'iot' },
    { title: 'product-lifecycle' },
    { title: 'resource-planning' },
    { title: 'supply-chain' },
  ];

  return (
    <ul className="category-list">
      {categories.map((item, i) => (
        <li onClick={() => selectCategory(i, item.title)} key={i}>
          <a className={active == i ? 'cat-item text-brand' : 'cat-item text-muted'}>
            {i == 0 ? 'All' : `${item.title}`}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default connect(null, { updateProductCategory })(CategoryFilter);
