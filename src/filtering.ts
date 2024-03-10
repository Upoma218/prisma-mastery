import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering = async () => {
  //   const andFiltering = await prisma.post.findMany({
  //     where: {
  //       AND: [
  //         {
  //           title: {
  //             contains: "title",
  //           },
  //         },
  //         {
  //           published: true,
  //         },
  //       ],
  //     },
  //   });
  //   console.log(andFiltering);

  //   const orFiltering = await prisma.post.findMany({
  //     where: {
  //       OR: [
  //         {
  //           title: {
  //             contains: "title",
  //           },
  //         },
  //         {
  //           published: true,
  //         },
  //       ],
  //     },
  //   });
  //   console.log(orFiltering);

  //   const notFiltering = await prisma.post.findMany({
  //     where: {
  //       NOT: [
  //         {
  //           title: {
  //             contains: "this",
  //           },
  //         },
  //       ],
  //     },
  //   });
  //   console.log(notFiltering);

  //   const startsWith = await prisma.user.findMany({
  //     where: {
  //       email: {
  //         startsWith: "i", // endsWith, contains, equals
  //       },
  //     },
  //   });
  //   console.log(startsWith);

  //   const endsWith = await prisma.user.findMany({
  //     where: {
  //       email: {
  //         endsWith: "ph.com",
  //       },
  //     },
  //   });
  //   console.log(endsWith);

  //   const equals = await prisma.user.findMany({
  //     where: {
  //       email: {
  //         equals: "imu@gmail.com",
  //       },
  //     },
  //   });
  //   console.log(equals);

  const userNameArray = ["user1", "user2"];

  const userNamesByArray = await prisma.user.findMany({
    where: {
      username: {
        in: userNameArray,
      },
    },
  });
  console.log(userNamesByArray);

  // const inDepthData = await prisma.user.findUnique({
  //     where: {
  //         id: 3
  //     },
  //     include: {
  //         post: {
  //             include: {
  //                 postCategory: {
  //                     include: {
  //                         category: true
  //                     }
  //                 }
  //             }
  //         }
  //     }
  // })

  // console.dir(inDepthData, { depth: Infinity })
};

filtering();
