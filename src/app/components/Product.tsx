'use client';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'sonner';
import { useCartStore } from '../store/store';
import { ProductType } from '../types/types';
import Button from './Button';

type Props = {
  product: ProductType;
  withAddToCartButton?: boolean;
  version?: 'slider' | 'standalone';
  className?: string;
};

const Product = ({ product, withAddToCartButton, version = 'slider', className = '' }: Props) => {
  const { addToCart } = useCartStore();

  const addProductToCart = async () => {
    addToCart(product);
    toast.info('Product added to cart', { description: product.name });
    await useCartStore.persist.rehydrate();
  };

  return (
    <div
      className={`relative mb-5 min-w-0 ${
        version === 'slider'
          ? 'flex-shrink-0 flex-grow-0 basis-[50%] pl-4 max-[400px]:basis-[100%] md:basis-[33%] xl:basis-[25%] xl:pl-5'
          : ''
      } ${className}`}
    >
      <div className='group relative'>
        <Link href={`/shop/${product.id}`}>
          <Image
            width={1000}
            height={1000}
            style={{ width: '100%', maxHeight: '418px', aspectRatio: 1 }}
            src={product.images[0].path}
            className='block object-cover'
            alt={`${product.name} image`}
          />
        </Link>
        {withAddToCartButton && (
          <Button
            onClick={addProductToCart}
            tag='button'
            text={
              <div className='flex w-full justify-center gap-2'>
                <p>add to cart</p>
                <Image
                  src={'/cartIcon.svg'}
                  alt='cart icon'
                  width={20}
                  height={20}
                  className='invert'
                />
              </div>
            }
            className={`absolute bottom-[10%] left-1/2 w-[70%] -translate-x-1/2 px-4 py-2 text-white transition-all duration-500 ease-out hover:bg-secondary group-hover:translate-y-0 group-hover:opacity-100 xl:translate-y-full xl:opacity-0`}
          />
        )}
      </div>
      <div className='mt-2 flex w-full justify-between'>
        <h3 className='text-base font-medium uppercase text-primary md:text-lg'>{product.name}</h3>
        <p className='text-base font-normal uppercase text-secondary md:text-lg'>
          ${product.price}
        </p>
      </div>
    </div>
  );
};

export default Product;
