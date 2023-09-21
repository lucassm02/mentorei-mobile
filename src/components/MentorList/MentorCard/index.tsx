import { getSize } from "@/utils";
import { type SpaceProps } from "styled-system";
import {
  Container,
  IconContainer,
  InfoContainer,
  NameText,
  RatingContainer,
  RatingText,
} from "./styles";

import { Rating } from "react-native-ratings";

import { Avatar } from "@/components/Avatar";

type Props = {
  name: string;
  rating: number;
  photoUrl: string;
  onPress?: () => void;
};

export function MentorCard({
  name,
  rating,
  photoUrl,
  onPress,
  ...props
}: SpaceProps & Props) {
  return (
    <Container onPress={onPress} {...props}>
      <IconContainer>
        <Avatar photoUrl={photoUrl} />
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
