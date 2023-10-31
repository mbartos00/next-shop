'use client';
import { FormEvent, useState } from 'react';

const Newsletter = () => {
	const [email, setEmail] = useState('');
	const subscribeToNewsletter = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(email);
		setEmail('');
	};

	return (
		<div className='flex flex-col justify-between bg-primary px-4 py-8 text-center text-white md:w-full md:flex-row md:px-[5vw] md:py-10 md:text-left xl:gap-10 xl:py-20'>
			<div className='xl:w-full'>
				<h2 className='mb-2 text-2xl font-semibold 2xl:text-3xl'>SUBSCRIBE US NOW</h2>
				<p className='text-sm font-extralight 2xl:text-base'>
					Get latest news, updates and deals directly mailed to your inbox.
				</p>
			</div>
			<form
				onSubmit={subscribeToNewsletter}
				className='mt-6 px-4 md:mt-0 md:flex md:items-center md:px-0 2xl:w-full'
			>
				<div className='flex flex-col justify-center gap-4 md:flex-row md:gap-0'>
					<input
						className='px-4 py-2.5 text-primary xl:py-4 2xl:w-full'
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder='Your email address here'
					/>
					<button className='bg-secondary px-3 py-3 text-sm font-medium md:py-0'>SUBSCRIBE</button>
				</div>
			</form>
		</div>
	);
};

export default Newsletter;
