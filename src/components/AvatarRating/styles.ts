import { getSize } from "@/utils";
import styled from "styled-components/native";
import { space, type SpaceProps } from "styled-system";

export const Container = styled.View<SpaceProps>`
  width: ${getSize(300)};
  height: ${getSize(90)};
  flex-direction: row;
  ${space}
`;

export const AvatarContainer = styled.View`
  height: 100%;
  width: 25%;
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.View`
  height: 100%;
  width: 75%;
`;

export const RatingContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-left: ${getSize(15)};
`;

export const UserTypeLabel = styled.Text<SpaceProps>`
  color: #686868;
  font-family: ${({ theme }) => theme.FONT_FAMILY.NUNITO_SANS.BOLD};
  margin-left: ${getSize(15)};
  font-size: ${getSize(14)};
`;

export const Name = styled.Text<SpaceProps>`
  color: #686868;
  font-family: ${({ theme }) => theme.FONT_FAMILY.NUNITO_SANS.BOLD};
  font-size: ${getSize(24)};
  margin-left: ${getSize(15)};
`;

export const RatingLabel = styled.Text<SpaceProps>`
  color: #686868;
  font-family: ${({ theme }) => theme.FONT_FAMILY.NUNITO_SANS.REGULAR};
  margin-right: ${getSize(5)};
  font-size: ${getSize(16)};
`;
