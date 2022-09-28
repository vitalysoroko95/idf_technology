import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex h-full w-full justify-center items-center'>
      <button className='p-10 inline-block bg-slate-800 text-pink-300'>
        <Link to='/signup-info'>Sign up</Link>
      </button>
    </div>
  );
};

export default Home;
