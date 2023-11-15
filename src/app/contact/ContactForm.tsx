'use client';
import { Form, Formik, FormikHelpers } from 'formik';
import React from 'react';
import Button from '../components/Button';
import TextInput from '../components/Input';
import { toast } from 'sonner';
import useWindowWidth from '../hooks/useWindowWidth';
import validationSchema from './validation';

export type ContactFormValues = {
  fullName: string;
  email: string;
  phoneNumber?: string;
  subject?: string;
  message: string;
};

const ContactForm = () => {
  const windowWidth = useWindowWidth();
  const initialValues: ContactFormValues = {
    fullName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
  };

  const submitContactForm = async (
    values: ContactFormValues,
    actions: FormikHelpers<ContactFormValues>
  ) => {
    console.log(values);
    actions.resetForm();
    toast.success('Success', {
      description: 'Copy of your message has been sent to your email',
      position: windowWidth! < 1000 ? 'top-center' : 'bottom-right',
    });
  };

  return (
    <div className='flex w-full flex-col items-center'>
      <div className='w-[80%] text-primary xl:w-full'>
        <h1 className='text-left text-3xl font-medium uppercase'>any questions?</h1>
        <p className='mt-1 text-sm font-light md:mt-2'>
          Use the form below to get in touch with us.
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={submitContactForm}
        validationSchema={validationSchema}
        validateOnBlur
      >
        <Form className='mt-4 flex w-[80%] flex-col items-center gap-4 md:mt-7 xl:w-full'>
          <div className='flex w-full flex-col gap-4'>
            <TextInput name='fullName' required placeholder='Your full name' />
            <TextInput name='email' required placeholder='Write your email here' />
          </div>
          <TextInput name='phoneNumber' placeholder='Phone number' />
          <TextInput name='subject' placeholder='Write your subject here' />
          <TextInput as='textarea' name='message' required placeholder='Write yout message here' />
          <div className='w-full text-center md:text-left'>
            <Button
              tag='button'
              type='submit'
              text='submit'
              className='mt-4 px-10 py-3 text-white md:px-12'
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
