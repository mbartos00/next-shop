'use client';
import useWindowWidth from '@/app/hooks/useWindowWidth';
import useStore from '@/app/store/store';
import isMobileWidth from '@/app/utils/isMobileWidth';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
const links = [
	{
		title: 'Home',
		path: '/',
	},
	{
		title: 'Shop',
		path: '/shop',
	},
	{
		title: 'About',
		path: '/about',
	},
	{
		title: 'Blogs',
		path: '/blogs',
	},
	{
		title: 'Contact',
		path: '/contact',
	},
];

const NavMenu = () => {
	const { isMenuOpen } = useStore();
	const windowWidth = useWindowWidth();
	const isMobile = isMobileWidth(windowWidth!);
	const currentPath = usePathname();
	return (
		<nav
			className={`fixed left-0 top-0 flex h-full w-full flex-col items-center bg-white py-10 text-center transition-all duration-500 ease-in-out md:relative md:w-auto md:flex-row md:py-0 ${
				!isMenuOpen && isMobile ? '-translate-x-full opacity-0' : 'translate-x -0 opacity-100'
			}`}
		>
			<ul className='flex flex-col gap-2 md:flex-row md:gap-[5vw]'>
				{links.map((link) => (
					<li
						className={`font-lato text-base font-bold  ${
							currentPath === link.path ? 'text-secondary' : 'text-primary'
						} transition-all duration-200 xl:hover:text-secondary`}
						key={link.path}
					>
						<Link href={link.path}>{link.title}</Link>
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
				<Link href={'/profile'}>
					<Image src='/userIcon.svg' alt='cart icon' width={20} height={20} />
				</Link>
				<Link href={'/cart'}>
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
