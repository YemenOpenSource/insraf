import { gql } from "graphql-tag";

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Department {
    id: Int
    name: String!
    description: String!
    levels: [Level]
  }

  type Level {
    id: Int
    name: String
    students: [Student]
    department: Department
  }

  type Student {
    id: ID!
    name: String!
    date: String!
    register: Int!
    classification: String!
    password: String!
    gender: Gender!
    level: Level!
  }

  type AuthData {
    userId: ID!
    token: String!
    name: String!
  }

  enum Gender {
    MALE
    FEMALE
  } 

  input UserInput {
    name: String!
    email: String!
    password: String!
  }

  input StudentInput {
    name: String!
    date: String!
    register: Int!
    classification: String!
    password: String!
    gender: Gender!
    levelId: Int!
  }

  input levelInput {
    name: String!
    departmentId: Int!
  }

  input departmentInput {
    name: String!
    description: String!
  }

  type Query {
    student(id: ID!): Student
    user(id: ID!): User
    departments: [Department]
    department(id: Int!): Department
    levels: [Level]
    level(id: Int!): Level
    students: [Student]
    studentsByLevel(levelId: Int!): [Student]
  }

  type Mutation {
    createUser(userInput: UserInput!): AuthData
    login(email: String!, password: String!): AuthData
    createStudent(studentInput: StudentInput!): Student
    createLevel(levelInput: levelInput!): Level
    createDepartment(departmentInput: departmentInput!): Department
    deleteStudent(id: ID!): String
    deleteDepartment(id: ID!): String
  }
`;