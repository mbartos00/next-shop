'use client';
import React, { useCallback } from 'react';
import Button from '../components/Button';
import useCartStore from '../store/cartStore';
import { useStore } from 'zustand';

const CartSummary = () => {
  const cart = useStore(useCartStore, (state) => state.cart);

  const calculateTotalPrice = useCallback(() => {
    return cart
      .map((item) => {
        return item.cartQuantity * item.price;
      })
      .reduce((a, b) => a + b)
      .toFixed(2);
  }, [cart]);

  return (
    <div className='self-end px-8 py-8'>
      <h2 className='mb-2 text-end text-3xl font-medium uppercase text-primary'>Cart total</h2>
      <div className='flex w-full justify-end gap-3 border-b-2 border-t-2 border-[#EEEEEE] py-3'>
        <span className='text-xl uppercase text-secondary'>${calculateTotalPrice()}</span>
      </div>
      <div className='mx-auto my-6 flex w-fit flex-col gap-2 md:mx-0 md:flex-row md:gap-4'>
        <Button
          className='px-6 py-3 text-center xl:px-12 xl:py-4'
          text='Continue shopping'
          tag='link'
          link='/shop'
        />
        <Button
          className='px-6 py-3 text-center xl:px-12 xl:py-4'
          text='Proceed to checkout'
          tag='link'
          link='/checkout'
        />
      </div>
    </div>
  );
};

export default CartSummary;
