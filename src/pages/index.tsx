import Banner2 from '../components/elements/Banner2';
import Bottom from '../components/elements/Bottom';
import QuickView from '../components/resources/QuickView';
import HomeBanner from '../components/elements/HomeBanner';
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
import HomeSlider from '../components/sliders/HomeSlider';
import { IBlogPost, IConfig } from '../../types';
import { GetStaticProps } from 'next';
import { getAllPosts } from '../lib/api';

type IndexProps = {
  config: IConfig;
  newsletterId: string;
  newsletterUser: string;
  posts: IBlogPost[];
};

export default function Home({ config, newsletterId, newsletterUser, posts }: IndexProps) {
  return (
    <>
      {config.configHome.showPopupModal && <IntroPopup />}

      <Layout
        noBreadcrumb="d-none"
        headerStyle="header-style-1"
        {...config}
        newsletterId={newsletterId}
        newsletterUser={newsletterUser}
      >
        {config.configHome.showHomeSlider && (
          <section className="home-slider position-relative pt-50">
            <HomeSlider />
          </section>
        )}

        {config.configHome.showFeaturesBanner && (
          <section className="featured section-padding position-relative">
            <div className="container">
              <div className="row">
                <BannerFeatures />
              </div>
            </div>
          </section>
        )}

        {config.configHome.showBanner2 && (
          <section className="banner-2 section-padding pb-0">
            <div className="container">
              <Banner2 />
            </div>
          </section>
        )}

        {config.configHome.showPopularCategories && (
          <section className="popular-categories section-padding mt-15 mb-25">
            <div className="container wow fadeIn animated">
              <h3 className="section-title mb-20">
                <span>Popular</span> Categories
              </h3>
              <div className="carousel-6-columns-cover position-relative">
                <div className="carousel-6-columns" id="carousel-6-columns">
                  <CategorySlider />
                </div>
              </div>
            </div>
          </section>
        )}

        {config.configHome.showBanner5 && (
          <section className="banners mb-15">
            <div className="container">
              <div className="row">
                <Banner5 />
              </div>
            </div>
          </section>
        )}

        {config.configHome.showDeals && (
          <section className="deals section-padding">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 deal-co">
                  <Deals1 />
                </div>
                <div className="col-lg-6 deal-co">
                  <Deals2 />
                </div>
              </div>
            </div>
          </section>
        )}

        {config.configHome.showFeaturedBrands && (
          <section className="section-padding">
            <div className="container">
              <h3 className="section-title mb-20 wow fadeIn animated">
                <span>Featured</span> Brands
              </h3>
              <div className="carousel-6-columns-cover position-relative wow fadeIn animated">
                <BrandSlider />
              </div>
            </div>
          </section>
        )}

        {/* Latest Articles & Side Banners */}
        {config.configHome.showBlogPosts && (
          <section className="section-padding">
            <div className="container pt-25 pb-20">
              <div className="row">
                <div className="col-lg-6 col-sm-12">
                  <h3 className="section-title mb-20">
                    <span>Latest</span> Articles
                  </h3>
                  <HomeBlog latestPosts={posts.slice(0, 2)} />
                </div>
                <div className="col-lg-6 col-sm-12">
                  <HomeBanner />
                </div>
              </div>
            </div>
          </section>
        )}

        {config.configHome.showBanner4 && (
          <section className="mb-50">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <Banner4 />
                </div>
              </div>
            </div>
          </section>
        )}

        {config.configHome.showBottom && <Bottom />}

        {config.configHome.showQuickView && <QuickView />}
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
    'readTime',
    'slug',
    'tags',
    'title',
  ]);

  return {
    props: {
      posts,
    },
  };
};
