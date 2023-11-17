import React from 'react';
import Breadcrumbs from './Breadcrumbs';

const Hero = ({ title }: { title: string }) => {
  return (
    <div className='flex w-full flex-col items-center justify-center bg-[#EDF1F3] py-16 md:py-20 xl:py-28'>
      <h1 className='mb-2 text-5xl font-light uppercase text-primary'>{title}</h1>
      <Breadcrumbs />
    </div>
  );
};

export default Hero;
