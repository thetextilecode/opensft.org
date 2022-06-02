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
import React from 'react';
import { postFilePaths, POSTS_PATH } from '../lib/mdxUtils';
import { IBlogPost, IMetaProps } from '../../types';
import Layout from '../components/layout/Layout';
import { blogConfig, siteConfig } from '../../opensft.config';
import BlogSingle from '../components/elements/BlogSingle';
import BlogSidebar from '../components/elements/BlogSidebar';
import ShareIcons from '../components/elements/ShareIcons';
import CommentsArea from '../components/elements/CommentsArea';
import CommentsForm from '../components/elements/CommentsForm';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  Head,
  Image,
  Link,
};

type ArticlePageProps = {
  post: IBlogPost;
  posts: IBlogPost[];
  source: MDXRemoteSerializeResult;
};

const ArticlePage = ({ post, posts, source }: ArticlePageProps): JSX.Element => {
  const customMeta: IMetaProps = {
    title: `${post.title} | ${siteConfig.title}`,
    description: post.description,
    image: `${post.image}`,
    date: post.date,
    type: 'article',
  };
  return (
    <Layout customMeta={customMeta} parent='Home' sub='Blog' subChild='Blog Details'>
      <section className='mt-50 mb-50'>
        <div className='container custom'>
          <div className='row'>
            <div className='col-lg-9 m-auto'>
              <article>
                <div className='single-page pl-30'>
                  <div className='single-header style-2'>
                    <h1 className='mb-30'>
                      {post.title}
                    </h1>
                    <div className='single-header-meta'>
                      <div className='entry-meta meta-1 font-xs mt-15 mb-15'>
                        <span className='post-by'>
                          By <Link href='/#'>{blogConfig.author}</Link>
                        </span>
                        <span className='post-on has-dot'>
                          {format(parseISO(post.date), 'MMMM dd, yyyy')}
                        </span>
                        <span className='time-reading has-dot'>
                          8 mins read
                        </span>
                        {/*<span className='hit-count  has-dot'>29k Views</span>*/}
                      </div>
                      <ShareIcons />
                    </div>
                  </div>
                  {post.image && (
                    <figure className='single-thumbnail'>
                      <div style={{ width: '100%' }}>
                        <Image src={post.image}
                               alt={post?.imageAlt}
                               layout={post.imageOriginalWidth ? 'responsive' : 'fill'}
                               width={post?.imageOriginalWidth}
                               height={post?.imageOriginalHeight} />
                      </div>
                    </figure>
                  )}
                  <div className='single-content'>
                    <MDXRemote {...source} components={components} />
                  </div>

                  <div
                    className='entry-bottom mt-50 mb-30 wow fadeIn  animated'
                    style={{ 'visibility': 'visible', 'animationName': 'fadeIn' }}
                  >
                    <div className='tags w-50 w-sm-100'>
                      <Link href='/blog-category-big'>
                        <a
                          rel='tag'
                          className='hover-up btn btn-sm btn-rounded mr-10'
                        >
                          deer
                        </a>
                      </Link>
                      <Link href='/blog-category-big'>
                        <a
                          rel='tag'
                          className='hover-up btn btn-sm btn-rounded mr-10'
                        >
                          nature
                        </a>
                      </Link>
                    </div>
                    <ShareIcons />
                  </div>
                  
                  {blogConfig.showComments && (
                    <>
                      <CommentsArea />
                      <CommentsForm />
                    </>
                  )}

                </div>
              </article>
            </div>
            <div className='col-lg-3 primary-sidebar sticky-sidebar'>
              <BlogSidebar posts={posts} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    // mdxOptions: {
    // remarkPlugins: [require('remark-code-titles')],
    // rehypePlugins: [mdxPrism, rehypeSlug, rehypeAutolinkHeadings],
    // },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      post: data,
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
