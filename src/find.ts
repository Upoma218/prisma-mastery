import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // find all
  const getAllFromDB = await prisma.post.findMany();

  // find fast or find fast throw error
  const findFast = await prisma.post.findFirstOrThrow({
    where: {
      published: false,
    },
  });

  // find unique or find fast throw unique
  const findUnique = await prisma.post.findUniqueOrThrow({
    where: {
      id: 2,
    },
  });
  console.log({ findUnique });
};

main();
