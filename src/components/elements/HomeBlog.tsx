import Link from 'next/link';
import { IBlogPost } from '../../../types';
import { format, parseISO } from 'date-fns';
import DraftBadge from './DraftBadge';

interface IHomeBlog {
  latestPosts: IBlogPost[];
}

const HomeBlog = ({ latestPosts }: IHomeBlog) => {
  return (
    <div className='post-list mb-4 mb-lg-0'>
      {latestPosts.map((post, idx) => {
        return (
          <article className='wow fadeIn animated' key={idx}>
            <div className='d-md-flex d-block'>
              <div className='post-thumb d-flex mr-15'>
                <Link href={`/${post.slug}`}>
                  <a className='color-white'>
                    <img
                      src={post.image}
                      alt={post.imageAlt ?? 'Post thumbnail'}
                    />
                    {post.draft && (<h4 className={'entry-meta meta-2'}><DraftBadge /></h4>)}
                  </a>
                </Link>
              </div>
              <div className='post-content'>
                <div className='entry-meta mb-10 mt-10'>
                  <Link href={`/${post.slug}`}>
                    <a className='entry-meta meta-2'>
                      <span className='post-in font-x-small'>
                        {post.category ?? 'Fashion'}
                      </span>
                    </a>
                  </Link>
                </div>
                <h4 className='post-title mb-25 text-limit-2-row'>
                  <Link href={`/${post.slug}`}>
                    <a>
                      {post.title}
                    </a>
                  </Link>
                </h4>
                <div className='entry-meta meta-1 font-xs color-grey mt-10 pb-10'>
                  <div>
                    <span className='post-on'>
                      {format(parseISO(post.date), 'MMMM dd, yyyy')}
                    </span>
                    <span className='hit-count has-dot'>
                      {post.readTime} min{post.readTime < 0 ?? 's'} read
                    </span>
                  </div>
                  <Link href={`/${post.slug}`}>
                    <a>Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  );
};

export default HomeBlog;
