import prismaClient from "../prisma";

const UserProfileService = async (user_id: string) => {
  const user = await prismaClient.user.findFirst({
    where: {
      id: user_id,
    },
  });

  return user;
};

export { UserProfileService };
