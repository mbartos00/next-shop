import Carousel from './components/Carousel';
import FeatureList from './components/FeatureList';
import HomeHero from './components/Hero/HomeHero';
import Posts from './components/Posts';
import ProductSection from './components/ProductSection';
import Sales from './components/Sales';

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

const Home = () => {
  return (
    <main>
      <HomeHero />
      <div className='xl:px-[15vw]'>
        <FeatureList />
        <ProductSection content={mockedContent} heading='mobile products' />
        <ProductSection content={mockedContent} heading='smart watches' />
      </div>
      <Sales heading='new year sale' discount={10} />
      <div className='xl:px-[15vw]'>
        <Posts />
        <Carousel content={mockedReviews} variant='review' arrows />
      </div>
    </main>
  );
};

export default Home;
