import Image from 'next/image';
import Link from 'next/link';
import { IBlogPost, ICategory, ITag } from '../../../types';

interface IBlogSidebar {
  categories?: ICategory[];
  show?: number;
  tags?: ITag[];
  trendingPosts: IBlogPost[];
}

const BlogSidebar = ({ categories, show, tags, trendingPosts }: IBlogSidebar) => {
  return (
    <div className='widget-area'>
      <div className='sidebar-widget widget_search mb-50'>
        <div className='search-form'>
          <form action='src/components/elements/BlogSidebar#'>
            <input type='text' placeholder='Search…' />
            <button type='submit'>
              <i className='fi-rs-search'></i>
            </button>
          </form>
        </div>
      </div>

      <div className='sidebar-widget widget_categories mb-40'>
        <div className='widget-header position-relative mb-20 pb-10'>
          <h5 className='widget-title'>Categories</h5>
        </div>
        <div className='post-block-list post-module-1 post-module-5'>
          <ul>
            {categories.map((category, idx) => {
              return (
                <li className={'cat-item cat-item-' + idx} key={idx}>
                  <Link href={`/${category.value}`}>
                    <a>{category.label}</a>
                  </Link>{' '}
                  (3)
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className='sidebar-widget widget_alitheme_lastpost mb-20'>
        <div className='widget-header position-relative mb-20 pb-10'>
          <h5 className='widget-title'>Trending Now</h5>
        </div>
        <div className='row'>
          <div className='col-12 sm-grid-content mb-30'>
            <div className='post-thumb d-flex border-radius-5 img-hover-scale mb-15'>
              <Link href='/'>
                <div style={{ width: '100%' }}>
                  <a>
                    <Image
                      src='/assets/images/blog/blog-1.jpg'
                      alt=''
                      layout={'responsive'}
                      width={1200}
                      height={800}
                    />
                  </a>
                </div>
              </Link>
            </div>
            <div className='post-content media-body'>
              <h4 className='post-title mb-10 text-limit-2-row'>
                The litigants on the screen are not actors
              </h4>
              <div className='entry-meta meta-13 font-xxs color-grey'>
                <span className='post-on mr-10'>
                  25 April
                </span>
                <span className='hit-count has-dot '>
                  126k Views
                </span>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-sm-6 sm-grid-content mb-30'>
            <div className='post-thumb d-flex border-radius-5 img-hover-scale mb-15'>
              <Link href='/'>
                <div style={{ width: '100%' }}>
                  <a>
                    <Image
                      src='/assets/images/blog/blog-3.jpg'
                      alt=''
                      layout={'responsive'}
                      width={1200}
                      height={800}
                    />
                  </a>
                </div>
              </Link>
            </div>
            <div className='post-content media-body'>
              <h6 className='post-title mb-10 text-limit-2-row'>
                Water Partners With Rag &amp; Bone To
                Consume
              </h6>
              <div className='entry-meta meta-13 font-xxs color-grey'>
                <span className='post-on mr-10'>
                  25 April
                </span>
                <span className='hit-count has-dot '>
                  126k Views
                </span>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-sm-6 sm-grid-content mb-30'>
            <div className='post-thumb d-flex border-radius-5 img-hover-scale mb-15'>
              <Link href='/'>
                <div style={{ width: '100%' }}>
                  <a>
                    <Image
                      src='/assets/images/blog/blog-4.jpg'
                      alt=''
                      layout={'responsive'}
                      width={1200}
                      height={800}
                    />
                  </a>
                </div>
              </Link>
            </div>
            <div className='post-content media-body'>
              <h6 className='post-title mb-10 text-limit-2-row'>
                The loss is not all that surprising
              </h6>
              <div className='entry-meta meta-13 font-xxs color-grey'>
                <span className='post-on mr-10'>
                  25 April
                </span>
                <span className='hit-count has-dot '>
                  126k Views
                </span>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-sm-6 sm-grid-content mb-30'>
            <div className='post-thumb d-flex border-radius-5 img-hover-scale mb-15'>
              <Link href='/'>
                <div style={{ width: '100%' }}>
                  <a>
                    <Image
                      src='/assets/images/blog/blog-5.jpg'
                      alt=''
                      layout={'responsive'}
                      width={1200}
                      height={800}
                    />
                  </a>
                </div>
              </Link>
            </div>
            <div className='post-content media-body'>
              <h6 className='post-title mb-10 text-limit-2-row'>
                We got a right to pick a little fight,
                Bonanza
              </h6>
              <div className='entry-meta meta-13 font-xxs color-grey'>
                <span className='post-on mr-10'>
                  25 April
                </span>
                <span className='hit-count has-dot '>
                  126k Views
                </span>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-sm-6 sm-grid-content mb-30'>
            <div className='post-thumb d-flex border-radius-5 img-hover-scale mb-15'>
              <Link href='/'>
                <div style={{ width: '100%' }}>
                  <a>
                    <Image
                      src='/assets/images/blog/blog-6.jpg'
                      alt=''
                      layout={'responsive'}
                      width={1200}
                      height={800}
                    />
                  </a>
                </div>
              </Link>
            </div>
            <div className='post-content media-body'>
              <h6 className='post-title mb-10 text-limit-2-row'>
                My entrance exam was on a book of matches
              </h6>
              <div className='entry-meta meta-13 font-xxs color-grey'>
                <span className='post-on mr-10'>
                  25 April
                </span>
                <span className='hit-count has-dot '>
                  126k Views
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='banner-img wow fadeIn mb-45 animated d-lg-block d-none animated'>
        <div style={{ width: '100%' }}>
          <Image src='/assets/images/banner/banner-11.jpg' alt='' layout={'responsive'} width={600} height={687} />
        </div>
        <div className='banner-text'>
          <span>Fashion Business?</span>
          <h4>
            Take Our Latest <br />
            Survey
          </h4>
          <Link href='/'>
            <a>
              Take Survey <i className='fi-rs-arrow-right'></i>
            </a>
          </Link>
        </div>
      </div>

      <div className='sidebar-widget widget_tags mb-50'>
        <div className='widget-header position-relative mb-20 pb-10'>
          <h5 className='widget-title'>Popular tags </h5>
        </div>
        <div className='tagcloud'>
          {tags.map((tag, idx) => {
            return (
              <Link href={`/tag/${tag.value}`} key={idx}>
                <a className={'tag-cloud-link'}>{tag.value}</a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
