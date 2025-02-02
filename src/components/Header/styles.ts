import { getSize } from "@/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { space, flex, type SpaceProps, type FlexProps } from "styled-system";

export const Container = styled(SafeAreaView)<SpaceProps>`
  width: 100%;
  height: ${getSize(100)};
  background-color: #fdfffe;
  justify-content: center;
  align-items: center;
  padding-bottom: ${getSize(10)};
  ${space};
`;

export const ContentContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  width: 90%;
  align-items: center;
`;

export const ButtonContainer = styled.View<SpaceProps>``;

export const Image = styled.Image<SpaceProps & FlexProps>`
  ${space}
  ${flex}
`;
