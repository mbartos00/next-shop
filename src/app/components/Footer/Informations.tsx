import { footerLinks, navLinks } from '@/app/constants/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import InformationsLinksSection from './InformationsLinksSection';

const socialMediaIcons = [
	'/facebookIcon.svg',
	'/instagramIcon.svg',
	'/twitterIcon.svg',
	'/linkedinIcon.svg',
	'/youtubeIcon.svg',
];

const Informations = () => {
	return (
		<div className='mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:px-4 xl:mt-24 xl:grid-cols-[2fr_repeat(3,_1fr)] xl:gap-6 xl:px-0'>
			<section className='flex flex-col items-center text-primary xl:items-start '>
				<h2 className='mb-2.5 text-4xl font-medium'>NextShop</h2>
				<p className='w-80 text-center text-base font-light xl:w-96 xl:text-left  '>
					Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit. Gravida massa volutpat
					aenean odio erat nullam fringilla.
				</p>
				<div className='mt-5 flex gap-6'>
					{socialMediaIcons.map((icon) => (
						<Link href={'#'}>
							<Image
								src={icon}
								alt='social media icon'
								style={{ width: '25px', aspectRatio: 1 }}
								width={0}
								height={0}
							/>
						</Link>
					))}
				</div>
			</section>
			<InformationsLinksSection text='quick links' links={navLinks} />
			<InformationsLinksSection text='help & info' links={footerLinks} />
			<section className='flex flex-col items-center text-primary xl:items-start'>
				<h3 className='text-xl font-medium '>CONTACT US</h3>
				<p className='font-light'>Do you have any queries or suggestions?</p>
				<p className='font-medium underline'>yourinfo@gmail.com</p>
				<p className='font-light'>If you need support? Just give us a call.</p>
				<p className='font-medium underline'>+55 111 222 333 44</p>
			</section>
		</div>
	);
};

export default Informations;
