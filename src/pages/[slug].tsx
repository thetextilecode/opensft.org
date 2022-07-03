import { format, parseISO } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
// import mdxPrism from 'mdx-prism';
import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import { postFilePaths, POSTS_PATH } from '../lib/mdxUtils';
import { IBlogPost, ICategory, IConfig, IMetaProps, ITag } from '../../types';
import Layout from '../components/layout/Layout';
import BlogSidebar from '../components/elements/BlogSidebar';
import ShareIcons from '../components/elements/ShareIcons';
import CommentsArea from '../components/elements/CommentsArea';
import CommentsForm from '../components/elements/CommentsForm';
import DraftBadge from '../components/elements/DraftBadge';
import Tooltippy from '../components/elements/Tooltippy';
import { getAllCategories, getAllPosts, getAllTags } from '../lib/api';
import CustomLink from '../components/elements/CustomLink';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  Head,
  Image,
  Link,
  Tooltippy,
};

type ArticlePageProps = {
  baseUrl: string;
  categories: ICategory[];
  config: IConfig;
  isLocal: boolean;
  newsletterId: string;
  newsletterUser: string;
  post: IBlogPost;
  posts: IBlogPost[];
  source: MDXRemoteSerializeResult;
  tags: ITag[];
};

const ArticlePage = ({
  baseUrl,
  categories,
  config,
  isLocal,
  newsletterUser,
  newsletterId,
  post,
  posts,
  source,
  tags,
}: ArticlePageProps): JSX.Element => {
  const customMeta: IMetaProps = {
    title: `${post.title} | ${config.configSite.title}`,
    description: post.description,
    image: `${post.image}`,
    date: post.date,
    type: 'article',
  };

  return (
    <>
      {!isLocal && post.draft ? (
        <>This post has not yet been published. Please try again later.</>
      ) : (
        <Layout
          customMeta={customMeta}
          parent="Home"
          sub="Blog"
          subChild="Blog Details"
          newsletterUser={newsletterUser}
          newsletterId={newsletterId}
          {...config}
        >
          <section className="mt-50 mb-50">
            <div className="container custom">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <article>
                    <div className="single-page pl-30">
                      <div className="single-header style-2">
                        <div className="d-flex">
                          <h1>{post.title}</h1>
                          {post.draft && (
                            <div style={{ marginLeft: '20px' }}>
                              <h3>
                                <DraftBadge />
                              </h3>
                            </div>
                          )}
                        </div>

                        <div className="single-header-meta">
                          <div className="entry-meta meta-1 font-xs mt-15 mb-15">
                            <span className="post-by">
                              By <Link href="/#">{config.configBlog.author}</Link>
                            </span>
                            <span className="post-on has-dot">
                              Published on{'  '}
                              {format(parseISO(post.date), 'MMMM dd, yyyy')}
                            </span>
                            {post.readTime && (
                              <span className="time-reading has-dot">
                                {post.readTime} min{post.readTime < 0 ?? 's'} read
                              </span>
                            )}
                            {/*<span className='hit-count  has-dot'>29k Views</span>*/}
                          </div>
                          <ShareIcons url={`${baseUrl}/${post.slug}`} title={post.title} />
                        </div>
                      </div>
                      {post.image && (
                        <figure className="single-thumbnail">
                          <div style={{ width: '100%' }}>
                            <Image
                              src={post.image}
                              alt={post?.imageAlt}
                              layout={post.imageOriginalWidth ? 'responsive' : 'fill'}
                              width={post?.imageOriginalWidth}
                              height={post?.imageOriginalHeight}
                            />
                          </div>
                        </figure>
                      )}

                      <div className="single-content">
                        <MDXRemote {...source} components={components} />
                      </div>

                      <div
                        className="entry-bottom mt-50 mb-30 wow fadeIn  animated"
                        style={{ visibility: 'visible', animationName: 'fadeIn' }}
                      >
                        <div className="tags w-50 w-sm-100">
                          {post.tags &&
                            post.tags.map((tag, idx) => {
                              return (
                                <Link href={`/tag/${encodeURI(tag)}`} key={idx}>
                                  <a
                                    rel={'tag'}
                                    className={'hover-up btn btn-sm btn-rounded mr-10'}
                                  >
                                    {tag}
                                  </a>
                                </Link>
                              );
                            })}
                        </div>
                        <ShareIcons url={`${baseUrl}/${post.slug}`} title={post.title} />
                      </div>

                      {config.configBlog.showComments && (
                        <>
                          <CommentsArea />
                          <CommentsForm />
                        </>
                      )}
                    </div>
                  </article>
                </div>
                <div className="col-lg-3 primary-sidebar sticky-sidebar">
                  <BlogSidebar
                    categories={categories}
                    configSidebar={config.configSidebar}
                    show={config.configSidebar.postsPerSidebar}
                    tags={tags}
                    trendingPosts={posts.filter((post) => post.trending)}
                  />
                </div>
              </div>
            </div>
          </section>
        </Layout>
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);
  data.slug = params.slug;

  const mdxSource = await serialize(content, {
    scope: data,
  });

  const posts = getAllPosts([
    'draft',
    'image',
    'imageAlt',
    'imageOriginalWidth',
    'imageOriginalHeight',
    'slug',
    'title',
    'trending',
  ]);

  const categories = getAllCategories();

  const tags = getAllTags(['label', 'value']);

  return {
    props: {
      baseUrl: String(process.env.APP_BASE_URL),
      categories,
      isLocal: process.env.NODE_ENV === 'development',
      post: data,
      posts,
      source: mdxSource,
      tags,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default ArticlePage;
