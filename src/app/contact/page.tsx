import Image from 'next/image';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import { contactInfo, storesContactInfo } from '../constants/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Have questions or need assistance with your tech purchase? Contact NextShop for expert support. Our dedicated team is here to help you with any inquiries. Reach out today and experience hassle-free shopping for all your electronic needs.',
};

const page = () => {
  return (
    <main className='mb-7 flex flex-col items-center justify-center md:mb-14 xl:mb-28 xl:px-[15vw]'>
      <div className='mb-3 mt-7 flex w-full flex-col items-center gap-4 md:mb-7 md:mt-14 md:flex-row-reverse md:items-start xl:mb-14 xl:mt-28'>
        <ContactForm />
        <ContactInfo
          heading='contact info'
          description='Feel free to contact or visit us in one of our places'
          contactData={contactInfo}
          className='md:pl-5 xl:pl-0'
        />
      </div>
      <div className='mb-3 mt-7 flex w-[80%] flex-col items-center md:mb-7 md:mt-14 md:w-[95%] md:flex-row md:gap-4 xl:mb-14 xl:mt-28 xl:w-full xl:gap-10 '>
        <Image
          src={'/contactPageImage.png'}
          alt='contact page image'
          width={640}
          height={540}
          quality={100}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
        <ContactInfo
          heading='our stores'
          description='You can also directly buy products from our stores.'
          contactData={storesContactInfo}
        />
      </div>
    </main>
  );
};

export default page;
