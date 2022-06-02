import SingleProduct from '../ecommerce/SingleProduct';

export interface IFeaturedTab {
  products?: any[];
}

const FeaturedTab = ({ products }: IFeaturedTab) => {
  const showItem = 8;
  return (
    <>
      {products.slice(0, showItem).map((product, i) => (
        <div className='col-lg-3 col-md-4 col-12 col-sm-6' key={i}>
          <SingleProduct product={product} />
        </div>
      ))}
    </>
  );
};

export default FeaturedTab;
