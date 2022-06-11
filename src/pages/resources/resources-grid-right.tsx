import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import BrandFilter from '../../components/resources/BrandFilter';
import CategoryResource from '../../components/resources/CategoryResource';
// import CompareModal from "../../components/resources/CompareModal";
import Pagination from '../../components/resources/Pagination';
import PriceRangeSlider from '../../components/resources/PriceRangeSlider';
import QuickView from '../../components/resources/QuickView';
import ShowSelect from '../../components/resources/ShowSelect';
import SingleResource from '../../components/resources/SingleResource';
import SizeFilter from '../../components/resources/SizeFilter';
import SortSelect from '../../components/resources/SortSelect';
import WishlistModal from '../../components/resources/WishlistModal';
import Layout from '../../components/layout/Layout';
import { fetchResource } from '../../redux/action/resource';
import Link from 'next/link';
import Image from 'next/image';
import { GetStaticProps } from 'next';

const Resources = ({ newsletterUser, newsletterId, resources, resourceFilters, fetchResource }) => {
  // console.log(resources);

  let Router = useRouter(),
    searchTerm = Router.query.search,
    showLimit = 12,
    showPagination = 4;

  let [pagination, setPagination] = useState([]);
  let [limit, setLimit] = useState(showLimit);
  let [pages, setPages] = useState(Math.ceil(resources.items.length / limit));
  let [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchResource(searchTerm, '/static/resource.json', resourceFilters);
    cratePagination();
  }, [resourceFilters, limit, pages, resources.items.length]);

  const cratePagination = () => {
    // set pagination
    let arr = new Array(Math.ceil(resources.items.length / limit))
      // .fill()
      // using .fill(0) for now to get past the type checker, not using this component yet
      .fill(0)
      .map((_, idx) => idx + 1);

    setPagination(arr);
    setPages(Math.ceil(resources.items.length / limit));
  };

  const startIndex = currentPage * limit - limit;
  const endIndex = startIndex + limit;
  const getPaginatedResources = resources.items.slice(startIndex, endIndex);

  let start = Math.floor((currentPage - 1) / showPagination) * showPagination;
  let end = start + showPagination;
  const getPaginationGroup = pagination.slice(start, end);

  const next = () => {
    setCurrentPage((page) => page + 1);
  };

  const prev = () => {
    setCurrentPage((page) => page - 1);
  };

  const handleActive = (item) => {
    setCurrentPage(item);
  };

  const selectChange = (e) => {
    setLimit(Number(e.target.value));
    setCurrentPage(1);
    setPages(Math.ceil(resources.items.length / Number(e.target.value)));
  };
  return (
    <Layout
      parent="Home"
      sub="Shop"
      subChild="Grid"
      newsletterUser={newsletterUser}
      newsletterId={newsletterId}
    >
      <section className="mt-50 mb-50">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-lg-3 primary-sidebar sticky-sidebar">
              <div className="widget-category mb-30">
                <h5 className="section-title style-1 mb-30 wow fadeIn animated">Category</h5>
                <CategoryResource />
              </div>

              <div className="sidebar-widget price_range range mb-30">
                <div className="widget-header position-relative mb-20 pb-10">
                  <h5 className="widget-title mb-10">Filter</h5>
                  <div className="bt-1 border-color-1"></div>
                </div>

                <div className="price-filter">
                  <div className="price-filter-inner">
                    <br />
                    <PriceRangeSlider />
                    <br />
                  </div>
                </div>

                <div className="list-group">
                  <div className="list-group-item mb-10 mt-10">
                    <label className="fw-900">Color</label>
                    <BrandFilter />
                    <label className="fw-900 mt-15">Item Condition</label>
                    <SizeFilter />
                  </div>
                </div>
                <br />
              </div>

              <div className="sidebar-widget resource-sidebar  mb-30 p-30 bg-grey border-radius-10">
                <div className="widget-header position-relative mb-20 pb-10">
                  <h5 className="widget-title mb-10">New resources</h5>
                  <div className="bt-1 border-color-1"></div>
                </div>
                <div className="single-post clearfix">
                  <div className="image">
                    <Image
                      src="/assets/images/shop/thumbnail-3.jpg"
                      alt="#"
                      layout={'responsive'}
                      width={600}
                      height={600}
                    />
                  </div>
                  <div className="content pt-10">
                    <h5>
                      <a>Chen Cardigan</a>
                    </h5>
                    <p className="price mb-0 mt-5">$99.50</p>
                    <div className="product-rate">
                      <div className="product-rating" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="single-post clearfix">
                  <div className="image">
                    <Image
                      src="/assets/images/shop/thumbnail-4.jpg"
                      alt="#"
                      layout={'responsive'}
                      width={600}
                      height={600}
                    />
                  </div>
                  <div className="content pt-10">
                    <h6>
                      <a>Chen Sweater</a>
                    </h6>
                    <p className="price mb-0 mt-5">$89.50</p>
                    <div className="product-rate">
                      <div className="product-rating" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="single-post clearfix">
                  <div className="image">
                    <Image
                      src="/assets/images/shop/thumbnail-5.jpg"
                      alt="#"
                      layout={'responsive'}
                      width={600}
                      height={600}
                    />
                  </div>
                  <div className="content pt-10">
                    <h6>
                      <a>Colorful Jacket</a>
                    </h6>
                    <p className="price mb-0 mt-5">$25</p>
                    <div className="product-rate">
                      <div className="product-rating" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="banner-img wow fadeIn mb-45 animated d-lg-block d-none">
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
                  <span>Women Zone</span>
                  <h4>
                    Save 17% on <br />
                    Office Dress
                  </h4>
                  <Link href="/src/pages">
                    <a>
                      View Now
                      <i className="fi-rs-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="resources-resource-filter">
                <div className="total-resource">
                  <p>
                    We found
                    <strong className="text-brand">{resources.items.length}</strong>
                    items for you!
                  </p>
                </div>
                <div className="sort-by-resource-area">
                  <div className="sort-by-cover mr-10">
                    <ShowSelect selectChange={selectChange} showLimit={showLimit} />
                  </div>
                  <div className="sort-by-cover">
                    <SortSelect />
                  </div>
                </div>
              </div>
              <div className="row product-grid-3">
                {getPaginatedResources.length === 0 && <h3>No Resources Found </h3>}

                {getPaginatedResources.map((item, i) => (
                  <div className="col-lg-4 col-md-4 col-12 col-sm-6" key={i}>
                    <SingleResource resource={item} />
                  </div>
                ))}
              </div>

              <div className="pagination-area mt-15 mb-sm-5 mb-lg-0">
                <nav aria-label="Page navigation example">
                  <Pagination
                    getPaginationGroup={getPaginationGroup}
                    currentPage={currentPage}
                    pages={pages}
                    next={next}
                    prev={prev}
                    handleActive={handleActive}
                  />
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WishlistModal />
      {/* <CompareModal /> */}
      <QuickView />
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  resources: state.resources,
  resourceFilters: state.resourceFilters,
});

const mapDidpatchToProps = {
  fetchResource,
};

export default connect(mapStateToProps, mapDidpatchToProps)(Resources);

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      newsletterId: String(process.env.REACT_APP_MAILCHIMP_ID),
      newsletterUser: String(process.env.REACT_APP_MAILCHIMP_U),
    },
  };
};
