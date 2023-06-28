import { Image as DefaultImage } from 'react-native';
import styled from 'styled-components/native';
import { space, position } from 'styled-system';
import { getSize } from '../../utils';
import { Link } from 'expo-router';

import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fdfffe;
`;

export const Image = styled(DefaultImage)`
  align-self: center;
  ${space}
  ${position}
`;

export const WelcomeText = styled.Text`
  color: #fff;
  font-size: ${getSize(20)};
  font-family: HammersmithOne;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  ${space}
  ${position}
`;

export const ButtonGradient = styled(LinearGradient).attrs({
  colors: ['#FFAC38', '#FFD700'],
})`
  width: ${getSize(120)};
  height: ${getSize(50)};
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;

export const ButtonContainer = styled.View`
  align-items: flex-end;
  ${space}
`;

export const Button = styled.Button`
  width: ${getSize(120)};
  height: ${getSize(50)};
  text-align: center;
  font-size: ${getSize(25)};
  font-family: HammersmithOne;
  text-transform: capitalize;
`;

export const OptionsContainer = styled.View`
  width: ${getSize(310)};
  align-self: center;
  flex-direction: row;
  justify-content: space-between;
  ${space}
`;

export const ForgotPasswordText = styled.Text`
  color: #4db9fd;
  text-align: right;
  font-size: ${getSize(12)};
  font-family: HammersmithOne;
`;

export const RegisterText = styled.Text`
  color: #746e6e;
  font-size: ${getSize(14)};
  font-family: HammersmithOne;
  align-self: center;
  ${space}
`;

export const StyledLink = styled(Link)`
  color: #4db9fd;
  font-size: ${getSize(14)};
  font-family: HammersmithOne;
  align-self: center;
  ${space}
`;
