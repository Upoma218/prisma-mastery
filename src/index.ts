import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // const result = await prisma.post.create({
  //   data: {
  //     title: "this is Title 2",
  //     content: "this is content 2",
  //     authorName: "Upoma",
  //   },
  // });
  // console.log(result);
  const getAllFromDB = await prisma.post.findMany();
  console.log(getAllFromDB);
};
main();
