import React from 'react';
import Carousel from '../Carousel';

const mockedContent = [
	{
		id: Math.floor(Math.random() * 100),
		image: '/heroImage.png',
	},
	{
		id: Math.floor(Math.random() * 100),
		image: '/hero2.png',
	},
];

const HomeHero = () => {
	return (
		<div>
			<Carousel variant='hero' heading='your products are great' arrows content={mockedContent} />
		</div>
	);
};

export default HomeHero;
