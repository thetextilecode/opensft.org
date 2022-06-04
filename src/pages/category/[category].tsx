import { format, parseISO } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { IBlogPost, ICategory } from '../../../types';
import Layout from '../../components/layout/Layout';
import { getAllCategories, getAllPosts, getAllTags } from '../../lib/api';
import category from '../../components/sliders/Category';

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
            <div className='single-page pl-30'>
              <div className='single-header style-2'>
                <div className='d-flex'>
                  <h1>
                    {category.label}
                  </h1>
                </div>
              </div>
              <p>An image for the category.</p>
              <div className='single-content'>
                <p>A list of posts for this category.</p>
                <ul>
                  {posts.map((post, idx) => {
                    return (
                      <li key={idx}>{post.title}</li>
                    );
                  })}
                </ul>
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
    // 'lastUpdated',
    'readTime',
    'slug',
    // 'tags',
    'title',
  ]);

  const categoryPosts = posts.filter((post) => post.category === params.category);

  return {
    props: { category, posts: categoryPosts },
  };
};


export async function getStaticPaths() {
  const categories = getAllCategories();

  // const paths = categories.map((category: ICategory) => category.value).map((value) => ({ params: { category: value } }));

  const tempPaths = [];

  // Get the paths we want to pre-render based on posts
  // const paths = categories.map((category) => ({
  //   params: { category: category.value },
  // }));

  const paths = categories.map((category) => {
    tempPaths.push({ params: {category: category.value.toString()} });
  });

  // console.log('paths: ', paths);
  console.log('tempPaths: ', tempPaths);

  return {
    paths: tempPaths,
    fallback: false,
  };
}

export default CategoryPage;
