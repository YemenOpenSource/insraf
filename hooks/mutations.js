import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      userId
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!, $password: String!) {
    createUser(userInput: {name: $name, email: $email, password: $password}) {
      token
      userId
    }
  }
`;

export const CREATE_STUDENT = gql`
  mutation CreateStudent(
    $name: String!, 
    $date: String!, 
    $register: Int!, 
    $classification: String!, 
    $password: String!, 
    $gender: Gender!,
    $levelId: Int!) {
    createStudent(studentInput: {
      name: $name, 
      date: $date, 
      register: $register, 
      classification: $classification, 
      password: $password, 
      gender: $gender,
      levelId: $levelId
    }) {
      name
    }
  }
`;