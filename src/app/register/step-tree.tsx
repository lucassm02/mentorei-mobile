import { useState } from "react";
import { Header, RadioButton, RadioButtonForm, Button } from "@/components";
import {
  Container,
  Text,
  RadioButtonCardContainer,
  RadioButtonCard,
  CardGradient,
  Image,
  CardText,
  RadioContainer,
  RegisterText,
  StyledLink,
} from "./styles";
import { useRouter } from "expo-router";

const studentPng = require("@assets/images/screen/register/student.png");
const mentorPng = require("@assets/images/screen/register/mentor.png");

export default function StepTree() {
  const router = useRouter();
  const handleButtonPress = () => {
    router.push("/register/step-four");
  };

  const [selectedOption, setSelectedOption] = useState<string | number>(0);

  return (
    <Container>
      <Header title="Meu Perfil" />
      <Text mt={30} ml={30}>
        Qual o seu perfil de usuário?
      </Text>
      <RadioButtonForm onSelected={setSelectedOption}>
        <RadioButtonCardContainer mt={30}>
          <CardGradient colors={["#FFD700", "#FFAC38"]}>
            <RadioButtonCard
              onPress={() => {
                setSelectedOption(1);
              }}
            >
              <RadioContainer>
                <RadioButton
                  color="#fff"
                  id={1}
                  selected={selectedOption === 1}
                />
              </RadioContainer>
              <Image source={studentPng} />
              <CardText mb={30}>Aluno</CardText>
            </RadioButtonCard>
          </CardGradient>
          <CardGradient colors={["#4DB9FD", "#427CFA"]}>
            <RadioButtonCard
              onPress={() => {
                setSelectedOption(2);
              }}
            >
              <RadioContainer>
                <RadioButton
                  color="#fff"
                  id={2}
                  selected={selectedOption === 2}
                />
              </RadioContainer>
              <Image source={mentorPng} />
              <CardText mb={30}>Mentor</CardText>
            </RadioButtonCard>
          </CardGradient>
        </RadioButtonCardContainer>
      </RadioButtonForm>
      <Button
        mt={20}
        value="Continuar"
        onPress={handleButtonPress}
        disabled={true}
      />
      <RegisterText mt={20}>
        Para saber mais ou duvidas acesse o portal{" "}
        <StyledLink href="/register">mentorei.app</StyledLink>.
      </RegisterText>
    </Container>
  );
}
