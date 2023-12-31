import { create } from 'zustand';
import { ProductType } from '../types/types';
import { createJSONStorage, persist } from 'zustand/middleware';

type Product = ProductType & {
  cartQuantity: number;
};

type StoreProps = {
  isMenuOpen: boolean;
  toggleMenuOpen: () => void;
};

type CartStoreProps = {
  cart: Product[];
  addToCart: (product: ProductType) => void;
  removeFromCart: (product: ProductType) => void;
};

const updateCart = (product: ProductType, cart: Product[]): Product[] => {
  const cartItem = { ...product, cartQuantity: 1 } as Product;

  const isProductInCart = cart.map((item) => item.id).includes(product.id);

  if (!isProductInCart) {
    cart.push(cartItem);
    return cart;
  }
  return cart.map((item) => {
    if (item.id === product.id) return { ...item, cartQuantity: item.cartQuantity + 1 } as Product;
    return item;
  });
};

const removeFromCart = (product: ProductType, cart: Product[]) => {
  const productInCart = cart.find((item) => item.id === product.id);

  if (!!productInCart) {
    const isMoreThanOneProductInCart = productInCart.cartQuantity > 1;
    if (isMoreThanOneProductInCart) {
      return cart.map((item) => {
        if (item.id === product.id)
          return { ...item, cartQuantity: item.cartQuantity - 1 } as Product;
        return item;
      });
    }
    return cart.filter((item) => item.id !== product.id);
  }
};

const useGlobalStore = create<StoreProps>()((set) => ({
  isMenuOpen: false,
  toggleMenuOpen: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));

const useCartStore = create<CartStoreProps>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product: ProductType) => {
        const cart = get().cart;
        const updatedCart = updateCart(product, cart);
        set({ cart: updatedCart });
      },
      removeFromCart: (product: ProductType) => {
        const cart = get().cart;
        const updatedCart = removeFromCart(product, cart);
        set({ cart: updatedCart });
      },
      clearCart: () => set(() => ({ cart: [] })),
    }),
    {
      name: 'cart',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export { useGlobalStore, useCartStore };
