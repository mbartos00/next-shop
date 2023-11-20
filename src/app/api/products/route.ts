import capitalize from '@/app/utils/capitalize';
import prisma from '@/app/utils/prismadb';
import { NextResponse } from 'next/server';
import { URL } from 'url';

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const category = url.searchParams.get('category');
  const page = Number(url.searchParams.get('page'));
  const perPage = Number(url.searchParams.get('perPage'));
  const productCount = await prisma.product.count();

  try {
    let products;
    if (category) {
      products = await prisma.product.findMany({
        skip: (page - 1) * perPage,
        take: perPage,
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
        skip: (page - 1) * perPage,
        take: perPage,
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
    if (page > Math.ceil(productCount / perPage)) {
      return NextResponse.json({ message: 'Page not found' }, { status: 404 });
    }

    return NextResponse.json(
      {
        products,
        perPage,
        page,
        totalPages: Math.ceil(Math.ceil(productCount / perPage)),
        count: productCount,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: 'Get error', error }, { status: 500 });
  }
};
