'use client';
import Link from 'next/link';
import NavMenu from './NavMenu';
import HamburgerMenu from './HamburgerMenu';
import useWindowWidth from '@/app/hooks/useWindowWidth';
import isMobileWidth from '@/app/utils/isMobileWidth';

const Navbar = () => {
  const windowWidth = useWindowWidth();
  const isMobile = isMobileWidth(windowWidth!);
  return (
    <div className='flex items-center justify-between bg-white px-4 py-4 xl:px-6'>
      <Link className='text-2xl font-medium text-primary ' href={'/'}>
        NextStore
      </Link>
      <NavMenu />
      {isMobile && <HamburgerMenu />}
    </div>
  );
};

export default Navbar;
