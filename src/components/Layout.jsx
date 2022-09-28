import React from 'react';
import Breadcrumbs from './Breadcrumbs';

import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className='flex min-h-screen  w-full flex-col justify-between'>
      <Header />
      <main className='flex flex-col justify-start  h-[calc(100vh-10rem)]'>
        <Breadcrumbs />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
