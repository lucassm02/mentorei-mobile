import { type TouchableOpacityProps } from "react-native";
import { type SpaceProps } from "styled-system";
import { Container, Gradient, Button as StyledButton, Text } from "./styles";

interface Props {
  value: string;
}

export function Button({
  value,
  disabled,
  ...props
}: Props & TouchableOpacityProps & SpaceProps) {
  return (
    <StyledButton disabled={disabled} {...props}>
      <Container>
        <Gradient disabled={disabled}>
          <Text>{value}</Text>
        </Gradient>
      </Container>
    </StyledButton>
  );
}
