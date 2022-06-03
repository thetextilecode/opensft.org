import { format, parseISO } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { IBlogPost, ICategory } from '../../../types';
import Layout from '../../components/layout/Layout';
import { getAllCategories } from '../../lib/api';

type CategoryPageProps = {
  category: ICategory;
};

const CategoryPage = ({ category }: CategoryPageProps): JSX.Element => {
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const categories = getAllCategories();
  const category = categories.some((category) => category.value === params.category);

  return {
    props: {
      category,
    },
  };
};

export async function getStaticPaths() {
  const categories = await getCategories('blog');

  const paths = categories.map((category: string) => ({
    params: {
      category,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default CategoryPage;
