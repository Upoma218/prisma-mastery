import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  const singleUpdate = await prisma.post.update({
    where: {
      id: 1,
    },
    data: {
      title: "this is title 5",
      content: "this is content 5",
      authorName: "Author 5",
    },
  });
  console.log(singleUpdate);
};

updates();
