import { Button, Header } from "@/components";
import { Container, Text } from "./styles";

export default function StepTwo() {
  // const router = useRouter();

  // const handleButtonPress = handleSubmit(async ({ email, password }) => {
  //   // console.log(error);
  // });

  return (
    <Container>
      <Header backButton title="Cadastro" />
      <Text mt={30} ml={30}>
        Preencha suas informações de login nos campos abaixo
      </Text>

      <Button mt={20} value="Continuar" onPress={() => {}} />
    </Container>
  );
}
