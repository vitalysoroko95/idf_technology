import React from 'react';
import Breadcrumbs from './Breadcrumbs';

import Footer from './Footer';
import Header from './Header';
import Spinner from 'react-bootstrap/Spinner';
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {
  const { isLoading } = useSelector((store) => store.schema);
  return (
    <div className='flex min-h-screen  w-full flex-col justify-between'>
      <Header />
      {isLoading ? (
        <Spinner animation='border' variant='danger' />
      ) : (
        <main className='flex flex-col bg-[#1e293a] justify-start  h-[calc(100vh-10rem)] py-4'>
          <Breadcrumbs />
          {children}
        </main>
      )}

      <Footer />
    </div>
  );
};

export default Layout;
