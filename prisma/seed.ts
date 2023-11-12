import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const ITEMS = 30;
const getRandNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateProducts = async () => {
  await prisma.product.deleteMany();
  const categories = await prisma.category.findMany();

  const products: any[] = [];
  for (let i = 0; i < ITEMS; i++) {
    const product = {
      name: faker.commerce.productName(),
      price: Number(faker.commerce.price()),
      description: faker.commerce.productDescription(),
      quantity: getRandNum(0, 50),
      specification: faker.commerce.productDescription(),
      categoryId: categories[getRandNum(0, categories.length - 1)].id,
      color: faker.color.human(),
      discount: getRandNum(1, 15),
      size: null,
    };
    products.push(product);
  }
  return products;
};

const generatePosts = async () => {
  await prisma.post.deleteMany();
  const categories = await prisma.category.findMany();

  const posts: any[] = [];

  for (let i = 0; i < ITEMS; i++) {
    const post = {
      title: faker.commerce.product(),
      categoryId: categories[getRandNum(0, categories.length - 1)].id,
    };
    posts.push(post);
  }
  return posts;
};

async function main() {
  const addProducts = async () =>
    await prisma.product.createMany({
      data: await generateProducts(),
    });
  const addPosts = async () =>
    await prisma.post.createMany({
      data: await generatePosts(),
    });

  //connect with images
  addProducts().then(async () => {
    await prisma.product.findMany({}).then((data) => {
      data.map(async ({ id }) => {
        await prisma.product.update({
          where: {
            id,
          },
          data: {
            images: {
              create: [
                {
                  path: faker.image.url(),
                },
              ],
            },
          },
        });
      });
    });
  });

  addPosts().then(async () => {
    await prisma.post.findMany({}).then((data) => {
      data.map(async ({ id }) => {
        await prisma.post.update({
          where: {
            id,
          },
          data: {
            image: {
              create: [
                {
                  path: faker.image.url(),
                },
              ],
            },
          },
        });
      });
    });
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
