'use client';
import { Form, Formik } from 'formik';
import Button from './Button';
import Input from './Input';
import Image from 'next/image';

const Searchbar = ({ className = '' }: { className?: string }) => {
  return (
    <Formik
      initialValues={{
        search: '',
      }}
      onSubmit={() => {}}
    >
      <Form className={`w-fit max-w-full ${className}`}>
        <div className='mb-8 flex '>
          <Input name='search' placeholder='Search' className='mt-0' />
          <Button
            tag='button'
            text={
              <Image
                src={'/searchIcon.svg'}
                alt='search icon'
                width={100}
                height={100}
                className=' absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 invert'
                style={{ width: '20px' }}
              />
            }
            type='submit'
            className='relative w-full px-6 py-2'
          />
        </div>
      </Form>
    </Formik>
  );
};

export default Searchbar;
