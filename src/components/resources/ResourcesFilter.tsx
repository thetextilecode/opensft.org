import CategoryFilter from './CategoryFilter';
import BrandFilter from './BrandFilter';
import PriceRange from './PriceRange';
import Tags from './Tags';
import ColorFilter from './ColorFilter';
import SizeFilter from './SizeFilter';
import Rating from './Rating';

const ResourcesFilter = () => {
  return (
    <div className="shop-product-filter-header">
      <div className="row">
        <div className="col-lg-2 col-md-4 mb-lg-0 mb-md-5 mb-sm-5">
          <h5 className="mb-20">Categories</h5>
          <CategoryFilter />
        </div>
        <div className="col-lg-2 col-md-4 mb-lg-0 mb-md-5 mb-sm-5">
          <h5 className="mb-20">Manufacturers</h5>
          <BrandFilter />
        </div>
        <div className="col-lg-2 col-md-4 mb-lg-0 mb-md-5 mb-sm-5">
          <h5 className="mb-20">Price range</h5>
          <PriceRange />
        </div>
        <div className="col-lg-2 col-md-4 mb-lg-0 mb-md-5 mb-sm-5">
          <h5 className="mb-20">By Tags</h5>
          <Tags />
        </div>
        <div className="col-lg-2 col-md-4 mb-lg-0 mb-md-5 mb-sm-5">
          <h5 className="mb-20">By Color</h5>
          <ColorFilter />
          <h5 className="mb-15 mt-20">By Size</h5>
          <SizeFilter />
        </div>
        <div className="col-lg-2 col-md-4 mb-lg-0 mb-md-5 mb-sm-5">
          <h5 className="mb-20">By Review</h5>
          <Rating />
        </div>
      </div>
    </div>
  );
};

export default ResourcesFilter;
