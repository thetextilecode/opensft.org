import Image from 'next/image';
import Link from 'next/link';
import { IBlogPost } from '../../../types';

export interface IBlogGridBig {
  posts: IBlogPost[];
  show?: any;
}

const BlogGridBig = ({ posts, show }: IBlogGridBig) => {
  return (
    <>
      {posts.slice(0, show).map((item, i) => (
        <div className='col-12' key={i}>
          <article className='first-post mb-30 wow fadeIn animated hover-up'>
            <div className='img-hover-slide position-relative overflow-hidden'>
              <span className='top-right-icon bg-dark'>
                <i className='fi-rs-bookmark'></i>
              </span>
              <div className='post-thumb img-hover-scale'>
                <Link href='/blog-post-right'>
                  <div style={{ width: '100%' }}>
                    <a>
                      <Image
                        src={`/assets/images/blog/${item.image}`}
                        layout={'responsive'}
                        height={item.imageOriginalHeight}
                        width={item.imageOriginalWidth}
                        alt=''
                      />
                    </a>
                  </div>
                </Link>
              </div>
            </div>
            <div className='entry-content'>
              <div className='entry-meta meta-1 mb-30'>
                <Link href='/blog-category-grid'>
                  <a className='entry-meta meta-0'>
                    <span className='post-in background4 text-brand font-xs'>
                      Mobile Phone
                    </span>
                  </a>
                </Link>
                <div className='font-sm'>
                  <span>
                    <span className='mr-10 text-muted'>
                      <i className='fi-rs-eye'></i>
                    </span>
                    23k
                  </span>
                  <span className='ml-30'>
                    <span className='mr-10 text-muted'>
                      <i className='fi-rs-comment-alt'></i>
                    </span>
                    17k
                  </span>
                  <span className='ml-30'>
                    <span className='mr-10 text-muted'>
                      <i className='fi-rs-share'></i>
                    </span>
                    18k
                  </span>
                </div>
              </div>
              <h2 className='post-title mb-20'>
                <Link href='/blog-post-right'>
                  <a>{item.title}</a>
                </Link>
              </h2>
              <p className='post-excerpt font-medium text-muted mb-30'>
                {item.description}
              </p>
              <div className='mb-20 entry-meta meta-2'>
                <div className='font-xs '>
                  <span className='post-by'>
                    By{' '}
                    {/*<Link href='/blog-category-grid'>*/}
                    {/*  <a>{item.category}</a>*/}
                    {/*</Link>*/}
                  </span>
                  <span className='post-on'>{item.date}</span>
                  <span className='time-reading'>
                    8 mins read
                  </span>
                  <p className='font-xs mt-5'>
                    Updated 18/08/2021 07:12 EST
                  </p>
                </div>

                <Link href='/blog-post-right'>
                  <a className='btn btn-sm'>
                    Read more
                    <i className='fi-rs-arrow-right ml-10'></i>
                  </a>
                </Link>
              </div>
            </div>
          </article>
        </div>
      ))}
    </>
  );
};

export default BlogGridBig;
