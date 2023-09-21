import { gql } from "@apollo/client";

export const GET_MENTOR_BY_ID = gql`
  query getMentorById($id: String!) {
    mentor: getMentorById(id: $id) {
      id
      user {
        id
        name
        email
        skills {
          id
          name
          imageUrl
        }
      }
      experience
      evaluations {
        rating
      }
    }
  }
`;
