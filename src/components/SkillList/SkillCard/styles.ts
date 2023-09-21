import { getSize } from "@/utils";
import styled from "styled-components/native";
import { type SpaceProps, space } from "styled-system";

export const Container = styled.TouchableOpacity<SpaceProps>`
  width: ${getSize(315)};
  flex-direction: row;
  align-items: center;
  ${space}
`;

export const Text = styled.Text<SpaceProps>`
  color: #464646;
  font-family: HammersmithOne;
  font-size: ${getSize(16)};
  ${space}
`;

export const IconContainer = styled.View<SpaceProps>`
  height: ${getSize(60)};
  width: ${getSize(60)};
  border-radius: ${getSize(6)};
  border: ${getSize(2)} solid rgba(144, 144, 144, 0.2);
  justify-content: center;
  align-items: center;
  ${space}
`;

export const Icon = styled.Image`
  height: ${getSize(40)};
  width: ${getSize(40)};
`;
