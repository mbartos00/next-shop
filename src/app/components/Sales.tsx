import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
	heading: string;
	discount: number;
};

const Sales = ({ heading, discount }: Props) => {
	return (
		<div className=' bg-[#EDF1F3]'>
			<div className='grid grid-cols-1 place-items-center text-center uppercase text-primary xl:grid-cols-4'>
				<div className='mb-4 xl:col-start-2 xl:mb-0 xl:text-left'>
					<h3 className='relative mx-auto mt-8 w-fit text-2xl font-light uppercase text-primary before:absolute before:inset-y-1/2 before:-left-12 before:h-[1px] before:w-6 before:bg-primary xl:ml-14 xl:mt-0 xl:text-3xl'>{`${discount}% off`}</h3>
					<h1 className='mb-8 mt-4 text-4xl font-light md:text-5xl xl:mb-10 xl:text-6xl'>
						{heading}
					</h1>
					<Link
						className='mt-6 bg-primary px-6 py-2 text-sm font-medium uppercase tracking-wider text-white xl:px-12 xl:py-4'
						href={'/shop'}
					>
						shop sale
					</Link>
				</div>
				<Image
					src={'/mockimages/saleImage.png'}
					style={{ width: '100%', maxWidth: '530px', maxHeight: '654px' }}
					width={530}
					height={0}
					alt='discounted product image'
					className='xl:ml-16'
				/>
			</div>
		</div>
	);
};

export default Sales;