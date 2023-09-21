import { getSize } from "@/utils";
import { Image as DefaultImage } from "react-native";
import styled from "styled-components/native";
import {
  layout,
  position,
  space,
  type LayoutProps,
  type PositionProps,
  type SpaceProps,
} from "styled-system";

import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fdfffe;
`;

export const Title = styled.Text<SpaceProps>`
  color: #686868;
  font-family: ${({ theme }) => theme.FONT_FAMILY.NUNITO_SANS.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL};
  width: 80%;
  height: auto;
  ${space}
`;

export const Text = styled.Text<SpaceProps>`
  color: #686868;
  font-family: ${({ theme }) => theme.FONT_FAMILY.NUNITO_SANS.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  width: 80%;
  height: auto;
  ${space}
`;

export const Image = styled(DefaultImage)<SpaceProps & PositionProps>`
  align-self: center;
  ${space}
  ${position}
`;

export const CardText = styled.Text<
  SpaceProps & PositionProps & { color?: string }
>`
  color: ${({ color }) => color ?? "#fff"};
  font-family: ${({ theme }) => theme.FONT_FAMILY.NUNITO_SANS.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  flex-direction: column;
  justify-content: center;
  align-self: center;
  ${space}
  ${position}
`;

export const ButtonContainer = styled.View<
  SpaceProps & PositionProps & LayoutProps
>`
  ${space}
  ${position}
  ${layout}
`;

export const RadioButtonCardContainer = styled.View<SpaceProps>`
  flex-direction: row;
  justify-content: center;
  padding: ${getSize(0)} ${getSize(30)};
  ${space}
`;

export const RadioButtonCard = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  padding: ${getSize(10)};
  justify-content: space-between;
  flex-direction: column;
  margin: 0 auto;
`;

export const RadioContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const Card = styled(LinearGradient)`
  width: ${getSize(150)};
  height: ${getSize(306)};
  border-radius: ${getSize(7)};
  margin: 0 auto;
`;

export const RegisterText = styled.Text<SpaceProps>`
  color: #746e6e;
  font-family: ${({ theme }) => theme.FONT_FAMILY.NUNITO_SANS.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  text-align: center;
  align-self: center;
  ${space}
`;

export const StyledLink = styled(Link)<SpaceProps>`
  color: #4db9fd;
  font-family: ${({ theme }) => theme.FONT_FAMILY.NUNITO_SANS.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  align-self: center;
  ${space}
`;
