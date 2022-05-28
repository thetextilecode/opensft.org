import React from "react";

import Link from "next/link";

const BlogGrid = ({ show, col }) => {
    var data = [
        {
            id: 1,
            title: "The litigants on the screen are not actors",
            category: "Politic",
            views: 126,
            date: "25 April 2021",
            img: "blog-6.jpg",
            desc: "These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-3.jpg",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-3.jpg",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-3.jpg",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-3.jpg",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi.",
        },
        {
            id: 2,
            title: "Essential Qualities of Highly Successful Music",
            img: "blog-3.jpg",
            category: "Global",
            views: 126,
            date: "25 April 2021",
            desc: "These people envy me for having a lifestyle they don’t have, but the truth is, sometimes I envy their lifestyle instead. Struggling to sell one multi.",
        },
    ];

    return (
        <>
            {data.slice(0, show).map((item, i) => (
                <div class={`col-lg-${col}`}>
                    <article className="wow fadeIn animated hover-up mb-30">
                        <div className="post-thumb img-hover-scale">
                            <Link href="/blog-post-right">
                                <a>
                                    <img
                                        src={`/assets/imgs/blog/${item.img}`}
                                        alt=""
                                    />
                                </a>
                            </Link>
                            <div className="entry-meta">
                                <Link href="/blog-category-grid">
                                    <a className="entry-meta meta-2">Politic</a>
                                </Link>
                            </div>
                        </div>
                        <div className="entry-content-2">
                            <h3 className="post-title mb-15">
                                <Link href="/blog-post-right">
                                    <a>{item.title}</a>
                                </Link>
                            </h3>
                            <p className="post-exerpt mb-30">
                                These people envy me for having a lifestyle they
                                don’t have, but the truth is, sometimes I envy
                                their lifestyle instead. Struggling to sell one
                                multi.
                            </p>
                            <div className="entry-meta meta-1 font-xs color-grey mt-10 pb-10">
                                <div>
                                    <span className="post-on">
                                        <i className="fi-rs-clock"></i> 25 April
                                        2021
                                    </span>
                                    <span className="hit-count has-dot">
                                        126k Views
                                    </span>
                                </div>
                                <Link
                                    href="/blog-post-right"
                                    className="text-brand"
                                >
                                    <a>
                                        Read more{" "}
                                        <i className="fi-rs-arrow-right"></i>
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

export default BlogGrid;
