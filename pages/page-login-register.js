import Layout from "../components/layout/Layout";
import Link from "next/link"


function Login() {
    return (
        <>
            <Layout parent="Home" sub="Pages" subChild="Login & Register">
                <section className="pt-150 pb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 m-auto">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div className="login_wrap widget-taber-content p-30 background-white border-radius-10 mb-md-5 mb-lg-0 mb-sm-5">
                                            <div className="padding_eight_all bg-white">
                                                <div className="heading_s1">
                                                    <h3 className="mb-30">
                                                        Login
                                                    </h3>
                                                </div>
                                                <form method="post">
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            required=""
                                                            name="email"
                                                            placeholder="Your Email"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            required=""
                                                            type="password"
                                                            name="password"
                                                            placeholder="Password"
                                                        />
                                                    </div>
                                                    <div className="login_footer form-group">
                                                        <div className="chek-form">
                                                            <div className="custome-checkbox">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    name="checkbox"
                                                                    id="exampleCheckbox1"
                                                                    value=""
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    for="exampleCheckbox1"
                                                                >
                                                                    <span>
                                                                        Remember
                                                                        me
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <a
                                                            className="text-muted"
                                                            href="#"
                                                        >
                                                            Forgot password?
                                                        </a>
                                                    </div>
                                                    <div className="form-group">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-fill-out btn-block hover-up"
                                                            name="login"
                                                        >
                                                            Log in
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-1"></div>
                                    <div className="col-lg-6">
                                        <div className="login_wrap widget-taber-content p-30 background-white border-radius-5">
                                            <div className="padding_eight_all bg-white">
                                                <div className="heading_s1">
                                                    <h3 className="mb-30">
                                                        Create an Account
                                                    </h3>
                                                </div>
                                                <p className="mb-50 font-sm">
                                                    Your personal data will be
                                                    used to support your
                                                    experience throughout this
                                                    website, to manage access to
                                                    your account, and for other
                                                    purposes described in our
                                                    privacy policy
                                                </p>
                                                <form method="post">
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            required=""
                                                            name="username"
                                                            placeholder="Username"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            required=""
                                                            name="email"
                                                            placeholder="Email"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            required=""
                                                            type="password"
                                                            name="password"
                                                            placeholder="Password"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            required=""
                                                            type="password"
                                                            name="password"
                                                            placeholder="Confirm password"
                                                        />
                                                    </div>
                                                    <div className="login_footer form-group">
                                                        <div className="chek-form">
                                                            <div className="custome-checkbox">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    name="checkbox"
                                                                    id="exampleCheckbox12"
                                                                    value=""
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    for="exampleCheckbox12"
                                                                >
                                                                    <span>
                                                                        I agree
                                                                        to terms
                                                                        &amp;
                                                                        Policy.
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <Link href="/page-privacy-policy">
                                                        <a>
                                                            <i className="fi-rs-book-alt mr-5 text-muted"></i>
                                                            Lean more
                                                        </a>
                                                        </Link>
                                                    </div>
                                                    <div className="form-group">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-fill-out btn-block hover-up"
                                                            name="login"
                                                        >
                                                            Submit &amp;
                                                            Register
                                                        </button>
                                                    </div>
                                                </form>
                                                <div className="divider-text-center mt-15 mb-15">
                                                    <span> or</span>
                                                </div>
                                                <ul className="btn-login list_none text-center mb-15">
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="btn btn-facebook hover-up mb-lg-0 mb-sm-4"
                                                        >
                                                            Login With Facebook
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="btn btn-google hover-up"
                                                        >
                                                            Login With Google
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div className="text-muted text-center">
                                                    Already have an account?{" "}
                                                    <a href="#">Sign in now</a>
                                                </div>
                                            </div>
                                        </div>
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

export default Login;
