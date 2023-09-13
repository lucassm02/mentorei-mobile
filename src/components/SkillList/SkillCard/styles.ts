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
  height: 60px;
  width: 60px;
  border-radius: 6px;
  border: 2px solid #909090;
  background: rgba(15, 159, 250, 0.5);
  justify-content: center;
  align-items: center;
  ${space}
`;

export const Icon = styled.Image`
  height: ${getSize(40)};
  width: ${getSize(40)};
`;
