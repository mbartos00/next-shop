'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Swipe from 'react-easy-swipe';

type Props = {
	variant: 'hero' | 'slider';
	content: any[];
	arrows?: boolean;
	heading?: string;
} & (
	| {
			variant: 'hero';
			heading: string;
	  }
	| {
			variant: 'slider';
			heading?: string;
	  }
);

const Carousel = ({ content, variant, arrows, heading }: Props) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const handleNextSlide = () => {
		let newSlide = currentSlide === content.length - 1 ? 0 : currentSlide + 1;
		setCurrentSlide(newSlide);
	};

	const handlePrevSlide = () => {
		let newSlide = currentSlide === 0 ? content.length - 1 : currentSlide - 1;
		setCurrentSlide(newSlide);
	};
	const variants = {
		enter: {
			opacity: 0,
		},
		center: {
			opacity: 1,
			transition: { duration: 1, ease: 'easeInOut' },
		},
		exit: {
			opacity: 0,
		},
	};

	return (
		<div className='relative z-0 bg-[#EDF1F3]'>
			{arrows && (
				<Image
					src={'/heroArrow.svg'}
					alt='left arrow'
					style={{ width: '10%' }}
					width={0}
					height={0}
					onClick={handlePrevSlide}
					className='absolute inset-y-1/2 left-2 z-20 m-auto h-[15vw] cursor-pointer md:h-[8vw] xl:max-h-[120px]'
				/>
			)}
			<div className='relative m-auto flex w-full overflow-hidden'>
				<AnimatePresence>
					<Swipe
						key='swipe'
						tolerance={75}
						onSwipeLeft={handleNextSlide}
						onSwipeRight={handlePrevSlide}
						className='relative z-10 h-full w-full'
					>
						{content.map((image, index) => {
							if (index === currentSlide) {
								if (variant === 'hero') {
									return (
										<motion.div
											key={index}
											variants={variants}
											custom={currentSlide}
											initial={'enter'}
											animate={'center'}
											exit={'exit'}
											className='grid grid-cols-1 place-items-center text-center uppercase text-primary xl:grid-cols-4 xl:py-8'
										>
											<div className='mb-4 xl:col-start-2 xl:mb-0 xl:text-left'>
												<h1 className='mb-8 mt-8 text-4xl font-light md:text-5xl xl:mb-10 xl:mt-0 xl:text-6xl'>
													{heading?.toUpperCase()}
												</h1>
												<Link
													className='mt-6 bg-primary px-6 py-2 text-sm font-medium tracking-wider text-white xl:py-3'
													href={'/shop'}
												>
													SHOP PRODUCT
												</Link>
											</div>
											<Image
												key={image.id}
												src={image}
												style={{ maxWidth: '530px', maxHeight: '600px' }}
												width={530}
												height={0}
												alt='some'
												className='h-[85vw] w-[70vw] xl:ml-16'
											/>
										</motion.div>
									);
								}
							}
						})}
					</Swipe>
				</AnimatePresence>
			</div>
			{arrows && (
				<Image
					src={'/heroArrow.svg'}
					alt='right arrow'
					style={{ width: '10%' }}
					width={0}
					height={0}
					onClick={handleNextSlide}
					className='absolute inset-y-1/2 right-2 z-20 m-auto h-[15vw] rotate-180 cursor-pointer md:h-[8vw] xl:max-h-[125px]'
				/>
			)}

			{variant !== 'hero' && (
				<div className='relative flex justify-center p-2'>
					{content.map((_, index) => {
						return (
							<div
								className={
									index === currentSlide
										? 'mx-1 mb-1 mt-3 h-2 w-2 cursor-pointer rounded-full bg-primary'
										: 'mx-1 mb-1 mt-3 h-2 w-2 cursor-pointer rounded-full bg-secondary'
								}
								key={index}
								onClick={() => {
									setCurrentSlide(index);
								}}
							/>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Carousel;
