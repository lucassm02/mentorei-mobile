import { getSize } from "@/utils";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  background-color: rgba(77, 185, 253, 0.2);
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const GifContainer = styled.View`
  height: ${getSize(150)};
  width: ${getSize(150)};
  border-radius: ${getSize(20)};
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const Gif = styled.Image`
  height: ${getSize(140)};
  width: ${getSize(140)};
`;
