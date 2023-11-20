'use client';
import { Drawer } from 'vaul';
import Filters from './Filters';
import useWindowWidth from '../hooks/useWindowWidth';
import Searchbar from '../components/Searchbar';

const FilterDrawer = () => {
  const windowWidth = useWindowWidth();
  const isDesktop = windowWidth! >= 1280;

  return (
    <>
      {isDesktop ? (
        <Filters />
      ) : (
        <Drawer.Root>
          <Drawer.Trigger asChild>
            <button className='bg-primary px-4 py-2 text-sm font-medium uppercase text-white xl:hidden'>
              Filters
            </button>
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay className='fixed inset-0 z-20 bg-black/40' />
            <Drawer.Content className='fixed bottom-0 left-0 right-0 z-20 flex max-h-[96%] flex-col rounded-t-[10px] bg-white'>
              <div className=' flex w-full flex-col items-center overflow-auto rounded-t-[10px] py-4'>
                <div className='mx-auto mb-8 h-1.5 w-12 flex-shrink-0 rounded-full bg-zinc-300' />
                <Drawer.Title className='mb-4 text-2xl font-medium uppercase'>Filters</Drawer.Title>
                <Searchbar className='block' />
                <Filters />
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      )}
    </>
  );
};

export default FilterDrawer;
