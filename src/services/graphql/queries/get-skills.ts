import { gql } from "@apollo/client";

export const GET_SKILLS = gql`
  query getAllSkills {
    skills: listSkills {
      id
      name
      type
      imageUrl
    }
  }
`;
