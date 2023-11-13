'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import capitalize from '@/app/utils/capitalize';

const Breadcrumbs = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const location = pathname.slice(1, pathname.length);
  const locationName = capitalize(location);
  return (
    <>
      {!isHome && (
        <div>
          <h3 className='text-base font-light text-primary'>
            Home {'>'} <span className='text-secondary underline'>{locationName}</span>
          </h3>
        </div>
      )}
    </>
  );
};

export default Breadcrumbs;
