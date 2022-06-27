import BlogList from '../components/elements/BlogList';
import BlogSidebar from '../components/elements/BlogSidebar';
import Layout from '../components/layout/Layout';
import { GetStaticProps } from 'next';
import { getAllCategories, getAllPosts, getAllTags } from '../lib/api';
import { IBlogPost, ICategory, IConfig, ITag } from '../../types';

export interface IPageBlogList {
  categories: ICategory[];
  config: IConfig;
  newsletterId: string;
  newsletterUser: string;
  posts: IBlogPost[];
  tags: ITag[];
}

function PageBlogList({
  categories,
  config,
  newsletterId,
  newsletterUser,
  posts,
  tags,
}: IPageBlogList) {
  return (
    <Layout
      parent="Home"
      sub="Blog"
      newsletterUser={newsletterUser}
      newsletterId={newsletterId}
      {...config}
    >
      <section className="mt-50 mb-50">
        <div className="container custom">
          <div className="row">
            <div className="col-lg-9">
              <div className="single-header mb-50">
                <h1 className="font-xxl text-brand">Latest Articles</h1>
                {/*<div className='entry-meta meta-1 font-xs mt-15 mb-15'>*/}
                {/*  <span className='post-by'>32 Sub Categories</span>*/}
                {/*  <span className='post-on has-dot'>1020k Article</span>*/}
                {/*  <span className='time-reading has-dot'>480 Authors</span>*/}
                {/*  <span className='hit-count  has-dot'>29M Views</span>*/}
                {/*</div>*/}
              </div>
              <div className="loop-grid loop-list pr-30">
                <BlogList posts={posts} show={config.configBlog.postsPerPage} />
              </div>
            </div>
            <div className="col-lg-3 primary-sidebar sticky-sidebar">
              <BlogSidebar
                categories={categories}
                configSidebar={config.configSidebar}
                show={config.configBlog.postsPerSidebar}
                tags={tags}
                trendingPosts={posts.filter((post) => post.trending)}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default PageBlogList;

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts([
    'category',
    'date',
    'description',
    'draft',
    'image',
    'imageAlt',
    'imageOriginalWidth',
    'imageOriginalHeight',
    'lastUpdated',
    'readTime',
    'slug',
    'tags',
    'title',
    'trending',
  ]);

  const categories = getAllCategories();

  const tags = getAllTags(['label', 'value']);

  return {
    props: {
      categories,
      posts,
      tags,
    },
  };
};
