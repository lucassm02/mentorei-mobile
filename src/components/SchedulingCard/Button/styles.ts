import { getSize } from "@/utils";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: ${getSize(55)};
  height: ${getSize(55)};
  justify-content: center;
  align-items: center;
  border-radius: ${getSize(7)};
  background: #0f9ffa;
`;

export const Image = styled.Image``;
