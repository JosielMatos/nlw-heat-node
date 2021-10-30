import prismaClient from "../prisma";

const GetLast3MessagesService = async () => {
  const messages = await prismaClient.message.findMany({
    take: 3,
    orderBy: {
      created_at: "desc",
    },
    include: {
      user: true,
    },
  });

  return messages;
};

export { GetLast3MessagesService };
