'use client';
import { Suspense } from 'react';
import Hero from '../components/Hero/Hero';
import useStore from '../hooks/useStore';
import useCartStore from '../store/cartStore';
import CartItem from './CartItem';

const Cart = () => {
  const cart = useStore(useCartStore, (state) => state.cart);
  return (
    <main>
      <Hero title='cart' />
      <div className='flex flex-col gap-6 py-7 md:py-14 xl:px-[15vw] xl:py-28'>
        {cart?.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Cart;
