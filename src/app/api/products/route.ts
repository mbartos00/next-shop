import capitalize from '@/app/utils/capitalize';
import prisma from '@/app/utils/prismadb';
import { NextResponse } from 'next/server';
import { URL } from 'url';

export const GET = async (req: Request) => {
  const category = new URL(req.url).searchParams.get('category');
  try {
    let products;
    if (category) {
      products = await prisma.product.findMany({
        where: {
          category: {
            name: capitalize(category),
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
              name: true,
              id: true,
              path: true,
            },
          },
        },
      });
    } else {
      products = await prisma.product.findMany({
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
    }

    if (!products) {
      return NextResponse.json({ message: 'Products not found' }, { status: 404 });
    }

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ message: 'Get error', error }, { status: 500 });
  }
};
