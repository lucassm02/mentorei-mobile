import { getSize } from "@/utils";
import styled from "styled-components/native";
import {
  type SpaceProps,
  space,
  type LayoutProps,
  layout,
} from "styled-system";
import { FlatList } from "react-native";
import { type CardProps } from "./types";

export const Container = styled.View<SpaceProps>`
  flex: 1;
  width: ${getSize(315)};
  align-self: center;
  ${space}
`;

export const Title = styled.Text<SpaceProps>`
  color: #464646;
  font-family: ${({ theme }) => theme.FONT_FAMILY.NUNITO_SANS.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  ${space}
`;

export const List = styled(FlatList<CardProps>)``;

export const Separator = styled.View`
  width: 95%;
  height: ${getSize(0.5)};
  margin-top: ${getSize(15)};
  background-color: rgba(0, 0, 0, 0.1);
`;

export const Block = styled.View<LayoutProps>`
  height: ${getSize(20)};
  ${layout}
`;
