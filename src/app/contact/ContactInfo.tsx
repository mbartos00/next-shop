import ContactInfoSection, { ContactData } from './ContactInfoSection';

type Props = {
  heading: string;
  description: string;
  className?: string;
} & ContactData;

const ContactInfo = ({ heading, description, contactData, className }: Props) => {
  return (
    <div className={`my-8 flex w-full flex-col items-center md:my-0 md:items-start ${className}`}>
      <div className='text-primary md:w-[80%] xl:w-full'>
        <h1 className='text-center text-3xl font-medium uppercase md:text-left'>{heading}</h1>
        <p className='mt-1 text-center text-sm font-light md:mt-2 md:text-left'>{description}</p>
      </div>
      <ContactInfoSection contactData={contactData} />
    </div>
  );
};

export default ContactInfo;
