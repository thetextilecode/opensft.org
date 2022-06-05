
import ProductDetails from '../../components/ecommerce/ProductDetails';
import Layout from '../../components/layout/Layout';
import { server } from '../../../opensft.config';
import { findProductIndex } from '../../lib/util';
import { GetStaticProps } from 'next';

export interface IProductId {
  newsletterId: string;
  newsletterUser: string;
  product: any;
}

const ProductId = ({ newsletterId, newsletterUser, product }: IProductId) => {
  return (
    <Layout parent='Home' sub='Shop' subChild={product.title} newsletterId={newsletterId} newsletterUser={newsletterUser}>
      <div className='container'>
        <ProductDetails product={product} />
      </div>
    </Layout>
  );
};


ProductId.getInitialProps = async (params) => {
  const request = await fetch(`${server}/static/product.json`);
  const data = await request.json();

  const index = findProductIndex(data, params.query.slug);
  // console.log(params);

  return { product: data[index] };
};

export default ProductId;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { newsletterId: process.env.REACT_APP_MAILCHIMP_ID, newsletterUser: process.env.REACT_APP_MAILCHIMP_U },
  };
};


