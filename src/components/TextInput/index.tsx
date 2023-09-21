import { getSize } from "@/utils";
import { type SpaceProps } from "styled-system";
import {
  Container,
  Label,
  RequiredLabel,
  Input as StyledInput,
} from "./styles";
import { type TextInputProps } from "react-native";

interface Props {
  label: string;
  errorMessage?: string;
}

export function TextInput({
  label,
  errorMessage,
  ...props
}: Props & TextInputProps & SpaceProps) {
  return (
    <Container {...props}>
      <Label mb={getSize(10)}>{label}</Label>
      <StyledInput placeholderTextColor="#CBCBCB" {...props} />
      {errorMessage && <RequiredLabel>{errorMessage}</RequiredLabel>}
    </Container>
  );
}
