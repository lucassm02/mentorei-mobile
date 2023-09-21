import { type SpaceProps } from "styled-system";
import { Container, Image } from "./styles";
import { type Props } from "./types";

import googleMeet from "@assets/images/shared/google-meet.png";

export function Button(props: Props & SpaceProps) {
  return (
    <Container>
      <Image source={googleMeet} />
    </Container>
  );
}
