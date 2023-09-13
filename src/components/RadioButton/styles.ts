import styled from "styled-components/native";
import { getSize } from "@/utils";
import { type RadioButtonProps } from "./types";
import { type SpaceProps, space } from "styled-system";

const defaultColor = "#000";

export const RadioButtonFormContainer = styled.View<SpaceProps>`
  ${space}
`;

export const RadioButtonContainer = styled.Pressable`
  height: ${getSize(30)};
  width: ${getSize(30)};
`;

export const Radio = styled.View`
  height: ${getSize(30)};
  width: ${getSize(30)};
  border-radius: ${getSize(15)};
  border-width: ${getSize(2.5)};
  border-color: ${(props: RadioButtonProps) => props.color ?? defaultColor};
  justify-content: center;
  align-items: center;
`;

export const RadioButtonFill = styled.View`
  height: ${getSize(18)};
  width: ${getSize(18)};
  border-radius: ${getSize(9)};
  background-color: ${(props: RadioButtonProps) => props.color ?? defaultColor};
`;
