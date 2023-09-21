import { getSize } from "@/utils";
import styled, { css } from "styled-components/native";
import { space, type SpaceProps } from "styled-system";

import { type GenericProps } from "./types";

export const Container = styled.View`
  width: ${getSize(305)};
  align-self: center;
`;

export const ButtonContainer = styled.View<GenericProps>`
  width: 100%;
  background-color: ${({ disabled }) => (!disabled ? "#0f9ffa" : "#E7E4E0")};

  ${(props) =>
    props.type === "outline" &&
    css`
      background-color: #fff;
      border-width: ${getSize(1)};
      border-color: rgba(70, 70, 70, 0.1);
    `}

  height: ${getSize(55)};
  justify-content: center;
  align-items: center;
  border-radius: ${getSize(5)};
`;

export const Button = styled.TouchableOpacity<SpaceProps>`
  ${space}
`;

export const Text = styled.Text<GenericProps>`
  color: ${({ type }) => (type === "outline" ? "#464646" : "#fff")};

  ${(props) =>
    props.type === "outline" &&
    props.disabled &&
    css`
      color: #d0c8c8;
    `}

  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.NUNITO_SANS.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  text-transform: capitalize;
`;
