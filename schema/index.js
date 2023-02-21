import { gql } from "graphql-tag";

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
  }

  type Query {
    hello: String
    welcome: String
  }

  type Mutation {
    createUser(userInput: UserInput!): User
  }
`;