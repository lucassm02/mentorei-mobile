import { useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native";
import { ButtonContainer, Container, ContentContainer, Image } from "./styles";

const grayLogoPng = require("@assets/images/shared/gray-logo.png");
const arrowBackPng = require("@assets/images/component/header/arrow-back.png");

interface Props {
  backButton?: boolean;
  clearBackHistory?: boolean;
}

export function Header({ backButton, clearBackHistory, ...props }: Props) {
  const navigation = useNavigation();

  return (
    <Container>
      <ContentContainer {...props}>
        {backButton && navigation.canGoBack() && (
          <ButtonContainer>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Image source={arrowBackPng} />
            </TouchableOpacity>
          </ButtonContainer>
        )}
        <Image source={grayLogoPng} m="0 auto" />
      </ContentContainer>
    </Container>
  );
}
