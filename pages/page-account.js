import Layout from "../components/layout/Layout";
import Link from "next/link"

function Account() {
    return (
        <>
            <Layout parent="Home" sub="Pages" subChild="Account">
                <section className="pt-150 pb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 m-auto">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="dashboard-menu">
                                            <ul
                                                className="nav flex-column"
                                                role="tablist"
                                            >
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link active"
                                                        id="dashboard-tab"
                                                        data-bs-toggle="tab"
                                                        href="#dashboard"
                                                        role="tab"
                                                        aria-controls="dashboard"
                                                        aria-selected="false"
                                                    >
                                                        <i className="fi-rs-settings-sliders mr-10"></i>
                                                        Dashboard
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link"
                                                        id="orders-tab"
                                                        data-bs-toggle="tab"
                                                        href="#orders"
                                                        role="tab"
                                                        aria-controls="orders"
                                                        aria-selected="false"
                                                    >
                                                        <i className="fi-rs-shopping-bag mr-10"></i>
                                                        Orders
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link"
                                                        id="track-orders-tab"
                                                        data-bs-toggle="tab"
                                                        href="#track-orders"
                                                        role="tab"
                                                        aria-controls="track-orders"
                                                        aria-selected="false"
                                                    >
                                                        <i className="fi-rs-shopping-cart-check mr-10"></i>
                                                        Track Your Order
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link"
                                                        id="address-tab"
                                                        data-bs-toggle="tab"
                                                        href="#address"
                                                        role="tab"
                                                        aria-controls="address"
                                                        aria-selected="true"
                                                    >
                                                        <i className="fi-rs-marker mr-10"></i>
                                                        My Address
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link"
                                                        id="account-detail-tab"
                                                        data-bs-toggle="tab"
                                                        href="#account-detail"
                                                        role="tab"
                                                        aria-controls="account-detail"
                                                        aria-selected="true"
                                                    >
                                                        <i className="fi-rs-user mr-10"></i>
                                                        Account details
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/page-login-register">
                                                    <a
                                                        className="nav-link"
                                                        
                                                    >
                                                        <i className="fi-rs-sign-out mr-10"></i>
                                                        Logout
                                                    </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="tab-content dashboard-content">
                                            <div
                                                className="tab-pane fade active show"
                                                id="dashboard"
                                                role="tabpanel"
                                                aria-labelledby="dashboard-tab"
                                            >
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h5 className="mb-0">
                                                            Hello Rosie!
                                                        </h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <p>
                                                            From your account
                                                            dashboard. you can
                                                            easily check &amp;
                                                            view your
                                                            <a href="#">
                                                                recent orders
                                                            </a>
                                                            , manage your
                                                            <a href="#">
                                                                shipping and
                                                                billing
                                                                addresses
                                                            </a>
                                                            and
                                                            <a href="#">
                                                                edit your
                                                                password and
                                                                account details.
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="orders"
                                                role="tabpanel"
                                                aria-labelledby="orders-tab"
                                            >
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h5 className="mb-0">
                                                            Your Orders
                                                        </h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="table-responsive">
                                                            <table className="table">
                                                                <thead>
                                                                    <tr>
                                                                        <th>
                                                                            Order
                                                                        </th>
                                                                        <th>
                                                                            Date
                                                                        </th>
                                                                        <th>
                                                                            Status
                                                                        </th>
                                                                        <th>
                                                                            Total
                                                                        </th>
                                                                        <th>
                                                                            Actions
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            #1357
                                                                        </td>
                                                                        <td>
                                                                            March
                                                                            45,
                                                                            2020
                                                                        </td>
                                                                        <td>
                                                                            Processing
                                                                        </td>
                                                                        <td>
                                                                            $125.00
                                                                            for
                                                                            2
                                                                            item
                                                                        </td>
                                                                        <td>
                                                                            <a
                                                                                href="#"
                                                                                className="btn-small d-block"
                                                                            >
                                                                                View
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            #2468
                                                                        </td>
                                                                        <td>
                                                                            June
                                                                            29,
                                                                            2020
                                                                        </td>
                                                                        <td>
                                                                            Completed
                                                                        </td>
                                                                        <td>
                                                                            $364.00
                                                                            for
                                                                            5
                                                                            item
                                                                        </td>
                                                                        <td>
                                                                            <a
                                                                                href="#"
                                                                                className="btn-small d-block"
                                                                            >
                                                                                View
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            #2366
                                                                        </td>
                                                                        <td>
                                                                            August
                                                                            02,
                                                                            2020
                                                                        </td>
                                                                        <td>
                                                                            Completed
                                                                        </td>
                                                                        <td>
                                                                            $280.00
                                                                            for
                                                                            3
                                                                            item
                                                                        </td>
                                                                        <td>
                                                                            <a
                                                                                href="#"
                                                                                className="btn-small d-block"
                                                                            >
                                                                                View
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="track-orders"
                                                role="tabpanel"
                                                aria-labelledby="track-orders-tab"
                                            >
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h5 className="mb-0">
                                                            Orders tracking
                                                        </h5>
                                                    </div>
                                                    <div className="card-body contact-from-area">
                                                        <p>
                                                            To track your order
                                                            please enter your
                                                            OrderID in the box
                                                            below and press
                                                            "Track" button. This
                                                            was given to you on
                                                            your receipt and in
                                                            the confirmation
                                                            email you should
                                                            have received.
                                                        </p>
                                                        <div className="row">
                                                            <div className="col-lg-8">
                                                                <form
                                                                    className="contact-form-style mt-30 mb-50"
                                                                    action="#"
                                                                    method="post"
                                                                >
                                                                    <div className="input-style mb-20">
                                                                        <label>
                                                                            Order
                                                                            ID
                                                                        </label>
                                                                        <input
                                                                            name="order-id"
                                                                            placeholder="Found in your order confirmation email"
                                                                            type="text"
                                                                            className="square"
                                                                        />
                                                                    </div>
                                                                    <div className="input-style mb-20">
                                                                        <label>
                                                                            Billing
                                                                            email
                                                                        </label>
                                                                        <input
                                                                            name="billing-email"
                                                                            placeholder="Email you used during checkout"
                                                                            type="email"
                                                                            className="square"
                                                                        />
                                                                    </div>
                                                                    <button
                                                                        className="submit submit-auto-width"
                                                                        type="submit"
                                                                    >
                                                                        Track
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="address"
                                                role="tabpanel"
                                                aria-labelledby="address-tab"
                                            >
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="card mb-3 mb-lg-0">
                                                            <div className="card-header">
                                                                <h5 className="mb-0">
                                                                    Billing
                                                                    Address
                                                                </h5>
                                                            </div>
                                                            <div className="card-body">
                                                                <address>
                                                                    3522
                                                                    Interstate
                                                                    <br /> 75
                                                                    Business
                                                                    Spur,
                                                                    <br /> Sault
                                                                    Ste. <br />
                                                                    Marie, MI
                                                                    49783
                                                                </address>
                                                                <p>New York</p>
                                                                <a
                                                                    href="#"
                                                                    className="btn-small"
                                                                >
                                                                    Edit
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <h5 className="mb-0">
                                                                    Shipping
                                                                    Address
                                                                </h5>
                                                            </div>
                                                            <div className="card-body">
                                                                <address>
                                                                    4299 Express
                                                                    Lane
                                                                    <br />
                                                                    Sarasota,
                                                                    <br />
                                                                    FL 34249 USA
                                                                    <br />
                                                                    Phone:
                                                                    1.941.227.4444
                                                                </address>
                                                                <p>Sarasota</p>
                                                                <a
                                                                    href="#"
                                                                    className="btn-small"
                                                                >
                                                                    Edit
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="account-detail"
                                                role="tabpanel"
                                                aria-labelledby="account-detail-tab"
                                            >
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h5>Account Details</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <p>
                                                            Already have an
                                                            account?
                                                            <Link href="/page-login-register">
                                                            <a>
                                                                Log in instead!
                                                            </a>
                                                            </Link>
                                                        </p>
                                                        <form
                                                            method="post"
                                                            name="enq"
                                                        >
                                                            <div className="row">
                                                                <div className="form-group col-md-6">
                                                                    <label>
                                                                        First
                                                                        Name
                                                                        <span className="required">
                                                                            *
                                                                        </span>
                                                                    </label>
                                                                    <input
                                                                        required=""
                                                                        className="form-control square"
                                                                        name="name"
                                                                        type="text"
                                                                    />
                                                                </div>
                                                                <div className="form-group col-md-6">
                                                                    <label>
                                                                        Last
                                                                        Name
                                                                        <span className="required">
                                                                            *
                                                                        </span>
                                                                    </label>
                                                                    <input
                                                                        required=""
                                                                        className="form-control square"
                                                                        name="phone"
                                                                    />
                                                                </div>
                                                                <div className="form-group col-md-12">
                                                                    <label>
                                                                        Display
                                                                        Name
                                                                        <span className="required">
                                                                            *
                                                                        </span>
                                                                    </label>
                                                                    <input
                                                                        required=""
                                                                        className="form-control square"
                                                                        name="dname"
                                                                        type="text"
                                                                    />
                                                                </div>
                                                                <div className="form-group col-md-12">
                                                                    <label>
                                                                        Email
                                                                        Address
                                                                        <span className="required">
                                                                            *
                                                                        </span>
                                                                    </label>
                                                                    <input
                                                                        required=""
                                                                        className="form-control square"
                                                                        name="email"
                                                                        type="email"
                                                                    />
                                                                </div>
                                                                <div className="form-group col-md-12">
                                                                    <label>
                                                                        Current
                                                                        Password
                                                                        <span className="required">
                                                                            *
                                                                        </span>
                                                                    </label>
                                                                    <input
                                                                        required=""
                                                                        className="form-control square"
                                                                        name="password"
                                                                        type="password"
                                                                    />
                                                                </div>
                                                                <div className="form-group col-md-12">
                                                                    <label>
                                                                        New
                                                                        Password
                                                                        <span className="required">
                                                                            *
                                                                        </span>
                                                                    </label>
                                                                    <input
                                                                        required=""
                                                                        className="form-control square"
                                                                        name="npassword"
                                                                        type="password"
                                                                    />
                                                                </div>
                                                                <div className="form-group col-md-12">
                                                                    <label>
                                                                        Confirm
                                                                        Password
                                                                        <span className="required">
                                                                            *
                                                                        </span>
                                                                    </label>
                                                                    <input
                                                                        required=""
                                                                        className="form-control square"
                                                                        name="cpassword"
                                                                        type="password"
                                                                    />
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <button
                                                                        type="submit"
                                                                        className="btn btn-fill-out submit"
                                                                        name="submit"
                                                                        value="Submit"
                                                                    >
                                                                        Save
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
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

export default Account;
