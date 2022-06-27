import ProductDetails from '../../components/ecommerce/ProductDetails';
import Layout from '../../components/layout/Layout';
import { server } from '../../../opensft.config';
import { findProductIndex } from '../../lib/util';
import { IConfig } from '../../../types';

export interface IProductId {
  config: IConfig;
  newsletterId: string;
  newsletterUser: string;
  product: any;
}

const ProductId = (props: IProductId) => {
  return (
    <Layout
      parent="Home"
      sub="Shop"
      subChild={props.product.title}
      {...props.config}
      newsletterId={props.newsletterId}
      newsletterUser={props.newsletterUser}
    >
      <div className="container">
        <ProductDetails product={props.product} />
      </div>
    </Layout>
  );
};

export async function getServerSideProps(params) {
  const request = await fetch(`${server}/static/product.json`);
  const data = await request.json();

  const index = findProductIndex(data, params.query.slug);
  // console.log(params);

  return {
    props: {
      product: data[index],
    },
  };
}

// ProductId.getInitialProps = async (params) => {
//   const request = await fetch(`${server}/static/product.json`);
//   const data = await request.json();
//
//   const index = findProductIndex(data, params.query.slug);
//   // console.log(params);
//
//   return { product: data[index] };
// };

export default ProductId;

// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: {
//
//     },
//   };
// };
