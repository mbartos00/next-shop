import Link from 'next/link';
import { ProductType } from '../types/types';
import ProductSlider from './Slider/ProductSlider';

type Props = {
  products: ProductType[];
  heading: string;
};

const ProductSection = ({ products, heading }: Props) => {
  return (
    <section className='py-4'>
      <div className='my-6 flex flex-col items-start pl-6 md:flex-row md:justify-between md:px-7 xl:px-6'>
        <h2 className='text-2xl font-medium uppercase text-primary'>{heading}</h2>
        <Link
          href={'/shop'}
          className='relative py-1.5 text-sm font-semibold uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-[#E1E1E1]'
        >
          go to shop
        </Link>
      </div>
      <div>
        <ProductSlider products={products} />
      </div>
    </section>
  );
};

export default ProductSection;
