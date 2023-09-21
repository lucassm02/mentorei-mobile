import styled from "styled-components/native";
import { type SpaceProps, space } from "styled-system";
import { getSize } from "@/utils";
import MaskInput from "react-native-mask-input";

export const Container = styled.View<SpaceProps>`
  width: ${getSize(300)};
  align-self: center;
  ${space}
`;

export const Input = styled(MaskInput)`
  width: 100%;
  padding: ${getSize(17)} ${getSize(20)};
  background-color: #f1f1f1;
  font-family: HammersmithOne;
  color: #746e6e;
  border-radius: ${getSize(5)};
  font-size: ${getSize(16)};
`;

export const Label = styled.Text<SpaceProps>`
  color: #9a9a9a;
  font-size: ${getSize(14)};
  font-family: HammersmithOne;
  width: ${getSize(120)};
  height: ${getSize(14)};
  flex-direction: column;
  ${space};
`;

export const RequiredLabel = styled.Text<SpaceProps>`
  color: rgba(193, 82, 82, 0.91);
  font-size: ${getSize(10)};
  font-family: HammersmithOne;
  width: 97%;
  margin-top: ${getSize(5)};
  text-align: right;
  ${space};
`;
