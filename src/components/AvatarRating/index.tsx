import { type SpaceProps } from "styled-system";
import {
  AvatarContainer,
  Container,
  InfoContainer,
  Name,
  RatingContainer,
  RatingLabel,
} from "./styles";

import { Avatar } from "../Avatar";
import { type Props } from "./types";

import { Rating } from "react-native-ratings";

export function AvatarRating({
  name,
  rating,
  url,
  ...props
}: Props & SpaceProps) {
  return (
    <Container {...props}>
      <AvatarContainer>
        <Avatar photoUrl={url} />
      </AvatarContainer>
      <InfoContainer>
        <Name>{name}</Name>
        <RatingContainer>
          <RatingLabel>Rating:</RatingLabel>
          <Rating readonly startingValue={rating} imageSize={20} />
        </RatingContainer>
      </InfoContainer>
    </Container>
  );
}
