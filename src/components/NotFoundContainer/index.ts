import styled from "styled-components/native";
import {
  layout,
  type LayoutProps,
  position,
  type PositionProps,
  space,
  type SpaceProps,
} from "styled-system";

export const NotFoundContainer = styled.View<
  SpaceProps & LayoutProps & PositionProps
>`
  flex: 1;
  justify-content: center;
  align-items: center;
  ${space}
  ${layout}
  ${position}
`;
