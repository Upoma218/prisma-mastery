import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// const deleteSingleData = async () => {
//   const result = await prisma.post.delete({
//     where: {
//       id: 3,
//     },
//   });
//   console.log(result);
// };

// deleteSingleData();

// const deleteMany = async () => {
//   const result = await prisma.post.deleteMany({
//     where: {
//       title: "this is Title 2",
//     },
//   });
//   console.log(result);
// };
const deleteAll = async () => {
  const deleteAllData = await prisma.post.deleteMany({});
  console.log({ deleteAllData });
};

deleteAll();
