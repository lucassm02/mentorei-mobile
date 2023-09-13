import { getSize } from "@/utils";
import { Rating as RatingWithoutStyle } from "react-native-ratings";
import styled from "styled-components/native";
import { space, type SpaceProps } from "styled-system";

export const Container = styled.View<SpaceProps>`
  width: ${getSize(315)};
  flex-direction: row;
  align-items: center;
  ${space}
`;

export const InfoContainer = styled.View<SpaceProps>`
  ${space}
`;

export const NameText = styled.Text<SpaceProps>`
  width: ${getSize(240)};
  color: #464646;
  font-family: HammersmithOne;
  font-size: ${getSize(24)};
  ${space}
`;

export const RatingContainer = styled.View<SpaceProps>`
  flex-direction: row;
  ${space}
`;

export const Rating = styled(RatingWithoutStyle)`
  background-color: red;
`;

export const RatingText = styled.Text<SpaceProps>`
  color: #464646;
  font-family: HammersmithOne;
  font-size: ${getSize(16)};
  ${space}
`;

export const IconContainer = styled.View<SpaceProps>`
  justify-content: center;
  align-items: center;
  ${space}
`;

export const Icon = styled.Image``;
