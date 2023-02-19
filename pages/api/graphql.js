import { ApolloServer } from "@apollo/server";
import { typeDefs } from "@/schema";
import { resolvers } from "@/resolvers";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

export default startServerAndCreateNextHandler(server);