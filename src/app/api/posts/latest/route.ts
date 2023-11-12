import prisma from '@/app/utils/prismadb';
import dayjs from 'dayjs';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        category: {
          select: {
            name: true,
          },
        },
        image: {
          select: {
            id: true,
            path: true,
          },
        },
      },
    });
    if (!posts) {
      return NextResponse.json({ message: 'Post not found' }, { status: 404 });
    }
    const now = dayjs();
    const latestPosts = posts.filter((post) => now.diff(dayjs(post.createdAt), 'month', true));

    return NextResponse.json(latestPosts.slice(0, 3));
  } catch (error) {
    return NextResponse.json({ message: 'Get error', error }, { status: 500 });
  }
};
