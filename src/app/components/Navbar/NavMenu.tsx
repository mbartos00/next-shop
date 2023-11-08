'use client';
import useWindowWidth from '@/app/hooks/useWindowWidth';
import useStore from '@/app/store/store';
import isMobileWidth from '@/app/utils/isMobileWidth';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { navLinks } from '@/app/constants/constants';
const NavMenu = () => {
	const { isMenuOpen, toggleMenuOpen } = useStore();
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
			className={`md: fixed left-0 top-0 z-10 flex h-full w-full flex-col items-center bg-white py-10 text-center opacity-100 transition-all duration-500 ease-in-out md:relative md:w-auto md:translate-x-0 md:flex-row md:py-0 ${
				isMenuOpen && isMobile ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
			}`}
		>
			<ul className='flex flex-col gap-2 md:flex-row md:gap-[5vw]'>
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
			<div className='mt-4 flex gap-4 md:ml-[5vw] md:mt-0 md:gap-[3vw] '>
				<Image
					style={{ width: '20px', height: '20px' }}
					src={'/searchIcon.svg'}
					alt='search icon'
					width={20}
					height={20}
				/>
				<Link onClick={onLinkClick} href={'/profile'}>
					<Image src='/userIcon.svg' alt='cart icon' width={20} height={20} />
				</Link>
				<Link onClick={onLinkClick} href={'/cart'}>
					<Image
						src='/cartIcon.svg'
						style={{ width: 'auto', height: '20px' }}
						alt='cart icon'
						width={25}
						height={0}
					/>
				</Link>
			</div>
		</nav>
	);
};

export default NavMenu;
