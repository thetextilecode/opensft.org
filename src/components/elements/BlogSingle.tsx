import Link from 'next/link';
import Image from 'next/image';
import ShareIcons from './ShareIcons';
import CommentsForm from './CommentsForm';
import CommentsArea from './CommentsArea';
import { IBlogPost } from '../../../types';
import { blogConfig } from '../../../opensft.config';
import { ReactNode } from 'react';

interface IBlogSingle {
  post: IBlogPost;
}

const BlogSingle = ({ post }: IBlogSingle) => {
  return (
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
            <span className='post-on has-dot'>{post.date}</span>
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
                   alt={post.imageAlt ?? null}
                   layout={post.imageOriginalWidth ? 'responsive' : 'fill'}
                   width={post.imageOriginalWidth ?? null}
                   height={post.imageOriginalHeight ?? null} />
          </div>
        </figure>
      )}
      <div className='single-content'>
        Content goes here.
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
      <CommentsArea />
      <CommentsForm />
    </div>
  );
};

export default BlogSingle;
