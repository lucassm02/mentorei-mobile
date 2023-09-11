import { gql } from "@apollo/client";

export const UPDATE_USER_SKILLS = gql`
  mutation updateUser(
    $id: String!
    $softSkills: [String!]
    $hardSkills: [String!]
  ) {
    updateUser(id: $id, softSkills: $softSkills, hardSkills: $hardSkills) {
      id
    }
  }
`;
