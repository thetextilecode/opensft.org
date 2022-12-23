import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CategoryResource from '../../components/resources/CategoryResource';
import Pagination from '../../components/resources/Pagination';
import QuickView from '../../components/resources/QuickView';
import ShowSelect from '../../components/resources/ShowSelect';
import SingleResource from '../../components/resources/SingleResource';
import SortSelect from '../../components/resources/SortSelect';
import WishlistModal from '../../components/resources/WishlistModal';
import Layout from '../../components/layout/Layout';
import { fetchResource } from '../../redux/action/resource';
import Image from 'next/image';
import { IConfig, IResource } from '../../../types';
import { GetStaticProps } from 'next';

export interface IResources {
  config: IConfig;
  fetchResource?: any;
  newsletterId: string;
  newsletterUser: string;
  resourceFilters?: any;
  resources?: IResource;
}

const Resources = ({
  config,
  newsletterUser,
  newsletterId,
  resources,
  resourceFilters,
  fetchResource,
}: IResources) => {
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
      sub="Resources"
      newsletterUser={newsletterUser}
      newsletterId={newsletterId}
      {...config}
    >
      <section className="mt-50 mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 primary-sidebar sticky-sidebar">
              <div className="widget-category mb-30">
                <h5 className="section-title style-1 mb-30 wow fadeIn animated">Category</h5>
                <CategoryResource />
              </div>

              {/*<div className="sidebar-widget product-sidebar  mb-30 p-30 bg-grey border-radius-10">*/}
              {/*  <div className="widget-header position-relative mb-20 pb-10">*/}
              {/*    <h5 className="widget-title mb-10">New Resources</h5>*/}
              {/*    <div className="bt-1 border-color-1"></div>*/}
              {/*  </div>*/}
              {/*  <div className="single-post clearfix">*/}
              {/*    <div className="image">*/}
              {/*      <Image*/}
              {/*        src="/assets/images/page/placeholder.png"*/}
              {/*        alt="#"*/}
              {/*        layout={'responsive'}*/}
              {/*        width={600}*/}
              {/*        height={600}*/}
              {/*      />*/}
              {/*    </div>*/}
              {/*    <div className="content pt-10">*/}
              {/*      <h6>*/}
              {/*        <a>Example Project</a>*/}
              {/*      </h6>*/}
              {/*      <p className="price mb-0 mt-5">CRM</p>*/}
              {/*      <div className="product-rate">*/}
              {/*        <div className="product-rating" style={{ width: '60%' }}></div>*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
            <div className="col-lg-9">
              <div className="shop-product-filter">
                <div className="total-product">
                  <p>
                    We found
                    <strong className="text-brand">{resources.items.length}</strong>
                    resources
                  </p>
                </div>
                <div className="sort-by-product-area">
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
