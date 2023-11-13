import prisma from '@/app/utils/prismadb';
import { NextResponse } from 'next/server';

type Params = {
  params: {
    id: string;
  };
};

export const GET = async (req: Request, { params }: Params) => {
  const { id } = params;
  try {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    });
    if (!product) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ message: 'Get error', error }, { status: 500 });
  }
};
