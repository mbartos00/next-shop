'use client';
import useWindowWidth from '@/app/hooks/useWindowWidth';
import useGlobalStore from '@/app/store/globalStore';
import useCartStore from '@/app/store/cartStore';
import isMobileWidth from '@/app/utils/isMobileWidth';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { navLinks } from '@/app/constants/constants';
import useStore from '@/app/hooks/useStore';
const NavMenu = () => {
  const { isMenuOpen, toggleMenuOpen } = useGlobalStore();
  const cart = useStore(useCartStore, (state) => state.cart);
  const windowWidth = useWindowWidth();
  const isMobile = isMobileWidth(windowWidth!);
  const currentPath = usePathname();
  const onLinkClick = () => {
    if (isMobile) {
      toggleMenuOpen();
    }
  };

  return (
    <nav
      className={`fixed left-0 top-0 z-10 flex h-full w-full flex-col items-center bg-white py-10 text-center opacity-100 transition-all duration-500 ease-in-out md:relative md:w-auto md:translate-x-0 md:flex-row md:py-0 ${
        isMenuOpen && isMobile ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
    >
      <ul className='flex flex-col gap-2 md:flex-row md:gap-8 xl:gap-12'>
        {navLinks.map((link) => (
          <li
            className={`text-base font-bold tracking-wider  ${
              currentPath === link.path ? 'text-secondary' : 'text-primary'
            } transition-all duration-200 xl:hover:text-secondary`}
            key={link.path}
          >
            <Link onClick={onLinkClick} href={link.path} className='uppercase'>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className='mt-4 flex items-center gap-4 md:ml-12 md:mt-0 xl:ml-28 xl:gap-5'>
        <Link onClick={onLinkClick} href={'/profile'}>
          <Image src='/userIcon.svg' alt='cart icon' width={20} height={20} />
        </Link>
        <Link onClick={onLinkClick} href={'/cart'} className='flex items-center gap-1'>
          <Image
            src='/cartIcon.svg'
            style={{ width: 'auto', height: '20px' }}
            alt='cart icon'
            width={25}
            height={0}
          />
          <span className=' font-medium text-primary'>({cart?.length || 0})</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavMenu;
