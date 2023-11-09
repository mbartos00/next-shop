import Image from 'next/image';
import React from 'react';

export type Post = {
	id: string | number;
	image: string;
	category: string;
	title: string;
	createdAt: string;
};

const Post = ({ image, category, title, createdAt }: Post) => {
	return (
		<div className='mb-4 flex w-full flex-col items-center justify-center px-6 md:mb-0 xl:px-0'>
			<div className='w-full'>
				<Image
					src={image}
					quality={100}
					width={420}
					height={0}
					style={{ width: '100%', aspectRatio: 4 / 3 }}
					alt={`${title} post image`}
				/>
				<div className='mt-4 uppercase'>
					<p className='text-xs font-medium text-[#848484]'>
						{createdAt} - {category}
					</p>
					<h3 className='text-sm font-medium text-primary'>{title}</h3>
				</div>
			</div>
		</div>
	);
};

export default Post;
