import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationSorting = async () => {
  // offset pagination
  //   const offsetData = await prisma.post.findMany({
  //     skip: 5,
  //     take: 3,
  //   });
  //   console.log("offsetData", offsetData);

  // cusrsor based pagination
  //   const cursorBasedPagination = await prisma.post.findMany({
  //     skip: 5,
  //     take: 3,
  //     cursor: {
  //       id: 30,
  //     },
  //   });
  //   console.log("cursorBasedPagination", cursorBasedPagination);

  const sortedData = await prisma.post.findMany({
    orderBy: {
      id: "desc",
    },
    where: {
      published: true,
    },
  });
  console.log("sortedData desc", sortedData);
};

paginationSorting();
