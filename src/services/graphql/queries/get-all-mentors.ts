import { gql } from "@apollo/client";

export const GET_ALL_MENTORS = gql`
  query getMentors {
    getAllMentors {
      User {
        id
        name
        email
      }
      evaluation {
        rating
      }
    }
  }
`;
