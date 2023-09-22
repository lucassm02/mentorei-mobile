import { type SpaceProps } from "styled-system";
import {
  AvatarContainer,
  Container,
  InfoContainer,
  Name,
  RatingContainer,
  RatingLabel,
} from "./styles";

import { Avatar } from "../../Avatar";
import { type Props } from "./types";
import { getSize } from "@/utils";

import { Rating } from "react-native-ratings";

export function MentorInfo({
  name,
  photoUrl,
  rating,
  ...props
}: Props & SpaceProps) {
  return (
    <Container {...props}>
      <AvatarContainer>
        <Avatar photoUrl={photoUrl} height={getSize(40)} />
      </AvatarContainer>
      <InfoContainer>
        <Name ellipsizeMode="tail" numberOfLines={1}>
          {name}
        </Name>
        <RatingContainer>
          <RatingLabel>Rating:</RatingLabel>
          <Rating
            type="custom"
            readonly
            startingValue={rating}
            ratingColor="#6e6c6c"
            ratingBackgroundColor="#E5F6FE"
            tintColor="#e5f5fc"
            imageSize={13}
          />
        </RatingContainer>
      </InfoContainer>
    </Container>
  );
}
