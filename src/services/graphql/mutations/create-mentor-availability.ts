import { gql } from "@apollo/client";

export const CREATE_MENTOR_AVAILABILITY = gql`
  mutation (
    $mentorId: String!
    $openingTime: String!
    $closingTime: String!
    $weekday: WeekdayType!
  ) {
    availability: createMentorAvailability(
      mentorId: $mentorId
      openingTime: $openingTime
      closingTime: $closingTime
      weekday: $weekday
    ) {
      id
      mentorId
    }
  }
`;
