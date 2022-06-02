import Link from 'next/link';
import { IBlogPost } from '../../../types';

export interface IBlogList {
  show?: any;
}

export const blogPosts: IBlogPost[] = [
  {
    // id: 1,
    title: 'The litigants on the screen are not actors',
    // category: 'Politic',
    date: '25 April 2021',
    description: 'These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi.',
    image: 'blog-6.jpg',
    imageOriginalWidth: 1200,
    imageOriginalHeight: 800,
    slug: '',
    views: 126,
  },
  {
    // id: 2,
    // category: 'Global',
    title: 'Essential Qualities of Highly Successful Music',
    date: '25 April 2021',
    description: 'These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi.',
    image: 'blog-3.jpg',
    imageOriginalHeight: 800,
    imageOriginalWidth: 1200,
    slug: '',
    views: 126,
  },
  {
    // id: 2,
    // category: 'Global',
    title: 'Essential Qualities of Highly Successful Music',
    image: 'blog-3.jpg',
    imageOriginalWidth: 1200,
    imageOriginalHeight: 800,
    date: '25 April 2021',
    description: 'These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi.',
    slug: '',
    // views: 126,
  },
  {
    // id: 2,
    // category: 'Global',
    title: 'Essential Qualities of Highly Successful Music',
    date: '25 April 2021',
    description: 'These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi.',
    image: 'blog-3.jpg',
    imageOriginalWidth: 1200,
    imageOriginalHeight: 800,
    slug: '',
    // views: 126,
  },
  {
    // id: 2,
    title: 'Essential Qualities of Highly Successful Music',
    image: 'blog-3.jpg',
    imageOriginalWidth: 1200,
    imageOriginalHeight: 800,
    // category: 'Global',
    views: 126,
    date: '25 April 2021',
    description: 'These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi.',
    slug: '',

  },
  {
    // id: 2,
    date: '25 April 2021',
    description: 'These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi.',
    title: 'Essential Qualities of Highly Successful Music',
    image: 'blog-3.jpg',
    imageOriginalWidth: 1200,
    imageOriginalHeight: 800,
    // category: 'Global',
    views: 126,
    slug: '',

  },
];

const BlogList = ({ show }: IBlogList) => {
  return (
    <>
      {blogPosts.slice(0, show).map((item, i) => (
        <article className='wow fadeIn animated hover-up mb-30' key={i}>
          <div
            className='post-thumb'
            style={{
              backgroundImage: `url(/assets/images/blog/${item.image})`,
            }}
          >
            <div className='entry-meta'>
              <Link href='/blog-category-grid'>
                <a className='entry-meta meta-2'>Technology</a>
              </Link>
            </div>
          </div>
          <div className='entry-content-2'>
            <h3 className='post-title mb-15'>
              <Link href='/blog-post-right'>
                <a>
                  Ettitude — Beautifully Designed Bamboo
                  Sheets & Sleep Wear-Home Décor Holiday Gift
                  Guide
                </a>
              </Link>
            </h3>
            <p className='post-exerpt mb-30'>
              These people envy me for having a lifestyle they
              don’t have, but the truth is, sometimes I envy their
              lifestyle instead. Struggling to sell one
              multi-million dollar home currently.
            </p>
            <div className='entry-meta meta-1 font-xs color-grey mt-10 pb-10'>
              <div>
                <span className='post-on'>
                  {' '}
                  <i className='fi-rs-clock'></i> 25 April
                  2021
                </span>
                <span className='hit-count has-dot'>
                  126k Views
                </span>
              </div>
              <Link href='/blog-post-right'>
                <a className='text-brand'>
                  Read more{' '}
                  <i className='fi-rs-arrow-right'></i>
                </a>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default BlogList;
