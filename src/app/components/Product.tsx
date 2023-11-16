import Image from 'next/image';
import Link from 'next/link';
import { ProductType } from '../types/types';

const Product = ({ product }: { product: ProductType }) => {
  return (
    <Link
      href={`/shop/${product.id}`}
      className='relative mb-5 min-w-0 flex-shrink-0 flex-grow-0 basis-[50%] pl-4 max-[400px]:basis-[100%] md:basis-[33%] xl:basis-[25%] xl:pl-5'
    >
      <Image
        width={1000}
        height={1000}
        style={{ width: '100%', maxHeight: '418px', aspectRatio: 1 }}
        src={product.images[0].path}
        className='block object-cover'
        alt={`${product.images[0].name} image`}
      />
      <div className='mt-2 flex w-full justify-between'>
        <h3 className='text-base font-medium uppercase text-primary md:text-lg'>{product.name}</h3>
        <p className='text-base font-normal uppercase text-secondary md:text-lg'>
          ${product.price}
        </p>
      </div>
    </Link>
  );
};

export default Product;
