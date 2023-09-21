import { getSize } from "@/utils";
import { TextInput } from "react-native";
import styled from "styled-components/native";
import { space, type SpaceProps } from "styled-system";

export const Container = styled.View<SpaceProps>`
  width: ${getSize(300)};
  align-self: center;
  ${space}
`;

export const Input = styled(TextInput)`
  width: 100%;
  padding: ${getSize(17)} ${getSize(20)};
  background-color: #f1f1f1;
  font-family: ${({ theme }) => theme.FONT_FAMILY.NUNITO_SANS.BOLD};
  color: #746e6e;
  border-radius: ${getSize(5)};
  font-size: ${getSize(16)};
`;

export const Label = styled.Text<SpaceProps>`
  color: #9a9a9a;
  font-family: ${({ theme }) => theme.FONT_FAMILY.NUNITO_SANS.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.VSM};
  width: ${getSize(120)};
  height: ${getSize(14)};
  flex-direction: column;
  ${space};
`;

export const RequiredLabel = styled.Text<SpaceProps>`
  color: rgba(193, 82, 82, 0.91);
  font-family: ${({ theme }) => theme.FONT_FAMILY.NUNITO_SANS.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.VVSM};
  width: 97%;
  margin-top: ${getSize(5)};
  text-align: right;
  ${space};
`;
