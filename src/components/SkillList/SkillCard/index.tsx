import { getSize } from "@/utils";
import { type SpaceProps } from "styled-system";
import { Container, Icon, IconContainer, Text } from "./styles";

import { useRouter } from "expo-router";

type Props = { text: string; imageUrl: string };

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
        <Icon source={{ uri: props.imageUrl }} />
      </IconContainer>
      <Text ml={getSize(10)}>{text}</Text>
    </Container>
  );
}
