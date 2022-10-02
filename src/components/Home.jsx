import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex h-full w-full justify-center items-center'>
      <Link to='/signup-info'>
        <button className='p-10 bg-[#111729] rounded-md hover:scale-125 ease-out duration-300 hover:text-md text-pink-300'>
          Sign up
        </button>
      </Link>
    </div>
  );
};

export default Home;
