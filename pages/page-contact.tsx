import Layout from "../components/layout/Layout";

import Link from "next/link"

function Contact() {
    return (
        <>
            <Layout parent="Home" sub="Pages" subChild="Contact">
                <section className="hero-2 bg-green">
                    <div className="hero-content">
                        <div className="container">
                            <div className="text-center">
                                <h4 className="text-brand mb-20">
                                    Get in touch
                                </h4>
                                <h1 className="mb-20 wow fadeIn animated font-xxl fw-900">
                                    Let's Talk About <br />
                                    Your{" "}
                                    <span className="text-style-1">Idea</span>
                                </h1>
                                <p className="w-50 m-auto mb-50 wow fadeIn animated">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Harum quam eius placeat, a
                                    quidem mollitia at accusantium reprehenderit
                                    pariatur provident nam ratione incidunt
                                    magnam sequi.
                                </p>
                                <p className="wow fadeIn animated">
                                    <Link href="/page-about">
                                        <a className="btn btn-brand btn-lg font-weight-bold text-white border-radius-5 btn-shadow-brand hover-up">
                                            About Us
                                        </a>
                                    </Link>
                                    <a className="btn btn-outline btn-lg btn-brand-outline font-weight-bold text-brand bg-white text-hover-white ml-15 border-radius-5 btn-shadow-brand hover-up">
                                        Support Center
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-border pt-50 pb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 mb-4 mb-md-0">
                                <h4 className="mb-15 text-brand">Office</h4>
                                205 North Michigan Avenue, Suite 810
                                <br />
                                Chicago, 60601, USA
                                <br />
                                <abbr title="Phone">Phone:</abbr> (123) 456-7890
                                <br />
                                <abbr title="Email">Email: </abbr>
                                contact@Evara.com
                                <br />
                                <a className="btn btn-outline btn-sm btn-brand-outline font-weight-bold text-brand bg-white text-hover-white mt-20 border-radius-5 btn-shadow-brand hover-up">
                                    <i className="fi-rs-marker mr-10"></i>View
                                    map
                                </a>
                            </div>
                            <div className="col-md-4 mb-4 mb-md-0">
                                <h4 className="mb-15 text-brand">Studio</h4>
                                205 North Michigan Avenue, Suite 810
                                <br />
                                Chicago, 60601, USA
                                <br />
                                <abbr title="Phone">Phone:</abbr> (123) 456-7890
                                <br />
                                <abbr title="Email">Email: </abbr>
                                contact@Evara.com
                                <br />
                                <a className="btn btn-outline btn-sm btn-brand-outline font-weight-bold text-brand bg-white text-hover-white mt-20 border-radius-5 btn-shadow-brand hover-up">
                                    <i className="fi-rs-marker mr-10"></i>View
                                    map
                                </a>
                            </div>
                            <div className="col-md-4">
                                <h4 className="mb-15 text-brand">Shop</h4>
                                205 North Michigan Avenue, Suite 810
                                <br />
                                Chicago, 60601, USA
                                <br />
                                <abbr title="Phone">Phone:</abbr> (123) 456-7890
                                <br />
                                <abbr title="Email">Email: </abbr>
                                contact@Evara.com
                                <br />
                                <a className="btn btn-outline btn-sm btn-brand-outline font-weight-bold text-brand bg-white text-hover-white mt-20 border-radius-5 btn-shadow-brand hover-up">
                                    {" "}
                                    <i className="fi-rs-marker mr-10"></i> View
                                    map
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-50 pb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-10 m-auto">
                                <div className="contact-from-area padding-20-row-col wow FadeInUp">
                                    <h3 className="mb-10 text-center">
                                        Drop Us a Line
                                    </h3>
                                    <p className="text-muted mb-30 text-center font-sm">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </p>
                                    <form
                                        className="contact-form-style text-center"
                                        id="contact-form"
                                        action="#"
                                        method="post"
                                    >
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-style mb-20">
                                                    <input
                                                        name="name"
                                                        placeholder="First Name"
                                                        type="text"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-style mb-20">
                                                    <input
                                                        name="email"
                                                        placeholder="Your Email"
                                                        type="email"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-style mb-20">
                                                    <input
                                                        name="telephone"
                                                        placeholder="Your Phone"
                                                        type="tel"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="input-style mb-20">
                                                    <input
                                                        name="subject"
                                                        placeholder="Subject"
                                                        type="text"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className="textarea-style mb-30">
                                                    <textarea
                                                        name="message"
                                                        placeholder="Message"
                                                    ></textarea>
                                                </div>
                                                <button
                                                    className="submit submit-auto-width"
                                                    type="submit"
                                                >
                                                    Send message
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <p className="form-messege"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default Contact;
