import prisma from '@/app/utils/prismadb';
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
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ message: 'Get error', error }, { status: 500 });
  }
};
