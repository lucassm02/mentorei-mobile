import { gql } from "@apollo/client";

export const GET_MENTORS = gql`
  query ($name: String, $skillId: String) {
    mentors: getAllMentors(filters: { name: $name, skillId: $skillId }) {
      id
      user {
        id
        name
        email
      }
      availabilities {
        id
        openingTime
        closingTime
        weekday
      }
      evaluations {
        rating
      }
    }
  }
`;
