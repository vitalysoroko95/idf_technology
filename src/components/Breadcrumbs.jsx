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
    <nav className='p-2 mt-1'>
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <Link key={match.pathname} to={match.pathname}>
          {breadcrumb} /
        </Link>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
