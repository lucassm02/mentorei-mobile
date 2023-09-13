import { type SpaceProps } from "styled-system";
import {
  Container,
  NameText,
  RatingText,
  IconContainer,
  Icon,
  InfoContainer,
  RatingContainer,
} from "./styles";
import { getSize } from "@/utils";

import { Rating } from "react-native-ratings";

import userIconPng from "@assets/images/shared/user-icon.png";

type Props = { name: string; rating: number };

export function MentorCard({ name, rating, ...props }: SpaceProps & Props) {
  return (
    <Container {...props}>
      <IconContainer>
        <Icon source={userIconPng} />
      </IconContainer>
      <InfoContainer>
        <NameText ml={getSize(20)} mt={getSize(20)}>
          {name}
        </NameText>
        <RatingContainer>
          <RatingText ml={getSize(20)}>Rating: </RatingText>
          <Rating readonly startingValue={rating} imageSize={20} />
        </RatingContainer>
      </InfoContainer>
    </Container>
  );
}
