import Button from './Button';

type Props = {
  page: number;
  totalPages: number;
  perPage: number;
};

const Pagination = ({ page, totalPages, perPage }: Props) => {
  const hasPreviousPage = page !== 1;
  const hasNextPage = page !== totalPages;
  return (
    <div className='col-span-3 col-start-1 mt-14 flex items-center justify-center gap-4'>
      <Button
        text='prev'
        link={`/shop?page=${!hasPreviousPage ? '1' : page - 1}&perPage=${perPage}`}
        className={`px-4 py-2 transition-all duration-300 ease-in-out hover:bg-secondary ${
          !hasPreviousPage ? 'pointer-events-none bg-slate-300' : ''
        }`}
      />
      <span className='text-lg font-semibold text-secondary'>
        {page} / {totalPages}
      </span>
      <Button
        text='next'
        link={`/shop?page=${!hasNextPage ? totalPages : page + 1}&perPage=${perPage}`}
        className={`px-4 py-2 transition-all duration-300 ease-in-out hover:bg-secondary ${
          !hasNextPage ? 'pointer-events-none bg-slate-300' : ''
        }`}
      />
    </div>
  );
};

export default Pagination;
