import React from 'react';

const Loading = () => {
  return (
    <div className='fixed left-0 top-0 z-40 flex h-full w-full items-center justify-center bg-white'>
      <div className='absolute h-12 w-12 animate-spin rounded-md border-4 border-t-4 border-secondary'></div>
    </div>
  );
};

export default Loading;
