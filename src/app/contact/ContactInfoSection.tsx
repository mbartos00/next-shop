export type ContactData = {
  contactData: {
    title: string;
    address: string;
    phoneNumbers?: string[];
    email: string;
  }[];
};

const ContactInfoSection = ({ contactData }: ContactData) => {
  return (
    <section className='flex w-full flex-col font-medium text-primary md:mt-5 md:w-[80%] md:flex-row md:gap-8 xl:w-full'>
      {contactData?.map((item) => (
        <div key={item.title} className='my-4'>
          <h3 className='text-center text-lg uppercase  underline md:text-left'>{item.title}</h3>
          <ul className='text-center md:text-left'>
            <li>{item.address}</li>
            {item.phoneNumbers?.map((number) => <li key={number}>{number}</li>)}
            <li>{item.email}</li>
          </ul>
        </div>
      ))}
    </section>
  );
};

export default ContactInfoSection;
