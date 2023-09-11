import { gql } from "@apollo/client";

export const GET_ALL_SKILLS = gql`
  query getAllSkills {
    listSkills {
      softSkills {
        id
        name
      }
      hardSkills {
        id
        name
      }
    }
  }
`;
