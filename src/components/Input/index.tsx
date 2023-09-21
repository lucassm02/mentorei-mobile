import { type SpaceProps } from "styled-system";
import { getSize } from "@/utils";
import {
  Container,
  Label,
  RequiredLabel,
  Input as StyledInput,
} from "./styles";
import { type MaskInputProps } from "react-native-mask-input";

interface Props {
  label: string;
  errorMessage?: string;
}

export { Masks } from "react-native-mask-input";

export function Input({
  label,
  errorMessage,
  ...props
}: MaskInputProps & Props & SpaceProps) {
  return (
    <Container {...props}>
      <Label mb={getSize(10)}>{label}</Label>
      <StyledInput placeholderTextColor="#CBCBCB" {...props} />
      {errorMessage && <RequiredLabel>{errorMessage}</RequiredLabel>}
    </Container>
  );
}
