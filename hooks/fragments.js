import { gql } from "@apollo/client";

export const STUDENT_FIELDS = gql`
  fragment StudentFields on Student {
    id
    name
    register
    classification
  }
`;
