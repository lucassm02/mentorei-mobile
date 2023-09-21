import styled from "styled-components/native";
import { type SpaceProps, space } from "styled-system";
import { getSize } from "@/utils";
import ExpoCheckbox from "expo-checkbox";

export const Container = styled.View<SpaceProps>`
  flex-direction: row;
  ${space};
`;

export const Checkbox = styled(ExpoCheckbox)`
  width: ${getSize(15)};
  height: ${getSize(15)};
`;

export const Text = styled.Text`
  color: #746e6e;
  margin-left: ${getSize(6)};
  font-family: ${({ theme }) => theme.FONT_FAMILY.NUNITO_SANS.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.VSM};
`;
