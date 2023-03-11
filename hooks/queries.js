import { gql } from "@apollo/client";
// import { EVENT_FIELDS } from "./fragments"

export const GET_USER = gql`
  query User($id: ID!) {
    user(id: $id) {
      name
      email
    }
  }
`;

export const DEPARTMENTS_QUERY = gql`
  query Departments {
    departments {
      id
      name
      description
    }
  }
`;

export const DEPARTMENT_QUERY = gql`
  query Department($id: Int!) { 
    department(id: $id) { 
      id 
      name 
      levels { 
        id 
        name 
      } 
    } 
  }
`;

export const LEVEL_QUERY = gql`
  query Level($id: Int!) { 
    level(id: $id) { 
      id 
      name 
      students { 
        id 
        name 
      } 
    }
  }
`;
/* export const EVENTS = gql`
  ${EVENT_FIELDS}
  query Events($limit: Int, $offset: Int) {
    events(limit: $limit, offset: $offset) {
      ...EventFields
      creatorId
      creator {
        username
      }
    }
  }
`;

export const SEARCH = gql`
  ${EVENT_FIELDS}
  query Search($contains: String) {
    search(contains: $contains) {
      ... on User {
        id
        username
      }
      ... on Event {
        ...EventFields
      }
    }
  }
`;

export const GET_EVENT = gql`
  ${EVENT_FIELDS}
  query GetIdEvents($eventId: ID!) {
    getIdEvents(eventId: $eventId) {
      ...EventFields
      creatorId
      creator {
        username
      }
    }
  }
`;

export const BOOKINGS = gql`
  query Bookings {
    bookings {
      id
      createdAt
      eventId
      event {
        title
      }
    }
  }
`;
 */