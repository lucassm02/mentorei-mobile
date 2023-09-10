import { useRouter } from "expo-router";
import { Button } from "@/components";
import { getSize } from "@/utils";
import { Container, Image, Text } from "./styles";

import logoPng from "@assets/images/shared/gray-logo.png";
import bannerPng from "@assets/images/screen/onboarding/banner.png";

export default function Onboarding() {
  const router = useRouter();
  const handleButtonPress = () => {
    router.push("/login");
  };

  return (
    <Container>
      <Image source={logoPng} mt={getSize(30)} />
      <Image source={bannerPng} mt={getSize(30)} />
      <Text ml={getSize(30)} mt={getSize(30)} mr={getSize(30)}>
        Esse é o mentorei, o aplicativo que veio para governar o ensino digital
      </Text>
      <Button mt={getSize(20)} value="Continuar" onPress={handleButtonPress} />
    </Container>
  );
}
