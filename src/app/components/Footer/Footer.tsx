import InstagramGallery from './InstagramGallery';
import Newsletter from './Newsletter';

const Footer = () => {
	return (
		<footer className='flex flex-col md:justify-center xl:px-[15vw]'>
			<Newsletter />
			<InstagramGallery />
		</footer>
	);
};

export default Footer;
