'use client';

import { useRouter } from 'next/navigation';
import Button from '../components/Button';

const Error = ({ error }: { error: Error & { digest?: string } }) => {
  const router = useRouter();
  return (
    <div className='flex h-screen flex-col items-center justify-center text-primary'>
      <h1 className='text-2xl font-semibold'>Oops! Error occured</h1>
      <p className='mb-4'>{error.message}</p>
      <Button
        tag='button'
        text='Go to the previous page'
        className='px-4 py-2 font-medium text-white transition-all duration-300 ease-in-out hover:bg-secondary hover:text-primary'
        onClick={() => router.back()}
      />
    </div>
  );
};

export default Error;
