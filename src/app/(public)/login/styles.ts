import { Image as DefaultImage } from "react-native";
import styled from "styled-components/native";
import {
  space,
  position,
  layout,
  type LayoutProps,
  type PositionProps,
  type SpaceProps,
} from "styled-system";
import { getSize } from "@/utils";
import { Link } from "expo-router";

import { LinearGradient } from "expo-linear-gradient";

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
  font-size: ${getSize(20)};
  font-family: HammersmithOne;
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
  font-family: HammersmithOne;
  font-size: ${getSize(26)};
  ${space}
`;

export const Text = styled.Text<SpaceProps>`
  width: 80%;
  color: #746e6e;
  text-align: left;
  font-family: HammersmithOne;
  font-size: ${getSize(16)};
  ${space}
`;

export const ButtonGradient = styled(LinearGradient).attrs({
  colors: ["#FFAC38", "#FFD700"],
})`
  width: ${getSize(120)};
  height: ${getSize(50)};
  justify-content: center;
  align-items: center;
  border-radius: ${getSize(30)};
`;

export const ButtonContainer = styled.View<SpaceProps>`
  align-items: flex-end;
  ${space}
`;

export const Button = styled.Button`
  width: ${getSize(120)};
  height: ${getSize(50)};
  text-align: center;
  font-size: ${getSize(25)};
  font-family: HammersmithOne;
  text-transform: capitalize;
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
  font-size: ${getSize(12)};
  font-family: HammersmithOne;
`;

export const RegisterText = styled.Text<SpaceProps>`
  color: #746e6e;
  font-size: ${getSize(14)};
  font-family: HammersmithOne;
  align-self: center;
  ${space}
`;

export const StyledLink = styled(Link)<SpaceProps>`
  color: #4db9fd;
  font-size: ${getSize(14)};
  font-family: HammersmithOne;
  align-self: center;
  ${space}
`;
