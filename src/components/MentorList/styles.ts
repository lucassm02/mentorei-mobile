import { getSize } from "@/utils";
import styled from "styled-components/native";
import { type SpaceProps, space } from "styled-system";
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
  font-family: HammersmithOne;
  font-size: ${getSize(16)};
  ${space}
`;

export const List = styled(FlatList<CardProps>)``;

export const Separator = styled.View`
  width: 95%;
  height: 0.5px;
  margin-top: 15px;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const Footer = styled.View`
  padding: 10px;
`;
