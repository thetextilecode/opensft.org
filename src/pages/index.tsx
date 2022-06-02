import FetchTab from '../components/ecommerce/fetchTab';
import FetchTab2 from '../components/ecommerce/fetchTabSlider';
import Banner2 from '../components/elements/Banner2';
import Bottom from '../components/elements/Bottom';
import QuickView from '../components/ecommerce/QuickView';
import Banner3 from '../components/elements/Banner3';
import Banner4 from '../components/elements/Banner4';
import Banner5 from '../components/elements/Banner5';
import BannerFeatures from '../components/elements/BannerFeatures';
import Deals1 from '../components/elements/Deals1';
import Deals2 from '../components/elements/Deals2';
import HomeBlog from '../components/elements/HomeBlog';
import IntroPopup from '../components/elements/IntroPopup';
import Layout from '../components/layout/Layout';
import BrandSlider from '../components/sliders/Brand';
import CategorySlider from '../components/sliders/Category';
import Intro1 from '../components/sliders/Intro1';
import NewArrival from '../components/sliders/NewArrival';
import { IBlogPost } from '../../types';
import { GetStaticProps } from 'next';
import { getAllPosts } from '../lib/api';
import { homeConfig } from '../../opensft.config';

type IndexProps = {
  posts: IBlogPost[];
};

export default function Home({ posts }: IndexProps) {
  return (
    <>
      {homeConfig.showPopupModal && (<IntroPopup />)}

      <Layout noBreadcrumb='d-none' headerStyle='header-style-1'>
        {homeConfig.showHomeSlider && (
          <section className='home-slider position-relative pt-50'>
            <Intro1 />
          </section>
        )}

        {homeConfig.showFeaturesBanner && (
          <section className='featured section-padding position-relative'>
            <div className='container'>
              <div className='row'>
                <BannerFeatures />
              </div>
            </div>
          </section>
        )}

        {homeConfig.showProductTabs && (
          <section className='product-tabs section-padding position-relative wow fadeIn animated'>
            <div className='container'>
              <div className='col-lg-12'>
                <FetchTab />
              </div>
            </div>
          </section>
        )}

        {homeConfig.showBanner2 && (
          <section className='banner-2 section-padding pb-0'>
            <div className='container'>
              <Banner2 />
            </div>
          </section>
        )}

        {homeConfig.showPopularCategories && (
          <section className='popular-categories section-padding mt-15 mb-25'>
            <div className='container wow fadeIn animated'>
              <h3 className='section-title mb-20'>
                <span>Popular</span> Categories
              </h3>
              <div className='carousel-6-columns-cover position-relative'>
                <div
                  className='carousel-6-columns'
                  id='carousel-6-columns'
                >
                  <CategorySlider />
                </div>
              </div>
            </div>
          </section>
        )}

        {homeConfig.showBanner5 && (
          <section className='banners mb-15'>
            <div className='container'>
              <div className='row'>
                <Banner5 />
              </div>
            </div>
          </section>
        )}

        {homeConfig.showNewArrivals && (
          <section className='section-padding'>
            <div className='container wow fadeIn animated'>
              <h3 className='section-title mb-20'>
                <span>New</span> Arrivals
              </h3>
              <div className='carousel-6-columns-cover position-relative'>
                <NewArrival />
              </div>
            </div>
          </section>
        )}

        {homeConfig.showDeals && (
          <section className='deals section-padding'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-6 deal-co'>
                  <Deals1 />
                </div>
                <div className='col-lg-6 deal-co'>
                  <Deals2 />
                </div>
              </div>
            </div>
          </section>
        )}

        {homeConfig.showFeaturedBrands && (
          <section className='section-padding'>
            <div className='container'>
              <h3 className='section-title mb-20 wow fadeIn animated'>
                <span>Featured</span> Brands
              </h3>
              <div className='carousel-6-columns-cover position-relative wow fadeIn animated'>
                <BrandSlider />
              </div>
            </div>
          </section>
        )}

        {homeConfig.showFetchTab2 && (
          <section className='bg-grey-9 section-padding'>
            <div className='container pt-25 pb-25'>
              <FetchTab2 />
            </div>
          </section>
        )}

        {homeConfig.showBlogPosts && (
          <section className='section-padding'>
            <div className='container pt-25 pb-20'>
              <div className='row'>
                <div className='col-lg-6'>
                  <h3 className='section-title mb-20'>
                    <span>Latest</span> Articles
                  </h3>
                  <HomeBlog />
                </div>
                <div className='col-lg-6'>
                  <div className='row'>
                    <Banner3 />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {homeConfig.showBanner4 && (
          <section className='mb-50'>
            <div className='container'>
              <div className='row'>
                <div className='col-12'>
                  <Banner4 />
                </div>
              </div>
            </div>
          </section>
        )}

        {homeConfig.showBottom && (<Bottom />)}

        {homeConfig.showQuickView && (<QuickView />)}
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts([
    'category',
    'date',
    'description',
    'draft',
    'featured',
    'image',
    'imageAlt',
    'imageOriginalWidth',
    'imageOriginalHeight',
    'slug',
    'tags',
    'title',
  ]);

  return {
    props: { posts },
  };
};

