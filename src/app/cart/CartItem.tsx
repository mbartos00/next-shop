import Image from 'next/image';
import useCartStore, { CartProduct } from '../store/cartStore';
import Button from '../components/Button';

type Props = {
  product: CartProduct;
};

const CartItem = ({ product }: Props) => {
  const { addToCart, removeProduct, removeFromCart } = useCartStore();

  return (
    <div className='grid w-full grid-cols-1 gap-2 px-8 md:grid-cols-4 md:gap-4 md:gap-y-0 xl:grid-cols-5 xl:border-b-2 xl:border-[#EEEEEE] xl:py-4'>
      <div className='flex w-full flex-col items-center md:flex-row md:gap-4 xl:col-span-2'>
        <Image
          src={product.images[0].path}
          alt={`${product.name} image`}
          width={500}
          height={300}
          style={{ width: '100%' }}
          quality={100}
        />
        <div className='flex w-full justify-between md:flex-col'>
          <h3 className='text-base font-medium text-primary md:text-xl'>{product.name}</h3>
          <p className='text-secondary md:text-lg'>${product.price}</p>
        </div>
      </div>
      <div className='flex w-full justify-center gap-2 md:col-start-3 md:self-center xl:col-start-4 xl:place-items-center'>
        <Button
          tag='button'
          text='-'
          onClick={() => removeProduct(product)}
          className='border border-[#EEEEEE] bg-transparent px-4 py-1 shadow-xl '
        />
        <div className='my-auto w-14 border border-[#EEEEEE] py-1 text-center shadow-xl md:py-2 xl:py-0.5'>
          {product.cartQuantity}
        </div>
        <Button
          tag='button'
          text='+'
          onClick={() => addToCart(product)}
          className='border border-[#EEEEEE] bg-transparent px-4 py-1 shadow-xl'
        />
      </div>
      <div className='mt-2 flex items-center justify-center md:mt-0'>
        <h2 className='text-2xl text-secondary'>
          ${(product.price * product.cartQuantity).toFixed(2)}
        </h2>
        <Button
          tag='button'
          text={
            <span className='relative ml-2 block h-[3px] w-7 rotate-45 rounded-sm bg-primary transition-all duration-150 ease-in-out after:absolute after:left-0 after:top-0 after:h-[3px] after:w-7  after:rotate-90 after:rounded-sm after:bg-primary after:duration-100 group-hover:bg-red-600 after:group-hover:bg-red-600 md:ml-4'></span>
          }
          onClick={() => removeFromCart(product)}
          className='group bg-transparent p-2 [&&]:text-2xl'
        />
      </div>
    </div>
  );
};

export default CartItem;
