import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   create many

  // const createUser = await prisma.user.create({
  //   data: {
  //     username: "user1",
  //     email: "user1@ph.com",
  //     role: UserRole.user,
  //   },
  // });

  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "this is bio...",
  //     userId: 1,
  //   },
  // });
  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "programming",
  //   },
  // });

  const createPost = await prisma.post.create({
    data: {
      title: "this is title",
      content: "this is content of the post",
      authorId: 1,
      postCategory: {
        create: [
          {
            categoryId: 1,
          },
          {
            categoryId: 3,
          },
          {
            categoryId: 4,
          },
        ],
      },
    },
    include: {
      postCategory: true,
    },
  });

  console.log(createPost);
};
main();

// create: {
//   category: {
//     connect: {
//       id: 1,
//     },
//   },
// },
