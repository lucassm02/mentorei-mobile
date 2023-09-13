import { getSize } from "@/utils";
import styled from "styled-components/native";
import { size, space, type SizeProps, type SpaceProps } from "styled-system";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fdfffe;
`;

export const Banner = styled.Image.attrs({ resizeMode: "contain" })<
  SpaceProps & SizeProps
>`
  height: ${getSize(280)};
  ${space}
  ${size}
`;

export const Logo = styled.Image<SpaceProps & SizeProps>`
  height: 50px;
  width: 150px;
  ${space}
  ${size}
`;

export const Title = styled.Text<SpaceProps>`
  color: #746e6e;
  font-size: ${getSize(26)};
  font-family: HammersmithOne;
  flex-direction: column;
  justify-content: center;
  ${space}
`;

export const Text = styled.Text<SpaceProps>`
  color: #746e6e;
  font-size: ${getSize(16)};
  font-family: HammersmithOne;
  flex-direction: column;
  justify-content: center;
  ${space}
`;
