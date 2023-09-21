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

export const Container = styled.View<SpaceProps & LayoutProps>`
  width: ${getSize(315)};
  flex: 1;
  align-self: center;
  ${layout}
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
  margin-top: ${getSize(15)};
  margin-bottom: ${getSize(15)};
  height: 0.4px;
  background-color: rgba(200, 200, 200, 0.3);
`;

export const Block = styled.View<LayoutProps>`
  height: ${getSize(20)};
  ${layout}
`;
