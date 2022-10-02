import React from 'react';
import { Link } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

const routes = [
  { path: '/home', breadcrumb: 'Home' },
  { path: '/signup-info', breadcrumb: 'SignupInfo' },
  {
    path: '/signup-info/personal-info',
    breadcrumb: 'PersonalInfo',
  },
];

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <div className='text-xl text-white m-2'>
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <Link
          className='px-1 hover:text-[#ec5990]'
          key={match.pathname}
          to={match.pathname}
        >
          {breadcrumb} /
        </Link>
      ))}
    </div>
  );
};

export default Breadcrumbs;
