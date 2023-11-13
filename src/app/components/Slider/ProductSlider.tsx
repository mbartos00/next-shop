'use client';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { SliderDots, useDotButton } from './SliderDots';
import { ProductType } from '@/app/types/types';
import Link from 'next/link';

const EmblaCarousel = ({ products }: { products: ProductType[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: 'trimSnaps',
    loop: true,
    breakpoints: {
      '(max-width: 768px)': {
        slidesToScroll: 2,
      },
      '(min-width: 768px)': {
        slidesToScroll: 3,
      },
      '(min-width: 1280px)': {
        slidesToScroll: 4,
      },
    },
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <div className='mb-2 p-6 md:mb-8 xl:mb-20'>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='-ml-4 flex touch-pan-y xl:-ml-5'>
          {products.slice(0, 20).map((product: ProductType) => (
            <Link
              href={`/products/${product.id}`}
              className='relative mb-5 min-w-0 flex-shrink-0 flex-grow-0 basis-[50%] pl-4 md:basis-[33%] xl:basis-[25%] xl:pl-5'
              key={product.id}
            >
              <Image
                width={1000}
                height={1000}
                style={{ width: '100%', height: '80%' }}
                src={product.images[0].path}
                className='block object-cover'
                alt={`${product.images[0].name} image`}
              />
              <div className='mt-2 flex w-full justify-between'>
                <h3 className='text-base font-medium uppercase text-primary md:text-lg'>
                  {product.name}
                </h3>
                <p className='text-base font-normal uppercase text-secondary md:text-lg'>
                  ${product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className='absolute inset-x-0 z-[1] mt-2 flex items-center justify-center gap-2 md:mt-0'>
        {scrollSnaps.length > 1 &&
          scrollSnaps.map((_, index) => (
            <SliderDots
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`flex h-2 w-3 items-center  ${
                index === selectedIndex ? 'after:bg-secondary' : 'opacity-70 after:bg-primary'
              } after:h-2 after:w-2 after:rounded-full`}
            />
          ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
