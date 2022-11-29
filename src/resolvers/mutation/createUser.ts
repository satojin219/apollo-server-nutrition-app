import { prisma } from "../../lib/prisma";
import { MutationResolvers } from "../../types/generated/graphql";

export const createUser: MutationResolvers["createUser"] = async (parent, args, context, info) => {
  const userId = context.user?.id;
  if (!userId) {
    throw new Error("認証に失敗しました。")
  }
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (user) {
    throw new Error("既に存在するユーザーです。");
  }
  const createdUser = await prisma.user.create({
    data: {
      id: userId,
      name: args.input.name,
    },
  });
  return createdUser;
}