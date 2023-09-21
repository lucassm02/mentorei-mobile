import { gql } from "@apollo/client";

export const UPDATE_USER = gql`
  mutation (
    $id: String!
    $skills: [String!]
    $mentor: UpsertMentorInput
    $mentee: UpsertMenteeInput
  ) {
    user: updateUser(
      id: $id
      skills: $skills
      mentor: $mentor
      mentee: $mentee
    ) {
      id
    }
  }
`;
