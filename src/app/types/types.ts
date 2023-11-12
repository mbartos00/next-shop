import { Prisma } from '@prisma/client';

export type PostType = Prisma.PostGetPayload<{
  include: {
    category: true;
    image: true;
  };
}>;
