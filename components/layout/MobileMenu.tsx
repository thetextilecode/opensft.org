import React, { useState } from "react";

import useClickOutside from "../../util/outsideClick";
import Link from "next/link";

const MobileMenu = ({ isToggled, toggleClick }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    let domNode = useClickOutside(() => {
        setIsActive({
            status: false,
        });
    });
    return (
        <>
            <div class={isToggled ? "mobile-header-active mobile-header-wrapper-style sidebar-visible" : "mobile-header-active mobile-header-wrapper-style"}>
                <div class="mobile-header-wrapper-inner">
                    <div class="mobile-header-top">
                        <div class="mobile-header-logo">
                            <Link href="/index">
                                <a>
                                    <img src="/assets/imgs/theme/logo.svg" alt="logo" />
                                </a>
                            </Link>
                        </div>
                        <div class="mobile-menu-close close-style-wrap close-style-position-inherit">
                            <button class="close-style search-close" onClick={toggleClick}>
                                <i class="icon-top"></i>
                                <i class="icon-bottom"></i>
                            </button>
                        </div>
                    </div>
                    <div class="mobile-header-content-area">
                        <div class="mobile-search search-style-3 mobile-header-border">
                            <form action="#">
                                <input type="text" placeholder="Search for items…" />
                                <button type="submit">
                                    <i class="fi-rs-search"></i>
                                </button>
                            </form>
                        </div>
                        <div class="mobile-menu-wrap mobile-header-border">
                            <div class="main-categori-wrap mobile-header-border">
                                <Link href="#">
                                    <a class="categori-button-active-2">
                                        <span class="fi-rs-apps"></span> Browse Categories
                                    </a>
                                </Link>
                                <div class="categori-dropdown-wrap categori-dropdown-active-small">
                                    <ul>
                                        <li>
                                            <Link href="/products/shop-grid-right">
                                                <a>
                                                    <i class="evara-font-dress"></i>
                                                    Women's Clothing
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/products/shop-grid-right">
                                                <a>
                                                    <i class="evara-font-tshirt"></i>
                                                    Men's Clothing
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            {" "}
                                            <Link href="/products/shop-grid-right">
                                                <a>
                                                    <i class="evara-font-smartphone"></i> Cellphones
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/products/shop-grid-right">
                                                <a>
                                                    <i class="evara-font-desktop"></i>
                                                    Computer & Office
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/products/shop-grid-right">
                                                <a>
                                                    <i class="evara-font-cpu"></i>
                                                    Consumer Electronics
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/products/shop-grid-right">
                                                <a>
                                                    <i class="evara-font-home"></i>
                                                    Home & Garden
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/products/shop-grid-right">
                                                <a>
                                                    <i class="evara-font-high-heels"></i>
                                                    Shoes
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/products/shop-grid-right">
                                                <a>
                                                    <i class="evara-font-teddy-bear"></i>
                                                    Mother & Kids
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/products/shop-grid-right">
                                                <a>
                                                    <i class="evara-font-kite"></i>
                                                    Outdoor fun
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <nav>
                                <ul class="mobile-menu" ref={domNode}>
                                    <li class={isActive.key == 1 ? "menu-item-has-children active" : "menu-item-has-children"}>
                                        <span class="menu-expand" onClick={() => handleToggle(1)}>
                                            <i class="fi-rs-angle-small-down"></i>
                                        </span>
                                        <Link href="/index">
                                            <a>Home</a>
                                        </Link>
                                        <ul class={isActive.key == 1 ? "dropdown" : "d-none"}>
                                            <li>
                                                <Link href="/index">
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
                                    <li class={isActive.key == 2 ? "menu-item-has-children active" : "menu-item-has-children"}>
                                        <span class="menu-expand" onClick={() => handleToggle(2)}>
                                            <i class="fi-rs-angle-small-down"></i>
                                        </span>
                                        <Link href="/products/shop-grid-right">
                                            <a>shop</a>
                                        </Link>
                                        <ul class={isActive.key == 2 ? "dropdown" : "d-none"}>
                                            <li>
                                                <Link href="/products/shop-grid-right">
                                                    <a>Shop Grid – Right Sidebar</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/products/products">
                                                    <a>Shop Grid – Left Sidebar</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/products/shop-list-right">
                                                    <a>Shop List – Right Sidebar</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/products/shop-list-left">
                                                    <a>Shop List – Left Sidebar</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/products/shop-fullwidth">
                                                    <a>Shop - Wide</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/shop-filter">
                                                    <a>Shop – Filter</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/shop-wishlist">
                                                    <a>Shop – Wishlist</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/shop-cart">
                                                    <a>Shop – Cart</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/shop-checkout">
                                                    <a>Shop – Checkout</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/shop-compare">
                                                    <a>Shop – Compare</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class={isActive.key == 3 ? "menu-item-has-children active" : "menu-item-has-children"}>
                                        <span class="menu-expand" onClick={() => handleToggle(3)}>
                                            <i class="fi-rs-angle-small-down"></i>
                                        </span>
                                        <Link href="#">
                                            <a>Mega menu</a>
                                        </Link>
                                        <ul class={isActive.key == 3 ? "dropdown" : "d-none"}>
                                            <li class="menu-item-has-children">
                                                <span class="menu-expand"></span>
                                                <Link href="#">
                                                    <a>Women's Fashion</a>
                                                </Link>
                                                <ul class="dropdown">
                                                    <li>
                                                        <Link href="/products/shop-grid-right">
                                                            <a>Dresses</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products/shop-grid-right">
                                                            <a>Blouses & Shirts</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products/shop-grid-right">
                                                            <a>Hoodies & Sweatshirts</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products/shop-grid-right">
                                                            <a>Women's Sets</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children">
                                                <span class="menu-expand"></span>
                                                <Link href="#">
                                                    <a>Men's Fashion</a>
                                                </Link>
                                                <ul class="dropdown">
                                                    <li>
                                                        <Link href="/products/shop-grid-right">
                                                            <a>Jackets</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products/shop-grid-right">
                                                            <a>Casual Faux Leather</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products/shop-grid-right">
                                                            <a>Genuine Leather</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children">
                                                <span class="menu-expand"></span>
                                                <Link href="#">
                                                    <a>Technology</a>
                                                </Link>
                                                <ul class="dropdown">
                                                    <li>
                                                        <Link href="/products/shop-grid-right">
                                                            <a>Gaming Laptops</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products/shop-grid-right">
                                                            <a>Ultraslim Laptops</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products/shop-grid-right">
                                                            <a>Tablets</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products/shop-grid-right">
                                                            <a>Laptop Accessories</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products/shop-grid-right">
                                                            <a>Tablet Accessories</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class={isActive.key == 4 ? "menu-item-has-children active" : "menu-item-has-children"}>
                                        <span class="menu-expand" onClick={() => handleToggle(4)}>
                                            <i class="fi-rs-angle-small-down"></i>
                                        </span>
                                        <Link href="/blog-category-fullwidth">
                                            <a>Blog</a>
                                        </Link>
                                        <ul class={isActive.key == 4 ? "dropdown" : "d-none"}>
                                            <li>
                                                <Link href="/blog-category-grid">
                                                    <a>Blog Category Grid</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/blog-category-list">
                                                    <a>Blog Category List</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/blog-category-big">
                                                    <a>Blog Category Big</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/blog-category-fullwidth">
                                                    <a>Blog Category Wide</a>
                                                </Link>
                                            </li>
                                            <li class="menu-item-has-children">
                                                <span class="menu-expand"></span>
                                                <Link href="#">
                                                    <a>Single Product Layout</a>
                                                </Link>
                                                <ul class="dropdown">
                                                    <li>
                                                        <Link href="/blog-post-left">
                                                            <a>Left Sidebar</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/blog-post-right">
                                                            <a>Right Sidebar</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/blog-post-fullwidth">
                                                            <a>No Sidebar</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class={isActive.key == 5 ? "menu-item-has-children active" : "menu-item-has-children"}>
                                        <span class="menu-expand" onClick={() => handleToggle(5)}>
                                            <i class="fi-rs-angle-small-down"></i>
                                        </span>
                                        <Link href="#">
                                            <a>Pages</a>
                                        </Link>
                                        <ul class={isActive.key == 5 ? "dropdown" : "d-none"}>
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
                                                    <a>login/register</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/page-purchase-guide">
                                                    <a>Purchase Guide</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/page-privacy-policy">
                                                    <a>Privacy Policy</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/page-terms">
                                                    <a>Terms of Service</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/page-404">
                                                    <a>404 Page</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class={isActive.key == 6 ? "menu-item-has-children active" : "menu-item-has-children"}>
                                        <span class="menu-expand" onClick={() => handleToggle(6)}>
                                            <i class="fi-rs-angle-small-down"></i>
                                        </span>
                                        <Link href="#">
                                            <a>Language</a>
                                        </Link>
                                        <ul class={isActive.key == 6 ? "dropdown" : "d-none"}>
                                            <li>
                                                <Link href="#">
                                                    <a>English</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a>French</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a>German</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a>Spanish</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div class="mobile-header-info-wrap mobile-header-border">
                            <div class="single-mobile-header-info mt-30">
                                <Link href="/page-contact">
                                    <a> Our location </a>
                                </Link>
                            </div>
                            <div class="single-mobile-header-info">
                                <Link href="/page-login-register">
                                    <a>Log In / Sign Up </a>
                                </Link>
                            </div>
                            <div class="single-mobile-header-info">
                                <Link href="#">
                                    <a>(+01) - 2345 - 6789 </a>
                                </Link>
                            </div>
                        </div>
                        <div class="mobile-social-icon">
                            <h5 class="mb-15 text-grey-4">Follow Us</h5>
                            <Link href="#">
                                <a>
                                    <img src="/assets/imgs/theme/icons/icon-facebook.svg" alt="" />
                                </a>
                            </Link>
                            <Link href="#">
                                <a>
                                    <img src="/assets/imgs/theme/icons/icon-twitter.svg" alt="" />
                                </a>
                            </Link>
                            <Link href="#">
                                <a>
                                    <img src="/assets/imgs/theme/icons/icon-instagram.svg" alt="" />
                                </a>
                            </Link>
                            <Link href="#">
                                <a>
                                    <img src="/assets/imgs/theme/icons/icon-pinterest.svg" alt="" />
                                </a>
                            </Link>
                            <Link href="#">
                                <a>
                                    <img src="/assets/imgs/theme/icons/icon-youtube.svg" alt="" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
