import Carousel from './components/Carousel';
import FeatureList from './components/FeatureList';
import HomeHero from './components/Hero/HomeHero';
import Posts from './components/Posts';
import ProductSection from './components/ProductSection';
import Sales from './components/Sales';
import { ProductType } from './types/types';

const mockedContent = [
  {
    id: 1,
    title: 'Iphone',
    price: 1234,
    image: '/mockImages/phone.jpg',
  },
  {
    id: 2,
    title: 'Iphone2',
    price: 1234,
    image: '/mockImages/phone.png',
  },
  {
    id: 3,
    title: 'Iphone3',
    price: 1234,
    image: '/mockImages/phone.png',
  },
  {
    id: 4,
    title: 'Iphone4',
    price: 1234,
    image: '/mockImages/phone.png',
  },
  {
    id: 5,
    title: 'Iphone5',
    price: 1234,
    image: '/mockImages/phone.png',
  },
  {
    id: 6,
    title: 'Iphone6',
    price: 1234,
    image: '/mockImages/phone.png',
  },
];

const getProductsByCategory = async (category: string): Promise<ProductType[]> => {
  try {
    const res = await fetch(`${process.env.BASE_API_URL}/products?category=${category}`, {
      cache: 'no-cache',
    });
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

const Home = async () => {
  const phones = await getProductsByCategory('phones');
  const smartWatches = await getProductsByCategory('watches');

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
