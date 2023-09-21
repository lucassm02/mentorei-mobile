import { getSize } from "@/utils";
import { type SpaceProps } from "styled-system";
import { Container, Icon, IconContainer, Text } from "./styles";

type Props = {
  text: string;
  imageUrl: string;
  onPress?: () => void;
  highlight?: boolean;
};

export function SkillCard({
  text,
  highlight,
  onPress,
  ...props
}: SpaceProps & Props) {
  return (
    <Container onPress={onPress} {...props}>
      <IconContainer highlight={highlight}>
        <Icon source={{ uri: props.imageUrl }} />
      </IconContainer>
      <Text ml={getSize(10)}>{text}</Text>
    </Container>
  );
}
