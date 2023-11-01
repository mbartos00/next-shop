import Image from 'next/image';
import React from 'react';

const Copyrights = () => {
	return (
		<div className='mt-20 flex flex-col items-center gap-2 border-t-[1px] border-[#D0D0D0] md:w-full md:flex-row md:justify-between md:px-[6vw] xl:py-5'>
			<div className='flex flex-col gap-2 xl:flex-row'>
				<div className='mt-1 flex items-center justify-center gap-3 md:mt-2 xl:mt-0'>
					<h3 className='font-light text-primary'>We ship with</h3>
					<Image
						src={'/dhlIcon.svg'}
						alt='dhl logo'
						style={{
							width: '60px',
							height: '20px',
						}}
						width={0}
						height={0}
					/>
					<Image
						src={'/delivery2icon.svg'}
						alt='delivery company logo'
						style={{
							width: '60px',
							height: '20px',
						}}
						width={0}
						height={0}
					/>
				</div>
				<div className='flex'>
					<h3 className='font-light text-primary'>Payment options</h3>
					<Image
						src={'/visaIcon.svg'}
						alt='visa logo'
						style={{
							width: '60px',
							height: '20px',
						}}
						width={0}
						height={0}
					/>
					<Image
						src={'/mastercardIcon.svg'}
						alt='mastercard logo'
						style={{
							width: '60px',
							height: '20px',
						}}
						width={0}
						height={0}
					/>
					<Image
						src={'/paypalIcon.svg'}
						alt='paypal logo'
						style={{
							width: '60px',
							height: '20px',
						}}
						width={0}
						height={0}
					/>
				</div>
			</div>
			<div>
				<h3 className='font-light text-primary'>&copy; Copyright 2023 NextStore</h3>
			</div>
		</div>
	);
};

export default Copyrights;
