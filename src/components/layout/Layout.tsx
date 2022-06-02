import { ReactNode, useState } from 'react';
import Breadcrumb from './Breadcrumb';
import Footer from './Footer';
import Head from './Head';
import Header from './Header';
import MobileMenu from './MobileMenu';
import { IMetaProps } from '../../../types';

export interface ILayout {
  children?: ReactNode,
  customMeta: IMetaProps,
  headerStyle?: any,
  noBreadcrumb?: any,
  parent?: ReactNode,
  sub?: any,
  subChild?: any
}

const Layout = ({ children, customMeta, parent, sub, subChild, noBreadcrumb, headerStyle }: ILayout) => {
  const [isToggled, setToggled] = useState<boolean>(false);

  const toggleClick = () => {
    setToggled(!isToggled);
    isToggled ? document.querySelector('body').classList.remove('mobile-menu-active') : document.querySelector('body').classList.add('mobile-menu-active');
  };

  return (
    <>
      <Head/>
      {isToggled && <div className='body-overlay-1' onClick={toggleClick}></div>}

      <Header headerStyle={headerStyle} isToggled={isToggled} toggleClick={toggleClick} />
      <MobileMenu isToggled={isToggled} toggleClick={toggleClick} />
      <main className='main'>
        <Breadcrumb parent={parent} sub={sub} subChild={subChild} noBreadcrumb={noBreadcrumb} />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
