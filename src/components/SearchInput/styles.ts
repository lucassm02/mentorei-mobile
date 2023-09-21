import styled from "styled-components/native";
import { type SpaceProps, space } from "styled-system";
import { getSize } from "@/utils";
import MaskInput from "react-native-mask-input";
import Ionicons from "@expo/vector-icons/Ionicons";

export const Container = styled.View<SpaceProps>`
  width: ${getSize(315)};
  flex-direction: row;
  align-self: center;
  background-color: #f1f1f1;
  border-radius: ${getSize(5)};
  ${space}
`;

export const Input = styled(MaskInput)`
  width: 80%;
  padding: ${getSize(17)} ${getSize(20)};
  font-family: ${({ theme }) => theme.FONT_FAMILY.NUNITO_SANS.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  color: #746e6e;
`;

export const Icon = styled(Ionicons)`
  align-self: center;
  margin: 0 auto;
`;
