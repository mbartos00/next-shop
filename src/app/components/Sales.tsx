import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ProductType } from '../types/types';
import Button from './Button';

type Props = {
  heading: string;
};

const getDiscountedProduct = async (): Promise<ProductType> => {
  try {
    const res = await fetch(`${process.env.BASE_API_URL}/products/discounted`, {
      cache: 'no-cache',
    });
    return res.json();
  } catch (error: any) {
    console.error(error);
    throw new Error(error);
  }
};

const Sales = async ({ heading }: Props) => {
  const discountedProduct = await getDiscountedProduct();

  return (
    <div className=' bg-[#EDF1F3]'>
      <div className='grid grid-cols-1 place-items-center text-center uppercase text-primary xl:grid-cols-4'>
        <div className='mb-4 xl:col-start-2 xl:mb-0 xl:text-left'>
          <h3 className='relative mx-auto mt-8 w-fit text-2xl font-light uppercase text-primary before:absolute before:inset-y-1/2 before:-left-12 before:h-[1px] before:w-6 before:bg-primary xl:ml-14 xl:mt-0 xl:text-3xl'>{`${discountedProduct?.discount}% off`}</h3>
          <h1 className='mb-8 mt-4 text-4xl font-light md:text-5xl xl:mb-10 xl:text-6xl'>
            {heading}
          </h1>
          <Button
            text='shop sale'
            link={`/${discountedProduct?.id}`}
            className='px-6 py-2 xl:px-12 xl:py-4'
          />
        </div>
        <Image
          src={discountedProduct?.images[0].path}
          style={{ width: '100%', maxWidth: '530px', maxHeight: '654px', marginBlock: '.5rem' }}
          width={530}
          height={0}
          alt={`${discountedProduct?.name} image`}
          className='xl:ml-16'
        />
      </div>
    </div>
  );
};

export default Sales;
