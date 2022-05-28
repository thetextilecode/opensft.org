import React from "react";

import Link from "next/link"

const BlogSidebar = () => {
    return (
        <>
            <div className="widget-area">
                <div className="sidebar-widget widget_search mb-50">
                    <div className="search-form">
                        <form action="#">
                            <input type="text" placeholder="Search…" />
                            <button type="submit">
                                <i className="fi-rs-search"></i>
                            </button>
                        </form>
                    </div>
                </div>

                <div className="sidebar-widget widget_categories mb-40">
                    <div className="widget-header position-relative mb-20 pb-10">
                        <h5 className="widget-title">Categories</h5>
                    </div>
                    <div className="post-block-list post-module-1 post-module-5">
                        <ul>
                            <li className="cat-item cat-item-2">
                                <Link href="/blog-category-list">
                                    <a>Beauty</a>
                                </Link>{" "}
                                (3)
                            </li>
                            <li className="cat-item cat-item-3">
                                <Link href="/blog-category-list">
                                    <a>Book</a>
                                </Link>{" "}
                                (6)
                            </li>
                            <li className="cat-item cat-item-4">
                                <Link href="/blog-category-list">
                                    <a>Design</a>
                                </Link>{" "}
                                (4)
                            </li>
                            <li className="cat-item cat-item-5">
                                <Link href="/blog-category-list">
                                    <a>Fashion</a>
                                </Link>
                                (3)
                            </li>
                            <li className="cat-item cat-item-6">
                                <Link href="/blog-category-list">
                                    <a>Lifestyle</a>
                                </Link>
                                (6)
                            </li>
                            <li className="cat-item cat-item-7">
                                <Link href="/blog-category-list">
                                    <a>Travel</a>
                                </Link>{" "}
                                (2)
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="sidebar-widget widget_alitheme_lastpost mb-20">
                    <div className="widget-header position-relative mb-20 pb-10">
                        <h5 className="widget-title">Trending Now</h5>
                    </div>
                    <div className="row">
                        <div className="col-12 sm-grid-content mb-30">
                            <div className="post-thumb d-flex border-radius-5 img-hover-scale mb-15">
                                <Link href="/blog-post-fullwidth">
                                    <a>
                                        <img
                                            src="assets/imgs/blog/blog-1.jpg"
                                            alt=""
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="post-content media-body">
                                <h4 className="post-title mb-10 text-limit-2-row">
                                    The litigants on the screen are not actors
                                </h4>
                                <div className="entry-meta meta-13 font-xxs color-grey">
                                    <span className="post-on mr-10">
                                        25 April
                                    </span>
                                    <span className="hit-count has-dot ">
                                        126k Views
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 sm-grid-content mb-30">
                            <div className="post-thumb d-flex border-radius-5 img-hover-scale mb-15">
                                <Link href="/blog-post-fullwidth">
                                    <a>
                                        <img
                                            src="assets/imgs/blog/blog-3.jpg"
                                            alt=""
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="post-content media-body">
                                <h6 className="post-title mb-10 text-limit-2-row">
                                    Water Partners With Rag &amp; Bone To
                                    Consume
                                </h6>
                                <div className="entry-meta meta-13 font-xxs color-grey">
                                    <span className="post-on mr-10">
                                        25 April
                                    </span>
                                    <span className="hit-count has-dot ">
                                        126k Views
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 sm-grid-content mb-30">
                            <div className="post-thumb d-flex border-radius-5 img-hover-scale mb-15">
                                <Link href="/blog-post-fullwidth">
                                    <a>
                                        <img
                                            src="assets/imgs/blog/blog-4.jpg"
                                            alt=""
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="post-content media-body">
                                <h6 className="post-title mb-10 text-limit-2-row">
                                    The loss is not all that surprising
                                </h6>
                                <div className="entry-meta meta-13 font-xxs color-grey">
                                    <span className="post-on mr-10">
                                        25 April
                                    </span>
                                    <span className="hit-count has-dot ">
                                        126k Views
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 sm-grid-content mb-30">
                            <div className="post-thumb d-flex border-radius-5 img-hover-scale mb-15">
                                <Link href="/blog-post-fullwidth">
                                    <a>
                                        <img
                                            src="assets/imgs/blog/blog-5.jpg"
                                            alt=""
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="post-content media-body">
                                <h6 className="post-title mb-10 text-limit-2-row">
                                    We got a right to pick a little fight,
                                    Bonanza
                                </h6>
                                <div className="entry-meta meta-13 font-xxs color-grey">
                                    <span className="post-on mr-10">
                                        25 April
                                    </span>
                                    <span className="hit-count has-dot ">
                                        126k Views
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 sm-grid-content mb-30">
                            <div className="post-thumb d-flex border-radius-5 img-hover-scale mb-15">
                                <Link href="/blog-post-fullwidth">
                                    <a>
                                        <img
                                            src="assets/imgs/blog/blog-6.jpg"
                                            alt=""
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="post-content media-body">
                                <h6 className="post-title mb-10 text-limit-2-row">
                                    My entrance exam was on a book of matches
                                </h6>
                                <div className="entry-meta meta-13 font-xxs color-grey">
                                    <span className="post-on mr-10">
                                        25 April
                                    </span>
                                    <span className="hit-count has-dot ">
                                        126k Views
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="banner-img wow fadeIn mb-45 animated d-lg-block d-none animated">
                    <img src="assets/imgs/banner/banner-11.jpg" alt="" />
                    <div className="banner-text">
                        <span>Women Zone</span>
                        <h4>
                            Save 17% on <br />
                            Office Dress
                        </h4>
                        <Link href="/products/shop-grid-right">
                            <a>
                                Shop Now <i className="fi-rs-arrow-right"></i>
                            </a>
                        </Link>
                    </div>
                </div>

                <div className="sidebar-widget widget_tags mb-50">
                    <div className="widget-header position-relative mb-20 pb-10">
                        <h5 className="widget-title">Popular tags </h5>
                    </div>
                    <div className="tagcloud">
                        <Link href="/blog-category-grid">
                            <a className="tag-cloud-link">beautiful</a>
                        </Link>
                        <Link href="/blog-category-grid">
                            <a className="tag-cloud-link">New York</a>
                        </Link>
                        <Link href="/blog-category-grid">
                            <a className="tag-cloud-link">droll</a>
                        </Link>
                        <Link href="/blog-category-grid">
                            <a className="tag-cloud-link">intimate</a>
                        </Link>
                        <Link href="/blog-category-grid">
                            <a className="tag-cloud-link">loving</a>
                        </Link>
                        <Link href="/blog-category-grid">
                            <a className="tag-cloud-link">travel</a>
                        </Link>
                        <Link href="/blog-category-grid">
                            <a className="tag-cloud-link">fighting</a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogSidebar;
