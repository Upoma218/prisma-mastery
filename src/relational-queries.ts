import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQueries = async () => {
  // const result = await prisma.user.findUnique({
  //   where: {
  //     id: 1,
  //   },
  //   include: {
  //     post: true,
  //   },
  // });

  // fluent api
  //   const result = await prisma.user
  //     .findUnique({
  //       where: {
  //         id: 1,
  //       },
  //     })
  //     .profile();
  // console.log(result);

  // const result = await prisma.user.findUnique({
  //     where: {
  //         id: 1
  //     }
  // }).profile();

  // relational fillters
  const publishedPostUsers = await prisma.user.findMany({
    include: {
      post: {
        where: {
          published: true,
        },
      },
    },
  });
  console.dir(publishedPostUsers, { depth: Infinity });
};

relationalQueries();
