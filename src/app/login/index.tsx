import { useRouter } from "expo-router";
import { Button, CheckBox, Input } from "@/components";
import { getSize } from "@/utils";
import {
  Container,
  Image,
  WelcomeText,
  OptionsContainer,
  ForgotPasswordText,
  RegisterText,
  StyledLink,
} from "./styles";

import bannerPng from "@assets/images/screen/login/banner.png";
import logoPng from "@assets/images/shared/white-logo.png";

export default function Login() {
  const router = useRouter();
  const handleButtonPress = () => {
    router.push("/home");
  };

  return (
    <Container>
      <Image source={bannerPng} resizeMode="cover" width={1} />
      <Image source={logoPng} position="absolute" top={80} />
      <WelcomeText position="absolute" top={150}>
        Bem vindo!
      </WelcomeText>
      <Input
        mt={getSize(30)}
        label="E-mail"
        placeholder="Digite seu e-mail..."
      />
      <Input
        mt={getSize(15)}
        label="Senha"
        placeholder="Digite sua senha..."
        secureTextEntry={true}
      />
      <OptionsContainer mt={10}>
        <CheckBox label="Lembrar senha" />
        <ForgotPasswordText>Esqueceu sua senha?</ForgotPasswordText>
      </OptionsContainer>
      <Button mt={20} value="Entrar" onPress={handleButtonPress} />
      <RegisterText mt={20}>
        Não possui cadastro? clique em{" "}
        <StyledLink href="/register">Criar conta</StyledLink>.
      </RegisterText>
    </Container>
  );
}
