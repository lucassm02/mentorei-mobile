import { useRouter } from "expo-router";
import { Button } from "@/components";
import { getSize } from "@/utils";
import { Container, Banner, Logo, Title, Text } from "./styles";

import logoPng from "@assets/images/shared/gray-logo.png";
import bannerPng from "@assets/images/screen/onboarding/banner.png";

export default function Onboarding() {
  const router = useRouter();

  function goToLogin() {
    router.replace("/login");
  }
  function goToRegister() {
    router.push("/register");
  }

  return (
    <Container>
      <Banner source={bannerPng} m="0 auto" mt={getSize(25)} />
      <Logo source={logoPng} mt={getSize(20)} ml={getSize(30)} />
      <Title ml={getSize(30)} mt={getSize(15)} mr={getSize(30)}>
        Bem-vindo ao Mentorei.
      </Title>
      <Text ml={getSize(30)} mt={getSize(10)} mr={getSize(30)}>
        O aplicativo que veio para governar o ensino digital!
      </Text>
      <Button mt={getSize(30)} value="Criar Conta" onPress={goToRegister} />
      <Button
        type="outline"
        mt={getSize(10)}
        value="Já tenho conta"
        onPress={goToLogin}
      />
    </Container>
  );
}
