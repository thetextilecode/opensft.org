import { GetStaticProps } from 'next';
import { IBlogPost, ICategory } from '../../../types';
import Layout from '../../components/layout/Layout';
import { getAllCategories, getAllPosts, getCategoryByValue } from '../../lib/api';
import category from '../../components/sliders/Category';
import BlogList from '../../components/elements/BlogList';
import { blogConfig } from '../../../opensft.config';

type CategoryPageProps = {
  category: ICategory;
  posts: IBlogPost[];
};

const CategoryPage = ({ category, posts }: CategoryPageProps): JSX.Element => {
  return (
    <Layout parent='Home' sub='Categories' subChild={category.label}>
      <section className='mt-50 mb-50'>
        <div className='container custom'>
          <div className='row'>
            <div className={'col-lg-12'}>
            <div className='single-header mb-50'>
              <h1 className='font-xxl text-brand'>{category.label}</h1>
              <div className='entry-meta meta-1 font-xs mt-15 mb-15'>
                <span className='post-on'>{posts.length > 0 ? `${posts.length} Article${posts.length > 1 ? 's' : ''}` : 'No articles'}</span>
              </div>
            </div>
            <div className='loop-grid loop-list pr-30'>
              <div className='row'>
              <BlogList posts={posts} show={blogConfig.postsPerPage} />
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = getAllPosts([
    'category',
    'date',
    'description',
    'draft',
    'image',
    'imageAlt',
    'imageOriginalWidth',
    'imageOriginalHeight',
    'readTime',
    'slug',
    'title',
  ], null, params.category[0]);

  const category = getCategoryByValue(params.category);

  return {
    props: { category, posts },
  };
};


export async function getStaticPaths() {
  const categories = getAllCategories();

  // Get the paths we want to pre-render based on posts
  const tempPaths = [];

  categories.map((category) => {
    tempPaths.push({ params: { category: category.value } });
  });

  return {
    paths: tempPaths,
    fallback: false,
  };
}

export default CategoryPage;
