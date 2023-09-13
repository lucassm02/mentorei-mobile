import { type TouchableOpacityProps } from "react-native";
import { type SpaceProps } from "styled-system";
import {
  Container,
  ButtonContainer,
  Button as StyledButton,
  Text,
} from "./styles";

import { type GenericProps } from "./types";

export function Button({
  value,
  disabled,
  type,
  ...props
}: GenericProps & TouchableOpacityProps & SpaceProps & { value: string }) {
  return (
    <StyledButton disabled={disabled} {...props}>
      <Container>
        <ButtonContainer disabled={disabled} type={type}>
          <Text type={type} disabled={disabled}>
            {value}
          </Text>
        </ButtonContainer>
      </Container>
    </StyledButton>
  );
}
