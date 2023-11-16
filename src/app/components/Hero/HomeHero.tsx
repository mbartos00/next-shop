import React from 'react';
import Carousel from '../Carousel';
import { ProductType } from '@/app/types/types';

const getLatestProducts = async (): Promise<ProductType[]> => {
  try {
    const res = await fetch(`${process.env.BASE_API_URL}/products/latest`, { cache: 'no-cache' });
    return res.json();
  } catch (error: any) {
    console.error(error);
    throw new Error(error);
  }
};

const HomeHero = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <div>
      <Carousel variant='hero' heading='our products are great' arrows content={latestProducts} />
    </div>
  );
};

export default HomeHero;
