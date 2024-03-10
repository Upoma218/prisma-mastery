import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  //   const singleUpdate = await prisma.post.update({
  //     where: {
  //       id: 1,
  //     },
  //     data: {
  //       title: "this is title 5",
  //       content: "this is content 5",
  //       authorName: "Author 5",
  //     },
  //   });
  //   console.log(singleUpdate);
  //   const updateMany = await prisma.post.updateMany({
  //     where: {
  //       title: "this is Title 2",
  //     },
  //     data: {
  //       published: true,
  //     },
  //   });
  //   console.log(updateMany);
  const upsert = await prisma.post.upsert({
    where: {
      id: 9,
    },
    update: {
      content: "this is cotent 9",
    },
    create: {
      title: "this is Title 9",
      content: "this is cotent 9",
    },
  });
  console.log(upsert);
};

updates();
