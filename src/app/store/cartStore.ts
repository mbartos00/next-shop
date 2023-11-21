import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { ProductType } from '../types/types';

export type CartProduct = ProductType & {
  cartQuantity: number;
};

type CartStoreProps = {
  cart: CartProduct[];
  addToCart: (product: ProductType) => void;
  removeProduct: (product: ProductType) => void;
  removeFromCart: (product: ProductType) => void;
};

const updateCart = (product: ProductType, cart: CartProduct[]): CartProduct[] => {
  const cartItem = { ...product, cartQuantity: 1 } as CartProduct;

  const isProductInCart = cart.map((item) => item.id).includes(product.id);

  if (!isProductInCart) {
    cart.push(cartItem);
    return cart;
  }
  return cart.map((item) => {
    if (item.id === product.id)
      return { ...item, cartQuantity: item.cartQuantity + 1 } as CartProduct;
    return item;
  });
};

const removeProduct = (product: ProductType, cart: CartProduct[]) => {
  const productInCart = cart.find((item) => item.id === product.id);

  if (!!productInCart) {
    const isMoreThanOneProductInCart = productInCart.cartQuantity > 1;
    if (isMoreThanOneProductInCart) {
      return cart.map((item) => {
        if (item.id === product.id)
          return { ...item, cartQuantity: item.cartQuantity - 1 } as CartProduct;
        return item;
      });
    }
    return cart.filter((item) => item.id !== product.id);
  }
};

const removeFromCart = (product: ProductType, cart: CartProduct[]) => {
  return cart.filter((item) => item.id !== product.id);
};

const useCartStore = create<CartStoreProps>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product: ProductType) => {
        const cart = get().cart;
        const updatedCart = updateCart(product, cart);
        set({ cart: updatedCart });
      },
      removeProduct: (product: ProductType) => {
        const cart = get().cart;
        const updatedCart = removeProduct(product, cart);
        set({ cart: updatedCart });
      },
      removeFromCart: (product: ProductType) => {
        const cart = get().cart;
        set({ cart: removeFromCart(product, cart) });
      },
      clearCart: () => set(() => ({ cart: [] })),
    }),
    {
      name: 'cart',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCartStore;
