import React from 'react';
import Breadcrumbs from './Breadcrumbs';

const Hero = ({ title }: { title: string }) => {
	return (
		<div className='flex w-full flex-col items-center justify-center bg-[#EDF1F3] py-10 md:py-12 xl:py-16'>
			<h1 className='mb-2 text-5xl font-light text-primary'>{title}</h1>
			<Breadcrumbs />
		</div>
	);
};

export default Hero;
