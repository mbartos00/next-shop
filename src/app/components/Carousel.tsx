'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Swipe from 'react-easy-swipe';

type Props = {
	variant: 'hero' | 'review';
	arrows?: boolean;
} & (
	| {
			variant: 'hero';
			heading: string;
			content: Content[];
	  }
	| {
			variant: 'review';
			heading?: string;
			content: Review[];
	  }
);

export type Content = {
	id: string | number;
	title?: string;
	price?: number;
	image: string;
};
type Review = {
	id: string | number;
	review: string;
	rating: number;
	createdBy: string;
};

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
		<div className={`relative z-0 ${variant === 'review' ? 'bg-white' : 'bg-[#EDF1F3]'}`}>
			{arrows && (
				<Image
					src={'/heroArrow.svg'}
					alt='left arrow'
					style={{ width: '10%' }}
					width={0}
					height={0}
					onClick={handlePrevSlide}
					className={`absolute inset-y-1/2 left-2 z-20 m-auto ${
						variant === 'hero'
							? 'h-[15vw] md:h-[8vw] xl:max-h-[120px]'
							: 'h-[8vw] xl:h-[5vw] 2xl:h-[3vw]'
					} cursor-pointer`}
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
						{variant === 'hero' &&
							content.map((item, index) => {
								if (index === currentSlide) {
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
												<h1 className='mb-8 mt-8 text-4xl font-light uppercase md:text-5xl xl:mb-10 xl:mt-0 xl:text-6xl'>
													{heading}
												</h1>
												<Link
													className='mt-6 bg-primary px-6 py-2 text-sm font-medium tracking-wider text-white xl:py-3'
													href={'/shop'}
												>
													SHOP PRODUCT
												</Link>
											</div>
											<Image
												key={item.id}
												src={item.image}
												style={{ maxWidth: '530px', maxHeight: '600px' }}
												width={530}
												height={0}
												alt='some'
												className='h-[85vw] w-[70vw] xl:ml-16'
											/>
										</motion.div>
									);
								}
							})}
						{variant === 'review' &&
							content.map((item, index) => {
								if (index === currentSlide) {
									return (
										<motion.div
											key={index}
											variants={variants}
											custom={currentSlide}
											initial={'enter'}
											animate={'center'}
											exit={'exit'}
											className='grid grid-cols-1 place-items-center text-center uppercase text-primary'
										>
											<div className='mb-4 flex flex-col items-center gap-4 xl:col-start-2 xl:mb-14 '>
												<Image
													src={'/quoteIcon.svg'}
													alt='quote icon'
													width={50}
													height={50}
													style={{
														width: '100%',
														height: '100%',
														maxWidth: '60px',
														maxHeight: '60px',
													}}
												/>
												<q className=' mb-4 block w-[70%] text-base font-light md:text-lg xl:mt-0 xl:text-2xl'>
													{`${item.review}`}
												</q>
												<span className='flex gap-2'>
													{Array.from({ length: 5 }).map((_, idx) => (
														<Image
															key={idx}
															src={'/starIcon.svg'}
															alt='star rating icon'
															width={15}
															height={15}
															className={`${
																idx < item.rating ? '' : 'opacity-70 contrast-200 grayscale'
															}`}
														/>
													))}
												</span>
												<p className='font-semibold'>{item.createdBy}</p>
											</div>
										</motion.div>
									);
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
					className={`absolute inset-y-1/2 right-2 z-20 m-auto ${
						variant === 'hero'
							? 'h-[15vw] md:h-[8vw] xl:max-h-[125px]'
							: 'h-[8vw] xl:h-[5vw] 2xl:h-[3vw]'
					} rotate-180 cursor-pointer`}
				/>
			)}
		</div>
	);
};

export default Carousel;
