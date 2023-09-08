import styled from "styled-components/native";
import { space } from "styled-system";
import { getSize } from "@/utils";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fdfffe;
`;

export const Text = styled.Text`
  color: #746e6e;
  font-size: ${getSize(28)};
  font-family: HammersmithOne;
  flex-direction: column;
  justify-content: center;
  ${space}
`;
