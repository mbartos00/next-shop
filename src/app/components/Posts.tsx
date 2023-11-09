import React from 'react';
import Post, { type Post as PostType } from './Post';
import Link from 'next/link';

type Posts = {
	posts: PostType[];
};

const Posts = ({ posts }: Posts) => {
	return (
		<div className='py-12 md:py-20 xl:py-28'>
			<div className='my-6 flex flex-col items-start pl-6 md:flex-row md:justify-between md:px-6 xl:px-0'>
				<h2 className='text-2xl font-medium uppercase text-primary'>latest posts</h2>
				<Link
					href={'/blogs'}
					className='relative py-1.5 text-sm font-semibold uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-[#E1E1E1]'
				>
					read blogs
				</Link>
			</div>
			<div className='grid grid-cols-1 gap-4 md:grid-cols-3 '>
				{posts.map((post) => (
					<Post
						image={post.image}
						title={post.title}
						category={post.category}
						createdAt={post.createdAt}
						key={post.id}
						id={post.id}
					/>
				))}
			</div>
		</div>
	);
};

export default Posts;
