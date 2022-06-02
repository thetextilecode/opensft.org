import { useState } from 'react';
import useClickOutside from '../../lib/outsideClick';
import Link from 'next/link';
import Image from 'next/image';

export interface IMobileMenu {
  isToggled?: boolean,
  toggleClick?: any
}

const MobileMenu = ({ isToggled, toggleClick }: IMobileMenu) => {
  const [isActive, setIsActive] = useState<{ status: boolean, key?: any }>({
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
      className={isToggled ? 'mobile-header-active mobile-header-wrapper-style sidebar-visible' : 'mobile-header-active mobile-header-wrapper-style'}>
      <div className='mobile-header-wrapper-inner'>
        <div className='mobile-header-top'>
          <div className='mobile-header-logo'>
            <Link href='/index'>
              <a>
                <Image src='/assets/images/theme/logo.svg' alt='logo' width={120} height={33} />
              </a>
            </Link>
          </div>
          <div className='mobile-menu-close close-style-wrap close-style-position-inherit'>
            <button className='close-style search-close' onClick={toggleClick}>
              <i className='icon-top'></i>
              <i className='icon-bottom'></i>
            </button>
          </div>
        </div>
        <div className='mobile-header-content-area'>
          <div className='mobile-search search-style-3 mobile-header-border'>
            <form action='src/components/layout/MobileMenu#'>
              <input type='text' placeholder='Search for items…' />
              <button type='submit'>
                <i className='fi-rs-search'></i>
              </button>
            </form>
          </div>
          <div className='mobile-menu-wrap mobile-header-border'>
            <div className='main-category-wrap mobile-header-border'>
              <Link href='src/components/layout/MobileMenu#'>
                <a className='category-button-active-2'>
                  <span className='fi-rs-apps'></span> Browse Categories
                </a>
              </Link>
              <div className='category-dropdown-wrap category-dropdown-active-small'>
                <ul>
                  <li>
                    <Link href='/products/shop-grid-right'>
                      <a>
                        <i className='evara-font-dress'></i>
                        Women's Clothing
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/products/shop-grid-right'>
                      <a>
                        <i className='evara-font-tshirt'></i>
                        Men's Clothing
                      </a>
                    </Link>
                  </li>
                  <li>
                    {' '}
                    <Link href='/products/shop-grid-right'>
                      <a>
                        <i className='evara-font-smartphone'></i> Cellphones
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/products/shop-grid-right'>
                      <a>
                        <i className='evara-font-desktop'></i>
                        Computer & Office
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/products/shop-grid-right'>
                      <a>
                        <i className='evara-font-cpu'></i>
                        Consumer Electronics
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/products/shop-grid-right'>
                      <a>
                        <i className='evara-font-home'></i>
                        Home & Garden
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/products/shop-grid-right'>
                      <a>
                        <i className='evara-font-high-heels'></i>
                        Shoes
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/products/shop-grid-right'>
                      <a>
                        <i className='evara-font-teddy-bear'></i>
                        Mother & Kids
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/products/shop-grid-right'>
                      <a>
                        <i className='evara-font-kite'></i>
                        Outdoor fun
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <nav>
              <ul className='mobile-menu' ref={domNode}>
                <li className={isActive.key == 1 ? 'menu-item-has-children active' : 'menu-item-has-children'}>
                  <span className='menu-expand' onClick={() => handleToggle(1)}>
                    <i className='fi-rs-angle-small-down'></i>
                  </span>
                  <Link href='/index'>
                    <a>Home</a>
                  </Link>
                  <ul className={isActive.key == 1 ? 'dropdown' : 'd-none'}>
                    <li>
                      <Link href='/index'>
                        <a>Home 1</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/index-2'>
                        <a>Home 2</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/index-3'>
                        <a>Home 3</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/index-4'>
                        <a>Home 4</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={isActive.key == 2 ? 'menu-item-has-children active' : 'menu-item-has-children'}>
                  <span className='menu-expand' onClick={() => handleToggle(2)}>
                    <i className='fi-rs-angle-small-down'></i>
                  </span>
                  <Link href='/products/shop-grid-right'>
                    <a>shop</a>
                  </Link>
                  <ul className={isActive.key == 2 ? 'dropdown' : 'd-none'}>
                    <li>
                      <Link href='/products/shop-grid-right'>
                        <a>Shop Grid – Right Sidebar</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/products/products'>
                        <a>Shop Grid – Left Sidebar</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/products/shop-list-right'>
                        <a>Shop List – Right Sidebar</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/products/shop-list-left'>
                        <a>Shop List – Left Sidebar</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/products/shop-fullwidth'>
                        <a>Shop - Wide</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/shop-filter'>
                        <a>Shop – Filter</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/wishlist'>
                        <a>Shop – Wishlist</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/cart'>
                        <a>Shop – Cart</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/checkout'>
                        <a>Shop – Checkout</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/compare'>
                        <a>Shop – Compare</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={isActive.key == 3 ? 'menu-item-has-children active' : 'menu-item-has-children'}>
                  <span className='menu-expand' onClick={() => handleToggle(3)}>
                    <i className='fi-rs-angle-small-down'></i>
                  </span>
                  <Link href='src/components/layout/MobileMenu#'>
                    <a>Mega menu</a>
                  </Link>
                  <ul className={isActive.key == 3 ? 'dropdown' : 'd-none'}>
                    <li className='menu-item-has-children'>
                      <span className='menu-expand'></span>
                      <Link href='src/components/layout/MobileMenu#'>
                        <a>Women's Fashion</a>
                      </Link>
                      <ul className='dropdown'>
                        <li>
                          <Link href='/products/shop-grid-right'>
                            <a>Dresses</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/products/shop-grid-right'>
                            <a>Blouses & Shirts</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/products/shop-grid-right'>
                            <a>Hoodies & Sweatshirts</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/products/shop-grid-right'>
                            <a>Women's Sets</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className='menu-item-has-children'>
                      <span className='menu-expand'></span>
                      <Link href='src/components/layout/MobileMenu#'>
                        <a>Men's Fashion</a>
                      </Link>
                      <ul className='dropdown'>
                        <li>
                          <Link href='/products/shop-grid-right'>
                            <a>Jackets</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/products/shop-grid-right'>
                            <a>Casual Faux Leather</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/products/shop-grid-right'>
                            <a>Genuine Leather</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className='menu-item-has-children'>
                      <span className='menu-expand'></span>
                      <Link href='src/components/layout/MobileMenu#'>
                        <a>Technology</a>
                      </Link>
                      <ul className='dropdown'>
                        <li>
                          <Link href='/products/shop-grid-right'>
                            <a>Gaming Laptops</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/products/shop-grid-right'>
                            <a>Ultraslim Laptops</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/products/shop-grid-right'>
                            <a>Tablets</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/products/shop-grid-right'>
                            <a>Laptop Accessories</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/products/shop-grid-right'>
                            <a>Tablet Accessories</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className={isActive.key == 4 ? 'menu-item-has-children active' : 'menu-item-has-children'}>
                  <span className='menu-expand' onClick={() => handleToggle(4)}>
                    <i className='fi-rs-angle-small-down'></i>
                  </span>
                  <Link href='/blog-category-fullwidth'>
                    <a>Blog</a>
                  </Link>
                  <ul className={isActive.key == 4 ? 'dropdown' : 'd-none'}>
                    <li>
                      <Link href='/blog-category-grid'>
                        <a>Blog Category Grid</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/blog-category-list'>
                        <a>Blog Category List</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/blog-category-big'>
                        <a>Blog Category Big</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/blog-category-fullwidth'>
                        <a>Blog Category Wide</a>
                      </Link>
                    </li>
                    <li className='menu-item-has-children'>
                      <span className='menu-expand'></span>
                      <Link href='src/components/layout/MobileMenu#'>
                        <a>Single Product Layout</a>
                      </Link>
                      <ul className='dropdown'>
                        <li>
                          <Link href='/blog-post-left'>
                            <a>Left Sidebar</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/blog-post-right'>
                            <a>Right Sidebar</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/blog-post-fullwidth'>
                            <a>No Sidebar</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className={isActive.key == 5 ? 'menu-item-has-children active' : 'menu-item-has-children'}>
                  <span className='menu-expand' onClick={() => handleToggle(5)}>
                    <i className='fi-rs-angle-small-down'></i>
                  </span>
                  <Link href='src/components/layout/MobileMenu#'>
                    <a>Pages</a>
                  </Link>
                  <ul className={isActive.key == 5 ? 'dropdown' : 'd-none'}>
                    <li>
                      <Link href='/about'>
                        <a>About Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/contact'>
                        <a>Contact</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/page-account'>
                        <a>My Account</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/login-register'>
                        <a>login/register</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/page-purchase-guide'>
                        <a>Purchase Guide</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/privacy-policy'>
                        <a>Privacy Policy</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/terms'>
                        <a>Terms of Service</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/page-404'>
                        <a>404 Page</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={isActive.key == 6 ? 'menu-item-has-children active' : 'menu-item-has-children'}>
                  <span className='menu-expand' onClick={() => handleToggle(6)}>
                    <i className='fi-rs-angle-small-down'></i>
                  </span>
                  <Link href='src/components/layout/MobileMenu#'>
                    <a>Language</a>
                  </Link>
                  <ul className={isActive.key == 6 ? 'dropdown' : 'd-none'}>
                    <li>
                      <Link href='src/components/layout/MobileMenu#'>
                        <a>English</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='src/components/layout/MobileMenu#'>
                        <a>French</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='src/components/layout/MobileMenu#'>
                        <a>German</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='src/components/layout/MobileMenu#'>
                        <a>Spanish</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div className='mobile-header-info-wrap mobile-header-border'>
            <div className='single-mobile-header-info mt-30'>
              <Link href='/contact'>
                <a> Our location </a>
              </Link>
            </div>
            <div className='single-mobile-header-info'>
              <Link href='/login-register'>
                <a>Log In / Sign Up </a>
              </Link>
            </div>
            <div className='single-mobile-header-info'>
              <Link href='src/components/layout/MobileMenu#'>
                <a>(+01) - 2345 - 6789 </a>
              </Link>
            </div>
          </div>
          <div className='mobile-social-icon'>
            <h5 className='mb-15 text-grey-4'>Follow Us</h5>
            <Link href='src/components/layout/MobileMenu#'>
              <a>
                <Image src='/assets/images/theme/icons/icon-facebook.svg' alt='Facebook' width={20} height={20} />
              </a>
            </Link>
            <Link href='src/components/layout/MobileMenu#'>
              <a>
                <Image src='/assets/images/theme/icons/icon-twitter.svg' alt='Twitter' width={20} height={20} />
              </a>
            </Link>
            <Link href='src/components/layout/MobileMenu#'>
              <a>
                <Image src='/assets/images/theme/icons/icon-instagram.svg' alt='Instagram' width={20} height={20} />
              </a>
            </Link>
            <Link href='src/components/layout/MobileMenu#'>
              <a>
                <Image src='/assets/images/theme/icons/icon-pinterest.svg' alt='Pinterest' width={20} height={20} />
              </a>
            </Link>
            <Link href='src/components/layout/MobileMenu#'>
              <a>
                <Image src='/assets/images/theme/icons/icon-youtube.svg' alt='YouTube' width={20} height={20} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
