import BlogGrid from "../components/elements/BlogGrid";
import Layout from "../components/layout/Layout";

function PageBlogGrid() {
    return (
        <>
            <Layout parent="Home" sub="Blog" subChild="Wide">
                <section className="mt-50 mb-50">
                    <div className="container custom">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="single-header mb-50">
                                    <h1 className="font-xxl text-brand">Our Blog</h1>
                                    <div className="entry-meta meta-1 font-xs mt-15 mb-15">
                                        <span className="post-by">32 Sub Categories</span>
                                        <span className="post-on has-dot">1020k Article</span>
                                        <span className="time-reading has-dot">480 Authors</span>
                                        <span className="hit-count  has-dot">29M Views</span>
                                    </div>
                                </div>
                                <div className="loop-grid pr-30">
                                    <div className="row">
                                        <BlogGrid show={6} col={4} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default PageBlogGrid;
