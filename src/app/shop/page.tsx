import { Metadata } from 'next';
import Hero from '../components/Hero/Hero';
import Pagination from '../components/Pagination';
import Product from '../components/Product';
import Searchbar from '../components/Searchbar';
import { Products } from '../types/types';
import FilterDrawer from './FilterDrawer';

type Props = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export const metadata: Metadata = {
  title: 'Shop',
  description:
    'Explore the latest in cutting-edge technology at our one-stop electronics shop! From smartphones to smart home devices, our ecommerce app offers a wide range of high-quality electronics. Shop now for unbeatable deals and stay ahead in the digital world with the latest gadgets and innovations.',
};

const getAllProducts = async (page: any, perPage: any): Promise<Products> => {
  const res = await fetch(
    `${process.env.BASE_API_URL}/products?page=${page ? page : 1}&perPage=${perPage ? perPage : 9}`,
    { cache: 'no-cache' }
  );
  const data = await res.json();
  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

const Shop = async ({ searchParams }: Props) => {
  const { page, perPage } = searchParams;
  const {
    products,
    count,
    page: currentPage,
    perPage: currentSkip,
    totalPages,
  } = await getAllProducts(page, perPage);

  const getResultsInfo = () => {
    if (currentPage * currentSkip > count) {
      return `${(currentPage - 1) * currentSkip} - ${count}`;
    }
    if (currentPage === 1) {
      return `${currentPage} - ${currentPage * currentSkip}`;
    }
    return `${(currentPage - 1) * currentSkip} - ${currentPage * currentSkip}`;
  };

  return (
    <main>
      <Hero title='shop' />
      <section className='grid grid-cols-1 py-7 md:py-14 xl:grid-cols-4 xl:px-[15vw] xl:py-28'>
        <div className='mb-2 px-7 py-1 xl:px-0'>
          <p className='font-light text-[#3A3A3A]'>
            Showing {getResultsInfo()} of {count} results
          </p>
        </div>
        <div className='col-start-1 grid w-full grid-cols-1 place-items-center px-4 md:grid-cols-3 md:place-items-start md:gap-6 xl:col-span-3 xl:grid-cols-3 xl:px-0'>
          {products?.map((product) => (
            <Product
              key={product.id}
              withAddToCartButton
              product={product}
              version='standalone'
              className='w-[80%] md:w-full'
            />
          ))}
        </div>
        <div className='row-start-2 mb-4 w-full px-7 xl:col-start-4 xl:row-span-3 xl:row-start-1 xl:w-full xl:max-w-[290px]'>
          <Searchbar className='hidden xl:block' />
          <FilterDrawer />
        </div>
        <Pagination page={currentPage} totalPages={totalPages} perPage={currentSkip} />
      </section>
    </main>
  );
};

export default Shop;
