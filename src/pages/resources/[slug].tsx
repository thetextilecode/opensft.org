import ResourceDetails from '../../components/ecommerce/ResourceDetails';
import Layout from '../../components/layout/Layout';
import { server } from '../../../opensft.config';
import { findResourceIndex } from '../../lib/util';
// import { GetStaticProps } from 'next';

export interface IResourceId {
  newsletterId: string;
  newsletterUser: string;
  resource: any;
}

const ResourceId = (props: IResourceId) => {
  return (
    <Layout
      parent="Home"
      sub="Shop"
      subChild={props.resource.title}
      newsletterId={props.newsletterId}
      newsletterUser={props.newsletterUser}
    >
      <div className="container">
        <ResourceDetails resource={props.resource} />
      </div>
    </Layout>
  );
};

export async function getServerSideProps(params) {
  const request = await fetch(`${server}/static/resource.json`);
  const data = await request.json();

  const index = findResourceIndex(data, params.query.slug);
  // console.log(params);

  return {
    props: {
      newsletterId: process.env.REACT_APP_MAILCHIMP_ID,
      newsletterUser: process.env.REACT_APP_MAILCHIMP_U,
      resource: data[index],
    },
  };
}

// ResourceId.getInitialProps = async (params) => {
//   const request = await fetch(`${server}/static/resource.json`);
//   const data = await request.json();
//
//   const index = findResourceIndex(data, params.query.slug);
//   // console.log(params);
//
//   return { resource: data[index] };
// };

export default ResourceId;

// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: {
//
//     },
//   };
// };
