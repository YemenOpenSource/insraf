import prisma from "lib/prisma";
// import { isLoggedin } from "@/middleware/isLoggedin";
import { combineResolvers } from "graphql-resolvers";
import { GraphQLError } from 'graphql';

const isLoggedin = (parent, args, contextValue) => {
  console.log(contextValue)
  if (!contextValue.user) throw new GraphQLError("يرجى تسجيل الدخول", {
    extensions: {
      code: 'UNAUTHENTICATED',
      http: { status: 401 },
    },
  })
};
export const users = {
  Query: {
    users: async (parent, args, context) => {
      if(context) console.log(args)
      return await prisma.user.findMany()
    }
  }
};
