import BlogList from "../components/elements/BlogList";
import BlogSidebar from "../components/elements/BlogSidebar";
import Layout from "../components/layout/Layout";

function PageBlogList() {
    return (
        <>
            <Layout parent="Home" sub="Blog" subChild="List">
                <section className="mt-50 mb-50">
                    <div className="container custom">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="single-header mb-50">
                                    <h1 className="font-xxl text-brand">Our Blog</h1>
                                    <div className="entry-meta meta-1 font-xs mt-15 mb-15">
                                        <span className="post-by">32 Sub Categories</span>
                                        <span className="post-on has-dot">1020k Article</span>
                                        <span className="time-reading has-dot">480 Authors</span>
                                        <span className="hit-count  has-dot">29M Views</span>
                                    </div>
                                </div>
                                <div className="loop-grid loop-list pr-30">
                                    <BlogList show={6} />
                                </div>
                            </div>
                            <div className="col-lg-3 primary-sidebar sticky-sidebar">
                                <BlogSidebar />
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default PageBlogList;
