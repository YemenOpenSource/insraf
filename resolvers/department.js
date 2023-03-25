import prisma from "lib/prisma";
import { isLoggedin } from "@/middleware/isLoggedin";
import { combineResolvers } from "graphql-resolvers";

export const department = {
  Mutation: {
    createDepartment: combineResolvers(
      isLoggedin,
      async (_, { departmentInput }) => {
        const { name, description } = departmentInput;
        const desc = await prisma.department.create({
          data: {
            name,
            description,
          },
        });
        return desc;
      }
    ),
    deleteDepartment: combineResolvers(isLoggedin, async (_, { id }) => {
      try {
        const department = await prisma.department.delete({
          where: {
            id: Number(id),
          },
        });
        return "تم حذف القسم !";
      } catch (error) {
        throw error;
      }
    }),
  },
};
