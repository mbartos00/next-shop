'use client';
import { ProductType } from '@/app/types/types';
import useEmblaCarousel from 'embla-carousel-react';
import Product from '../Product';
import { SliderDots, useDotButton } from './SliderDots';

const EmblaCarousel = ({ products }: { products: ProductType[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: 'trimSnaps',
    loop: true,
    breakpoints: {
      '(max-width: 400px)': {
        slidesToScroll: 1,
      },
      '(min-width: 400px) and (max-width:768px)': {
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
          {products.map((product: ProductType) => (
            <Product key={product.id} product={product} />
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
