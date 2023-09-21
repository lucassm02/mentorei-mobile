import { gql } from "@apollo/client";

export const GET_USER_BY_ID = gql`
  query ($id: String!) {
    user: getUserById(id: $id) {
      name
      email
      cpf
      skills {
        id
        name
        imageUrl
      }
      mentee {
        id
        goal
        interestArea
        degree
        linkedin
      }
      mentor {
        id
        occupation
        experience
        linkedin
      }
    }
  }
`;
