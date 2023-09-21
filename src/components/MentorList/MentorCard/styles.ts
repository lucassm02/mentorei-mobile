import { getSize } from "@/utils";
import { Rating as RatingWithoutStyle } from "react-native-ratings";
import styled from "styled-components/native";
import { space, type SpaceProps } from "styled-system";

export const Container = styled.TouchableOpacity<SpaceProps>`
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
  font-family: ${({ theme }) => theme.FONT_FAMILY.NUNITO_SANS.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  ${space}
`;

export const RatingContainer = styled.View<SpaceProps>`
  flex-direction: row;
  ${space}
`;

export const Rating = styled(RatingWithoutStyle)``;

export const RatingText = styled.Text<SpaceProps>`
  color: #464646;
  font-family: ${({ theme }) => theme.FONT_FAMILY.NUNITO_SANS.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  ${space}
`;

export const IconContainer = styled.View<SpaceProps>`
  height: ${getSize(90)};
  justify-content: center;
  align-items: center;
  ${space}
`;
