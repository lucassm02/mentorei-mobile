import { getSize } from "@/utils";
import styled from "styled-components/native";
import { space, type SpaceProps } from "styled-system";

export const Container = styled.View`
  width: ${getSize(320)};
  /* height: ${getSize(85)}; */
  flex-direction: row;
  border-radius: ${getSize(10)};
  border: ${getSize(2)} solid #83caf6;
  background: #e5f6fe;
`;

export const LeftSideContainer = styled.View`
  width: 50%;
`;

export const RightSideContainer = styled.View`
  width: 50%;
  justify-content: center;
  align-items: center;
`;

export const StackContainer = styled.View<SpaceProps>`
  flex-direction: row;
  ${space}
`;

export const Label = styled.Text<SpaceProps>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.NUNITO_SANS.BOLD};
  font-size: ${getSize(10)};
  color: #464646;
  ${space}
`;

export const Text = styled.Text<SpaceProps>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.NUNITO_SANS.REGULAR};
  font-size: ${getSize(10)};
  color: #464646;
  ${space}
`;
