import { type MaskInputProps } from "react-native-mask-input";
import { type SpaceProps } from "styled-system";
import { Container, Icon, Input as StyledInput } from "./styles";

export { Masks } from "react-native-mask-input";

export function SearchInput({ ...props }: MaskInputProps & SpaceProps) {
  return (
    <Container {...props}>
      <StyledInput
        placeholderTextColor="#CBCBCB"
        underlineColorAndroid="transparent"
        {...props}
      />
      <Icon name="search-sharp" size={30} color={"#746e6e"} />
    </Container>
  );
}
