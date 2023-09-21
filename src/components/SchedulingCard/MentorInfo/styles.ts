import { getSize } from "@/utils";
import styled from "styled-components/native";
import { space, type SpaceProps } from "styled-system";

export const Container = styled.View<SpaceProps>`
  height: ${getSize(50)};
  flex-direction: row;
  ${space}
`;

export const AvatarContainer = styled.View`
  height: 100%;
  width: 30%;
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.View`
  height: 100%;
  width: 70%;
`;

export const Name = styled.Text<SpaceProps>`
  color: #686868;
  font-family: ${({ theme }) => theme.FONT_FAMILY.NUNITO_SANS.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  margin-top: ${getSize(8)};
  margin-left: ${getSize(5)};
`;

export const RatingContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-left: ${getSize(5)};
`;

export const RatingLabel = styled.Text<SpaceProps>`
  color: #686868;
  font-family: ${({ theme }) => theme.FONT_FAMILY.NUNITO_SANS.REGULAR};
  margin-right: ${getSize(5)};
  font-size: ${getSize(10)};
`;
