import { getSize } from "@/utils";
import styled from "styled-components/native";
import {
  type LayoutProps,
  layout,
  space,
  type SpaceProps,
} from "styled-system";

export const Container = styled.View<LayoutProps & SpaceProps>`
  width: ${getSize(70)};
  ${layout}
  ${space}
`;

export const CrownContainer = styled.View`
  height: 24%;
  margin-bottom: -2%;
`;

export const PhotoContainer = styled.View`
  height: 75%;
  width: 100%;
`;

export const Photo = styled.Image`
  height: 100%;
  width: 100%;
`;

export const Crown = styled.Image`
  height: 100%;
  width: 100%;
`;
