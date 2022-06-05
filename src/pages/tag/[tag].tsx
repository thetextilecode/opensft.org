import { GetStaticProps } from 'next';
import { IBlogPost, ITag } from '../../../types';
import Layout from '../../components/layout/Layout';
import { getAllPosts, getAllTags, getTagByValue } from '../../lib/api';
import category from '../../components/sliders/Category';
import BlogList from '../../components/elements/BlogList';
import { blogConfig } from '../../../opensft.config';

type TagPageProps = {
  newsletterUser: string;
  newsletterId: string;
  posts: IBlogPost[];
  tag: ITag;
};

const TagPage = ({ newsletterUser, newsletterId, posts, tag }: TagPageProps): JSX.Element => {
  return (
    <Layout parent='Home' sub='Tags' subChild={tag.label} newsletterUser={newsletterUser} newsletterId={newsletterId}>
      <section className='mt-50 mb-50'>
        <div className='container custom'>
          <div className='row'>
            <div className={'col-lg-12'}>
              <div className='single-header mb-50'>
                <h1 className='font-xxl text-brand'>{tag.label}</h1>
                <div className='entry-meta meta-1 font-xs mt-15 mb-15'>
                  <span
                    className='post-on'>{posts.length > 0 ? `${posts.length} Article${posts.length > 1 ? 's' : ''}` : 'No articles'}</span>
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
    'tags',
    'title',
  ], params.tag.toString());

  const tag = getTagByValue(params.tag.toString());

  return {
    props: {
      newsletterId: process.env.REACT_APP_MAILCHIMP_ID,
      newsletterUser: process.env.REACT_APP_MAILCHIMP_U,
      posts,
      tag,
    },
  };
};


export async function getStaticPaths() {
  const tags = getAllTags(['value']);

  // Get the paths we want to pre-render based on posts
  const tempPaths = [];

  tags.map((tagData) => {
    tempPaths.push({ params: { tag: tagData.value } });
  });

  return {
    paths: tempPaths,
    fallback: false,
  };
}

export default TagPage;
