import { gql } from "@apollo/client";

export const GET_ALL_SKILLS = gql`
  query getAllSkills {
    listSkills {
      id
      name
      type
      imageUrl
    }
  }
`;
