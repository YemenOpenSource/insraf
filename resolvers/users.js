import prisma from "lib/prisma";
// import { isLoggedin } from "@/middleware/isLoggedin";
import { combineResolvers } from "graphql-resolvers";
import { GraphQLError } from 'graphql';

export const users = {
  Query: {
    users: async (parent, args, contextValue, info) => {
      console.log(info)
      return await prisma.user.findMany()
    }
    
  }
};
