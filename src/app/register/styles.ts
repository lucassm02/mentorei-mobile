import { getSize } from "@/utils";
import { Link } from "expo-router";
import { Image as DefaultImage } from "react-native";
import styled, { css } from "styled-components/native";
import {
  type PositionProps,
  type SpaceProps,
  layout,
  position,
  space,
  type LayoutProps,
} from "styled-system";

import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fdfffe;
`;

export const Title = styled.Text<SpaceProps>`
  color: #686868;
  font-size: ${getSize(26)};
  width: 80%;
  height: auto;
  font-family: HammersmithOne;
  ${space}
`;

export const Text = styled.Text<SpaceProps>`
  color: #686868;
  font-size: ${getSize(20)};
  width: 80%;
  height: auto;
  font-family: HammersmithOne;
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
  font-size: ${getSize(20)};
  font-family: HammersmithOne;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  ${space}
  ${position}
`;

export const WelcomeText = styled.Text<SpaceProps & PositionProps>`
  color: #fff;
  font-size: ${getSize(20)};
  font-family: HammersmithOne;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  ${space}
  ${position}
`;

export const ButtonGradient = styled(LinearGradient).attrs({
  colors: ["#FFAC38", "#FFD700"],
})`
  width: ${getSize(120)};
  height: ${getSize(50)};
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;

export const ButtonContainer = styled.View<
  SpaceProps & PositionProps & LayoutProps
>`
  ${space}
  ${position}
  ${layout}
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
  text-align: center;
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

export const CardGradient = styled(LinearGradient)`
  ${({ border }: { border?: boolean }) =>
    border &&
    css`
      border-width: 3px;
      border-color: #0f9ffa;
    `}
  width: ${getSize(150)};
  height: ${getSize(306)};
  border-radius: ${getSize(7)};
  margin: 0 auto;
`;
