import Link from 'next/link';
import { IBlogPost } from '../../../types';
import DraftBadge from './DraftBadge';
import { format, parseISO } from 'date-fns';

export interface IBlogList {
  posts?: IBlogPost[];
  show?: any;
}

const BlogList = ({ posts, show }: IBlogList) => {
  return (
    <>
      {posts.slice(0, show).map((post, i) => (
        <article className="wow fadeIn animated hover-up mb-30" key={i}>
          <div
            className="post-thumb"
            style={{
              backgroundImage: `url(${post.image})`,
            }}
          >
            <div className="entry-meta">
              <Link href={`/${post.slug}`} className="entry-meta meta-2">
                {post.category ?? 'Technology'}
              </Link>
              {post.draft && (
                <div style={{ marginTop: '10px' }}>
                  <h3>
                    <DraftBadge />
                  </h3>
                </div>
              )}
            </div>
          </div>
          <div className="entry-content-2">
            <h3 className="post-title mb-15">
              <Link href={`/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </h3>
            <p className="post-excerpt mb-30">{post.description}</p>
            <div className="entry-meta meta-1 font-xs color-grey mt-10 pb-10">
              <div>
                <span className="post-on">
                  {' '}
                  <i className="fi-rs-clock"></i>&nbsp;
                  {format(parseISO(post.date), 'MMMM dd, yyyy')}
                </span>
                <span className="hit-count has-dot">
                  {post.readTime} min{post.readTime < 0 ?? 's'} read
                </span>
              </div>
              <Link href={`/${post.slug}`}>
                <a className="text-brand">
                  Read more <i className="fi-rs-arrow-right"></i>
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
