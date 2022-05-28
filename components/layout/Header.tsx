import Link from "next/link";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Search from "../ecommerce/Search";

const Header = ({
    totalCartItems,
    totalCompareItems,
    toggleClick,
    totalWishlistItems,
    headerStyle,
}) => {
    const [isToggled, setToggled] = useState(false);
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY >= 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    });

    const handleToggle = () => setToggled(!isToggled);

    return (
        <>
            <header className={`header-area ${headerStyle} header-height-2`}>
                <div className="header-top header-top-ptb-1 d-none d-lg-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-4">
                                <div className="header-info">
                                    <ul>
                                        <li>
                                            <i className="fi-rs-smartphone"></i>
                                            <Link href="/#">
                                                <a>(+01) - 2345 - 6789</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="fi-rs-marker"></i>
                                            <Link href="/page-contact">
                                                <a>Our location</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-4">
                                <div className="text-center">
                                    <div
                                        id="news-flash"
                                        className="d-inline-block"
                                    >
                                        <ul>
                                            <li>
                                                Get great devices up to 50% off
                                                <Link href="/products/shop-grid-right">
                                                    <a> View details</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4">
                                <div className="header-info header-info-right">
                                    <ul>
                                        <li>
                                            <Link href="/#">
                                                <a className="language-dropdown-active">
                                                    <i className="fi-rs-world"></i>
                                                    English
                                                    <i className="fi-rs-angle-small-down"></i>
                                                </a>
                                            </Link>
                                            <ul className="language-dropdown">
                                                <li>
                                                    <Link href="/#">
                                                        <a>
                                                            <img
                                                                src="/assets/imgs/theme/flag-fr.png"
                                                                alt=""
                                                            />
                                                            Français
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/#">
                                                        <a>
                                                            <img
                                                                src="/assets/imgs/theme/flag-dt.png"
                                                                alt=""
                                                            />
                                                            Deutsch
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/#">
                                                        <a>
                                                            <img
                                                                src="/assets/imgs/theme/flag-ru.png"
                                                                alt=""
                                                            />
                                                            Pусский
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <i className="fi-rs-user"></i>
                                            <Link href="/page-login-register">
                                                <a>Log In / Sign Up</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
                    <div className="container">
                        <div className="header-wrap">
                            <div className="logo logo-width-1">
                                <Link href="/">
                                    <a>
                                        <img
                                            src="/assets/imgs/theme/logo.svg"
                                            alt="logo"
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="header-right">
                                <div className="search-style-2">
                                    <Search />
                                </div>
                                <div className="header-action-right">
                                    <div className="header-action-2">
                                        <div className="header-action-icon-2">
                                            <Link href="/shop-compare">
                                                <a>
                                                    <img
                                                        className="svgInject"
                                                        alt="Evara"
                                                        src="/assets/imgs/theme/icons/icon-compare.svg"
                                                    />
                                                    <span className="pro-count blue">
                                                        {totalCompareItems}
                                                    </span>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="header-action-icon-2">
                                            <Link href="/shop-wishlist">
                                                <a>
                                                    <img
                                                        className="svgInject"
                                                        alt="Evara"
                                                        src="/assets/imgs/theme/icons/icon-heart.svg"
                                                    />
                                                    <span className="pro-count blue">
                                                        {totalWishlistItems}
                                                    </span>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="header-action-icon-2">
                                            <Link href="/shop-cart">
                                                <a className="mini-cart-icon">
                                                    <img
                                                        alt="Evara"
                                                        src="/assets/imgs/theme/icons/icon-cart.svg"
                                                    />
                                                    <span className="pro-count blue">
                                                        {totalCartItems}
                                                    </span>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={
                        scroll
                            ? "header-bottom header-bottom-bg-color sticky-bar stick"
                            : "header-bottom header-bottom-bg-color sticky-bar"
                    }
                >
                    <div className="container">
                        <div className="header-wrap header-space-between position-relative">
                            <div className="logo logo-width-1 d-block d-lg-none">
                                <Link href="/">
                                    <a>
                                        <img
                                            src="/assets/imgs/theme/logo.svg"
                                            alt="logo"
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="header-nav d-none d-lg-flex">
                                <div className="main-categori-wrap d-none d-lg-block">
                                    <a
                                        className="categori-button-active"
                                        onClick={handleToggle}
                                    >
                                        <span className="fi-rs-apps"></span>
                                        Browse Categories
                                    </a>

                                    <div
                                        className={
                                            isToggled
                                                ? "categori-dropdown-wrap categori-dropdown-active-large open"
                                                : "categori-dropdown-wrap categori-dropdown-active-large"
                                        }
                                    >
                                        <ul>
                                            <li className="has-children">
                                                <Link href="/products/shop-grid-right">
                                                    <a>
                                                        <i className="evara-font-dress"></i>
                                                        Women's Clothing
                                                    </a>
                                                </Link>
                                                <div className="dropdown-menu">
                                                    <ul className="mega-menu d-lg-flex">
                                                        <li className="mega-menu-col col-lg-7">
                                                            <ul className="d-lg-flex">
                                                                <li className="mega-menu-col col-lg-6">
                                                                    <ul>
                                                                        <li>
                                                                            <span className="submenu-title">
                                                                                Hot
                                                                                &
                                                                                Trending
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Dresses
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Blouses
                                                                                    &
                                                                                    Shirts
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Hoodies
                                                                                    &
                                                                                    Sweatshirts
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Women's
                                                                                    Sets
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Suits
                                                                                    &
                                                                                    Blazers
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Bodysuits
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Tanks
                                                                                    &
                                                                                    Camis
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Coats
                                                                                    &
                                                                                    Jackets
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li className="mega-menu-col col-lg-6">
                                                                    <ul>
                                                                        <li>
                                                                            <span className="submenu-title">
                                                                                Bottoms
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Leggings
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Skirts
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Shorts
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Jeans
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Pants
                                                                                    &
                                                                                    Capris
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Bikini
                                                                                    Sets
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Cover-Ups
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Swimwear
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="mega-menu-col col-lg-5">
                                                            <div className="header-banner2">
                                                                <img
                                                                    src="/assets/imgs/banner/menu-banner-2.jpg"
                                                                    alt="menu_banner1"
                                                                />
                                                                <div className="banne_info">
                                                                    <h6>
                                                                        10% Off
                                                                    </h6>
                                                                    <h4>
                                                                        New
                                                                        Arrival
                                                                    </h4>
                                                                    <Link href="/#">
                                                                        <a>
                                                                            Shop
                                                                            now
                                                                        </a>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="header-banner2">
                                                                <img
                                                                    src="/assets/imgs/banner/menu-banner-3.jpg"
                                                                    alt="menu_banner2"
                                                                />
                                                                <div className="banne_info">
                                                                    <h6>
                                                                        15% Off
                                                                    </h6>
                                                                    <h4>
                                                                        Hot
                                                                        Deals
                                                                    </h4>
                                                                    <Link href="/#">
                                                                        <a>
                                                                            Shop
                                                                            now
                                                                        </a>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="has-children">
                                                <Link href="/products/shop-grid-right">
                                                    <a>
                                                        <i className="evara-font-tshirt"></i>
                                                        Men's Clothing
                                                    </a>
                                                </Link>
                                                <div className="dropdown-menu">
                                                    <ul className="mega-menu d-lg-flex">
                                                        <li className="mega-menu-col col-lg-7">
                                                            <ul className="d-lg-flex">
                                                                <li className="mega-menu-col col-lg-6">
                                                                    <ul>
                                                                        <li>
                                                                            <span className="submenu-title">
                                                                                Jackets
                                                                                &
                                                                                Coats
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Down
                                                                                    Jackets
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Jackets
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Parkas
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Faux
                                                                                    Leather
                                                                                    Coats
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Trench
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Wool
                                                                                    &
                                                                                    Blends
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Vests
                                                                                    &
                                                                                    Waistcoats
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Leather
                                                                                    Coats
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li className="mega-menu-col col-lg-6">
                                                                    <ul>
                                                                        <li>
                                                                            <span className="submenu-title">
                                                                                Suits
                                                                                &
                                                                                Blazers
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Blazers
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Suit
                                                                                    Jackets
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Suit
                                                                                    Pants
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Suits
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Vests
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Tailor-made
                                                                                    Suits
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Cover-Ups
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="mega-menu-col col-lg-5">
                                                            <div className="header-banner2">
                                                                <img
                                                                    src="/assets/imgs/banner/menu-banner-4.jpg"
                                                                    alt="menu_banner1"
                                                                />
                                                                <div className="banne_info">
                                                                    <h6>
                                                                        10% Off
                                                                    </h6>
                                                                    <h4>
                                                                        New
                                                                        Arrival
                                                                    </h4>
                                                                    <Link href="/#">
                                                                        <a>
                                                                            Shop
                                                                            now
                                                                        </a>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="has-children">
                                                <Link href="/products/shop-grid-right">
                                                    <a>
                                                        <i className="evara-font-smartphone"></i>
                                                        Cellphones
                                                    </a>
                                                </Link>
                                                <div className="dropdown-menu">
                                                    <ul className="mega-menu d-lg-flex">
                                                        <li className="mega-menu-col col-lg-7">
                                                            <ul className="d-lg-flex">
                                                                <li className="mega-menu-col col-lg-6">
                                                                    <ul>
                                                                        <li>
                                                                            <span className="submenu-title">
                                                                                Hot
                                                                                &
                                                                                Trending
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Cellphones
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    iPhones
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Refurbished
                                                                                    Phones
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Mobile
                                                                                    Phone
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Mobile
                                                                                    Phone
                                                                                    Parts
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Phone
                                                                                    Bags
                                                                                    &
                                                                                    Cases
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Communication
                                                                                    Equipments
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Walkie
                                                                                    Talkie
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li className="mega-menu-col col-lg-6">
                                                                    <ul>
                                                                        <li>
                                                                            <span className="submenu-title">
                                                                                Accessories
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Screen
                                                                                    Protectors
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Wire
                                                                                    Chargers
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Wireless
                                                                                    Chargers
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Car
                                                                                    Chargers
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Power
                                                                                    Bank
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Armbands
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Dust
                                                                                    Plug
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Signal
                                                                                    Boosters
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="mega-menu-col col-lg-5">
                                                            <div className="header-banner2">
                                                                <img
                                                                    src="/assets/imgs/banner/menu-banner-5.jpg"
                                                                    alt="menu_banner1"
                                                                />
                                                                <div className="banne_info">
                                                                    <h6>
                                                                        10% Off
                                                                    </h6>
                                                                    <h4>
                                                                        New
                                                                        Arrival
                                                                    </h4>
                                                                    <Link href="/#">
                                                                        <a>
                                                                            Shop
                                                                            now
                                                                        </a>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="header-banner2">
                                                                <img
                                                                    src="/assets/imgs/banner/menu-banner-6.jpg"
                                                                    alt="menu_banner2"
                                                                />
                                                                <div className="banne_info">
                                                                    <h6>
                                                                        15% Off
                                                                    </h6>
                                                                    <h4>
                                                                        Hot
                                                                        Deals
                                                                    </h4>
                                                                    <Link href="/#">
                                                                        <a>
                                                                            Shop
                                                                            now
                                                                        </a>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <Link href="/products/shop-grid-right">
                                                    <a>
                                                        <i className="evara-font-desktop"></i>
                                                        Computer & Office
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/products/shop-grid-right">
                                                    <a>
                                                        <i className="evara-font-cpu"></i>
                                                        Consumer Electronics
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/products/shop-grid-right">
                                                    <a>
                                                        <i className="evara-font-diamond"></i>
                                                        Jewelry & Accessories
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/products/shop-grid-right">
                                                    <a>
                                                        <i className="evara-font-home"></i>
                                                        Home & Garden
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/products/shop-grid-right">
                                                    <a>
                                                        <i className="evara-font-high-heels"></i>
                                                        Shoes
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/products/shop-grid-right">
                                                    <a>
                                                        <i className="evara-font-teddy-bear"></i>
                                                        Mother & Kids
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/products/shop-grid-right">
                                                    <a>
                                                        <i className="evara-font-kite"></i>
                                                        Outdoor fun
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <ul
                                                    className="more_slide_open"
                                                    style={{ display: "none" }}
                                                >
                                                    <li>
                                                        <Link href="/products/shop-grid-right">
                                                            <a>
                                                                <i className="evara-font-desktop"></i>
                                                                Beauty, Health
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products/shop-grid-right">
                                                            <a>
                                                                <i className="evara-font-cpu"></i>
                                                                Bags and Shoes
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products/shop-grid-right">
                                                            <a>
                                                                <i className="evara-font-diamond"></i>
                                                                Consumer
                                                                Electronics
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products/shop-grid-right">
                                                            <a>
                                                                <i className="evara-font-home"></i>
                                                                Automobiles &
                                                                Motorcycles
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <div className="more_categories">
                                            Show more...
                                        </div>
                                    </div>
                                </div>
                                <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block">
                                    <nav>
                                        <ul>
                                            <li>
                                                <Link href="/">
                                                    <a className="active">
                                                        Home
                                                        <i className="fi-rs-angle-down"></i>
                                                    </a>
                                                </Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link href="/">
                                                            <a>Home 1</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/index-2">
                                                            <a>Home 2</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/index-3">
                                                            <a>Home 3</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/index-4">
                                                            <a>Home 4</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="/page-about">
                                                    <a>About</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/products/shop-grid-right">
                                                    <a>
                                                        Shop
                                                        <i className="fi-rs-angle-down"></i>
                                                    </a>
                                                </Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link href="/products/shop-grid-right">
                                                            <a>
                                                                Shop Grid –
                                                                Right Sidebar
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products/">
                                                            <a>
                                                                Shop Grid – Left
                                                                Sidebar
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products/shop-list-right">
                                                            <a>
                                                                Shop List –
                                                                Right Sidebar
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products/shop-list-left">
                                                            <a>
                                                                Shop List – Left
                                                                Sidebar
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products/shop-fullwidth">
                                                            <a>Shop - Wide</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products/shop-filter">
                                                            <a>Shop - Filter</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/shop-wishlist">
                                                            <a>
                                                                Shop – Wishlist
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/shop-cart">
                                                            <a>Shop – Cart</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/shop-checkout">
                                                            <a>
                                                                Shop – Checkout
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/shop-compare">
                                                            <a>
                                                                Shop – Compare
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="position-static">
                                                <Link href="/#">
                                                    <a>
                                                        Mega menu
                                                        <i className="fi-rs-angle-down"></i>
                                                    </a>
                                                </Link>
                                                <ul className="mega-menu">
                                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                                        <Link href="/#">
                                                            <a className="menu-title">
                                                                Women's Fashion
                                                            </a>
                                                        </Link>
                                                        <ul>
                                                            <li>
                                                                <Link href="/products/shop-grid-right">
                                                                    <a>
                                                                        Dresses
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/products/shop-grid-right">
                                                                    <a>
                                                                        Blouses
                                                                        & Shirts
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/products/shop-grid-right">
                                                                    <a>
                                                                        Hoodies
                                                                        &
                                                                        Sweatshirts
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/products/shop-grid-right">
                                                                    <a>
                                                                        Wedding
                                                                        Dresses
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/products/shop-grid-right">
                                                                    <a>
                                                                        Prom
                                                                        Dresses
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/products/shop-grid-right">
                                                                    <a>
                                                                        Cosplay
                                                                        Costumes
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                                        <Link href="/#">
                                                            <a className="menu-title">
                                                                Men's Fashion
                                                            </a>
                                                        </Link>
                                                        <ul>
                                                            <li>
                                                                <Link href="/products/shop-grid-right">
                                                                    <a>
                                                                        Jackets
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/products/shop-grid-right">
                                                                    <a>
                                                                        Casual
                                                                        Faux
                                                                        Leather
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/products/shop-grid-right">
                                                                    <a>
                                                                        Genuine
                                                                        Leather
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/products/shop-grid-right">
                                                                    <a>
                                                                        Casual
                                                                        Pants
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/products/shop-grid-right">
                                                                    <a>
                                                                        Sweatpants
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/products/shop-grid-right">
                                                                    <a>
                                                                        Harem
                                                                        Pants
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                                        <Link href="/#">
                                                            <a className="menu-title">
                                                                Technology
                                                            </a>
                                                        </Link>
                                                        <ul>
                                                            <li>
                                                                <Link href="/products/shop-grid-right">
                                                                    <a>
                                                                        Gaming
                                                                        Laptops
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/products/shop-grid-right">
                                                                    <a>
                                                                        Ultraslim
                                                                        Laptops
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/products/shop-grid-right">
                                                                    <a>
                                                                        Tablets
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/products/shop-grid-right">
                                                                    <a>
                                                                        Laptop
                                                                        Accessories
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/products/shop-grid-right">
                                                                    <a>
                                                                        Tablet
                                                                        Accessories
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="sub-mega-menu sub-mega-menu-width-34">
                                                        <div className="menu-banner-wrap">
                                                            <Link href="/products/shop-grid-right">
                                                                <a>
                                                                    <img
                                                                        src="/assets/imgs/banner/menu-banner.jpg"
                                                                        alt="Evara"
                                                                    />
                                                                </a>
                                                            </Link>
                                                            <div className="menu-banner-content">
                                                                <h4>
                                                                    Hot deals
                                                                </h4>
                                                                <h3>
                                                                    Don't miss
                                                                    <br />
                                                                    Trending
                                                                </h3>
                                                                <div className="menu-banner-price">
                                                                    <span className="new-price text-success">
                                                                        Save to
                                                                        50%
                                                                    </span>
                                                                </div>
                                                                <div className="menu-banner-btn">
                                                                    <Link href="/products/shop-grid-right">
                                                                        <a>
                                                                            Shop
                                                                            now
                                                                        </a>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="menu-banner-discount">
                                                                <h3>
                                                                    <span>
                                                                        35%
                                                                    </span>
                                                                    off
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="/blog-category-grid">
                                                    <a>
                                                        Blog
                                                        <i className="fi-rs-angle-down"></i>
                                                    </a>
                                                </Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link href="/blog-category-grid">
                                                            <a>
                                                                Blog Category
                                                                Grid
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/blog-category-list">
                                                            <a>
                                                                Blog Category
                                                                List
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/blog-category-big">
                                                            <a>
                                                                Blog Category
                                                                Big
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/blog-category-fullwidth">
                                                            <a>
                                                                Blog Category
                                                                Wide
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/#">
                                                            <a>
                                                                Single Post
                                                                <i className="fi-rs-angle-right"></i>
                                                            </a>
                                                        </Link>
                                                        <ul className="level-menu level-menu-modify">
                                                            <li>
                                                                <Link href="/blog-post-left">
                                                                    <a>
                                                                        Left
                                                                        Sidebar
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/blog-post-right">
                                                                    <a>
                                                                        Right
                                                                        Sidebar
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/blog-post-fullwidth">
                                                                    <a>
                                                                        No
                                                                        Sidebar
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a>
                                                        Pages
                                                        <i className="fi-rs-angle-down"></i>
                                                    </a>
                                                </Link>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link href="/page-about">
                                                            <a>About Us</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-contact">
                                                            <a>Contact</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-account">
                                                            <a>My Account</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-login-register">
                                                            <a>
                                                                login/register
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-purchase-guide">
                                                            <a>
                                                                Purchase Guide
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-privacy-policy">
                                                            <a>
                                                                Privacy Policy
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-terms">
                                                            <a>
                                                                Terms of Service
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/page-404">
                                                            <a>404 Page</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="/page-contact">
                                                    <a>Contact</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="hotline d-none d-lg-block">
                                <p>
                                    <i className="fi-rs-headset"></i>
                                    <span>Hotline</span> 1900 - 888
                                </p>
                            </div>
                            <p className="mobile-promotion">
                                Happy
                                <span className="text-brand">Mother's Day</span>
                                . Big Sale Up to 40%
                            </p>
                            <div className="header-action-right d-block d-lg-none">
                                <div className="header-action-2">
                                    <div className="header-action-icon-2">
                                        <Link href="/shop-wishlist">
                                            <a>
                                                <img
                                                    alt="Evara"
                                                    src="/assets/imgs/theme/icons/icon-compare.svg"
                                                />
                                                <span className="pro-count white">
                                                    {totalCompareItems}
                                                </span>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="header-action-icon-2">
                                        <Link href="/shop-wishlist">
                                            <a>
                                                <img
                                                    alt="Evara"
                                                    src="/assets/imgs/theme/icons/icon-heart.svg"
                                                />
                                                <span className="pro-count white">
                                                    {totalWishlistItems}
                                                </span>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="header-action-icon-2">
                                        <Link href="/shop-cart">
                                            <a className="mini-cart-icon">
                                                <img
                                                    alt="Evara"
                                                    src="/assets/imgs/theme/icons/icon-cart.svg"
                                                />
                                                <span className="pro-count white">
                                                    {totalCartItems}
                                                </span>
                                            </a>
                                        </Link>
                                        <div className="cart-dropdown-wrap cart-dropdown-hm2">
                                            <ul>
                                                <li>
                                                    <div className="shopping-cart-img">
                                                        <Link href="/products/shop-grid-right">
                                                            <a>
                                                                <img
                                                                    alt="Evara"
                                                                    src="/assets/imgs/shop/thumbnail-3.jpg"
                                                                />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="shopping-cart-title">
                                                        <h4>
                                                            <Link href="/products/shop-grid-right">
                                                                <a>
                                                                    Plain
                                                                    Striola
                                                                    Shirts
                                                                </a>
                                                            </Link>
                                                        </h4>
                                                        <h3>
                                                            <span>1 × </span>
                                                            $800.00
                                                        </h3>
                                                    </div>
                                                    <div className="shopping-cart-delete">
                                                        <Link href="/#">
                                                            <a>
                                                                <i className="fi-rs-cross-small"></i>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="shopping-cart-img">
                                                        <Link href="/products/shop-grid-right">
                                                            <a>
                                                                <img
                                                                    alt="Evara"
                                                                    src="/assets/imgs/shop/thumbnail-4.jpg"
                                                                />
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="shopping-cart-title">
                                                        <h4>
                                                            <Link href="/products/shop-grid-right">
                                                                <a>
                                                                    Macbook Pro
                                                                    2022
                                                                </a>
                                                            </Link>
                                                        </h4>
                                                        <h3>
                                                            <span>1 × </span>
                                                            $3500.00
                                                        </h3>
                                                    </div>
                                                    <div className="shopping-cart-delete">
                                                        <Link href="/#">
                                                            <a>
                                                                <i className="fi-rs-cross-small"></i>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="shopping-cart-footer">
                                                <div className="shopping-cart-total">
                                                    <h4>
                                                        Total
                                                        <span>$383.00</span>
                                                    </h4>
                                                </div>
                                                <div className="shopping-cart-button">
                                                    <Link href="/shop-cart">
                                                        <a>View cart</a>
                                                    </Link>
                                                    <Link href="/shop-checkout">
                                                        <a>Checkout</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="header-action-icon-2 d-block d-lg-none">
                                        <div
                                            className="burger-icon burger-icon-white"
                                            onClick={toggleClick}
                                        >
                                            <span className="burger-icon-top"></span>
                                            <span className="burger-icon-mid"></span>
                                            <span className="burger-icon-bottom"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

const mapStateToProps = (state) => ({
    totalCartItems: state.cart.length,
    totalCompareItems: state.compare.items.length,
    totalWishlistItems: state.wishlist.items.length,
});

export default connect(mapStateToProps, null)(Header);
