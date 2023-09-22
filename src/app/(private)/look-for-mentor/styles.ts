import styled from "styled-components/native";
import { space, type SpaceProps } from "styled-system";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fdfffe;
`;

export const Title = styled.Text<SpaceProps>`
  color: #746e6e;
  font-family: ${({ theme }) => theme.FONT_FAMILY.NUNITO_SANS.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL};
  flex-direction: column;
  justify-content: center;
  ${space}
`;

export const Text = styled.Text<SpaceProps>`
  color: #746e6e;
  font-family: ${({ theme }) => theme.FONT_FAMILY.NUNITO_SANS.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  flex-direction: column;
  justify-content: center;
  ${space}
`;

export const NotFoundContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

// export const ClearFilter = styled.TouchableOpacity
