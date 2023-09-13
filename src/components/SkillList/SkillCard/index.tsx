import { getSize } from "@/utils";
import { type SpaceProps } from "styled-system";
import { Container, Icon, IconContainer, Text } from "./styles";

import unknownPng from "@assets/images/shared/unknown.png";
import { useRouter } from "expo-router";

type Props = { text: string };

export function SkillCard({ text, ...props }: SpaceProps & Props) {
  const route = useRouter();

  return (
    <Container
      onPress={() => {
        route.push("/look-for-mentor-v2");
      }}
      {...props}
    >
      <IconContainer>
        <Icon source={unknownPng} />
      </IconContainer>
      <Text ml={getSize(10)}>{text}</Text>
    </Container>
  );
}
