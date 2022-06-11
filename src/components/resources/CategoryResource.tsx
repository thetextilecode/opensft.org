import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { updateResourceCategory } from '../../redux/action/resourceFiltersAction';

export interface ICategoryResource {
  updateResourceCategory?: any;
}

const CategoryResource = ({ updateResourceCategory }: ICategoryResource) => {
  const router = useRouter();

  const removeSearchTerm = () => {
    router.push({
      pathname: '/resources',
    });
  };

  const selectCategory = (e, category) => {
    e.preventDefault();
    removeSearchTerm();
    updateResourceCategory(category);
  };
  return (
    <>
      <ul className="categories">
        <li onClick={(e) => selectCategory(e, '')}>
          <a>All</a>
        </li>
        <li onClick={(e) => selectCategory(e, 'analytics')}>
          <a>Analytics</a>
        </li>
        <li onClick={(e) => selectCategory(e, 'artificial-intelligence')}>
          <a>Artificial Intelligence (AI)</a>
        </li>
        <li onClick={(e) => selectCategory(e, 'customer-relations')}>
          <a>Customer Relations</a>
        </li>
        <li onClick={(e) => selectCategory(e, 'ecommerce')}>
          <a>Ecommerce</a>
        </li>
        <li onClick={(e) => selectCategory(e, 'integration-automation')}>
          <a>Integration & Automation</a>
        </li>
        <li onClick={(e) => selectCategory(e, 'iot')}>
          <a>IoT</a>
        </li>
        <li onClick={(e) => selectCategory(e, 'product-lifecycle')}>
          <a>Product Lifecycle</a>
        </li>
        <li onClick={(e) => selectCategory(e, 'resource-planning')}>
          <a>Resource Planning</a>
        </li>
        <li onClick={(e) => selectCategory(e, 'supply-chain')}>
          <a>Supply Chain</a>
        </li>
      </ul>
    </>
  );
};

export default connect(null, { updateResourceCategory })(CategoryResource);
