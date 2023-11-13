import Copyrights from './Copyrights';
import Informations from './Informations';
import InstagramGallery from './InstagramGallery';
import Newsletter from './Newsletter';

const Footer = () => {
  return (
    <footer className='flex flex-col md:justify-center '>
      <div className='xl:px-[15vw]'>
        <Newsletter />
        <InstagramGallery />
        <Informations />
      </div>
      <Copyrights />
    </footer>
  );
};

export default Footer;
