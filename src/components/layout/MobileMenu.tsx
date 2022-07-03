import { useState } from 'react';
import useClickOutside from '../../lib/outsideClick';
import Link from 'next/link';
import Image from 'next/image';
import { IMenu } from '../../../types';
import SocialIcons from '../elements/SocialIcons';

export interface IMobileMenu {
  configFooter?: any;
  configHeader?: any;
  configInfo: any;
  configMobile: any;
  configSocial: any;
  menu?: IMenu[];
  isToggled?: boolean;
  toggleClick?: any;
}

const MobileMenu = ({
  configInfo,
  configMobile,
  configSocial,
  menu,
  isToggled,
  toggleClick,
}: IMobileMenu) => {
  const [isActive, setIsActive] = useState<{ status: boolean; key?: any }>({
    status: false,
    key: '',
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
    <div
      className={
        isToggled
          ? 'mobile-header-active mobile-header-wrapper-style sidebar-visible'
          : 'mobile-header-active mobile-header-wrapper-style'
      }
    >
      <div className="mobile-header-wrapper-inner">
        <div className="mobile-header-top">
          <div className="mobile-header-logo">
            {/* MOBILE LOGO */}
            <Link href="/index">
              <a>
                <Image
                  src="/assets/images/logo/logo-combined-clear-sm.png"
                  alt="logo"
                  width={250}
                  height={68}
                />
              </a>
            </Link>
          </div>

          {/* TOGGLE MENU/SEARCH */}
          <div className="mobile-menu-close close-style-wrap close-style-position-inherit">
            <button className="close-style search-close" onClick={toggleClick}>
              <i className="icon-top"></i>
              <i className="icon-bottom"></i>
            </button>
          </div>
        </div>

        <div className="mobile-header-content-area">
          {/* SEARCH */}
          {configMobile.showSearch && (
            <div className="mobile-search search-style-3 mobile-header-border">
              <form action="src/components/layout/MobileMenu#">
                <input type="text" placeholder="Search for items…" />
                <button type="submit">
                  <i className="fi-rs-search"></i>
                </button>
              </form>
            </div>
          )}

          <div className="mobile-menu-wrap mobile-header-border">
            {/* BROWSE CATEGORIES */}
            {configMobile.showCategories && (
              <div className="main-category-wrap mobile-header-border">
                <Link href="src/components/layout/MobileMenu#">
                  <a className="category-button-active-2">
                    <span className="fi-rs-apps"></span> Browse Categories
                  </a>
                </Link>
                <div className="category-dropdown-wrap category-dropdown-active-small">
                  <ul>
                    <li>
                      <Link href="/products/shop-grid-right">
                        <a>
                          <i className="evara-font-dress"></i>
                          Women's Clothing
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/shop-grid-right">
                        <a>
                          <i className="evara-font-tshirt"></i>
                          Men's Clothing
                        </a>
                      </Link>
                    </li>
                    <li>
                      {' '}
                      <Link href="/products/shop-grid-right">
                        <a>
                          <i className="evara-font-smartphone"></i> Cellphones
                        </a>
                      </Link>
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
                  </ul>
                </div>
              </div>
            )}

            {/* MAIN MENU */}
            <nav>
              <ul className="mobile-menu" ref={domNode}>
                {menu.map((item, index) => {
                  const newIdx = index + 100;
                  return (
                    <li
                      className={
                        isActive.key == newIdx
                          ? 'menu-item-has-children active'
                          : 'menu-item-has-children'
                      }
                      key={newIdx}
                    >
                      {item.children && (
                        <span className="menu-expand" onClick={() => handleToggle({ newIdx })}>
                          <i className="fi-rs-angle-small-down"></i>
                        </span>
                      )}
                      <Link href={item.href}>
                        <a>{item.title}</a>
                      </Link>
                      <ul className={isActive.key == newIdx ? 'dropdown' : 'd-none'}>
                        {item.children && (
                          <ul className="sub-menu">
                            {item.children.map((child, idx) => {
                              return (
                                <li key={idx}>
                                  <Link href={child.href}>
                                    <a>{child.title}</a>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </ul>
                    </li>
                  );
                })}
                {/* MEGA MENU */}
                {configMobile.showMegaMenu && (
                  <li
                    className={
                      isActive.key == 3 ? 'menu-item-has-children active' : 'menu-item-has-children'
                    }
                  >
                    <span className="menu-expand" onClick={() => handleToggle(3)}>
                      <i className="fi-rs-angle-small-down"></i>
                    </span>
                    <Link href="src/components/layout/MobileMenu#">
                      <a>Mega menu</a>
                    </Link>
                    <ul className={isActive.key == 3 ? 'dropdown' : 'd-none'}>
                      <li className="menu-item-has-children">
                        <span className="menu-expand"></span>
                        <Link href="src/components/layout/MobileMenu#">
                          <a>Women's Fashion</a>
                        </Link>
                        <ul className="dropdown">
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
                      <li className="menu-item-has-children">
                        <span className="menu-expand"></span>
                        <Link href="src/components/layout/MobileMenu#">
                          <a>Men's Fashion</a>
                        </Link>
                        <ul className="dropdown">
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
                      <li className="menu-item-has-children">
                        <span className="menu-expand"></span>
                        <Link href="src/components/layout/MobileMenu#">
                          <a>Technology</a>
                        </Link>
                        <ul className="dropdown">
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
                )}
              </ul>
            </nav>
          </div>

          <br />
          <br />

          {/* FOOTER CONTACT INFO */}

          {configMobile.showFooterContact && (
            <div className="mobile-header-info-wrap mobile-header-border">
              <div className="single-mobile-header-info mt-30">
                <Link href="/contact">
                  <a> Our location </a>
                </Link>
              </div>
              <div className="single-mobile-header-info">
                <Link href="/login-register">
                  <a>Log In / Sign Up </a>
                </Link>
              </div>
              <div className="single-mobile-header-info">
                <Link href="src/components/layout/MobileMenu#">
                  <a>{configInfo.phone}</a>
                </Link>
              </div>
            </div>
          )}

          {configMobile.showFooterSocial && (
            <div className="mobile-social-icon">
              <h5 className="mb-15 text-grey-4">Follow Us</h5>
              <SocialIcons
                facebook={configSocial.facebook}
                instagram={configSocial.instagram}
                twitter={configSocial.twitter}
                linkedIn={configSocial.linkedIn}
                pinterest={configSocial.pinterest}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
