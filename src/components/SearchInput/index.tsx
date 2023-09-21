import { type MaskInputProps } from "react-native-mask-input";
import { type SpaceProps } from "styled-system";
import { Container, Input as StyledInput } from "./styles";

// type Props = {};

export { Masks } from "react-native-mask-input";

export function SearchInput({ ...props }: MaskInputProps & SpaceProps) {
  return (
    <Container {...props}>
      <StyledInput placeholderTextColor="#CBCBCB" {...props} />
    </Container>
  );
}
