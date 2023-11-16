'use client';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'sonner';
import useStore from '../store/store';
import { ProductType } from '../types/types';
import Button from './Button';

type Props = {
  product: ProductType;
  withAddToCartButton?: boolean;
};

const Product = ({ product, withAddToCartButton }: Props) => {
  const { addToCart } = useStore();

  const addProductToCart = () => {
    addToCart(product);
    toast.info('Product added to cart', { description: product.name });
  };

  return (
    <div className='relative mb-5 min-w-0 flex-shrink-0 flex-grow-0 basis-[50%] pl-4 max-[400px]:basis-[100%] md:basis-[33%] xl:basis-[25%] xl:pl-5'>
      <div className='relative'>
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
                <p className='group-hover:text-primary'>add to cart</p>
                <Image
                  src={'/cartIcon.svg'}
                  alt='cart icon'
                  width={20}
                  height={20}
                  className='invert group-hover:invert-0'
                />
              </div>
            }
            className='group absolute bottom-[10%] left-1/2 z-10 w-[70%] -translate-x-1/2 px-4 py-2 text-white transition-all duration-300 ease-out hover:bg-secondary'
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
