import { getSize } from "@/utils";
import styled from "styled-components/native";
import { space } from "styled-system";

import { LinearGradient } from "expo-linear-gradient";

type GradientProps = {
  disabled: boolean;
};

const ButtonGradients = {
  ENABLED_STATUS: ["#FFAC38", "#FFD700"],
  DISABLED_STATUS: ["#F1EDED", "#E7E4E0"],
};

export const Container = styled.View`
  width: ${getSize(315)};
  align-self: center;
`;

export const Gradient = styled(LinearGradient).attrs(
  (props: GradientProps) => ({
    colors: !props.disabled
      ? ButtonGradients.ENABLED_STATUS
      : ButtonGradients.DISABLED_STATUS,
  }),
)`
  width: 100%;
  height: ${getSize(60)};
  justify-content: center;
  align-items: center;
  border-radius: ${getSize(5)};
`;

export const Button = styled.TouchableOpacity`
  ${space}
`;

export const Text = styled.Text`
  color: #fff;
  text-align: center;
  font-size: ${getSize(26)};
  font-family: HammersmithOne;
  text-transform: capitalize;
`;
