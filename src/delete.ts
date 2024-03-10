import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteSingleData = async () => {
  const result = await prisma.post.delete({
    where: {
      id: 3,
    },
  });
  console.log(result);
};

deleteSingleData();
