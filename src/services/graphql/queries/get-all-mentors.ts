import { gql } from "@apollo/client";

export const GET_ALL_MENTORS = gql`
  query {
    getAllMentors {
      user {
        id
        name
        email
      }
      evaluations {
        rating
      }
    }
  }
`;
