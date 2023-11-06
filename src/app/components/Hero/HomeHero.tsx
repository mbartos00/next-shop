import React from 'react';
import Carousel from '../Carousel';

const HomeHero = () => {
	return (
		<div>
			<Carousel
				variant='hero'
				heading='your products are great'
				arrows
				content={['/heroImage.png', '/hero2.png']}
			/>
		</div>
	);
};

export default HomeHero;
