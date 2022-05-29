import { ReactNode, useState } from 'react';
import Breadcrumb from './Breadcrumb';
import Footer from './Footer';
import Head from 'next/head';
import Header from './Header';
import MobileMenu from './MobileMenu';

export interface ILayout {
  children?: ReactNode,
  headerStyle?: any,
  noBreadcrumb?: any,
  parent?: ReactNode,
  sub?: any,
  subChild?: any
}

const Layout = ({ children, parent, sub, subChild, noBreadcrumb, headerStyle }: ILayout) => {
  const [isToggled, setToggled] = useState<boolean>(false);

  const toggleClick = () => {
    setToggled(!isToggled);
    isToggled ? document.querySelector('body').classList.remove('mobile-menu-active') : document.querySelector('body').classList.add('mobile-menu-active');
  };

  return (
    <>
      <Head>
        <title>Open Source Fashion & Textiles | nonprofit for FOSS in fashion</title>
        <meta name='description' content='Bridging the worlds of open source technology and fashion & textiles by providing you with resources and
  training.' />
        <link rel='icon' href='/favicon.ico' />
        <style>@import
          url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Spartan:wght@300;400;500;600;700&display=swap');
        </style>
      </Head>

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
