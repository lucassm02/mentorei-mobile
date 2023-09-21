import styled from "styled-components/native";
import { space, type SpaceProps } from "styled-system";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fdfffe;
`;

export const RatingContainer = styled.View<SpaceProps>`
  ${space}
`;

export const Description = styled.Text<SpaceProps>`
  color: #746e6e;
  font-family: ${({ theme }) => theme.FONT_FAMILY.NUNITO_SANS.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  flex-direction: column;
  justify-content: center;
  ${space}
`;
