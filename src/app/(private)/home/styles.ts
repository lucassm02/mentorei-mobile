import styled from "styled-components/native";
import {
  type SpaceProps,
  space,
  layout,
  type LayoutProps,
  type PositionProps,
  position,
} from "styled-system";
import { getSize } from "@/utils";

export const Container = styled.View`
  flex: 1;
  background-color: #fdfffe;
`;

export const Title = styled.Text<SpaceProps>`
  color: #746e6e;
  font-size: ${getSize(26)};
  font-family: ${({ theme }) => theme.FONT_FAMILY.NUNITO_SANS.BOLD};
  flex-direction: column;
  justify-content: center;
  ${space}
`;

export const Text = styled.Text<SpaceProps>`
  color: #746e6e;
  font-size: ${getSize(16)};
  font-family: ${({ theme }) => theme.FONT_FAMILY.NUNITO_SANS.REGULAR};
  flex-direction: column;
  justify-content: center;
  ${space}
`;

export const ListTitle = styled.Text<SpaceProps>`
  color: #746e6e;
  font-size: ${getSize(18)};
  font-family: ${({ theme }) => theme.FONT_FAMILY.NUNITO_SANS.BOLD};
  flex-direction: column;
  justify-content: center;
  ${space}
`;

export const ListContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Block = styled.View<LayoutProps>`
  height: ${getSize(20)};
  ${layout}
`;

export const Separator = styled.View`
  height: ${getSize(10)};
`;

export const Image = styled.Image<SpaceProps & LayoutProps & PositionProps>`
  align-self: center;
  ${layout}
  ${space}
  ${position}
`;
