import { type SpaceProps } from "styled-system";
import { Container, Image } from "./styles";
import { type Props } from "./types";
import { type TouchableOpacityProps } from "react-native";

import googleMeet from "@assets/images/shared/google-meet.png";

export function Button(props: Props & SpaceProps & TouchableOpacityProps) {
  return (
    <Container {...props}>
      <Image source={googleMeet} />
    </Container>
  );
}
