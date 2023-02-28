import prisma from "lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
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
        const userForToken = {
          email: user.email,
          id: user.id,
        };
        return {
          userId: user.id,
          token: jwt.sign(userForToken, process.env.JWT),
          name: user.name,
        };
      } catch (error) {
        throw error;
      }
    },
    login: async (_, { email, password }) => {
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) throw new GraphQLError("المستخدم غير موجود !");
      const isEqual = await bcrypt.compare(password, user.password);
      if (!isEqual) throw new GraphQLError("كلمة السر غير متطابقة مع البريد الإكتروني");
      const userForToken = {
        email: user.email,
        id: user.id,
      };
      return {
        userId: user.id,
        token: jwt.sign(userForToken, process.env.JWT),
        name: user.name,
      };
    },
  }
};
