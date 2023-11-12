/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className='flex h-screen flex-col items-center justify-center text-center text-primary xl:px-[15vw] '>
      <h1 className='mb-4 text-3xl font-semibold md:text-5xl'>Oops! Page Not Found</h1>
      <p className='max-w-[35ch] text-base md:text-lg'>
        Sorry, but the page you're looking for isn't ready to make its debut just yet.
      </p>
      <Link
        className='mt-6 bg-primary px-6 py-2 text-sm font-medium tracking-wider text-white xl:py-3'
        href={'/'}
      >
        Go to home page
      </Link>
    </div>
  );
};

export default NotFound;
