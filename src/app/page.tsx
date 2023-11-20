import { Metadata } from 'next';
import Carousel from './components/Carousel';
import FeatureList from './components/FeatureList';
import HomeHero from './components/Hero/HomeHero';
import Posts from './components/Posts';
import ProductSection from './components/ProductSection';
import Sales from './components/Sales';
import { Products } from './types/types';

const getProductsByCategory = async (category: string): Promise<Products> => {
  try {
    const res = await fetch(
      `${process.env.BASE_API_URL}/products?page=1&perPage=20&category=${category}`,
      {
        cache: 'no-cache',
      }
    );
    return res.json();
  } catch (error: any) {
    console.error(error);
    throw new Error(error);
  }
};

const mockedReviews = [
  {
    id: 1,
    review:
      'Tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellen tesque pretium feugiat vel morbi suspen dise sagittis lorem habi tasse morbi.',
    rating: 4,
    createdBy: 'John Doe',
  },
  {
    id: 2,
    review:
      'Tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellen tesque pretium feugiat vel morbi suspen dise sagittis lorem habi tasse morbi.',
    rating: 5,
    createdBy: 'Emma Doe',
  },
  {
    id: 3,
    review:
      'Tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellen tesque pretium feugiat vel morbi suspen dise sagittis lorem habi tasse morbi.',
    rating: 2,
    createdBy: 'Adrian Doe',
  },
];

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Discover cutting-edge electronics at NextShop. Explore a vast selection of the latest gadgets, from smartphones to smart home devices. Shop top brands for unbeatable prices and stay ahead in the world of technology. Find the perfect tech companion today!',
};

const Home = async () => {
  const { products: phones } = await getProductsByCategory('phones');
  const { products: smartWatches } = await getProductsByCategory('watches');

  return (
    <main>
      <HomeHero />
      <div className='xl:px-[15vw]'>
        <FeatureList />
        <ProductSection products={phones} heading='mobile products' />
        <ProductSection products={smartWatches} heading='smart watches' />
      </div>
      <Sales heading='new year sale' />
      <div className='xl:px-[15vw]'>
        <Posts />
        <Carousel content={mockedReviews} variant='review' arrows />
      </div>
    </main>
  );
};

export default Home;
