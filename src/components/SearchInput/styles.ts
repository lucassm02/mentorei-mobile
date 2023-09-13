import styled from "styled-components/native";
import { type SpaceProps, space } from "styled-system";
import { getSize } from "@/utils";
import MaskInput from "react-native-mask-input";

export const Container = styled.View<SpaceProps>`
  width: ${getSize(315)};
  align-self: center;
  ${space}
`;

export const Input = styled(MaskInput).attrs({
  placeholderTextColor: "#CBCBCB",
})`
  width: 100%;
  padding: ${getSize(17)} ${getSize(20)};
  background-color: #f1f1f1;
  font-family: HammersmithOne;
  color: #746e6e;
  border-radius: ${getSize(5)};
  font-size: ${getSize(16)};
`;
