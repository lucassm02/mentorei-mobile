import { getSize } from "@/utils";
import { Link } from "expo-router";
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

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fdfffe;
`;

export const Image = styled(DefaultImage)<
  SpaceProps & LayoutProps & PositionProps
>`
  align-self: center;
  ${layout}
  ${space}
  ${position}
`;

export const BannerText = styled.Text<SpaceProps & PositionProps>`
  color: #fff;
  font-family: ${({ theme }) => theme.FONT_FAMILY.NUNITO_SANS.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  flex-direction: column;
  justify-content: center;
  align-self: center;
  ${space}
  ${position}
`;

export const Title = styled.Text<SpaceProps>`
  width: 80%;
  color: #746e6e;
  text-align: left;
  font-family: ${({ theme }) => theme.FONT_FAMILY.NUNITO_SANS.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL};

  ${space}
`;

export const Text = styled.Text<SpaceProps>`
  width: 80%;
  color: #746e6e;
  text-align: left;
  font-family: ${({ theme }) => theme.FONT_FAMILY.NUNITO_SANS.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  ${space}
`;

export const ButtonContainer = styled.View<SpaceProps>`
  align-items: flex-end;
  ${space}
`;

export const OptionsContainer = styled.View<SpaceProps>`
  width: ${getSize(310)};
  align-self: center;
  flex-direction: row;
  justify-content: space-between;
  ${space}
`;

export const ForgotPasswordText = styled.Text`
  color: #4db9fd;
  text-align: right;
  font-family: ${({ theme }) => theme.FONT_FAMILY.NUNITO_SANS.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.VSM};
`;

export const RegisterText = styled.Text<SpaceProps>`
  color: #746e6e;
  font-family: ${({ theme }) => theme.FONT_FAMILY.NUNITO_SANS.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
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
