import Image from 'next/image';
import React from 'react';
import { PostType } from '../types/types';
import dayjs from 'dayjs';
import Link from 'next/link';

const Post = ({ id, image, category, title, createdAt }: Partial<PostType>) => {
  return (
    <div className='mb-4 flex w-full flex-col items-center justify-center px-6 md:mb-0 xl:px-0'>
      <div className='w-full'>
        <Link href={`/blogs/${id}`}>
          <Image
            src={image![0].path}
            quality={100}
            width={420}
            height={0}
            style={{ width: '100%', aspectRatio: 4 / 3 }}
            alt={`${title} post image`}
          />
        </Link>
        <div className='mt-4 uppercase'>
          <p className='text-xs font-medium text-[#848484]'>
            {dayjs(createdAt).format('MMM DD, YYYY')} - {category?.name}
          </p>
          <h3 className='text-sm font-medium text-primary'>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Post;
