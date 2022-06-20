import Image from 'next/image';
import Link from 'next/link';
import { IBlogPost, ICategory, ITag } from '../../../types';
import DraftBadge from './DraftBadge';

interface IBlogSidebar {
  categories: ICategory[];
  configSidebar: any;
  show?: number;
  tags: ITag[];
  trendingPosts: IBlogPost[];
}

const BlogSidebar = ({ categories, configSidebar, show, tags, trendingPosts }: IBlogSidebar) => {
  return (
    <div className="widget-area">
      {configSidebar.showSearch && (
        <div className="sidebar-widget widget_search mb-50">
          <div className="search-form">
            <form action="/">
              <input type="text" placeholder="Search…" />
              <button type="submit">
                <i className="fi-rs-search"></i>
              </button>
            </form>
          </div>
        </div>
      )}

      {configSidebar.showCategories && (
        <div className="sidebar-widget widget_categories mb-40">
          <div className="widget-header position-relative mb-20 pb-10">
            <h5 className="widget-title">Categories</h5>
          </div>
          <div className="post-block-list post-module-1 post-module-5">
            <ul>
              {categories.map((category, idx) => {
                return (
                  <li className={'cat-item cat-item-' + idx} key={idx}>
                    <Link href={`/category/${category.value}`}>
                      <a>{category.label}</a>
                    </Link>{' '}
                    {/*(3)*/}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}

      {configSidebar.showTrendingPosts && (
        <div className="sidebar-widget widget_alitheme_lastpost mb-20">
          <div className="widget-header position-relative mb-20 pb-10">
            <h5 className="widget-title">Trending Now</h5>
          </div>
          <div className="row">
            {trendingPosts.map((post, idx) => {
              return (
                <div
                  className={
                    idx === 0
                      ? 'col-12 sm-grid-content mb-30'
                      : 'col-md-6 col-sm-6 sm-grid-content mb-30'
                  }
                  key={idx}
                >
                  <div className="post-thumb d-flex border-radius-5 img-hover-scale mb-15">
                    <Link href={`/${post.slug}`}>
                      <div style={{ width: '100%' }}>
                        <a>
                          <Image
                            src={post.image}
                            alt={post.imageAlt ?? ''}
                            layout={'responsive'}
                            width={post.imageOriginalWidth ?? 600}
                            height={post.imageOriginalHeight ?? 400}
                          />
                        </a>
                      </div>
                    </Link>
                  </div>
                  <div className="post-content media-body">
                    <h5 className="post-title mb-10 text-limit-2-row">
                      <Link href={`/${post.slug}`}>
                        <>
                          <a>{post.title}</a>
                          {post.draft && <DraftBadge />}
                        </>
                      </Link>
                    </h5>
                    {/*<div className='entry-meta meta-13 font-xxs color-grey'>*/}
                    {/*  <span className='post-on mr-10'>*/}
                    {/*    {format(parseISO(post.date), 'MMMM dd, yyyy')}*/}
                    {/*  </span>*/}
                    {/*  <span className='hit-count has-dot '>*/}
                    {/*    {post.readTime} min{post.readTime < 0 ?? 's'} read*/}
                    {/*  </span>*/}
                    {/*</div>*/}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {configSidebar.showBanner && (
        <div className="banner-img wow fadeIn mb-45 animated d-lg-block d-none animated">
          <div style={{ width: '100%' }}>
            <Image
              src="/assets/images/banner/banner-11.jpg"
              alt=""
              layout={'responsive'}
              width={600}
              height={687}
            />
          </div>
          <div className="banner-text">
            <span>Fashion Business?</span>
            <h4>
              Take Our Latest <br />
              Survey
            </h4>
            <Link href="/">
              <a>
                Take Survey <i className="fi-rs-arrow-right"></i>
              </a>
            </Link>
          </div>
        </div>
      )}

      {configSidebar.showPopularTags && (
        <div className="sidebar-widget widget_tags mb-50">
          <div className="widget-header position-relative mb-20 pb-10">
            <h5 className="widget-title">Popular tags </h5>
          </div>
          <div className="tagcloud">
            {tags.map((tag, idx) => {
              return (
                <Link href={`/tag/${tag.value}`} key={idx}>
                  <a className={'tag-cloud-link'}>{tag.value}</a>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogSidebar;
