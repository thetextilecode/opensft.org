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
            <nav>
              <ul className='mobile-menu' ref={domNode}>
                <li className={isActive.key == 1 ? 'menu-item-has-children active' : 'menu-item-has-children'}>
                  <span className='menu-expand' onClick={() => handleToggle(1)}>
                    <i className='fi-rs-angle-small-down'></i>
                  </span>
                  <Link href='/'>
                    <a>Home</a>
                  </Link>
                </li>
                <li className={isActive.key == 4 ? 'menu-item-has-children active' : 'menu-item-has-children'}>
                  <span className='menu-expand' onClick={() => handleToggle(4)}>
                    <i className='fi-rs-angle-small-down'></i>
                  </span>
                  <Link href='/blog'>
                    <a>Blog</a>
                  </Link>
                </li>
                <li className={isActive.key == 5 ? 'menu-item-has-children active' : 'menu-item-has-children'}>
                  <span className='menu-expand' onClick={() => handleToggle(5)}>
                    <i className='fi-rs-angle-small-down'></i>
                  </span>
                  <Link href='/about'>
                    <a>About</a>
                  </Link>
                </li>
                {/*<li className={isActive.key == 6 ? 'menu-item-has-children active' : 'menu-item-has-children'}>*/}
                {/*  <span className='menu-expand' onClick={() => handleToggle(6)}>*/}
                {/*    <i className='fi-rs-angle-small-down'></i>*/}
                {/*  </span>*/}
                {/*  <Link href='src/components/layout/MobileMenu#'>*/}
                {/*    <a>Language</a>*/}
                {/*  </Link>*/}
                {/*  <ul className={isActive.key == 6 ? 'dropdown' : 'd-none'}>*/}
                {/*    <li>*/}
                {/*      <Link href='src/components/layout/MobileMenu#'>*/}
                {/*        <a>English</a>*/}
                {/*      </Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*      <Link href='src/components/layout/MobileMenu#'>*/}
                {/*        <a>French</a>*/}
                {/*      </Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*      <Link href='src/components/layout/MobileMenu#'>*/}
                {/*        <a>German</a>*/}
                {/*      </Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*      <Link href='src/components/layout/MobileMenu#'>*/}
                {/*        <a>Spanish</a>*/}
                {/*      </Link>*/}
                {/*    </li>*/}
                {/*  </ul>*/}
                {/*</li>*/}
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
