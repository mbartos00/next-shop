import prisma from '@/app/utils/prismadb';
import dayjs from 'dayjs';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const now = dayjs();
    const products = await prisma.product.findMany({
      where: {
        createdAt: {
          lte: now.toDate(),
          gte: now.subtract(1, 'month').toDate(),
        },
      },
      include: {
        category: {
          select: {
            name: true,
          },
        },
        images: {
          select: {
            id: true,
            path: true,
          },
        },
      },
    });
    if (!products) {
      return NextResponse.json({ message: 'Products not found' }, { status: 404 });
    }

    return NextResponse.json(products.slice(0, 5));
  } catch (error) {
    return NextResponse.json({ message: 'Get error', error }, { status: 500 });
  }
};
