import { getSize } from "@/utils";
import styled from "styled-components/native";
import { space, type SpaceProps } from "styled-system";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fdfffe;
  ${space}
`;

export const InfoContainer = styled.View<SpaceProps>`
  height: ${getSize(90)};
  width: 80%;
  flex-direction: row;
  ${space}
`;

export const IconContainer = styled.View`
  height: 100%;
  width: 25%;
  justify-content: center;
  align-items: center;
`;
export const TextContainer = styled.View<SpaceProps>`
  width: 50%;
  height: 100%;
  ${space}
`;

export const IconShape = styled.View`
  width: ${getSize(70)};
  height: ${getSize(70)};
  justify-content: center;
  align-items: center;
  border-radius: 70%;
  background-color: rgba(144, 144, 144, 0.2);
`;

export const Label = styled.Text<SpaceProps>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.NUNITO_SANS.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  color: #939393;
  ${space}
`;

export const Value = styled.Text<SpaceProps>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.NUNITO_SANS.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.VSM};
  ${space}
`;

export const Separator = styled.View<SpaceProps>`
  width: 90%;
  height: 0.4px;
  margin: 0 auto;
  background-color: rgba(144, 144, 144, 0.2);
  ${space}
`;

export const Title = styled.Text<SpaceProps>`
  color: #746e6e;
  font-family: ${({ theme }) => theme.FONT_FAMILY.NUNITO_SANS.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  ${space}
`;
