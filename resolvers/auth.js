import prisma from "lib/prisma";
import bcrypt from "bcryptjs";
import { GraphQLError } from 'graphql';

export const auth = {
  Mutation: {
    createUser: async (_, { userInput }) => {
      const { name, email, password } = userInput;
      try {
        const existing = await prisma.user.findUnique({ where: { email } });
        if (existing) throw new GraphQLError("!الحساب موجود مسبقاً")
        const hashed = await bcrypt.hash(password, 12);
        const user = await prisma.user.create({
          data: { name, email, password: hashed },
        });
        return user
      } catch (error) {
        throw error;
      }
    }
  }
};
