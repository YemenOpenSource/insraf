import { gql } from "@apollo/client";
import { EVENT_FIELDS } from "./fragments"

export const EVENTS = gql`
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
