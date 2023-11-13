import prisma from '@/app/utils/prismadb';
import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
  try {
    const aggregate = await prisma.product.aggregate({
      _max: {
        discount: true,
      },
    });

    const products = await prisma.product.findFirst({
      where: {
        discount: aggregate._max.discount,
      },
      include: {
        category: {
          select: {
            name: true,
          },
        },
        images: {
          select: {
            name: true,
            id: true,
            path: true,
          },
        },
      },
    });

    if (!products) {
      return NextResponse.json({ message: 'Products not found' }, { status: 404 });
    }

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ message: 'Get error', error }, { status: 500 });
  }
};
