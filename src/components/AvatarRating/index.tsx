import { type SpaceProps } from "styled-system";
import {
  AvatarContainer,
  Container,
  InfoContainer,
  Name,
  RatingContainer,
  RatingLabel,
  UserTypeLabel,
} from "./styles";

import { Avatar } from "../Avatar";
import { type Props } from "./types";

import { Rating } from "react-native-ratings";

const UserTypes = { MENTEE: "Aluno", MENTOR: "Mentor" };

export function AvatarRating({
  name,
  rating,
  photoUrl,
  ...props
}: Props & SpaceProps) {
  const userType = !props.userType ? "" : UserTypes[props.userType];

  return (
    <Container {...props}>
      <AvatarContainer>
        <Avatar photoUrl={photoUrl} />
      </AvatarContainer>
      <InfoContainer>
        <UserTypeLabel>{userType}</UserTypeLabel>
        <Name>{name}</Name>
        <RatingContainer>
          <RatingLabel>Rating:</RatingLabel>
          <Rating readonly startingValue={rating} imageSize={20} />
        </RatingContainer>
      </InfoContainer>
    </Container>
  );
}
