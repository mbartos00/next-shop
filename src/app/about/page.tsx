/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import Button from '../components/Button';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero/Hero';
import FeatureList from '../components/FeatureList';

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
  title: 'About Us',
  description:
    "NextShop – Where Tech Passion meets Innovation! Founded on the belief that technology should simplify, not complicate, life, NextShop came to life. Picture this: a group of tech enthusiasts united by the vision of delivering cutting-edge gadgets that seamlessly integrate into your lifestyle. The Journey From that shared passion, NextShop was born. We scoured the tech landscape, handpicking the finest devices that redefine what's possible. Our mission? To make top-tier electronics accessible to all.",
};

const About = () => {
  return (
    <main className='flex flex-col'>
      <Hero title='about us' />
      <div className='xl:px-[15vw] '>
        <FeatureList />
        <section className='grid grid-cols-1 place-items-center pb-8 md:pb-12 xl:grid-cols-2 xl:pb-28'>
          <div>
            <video autoPlay loop muted className='w-full max-w-[600px]'>
              <source src='/aboutUsVideo.mp4' type='video/mp4' />
            </video>
          </div>
          <div className='p-4 pt-8 text-center text-primary xl:pt-0 xl:text-left'>
            <h1 className='mb-4 text-3xl font-semibold uppercase xl:text-4xl'>our story</h1>
            <p className='mb-6 max-w-[80ch] text-base font-light md:mb-8 xl:mb-10 xl:max-w-[60ch]'>
              NextShop – Where Tech Passion meets Innovation! Founded on the belief that technology
              should simplify, not complicate, life, NextShop came to life. Picture this: a group of
              tech enthusiasts united by the vision of delivering cutting-edge gadgets that
              seamlessly integrate into your lifestyle. The Journey From that shared passion,
              NextShop was born. We scoured the tech landscape, handpicking the finest devices that
              redefine what's possible. Our mission? To make top-tier electronics accessible to all.
            </p>
            <Button text='shop our store' link='/store' className='px-6 py-4 xl:px-12 xl:py-4' />
          </div>
        </section>
      </div>
      <Carousel content={mockedReviews} variant='review' arrows />
    </main>
  );
};

export default About;
