import prisma from '@/app/utils/prismadb';
import { Product } from '@prisma/client';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const products: Product[] = await prisma.product.findMany({
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
      orderBy: {
        createdAt: 'desc',
      },
      take: 5,
    });

    if (!products || products.length === 0) {
      return NextResponse.json({ message: 'Products not found' }, { status: 404 });
    }

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ message: 'Get error', error }, { status: 500 });
  }
};
