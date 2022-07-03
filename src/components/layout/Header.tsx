import Link from 'next/link';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Search from '../resources/Search';
import Image from 'next/image';
import Menu from './Menu';
import { IHeader } from '../../../types';

const Header = ({
  configHeader,
  configInfo,
  configLanguages,
  menu,
  totalCartItems,
  totalCompareItems,
  toggleClick,
  totalSavedItems,
  headerStyle,
}: IHeader) => {
  const [isToggled, setToggled] = useState<boolean>(false);
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    document.addEventListener('scroll', () => {
      const scrollCheck = window.scrollY >= 100;
      if (isMounted && scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });

    return () => {
      isMounted = false;
    };
  });

  const handleToggle = () => setToggled(!isToggled);

  return (
    // <header className={`header-area ${headerStyle} header-height-2`}>
    <header className={`header-area header-height-2`}>
      {configHeader.showHeaderTop && (
        <div className="header-top header-top-ptb-1 d-none d-lg-block">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-4">
                <div className="header-info">
                  <ul>
                    {configHeader.top.showPhone && (
                      <li>
                        <i className="fi-rs-smartphone"></i>
                        <Link href="/#">
                          <a>{configInfo.phone}</a>
                        </Link>
                      </li>
                    )}

                    {configHeader.top.showLocation && (
                      <li>
                        <i className="fi-rs-marker"></i>
                        <Link href="/contact">
                          <a>Our location</a>
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {configHeader.top.showNewsflash && (
                <div className="col-xl-6 col-lg-4">
                  <div className="text-center">
                    <div id="news-flash" className="d-inline-block">
                      <ul>
                        <li>
                          {configHeader.top.newsflash.text}
                          <Link href={configHeader.top.newsflash.href}>
                            <a>{configHeader.top.newsflash.callToAction}</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              <div className="col-xl-3 col-lg-4">
                <div className="header-info header-info-right">
                  <ul>
                    {/* Languages */}
                    {configHeader.top.showLanguages && (
                      <li>
                        <Link href="/#">
                          <a className="language-dropdown-active">
                            <i className="fi-rs-world"></i>
                            English
                            <i className="fi-rs-angle-small-down"></i>
                          </a>
                        </Link>
                        <ul className="language-dropdown">
                          {configLanguages.map((language, idx) => {
                            return (
                              <li key={idx}>
                                <Link href={language.href ?? '/#'}>
                                  <a>
                                    <Image
                                      src={language.flag}
                                      alt={language.label}
                                      layout={'responsive'}
                                      width={language.flagWidth}
                                      height={language.flagHeight}
                                    />
                                    {language.label}
                                  </a>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    )}

                    {configHeader.top.showLoginSignup && (
                      <li>
                        <i className="fi-rs-user"></i>
                        <Link href="/">
                          <a>Log In / Sign Up</a>
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {configHeader.showHeaderMiddle && (
        <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
          <div className="container">
            <div className="header-wrap">
              {/* Logo */}
              <div className="logo logo-width-1">
                <Link href="/">
                  <a>
                    <div style={{ width: configInfo.logoWidth }}>
                      <Image
                        src={configInfo.logo}
                        alt={configInfo.companyName + ' Logo'}
                        layout={'responsive'}
                        width={configInfo.logoWidth}
                        height={configInfo.logoHeight}
                      />
                    </div>
                  </a>
                </Link>
              </div>
              <div className="header-right">
                {/* Search */}
                {configHeader.middle.showSearch && (
                  <div className="search-style-2">
                    <Search />
                  </div>
                )}

                {/* Compare, Cart & Saved Icons */}
                {configHeader.middle.showCompareCartSaved === true && (
                  <div className="header-action-right">
                    <div className="header-action-2">
                      <div className="header-action-icon-2">
                        <Link href="/">
                          <a>
                            <Image
                              className="svgInject"
                              alt="Compare"
                              src="/assets/images/theme/icons/icon-compare.svg"
                              layout={'responsive'}
                              width={25}
                              height={25}
                            />
                            <span className="pro-count blue">{totalCompareItems}</span>
                          </a>
                        </Link>
                      </div>
                      <div className="header-action-icon-2">
                        <Link href="/">
                          <a className="mini-cart-icon">
                            <Image
                              alt="Cart"
                              src="/assets/images/theme/icons/icon-cart.svg"
                              layout={'responsive'}
                              width={25}
                              height={25}
                            />
                            <span className="pro-count blue">{totalCartItems}</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {configHeader.showHeaderBottom && (
        <div
          className={
            scroll
              ? 'header-bottom header-bottom-bg-color sticky-bar stick'
              : 'header-bottom header-bottom-bg-color sticky-bar'
          }
        >
          <div className="container">
            <div className="header-wrap header-space-between position-relative">
              {/* Logo */}
              <div className="logo logo-width-1 d-block d-lg-none">
                <Link href="/">
                  <a>
                    <div style={{ margin: '0.8em 0', width: '250px' }}>
                      <Image
                        src={configInfo.logo}
                        alt={configInfo.companyName + ' Logo'}
                        layout={'responsive'}
                        width={configInfo.logoWidth}
                        height={configInfo.logoHeight}
                      />
                    </div>
                  </a>
                </Link>
              </div>

              <div className="header-nav d-none d-lg-flex flex-fill">
                {/* Logo */}
                <div className="main-category-wrap d-none d-lg-block logo logo-width-1">
                  <Link href="/">
                    <a>
                      <div style={{ margin: '0.8em 0', width: '250px' }}>
                        <Image
                          src={configInfo.logo}
                          alt={configInfo.companyName + ' Logo'}
                          layout={'responsive'}
                          width={configInfo.logoWidth}
                          height={configInfo.logoHeight}
                        />
                      </div>
                    </a>
                  </Link>
                </div>

                {/* Browse Categories */}
                {configHeader.bottom.showBrowseCategories && (
                  <div className="main-category-wrap d-none d-lg-block">
                    <a className="category-button-active" onClick={handleToggle}>
                      <span className="fi-rs-apps"></span>
                      Browse Categories
                    </a>

                    <div
                      className={
                        isToggled
                          ? 'category-dropdown-wrap category-dropdown-active-large open'
                          : 'category-dropdown-wrap category-dropdown-active-large'
                      }
                    >
                      <ul>
                        <li className="has-children">
                          <Link href="/">
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
                                        <span className="submenu-title">Hot & Trending</span>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="dropdown-item nav-link nav_item">Dresses</a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="dropdown-item nav-link nav_item">
                                            Blouses & Shirts
                                          </a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="dropdown-item nav-link nav_item">
                                            Hoodies & Sweatshirts
                                          </a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="dropdown-item nav-link nav_item">
                                            Women's Sets
                                          </a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="dropdown-item nav-link nav_item">
                                            Suits & Blazers
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
                                            Tanks & Camis
                                          </a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="dropdown-item nav-link nav_item">
                                            Coats & Jackets
                                          </a>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="mega-menu-col col-lg-6">
                                    <ul>
                                      <li>
                                        <span className="submenu-title">Bottoms</span>
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
                                          <a className="dropdown-item nav-link nav_item">Skirts</a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="dropdown-item nav-link nav_item">Shorts</a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="dropdown-item nav-link nav_item">Jeans</a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="dropdown-item nav-link nav_item">
                                            Pants & Capris
                                          </a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="dropdown-item nav-link nav_item">
                                            Bikini Sets
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
                                  <Image
                                    src="/assets/images/banner/menu-banner-2.jpg"
                                    alt="menu_banner1"
                                    layout={'responsive'}
                                    width={370}
                                    height={200}
                                  />
                                  <div className="banner_infoConfig">
                                    <h6>10% Off</h6>
                                    <h4>New Arrival</h4>
                                    <Link href="/#">
                                      <a>Shop now</a>
                                    </Link>
                                  </div>
                                </div>
                                <div className="header-banner2">
                                  <Image
                                    src="/assets/images/banner/menu-banner-3.jpg"
                                    alt="menu_banner2"
                                    layout={'responsive'}
                                    width={370}
                                    height={200}
                                  />
                                  <div className="banner_infoConfig">
                                    <h6>15% Off</h6>
                                    <h4>Hot Deals</h4>
                                    <Link href="/#">
                                      <a>Shop now</a>
                                    </Link>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="has-children">
                          <Link href="/">
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
                                        <span className="submenu-title">Jackets & Coats</span>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="dropdown-item nav-link nav_item">
                                            Down Jackets
                                          </a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="dropdown-item nav-link nav_item">Jackets</a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="dropdown-item nav-link nav_item">Parkas</a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="dropdown-item nav-link nav_item">
                                            Faux Leather Coats
                                          </a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="dropdown-item nav-link nav_item">Trench</a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="dropdown-item nav-link nav_item">
                                            Wool & Blends
                                          </a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="dropdown-item nav-link nav_item">
                                            Vests & Waistcoats
                                          </a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="dropdown-item nav-link nav_item">
                                            Leather Coats
                                          </a>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="mega-menu-col col-lg-6">
                                    <ul>
                                      <li>
                                        <span className="submenu-title">Suits & Blazers</span>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="dropdown-item nav-link nav_item">Blazers</a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="dropdown-item nav-link nav_item">
                                            Suit Jackets
                                          </a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="dropdown-item nav-link nav_item">
                                            Suit Pants
                                          </a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="dropdown-item nav-link nav_item">Suits</a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="dropdown-item nav-link nav_item">Vests</a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="dropdown-item nav-link nav_item">
                                            Tailor-made Suits
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
                                <div className="header-banner2" style={{ width: '100%' }}>
                                  <Image
                                    src="/assets/images/banner/menu-banner-4.jpg"
                                    alt="menu_banner1"
                                    layout={'responsive'}
                                    width={1320}
                                    height={300}
                                  />
                                  <div className="banner_infoConfig">
                                    <h6>10% Off</h6>
                                    <h4>New Arrival</h4>
                                    <Link href="/#">
                                      <a>Shop now</a>
                                    </Link>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="has-children">
                          <Link href="/">
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
                                        <span className="submenu-title">Hot & Trending</span>
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
                                          <a className="dropdown-item nav-link nav_item">iPhones</a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="dropdown-item nav-link nav_item">
                                            Refurbished Phones
                                          </a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="dropdown-item nav-link nav_item">
                                            Mobile Phone
                                          </a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="dropdown-item nav-link nav_item">
                                            Mobile Phone Parts
                                          </a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="dropdown-item nav-link nav_item">
                                            Phone Bags & Cases
                                          </a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="dropdown-item nav-link nav_item">
                                            Communication Equipments
                                          </a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="dropdown-item nav-link nav_item">
                                            Walkie Talkie
                                          </a>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="mega-menu-col col-lg-6">
                                    <ul>
                                      <li>
                                        <span className="submenu-title">Accessories</span>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="dropdown-item nav-link nav_item">
                                            Screen Protectors
                                          </a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="dropdown-item nav-link nav_item">
                                            Wire Chargers
                                          </a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="dropdown-item nav-link nav_item">
                                            Wireless Chargers
                                          </a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="dropdown-item nav-link nav_item">
                                            Car Chargers
                                          </a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="dropdown-item nav-link nav_item">
                                            Power Bank
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
                                            Dust Plug
                                          </a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="/#">
                                          <a className="dropdown-item nav-link nav_item">
                                            Signal Boosters
                                          </a>
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li className="mega-menu-col col-lg-5">
                                <div className="header-banner2">
                                  <Image
                                    src="/assets/images/banner/menu-banner-5.jpg"
                                    alt="menu_banner1"
                                    layout={'responsive'}
                                    width={370}
                                    height={200}
                                  />
                                  <div className="banner_infoConfig">
                                    <h6>10% Off</h6>
                                    <h4>New Arrival</h4>
                                    <Link href="/#">
                                      <a>Shop now</a>
                                    </Link>
                                  </div>
                                </div>
                                <div className="header-banner2">
                                  <Image
                                    src="/assets/images/banner/menu-banner-6.jpg"
                                    alt="menu_banner2"
                                    layout={'responsive'}
                                    width={370}
                                    height={200}
                                  />
                                  <div className="banner_infoConfig">
                                    <h6>15% Off</h6>
                                    <h4>Hot Deals</h4>
                                    <Link href="/#">
                                      <a>Shop now</a>
                                    </Link>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <Link href="/">
                            <a>
                              <i className="evara-font-desktop"></i>
                              Computer & Office
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <a>
                              <i className="evara-font-cpu"></i>
                              Consumer Electronics
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <a>
                              <i className="evara-font-diamond"></i>
                              Jewelry & Accessories
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <a>
                              <i className="evara-font-home"></i>
                              Home & Garden
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <a>
                              <i className="evara-font-high-heels"></i>
                              Shoes
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <a>
                              <i className="evara-font-teddy-bear"></i>
                              Mother & Kids
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <a>
                              <i className="evara-font-kite"></i>
                              Outdoor fun
                            </a>
                          </Link>
                        </li>
                        <li>
                          <ul className="more_slide_open" style={{ display: 'none' }}>
                            <li>
                              <Link href="/">
                                <a>
                                  <i className="evara-font-desktop"></i>
                                  Beauty, Health
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/">
                                <a>
                                  <i className="evara-font-cpu"></i>
                                  Bags and Shoes
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/">
                                <a>
                                  <i className="evara-font-diamond"></i>
                                  Consumer Electronics
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/">
                                <a>
                                  <i className="evara-font-home"></i>
                                  Automobiles & Motorcycles
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <div className="more_categories">Show more...</div>
                    </div>
                  </div>
                )}

                {/* Menu/Navbar Items */}
                <Menu menu={menu} />
              </div>
              {configHeader.bottom.showHotline && (
                <div className="hotline d-none d-lg-block">
                  <p>
                    <i className="fi-rs-headset"></i>
                    <span>Hotline</span> 1900 - 888
                  </p>
                </div>
              )}
              {configHeader.bottom.showMobilePromo && (
                <p className="mobile-promotion">
                  Happy
                  <span className="text-brand">Mother's Day</span>. Big Sale Up to 40%
                </p>
              )}

              <div className="header-action-right d-block d-lg-none">
                <div className="header-action-2">
                  {configHeader.bottom.showIconCompare && (
                    <div className="header-action-icon-2">
                      <Link href="/saved">
                        <a>
                          <Image
                            alt="Compare Items"
                            src="/assets/images/theme/icons/icon-compare.svg"
                            layout="responsive"
                            width={25}
                            height={25}
                          />
                          <span className="pro-count white">{totalCompareItems}</span>
                        </a>
                      </Link>
                    </div>
                  )}

                  {configHeader.bottom.showIconSaved && (
                    <div className="header-action-icon-2">
                      <Link href="/saved">
                        <a>
                          <Image
                            alt="Saved Items"
                            src="/assets/images/theme/icons/icon-heart.svg"
                            layout="responsive"
                            width={25}
                            height={25}
                          />
                          <span className="pro-count white">{totalSavedItems}</span>
                        </a>
                      </Link>
                    </div>
                  )}

                  {configHeader.bottom.showIconCart && (
                    <div className="header-action-icon-2">
                      <Link href="/">
                        <a className="mini-cart-icon">
                          <Image
                            alt="OpenSFT"
                            src="/assets/images/theme/icons/icon-cart.svg"
                            layout="responsive"
                            width={25}
                            height={25}
                          />
                          <span className="pro-count white">{totalCartItems}</span>
                        </a>
                      </Link>
                      <div className="cart-dropdown-wrap cart-dropdown-hm2">
                        <ul>
                          <li>
                            <div className="shopping-cart-img">
                              <Link href="/">
                                <a>
                                  <Image
                                    alt="Cart"
                                    src="/assets/images/shop/thumbnail-3.jpg"
                                    layout={'responsive'}
                                    width={600}
                                    height={600}
                                  />
                                </a>
                              </Link>
                            </div>
                            <div className="shopping-cart-title">
                              <h4>
                                <Link href="/">
                                  <a>Plain Striola Shirts</a>
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
                              <Link href="/">
                                <a>
                                  <Image
                                    alt="OpenSFT"
                                    src="/assets/images/shop/thumbnail-4.jpg"
                                    layout={'responsive'}
                                    width={600}
                                    height={600}
                                  />
                                </a>
                              </Link>
                            </div>
                            <div className="shopping-cart-title">
                              <h4>
                                <Link href="/">
                                  <a>Macbook Pro 2022</a>
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
                            <Link href="/">
                              <a>View cart</a>
                            </Link>
                            <Link href="/">
                              <a>Checkout</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="header-action-icon-2 d-block d-lg-none">
                    <div className="burger-icon burger-icon-white" onClick={toggleClick}>
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
      )}
    </header>
  );
};

const mapStateToProps = (state) => ({
  totalCartItems: state.cart.length,
  totalCompareItems: state.compare.items.length,
  totalSavedItems: state.wishlist.items.length,
});

export default connect(mapStateToProps, null)(Header);
