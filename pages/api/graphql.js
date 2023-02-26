import prisma from "lib/prisma";
import jwt from "jsonwebtoken";
import { ApolloServer } from "@apollo/server";
import { typeDefs } from "@/schema";
import { resolvers } from "@/resolvers";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

const server = new ApolloServer({
  resolvers,
  typeDefs
});

export default startServerAndCreateNextHandler(server, {
  context: async ({ req }) => {
    const auth = req ? req.headers.authorization : null;
    if (auth) {
      const decoded = jwt.verify(auth, process.env.JWT);
      const user = await prisma.user.findUnique({ where: { id: decoded.id } });
      return[];
    }
  },
});