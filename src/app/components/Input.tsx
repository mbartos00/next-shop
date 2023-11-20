import { Field, FormikErrors, FormikHelpers, FormikProps, useFormikContext } from 'formik';
import React from 'react';
import capitalize from '../utils/capitalize';
import { ContactFormValues } from '../contact/ContactForm';

type Props = {
  label?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  as?: string;
  className?: string;
};

const Input = ({ as, label, name, placeholder, required, className = '' }: Props) => {
  const { errors, touched }: FormikProps<ContactFormValues> = useFormikContext();
  const isError =
    errors[name as keyof ContactFormValues] && touched[name as keyof ContactFormValues];
  return (
    <div className='flex w-full flex-col'>
      {label && (
        <label className='text-sm font-light text-[#3a3a3a] md:text-base' htmlFor={name}>
          {required ? `${label}*` : label}
        </label>
      )}
      <Field
        as={as}
        className={`mt-2 border ${className} ${
          isError ? 'border-red-700' : 'border-[#D9D9D9]'
        } py-2 pl-4 font-light text-[#3a3a3a] outline-offset-0 outline-primary placeholder:text-sm ${
          as === 'textarea' ? 'resize-none py-6' : ''
        }`}
        id={name}
        name={name}
        placeholder={required ? `${capitalize(placeholder!)}*` : capitalize(placeholder!) || null}
      />
      {isError && (
        <p className='mx-auto mt-1 text-sm font-normal text-red-600'>
          {errors[name as keyof ContactFormValues]}
        </p>
      )}
    </div>
  );
};

export default Input;
