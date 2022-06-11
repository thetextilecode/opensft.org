import { useEffect, useState } from 'react';
// import { fetchByCategory } from "../../redux/action/resource";
import { server } from '../../../opensft.config';
import FeaturedResourceSlider from '../sliders/FeaturedResource';
import Link from 'next/link';

function FetchTabSlider() {
  const [active, setActive] = useState('1');
  const [featured, setFeatured] = useState([]);
  const [trending, setTrending] = useState([]);
  const [newArrival, setNewArrival] = useState([]);

  const featuredResource = async () => {
    const request = await fetch(`${server}/static/resource.json`);
    const allResources = await request.json();
    const featuedItem = allResources.filter((item) => item.featured);
    setFeatured(featuedItem);
    setActive('1');
  };

  const trendingResource = async () => {
    const request = await fetch(`${server}/static/resource.json`);
    const allResources = await request.json();
    const trendingItem = allResources.filter((item) => item.trending);
    setTrending(trendingItem);
    setActive('2');
  };
  const newArrivalResource = async () => {
    const request = await fetch(`${server}/static/resource.json`);
    const allResources = await request.json();
    const newArrivalItem = allResources.sort(function (a, b) {
      return a.created > b.created ? -1 : 1;
    });
    setNewArrival(newArrivalItem);
    setActive('3');
  };

  useEffect(() => {
    featuredResource();
  }, []);

  return (
    <>
      <div className="heading-tab d-flex">
        <div className="heading-tab-left wow fadeIn animated">
          <h3 className="section-title mb-20">
            <span>Monthly</span> Best Sell
          </h3>
        </div>
        <div className="heading-tab-right wow fadeIn animated">
          <ul className="nav nav-tabs right no-border" id="myTab-1" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className={active === '1' ? 'nav-link active' : 'nav-link'}
                onClick={featuredResource}
              >
                Featured
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={active === '2' ? 'nav-link active' : 'nav-link'}
                onClick={trendingResource}
              >
                Popular
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={active === '3' ? 'nav-link active' : 'nav-link'}
                onClick={newArrivalResource}
              >
                New added
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3 d-none d-lg-flex">
          <div className="banner-img style-2 wow fadeIn animated">
            {/*<div style={{ width: '100%' }}>*/}
            {/*<Image src='/assets/images/banner/banner-9.jpg' alt='' width={304} height={357} layout={'responsive'}/>*/}
            {/*<Image src='/assets/images/banner/banner-9.jpg' alt='' layout={'fill'}/>*/}
            <img src="/assets/images/banner/banner-9.jpg" alt="" />
            {/*</div>*/}
            <div className="banner-text">
              <span>Woman Area</span>
              <h4 className="mt-5">
                Save 17% on <br />
                Clothing
              </h4>

              <Link href="/index">
                <a className="text-white">
                  View Now <i className="fi-rs-arrow-right"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-md-12">
          <div className="tab-content wow fadeIn animated" id="myTabContent">
            <div className={active === '1' ? 'tab-pane fade show active' : 'tab-pane fade'}>
              <div className="carousel-4-columns-cover card-product-small arrow-center position-relative">
                <FeaturedResourceSlider resources={featured} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FetchTabSlider;
