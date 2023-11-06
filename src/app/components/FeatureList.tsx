import React from 'react';
import { featureList } from '../constants/constants';
import Image from 'next/image';

const FeatureList = () => {
	return (
		<div className='grid grid-cols-1 place-items-center gap-6 py-6 text-center md:grid-cols-2 md:gap-8 md:py-10 xl:grid-cols-4 xl:place-items-start xl:py-28 xl:text-left'>
			{featureList.map((feature) => (
				<div>
					<div className='flex justify-center gap-4 xl:items-start xl:justify-start'>
						<Image
							src={feature.icon}
							alt={`${feature.title} icon`}
							style={{ width: '23px', aspectRatio: 1, marginTop: '3px' }}
							width={0}
							height={0}
						/>
						<h3 className='text-lg font-medium xl:text-base 2xl:text-lg'>
							{feature.title.toUpperCase()}
						</h3>
					</div>
					<p className='mt-2 max-w-[25ch] px-2 text-base font-light xl:ml-8 xl:text-sm 2xl:text-base'>
						{feature.description}
					</p>
				</div>
			))}
		</div>
	);
};

export default FeatureList;
