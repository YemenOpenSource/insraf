import { gql } from "@apollo/client";
import { STUDENT_FIELDS } from "@/hooks/fragments";

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
        register
        classification
      }
    }
  }
`;

export const LEVEL = gql`
  query Levels {
    levels {
      id
      name
    }
  }
`;

export const STUDENT_QUERY = gql`
  ${STUDENT_FIELDS}
  query Students {
    students {
      ...StudentFields
    }
  }
`;

export const STUDENT_GET = gql`
  ${STUDENT_FIELDS}
  query Student($id: ID!) {
    student(id: $id) {
      ...StudentFields
      level {
        name
      }
    }
  }
`;

export const SEARCH_QUERY = gql`
  ${STUDENT_FIELDS}
  query Search($contains: String) {
    search(contains: $contains) {
      ...StudentFields
    }
  }
`;

export const ATTENDANCE_QUERY = gql`
  query SearchAttendance($contains: String) {
    searchAttendance(contains: $contains) {
      id
      subject
      signInTime
      signOutTime
      date
      student {
        name
        register
      }
    }
  }
`;

export const STATISTICS_QUERY = gql`
  query Statistics {
    statistics {
      attendanceCount
      attendanceAbsenceCount
      departmentCount
      studentCount
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
