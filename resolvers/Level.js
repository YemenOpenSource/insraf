import prisma from "lib/prisma";
import { isLoggedin } from "@/middleware/isLoggedin";
import { combineResolvers } from "graphql-resolvers";

export const Level = {
  Mutation: {
    createLevel: combineResolvers(isLoggedin, async (_, { levelInput }) => {
      const { name, departmentId } = levelInput;
      const level = await prisma.level.create({
        data: {
          name,
          department: {
            connect: {
              id: Number(departmentId),
            },
          },
        },
        include: {
          department: true,
        },
      });
      return level;
    }),
  },
};
