import { type LayoutProps, type SpaceProps } from "styled-system";
import {
  Container,
  Crown,
  CrownContainer,
  Photo,
  PhotoContainer,
} from "./styles";
import { type Props } from "./types";

import crownPng from "@assets/images/component/avatar/crown.png";

export function Avatar({
  photoUrl,
  ...props
}: Props & SpaceProps & LayoutProps) {
  return (
    <Container {...props}>
      <CrownContainer>
        <Crown resizeMethod="auto" resizeMode="contain" source={crownPng} />
      </CrownContainer>
      <PhotoContainer>
        <Photo
          resizeMethod="auto"
          resizeMode="contain"
          source={{
            uri: photoUrl,
          }}
        />
      </PhotoContainer>
    </Container>
  );
}
