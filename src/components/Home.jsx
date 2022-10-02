import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex h-full w-full justify-center items-center'>
      <Link to='/signup-info'>
        <button className='p-10 bg-slate-800 text-pink-300'>Sign up</button>
      </Link>
    </div>
  );
};

export default Home;
