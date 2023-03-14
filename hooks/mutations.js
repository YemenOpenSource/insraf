import { gql } from "@apollo/client";
import { EVENT_FIELDS } from "./fragments"

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
  enum Gender {
    MALE
    FEMALE
  }
  mutation createStudent(
    $name: String!, 
    $date: String!, 
    $register: Int!, 
    $classifiction: String!, 
    $gender: Gender!
    $levelId: Int!
  ) {
    createStudent(userInput: {
      name: $name, 
      date: $date, 
      register: $register, 
      classifiction: $classifiction, 
      gender: $gender, 
      gender: $gender, 
      levelId: $levelId
    }) {
      name
    }
  }
`;

/* export const BOOK_EVENT = gql`
  mutation BookEvent($eventId: ID!) {
    bookEvent(eventId: $eventId) {
      id
      createdAt
      updatedAt
    }
  }
`

export const CREATE_EVENT = gql`
  ${EVENT_FIELDS}
  mutation CreateEvent($title: String!, $description: String!, $price: Float!, $date: String!) {
    createEvent(eventInput: {title: $title, description: $description, price: $price, date: $date}) {
      ...EventFields
    }
  }
`

export const CANCEL_BOOKING = gql`
  mutation CancelBooking($bookingId: ID!){
    cancelBooking(bookingId: $bookingId) {
      id
      title
    }
  }
`  */