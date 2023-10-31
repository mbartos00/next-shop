import Image from 'next/image';
import Link from 'next/link';

const photos = [
	{ image: '/mockImages/camera.png', link: 'www.instagram.com/id' },
	{ image: '/mockImages/drone.jpg', link: 'www.instagram.com/id' },
	{ image: '/mockImages/headphones.jpg', link: 'www.instagram.com/id' },
	{ image: '/mockImages/laptop.jpg', link: 'https://www.instagram.com/id' },
	{ image: '/mockImages/phone.jpg', link: 'www.instagram.com/id' },
];
const InstagramGallery = () => {
	return (
		<div className='mt-10 flex flex-col items-center'>
			<h1 className='mb-6 text-lg font-semibold text-primary'>SHOP OUR INSTA</h1>
			<div className='grid grid-cols-2 gap-4 px-2 md:grid-cols-5'>
				{photos.map(({ image, link }, idx, arr) => (
					<div className={`${idx + 1 === arr.length ? 'col-span-2 md:col-auto' : ''} relative`}>
						<Image
							style={{ width: '100%', aspectRatio: 1 }}
							src={image}
							alt='some image'
							width={244}
							height={244}
						/>
						<Link
							href={link}
							passHref={true}
							className='absolute left-0 top-0 flex h-full w-full items-center justify-center bg-gradient-to-r from-[#0000008c] to-[#0000008c] xl:opacity-0 xl:transition-all xl:duration-300 xl:ease-out xl:hover:opacity-100'
						>
							<Image
								src={'/instagramHoverIcon.svg'}
								alt='instagram icon'
								width={30}
								height={30}
								style={{ opacity: 0.7 }}
							/>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default InstagramGallery;
