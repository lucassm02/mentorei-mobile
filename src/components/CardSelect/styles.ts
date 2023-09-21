import { LinearGradient } from "expo-linear-gradient";
import { FlatList, Image } from "react-native";
import styled from "styled-components/native";
import { type SpaceProps, space } from "styled-system";
import { getSize } from "@/utils";
import { type CardProps } from "./types";

export const FormContainer = styled.View<SpaceProps>`
  flex: 1;
  ${space}
`;

export const CardContainer = styled(LinearGradient).attrs({
  colors: ["#427EFA", "#4CB6FD"],
})`
  width: ${getSize(150)};
  height: ${getSize(100)};
  border-radius: ${getSize(7)};
  margin-right: ${getSize(15)};
  margin-bottom: ${getSize(15)};
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.NUNITO_SANS.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
`;

export const List = styled(FlatList<CardProps>).attrs({
  numColumns: 2,
})`
  width: 95%;
  flex: 1;
`;

export const SelectedIcon = styled(Image)`
  align-self: flex-end;
  height: ${getSize(16)};
  width: ${getSize(16)};
  top: ${getSize(7)};
  right: ${getSize(7)};
  position: absolute;
`;

export const Divisor = styled.View`
  width: 100%;
  height: ${getSize(20)};
`;

export const Footer = styled.View`
  width: 100%;
  height: ${getSize(20)};
`;
