import { gql } from "@apollo/client";

export const EVENT_FIELDS = gql`
  fragment EventFields on Event {
    id
    title
    description
    price
    date
  }
`