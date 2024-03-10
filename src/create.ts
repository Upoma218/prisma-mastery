import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   create many

  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "this is Title 1",
        content: "this is content 1",
        authorName: "Author 1",
      },
      {
        title: "this is Title 2",
        content: "this is content 2",
        authorName: "Author 2",
      },
      {
        title: "this is Title 3",
        content: "this is content 3",
        authorName: "Author 3",
      },
      {
        title: "this is Title 4",
        content: "this is content 4",
        authorName: "Author 4",
      },
    ],
  });
  console.log(createMany);
};
main();
