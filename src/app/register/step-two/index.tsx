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
} from "../styles";
import { useRouter } from "expo-router";

import studentPng from "@assets/images/screen/register/student.png";
import mentorPng from "@assets/images/screen/register/mentor.png";
import { getItem, Collection, setItem } from "@/storages/async-storage";

const UserType = { MENTEE: "MENTEE", MENTOR: "MENTOR" };

export default function StepTree() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string | number | null>(
    null,
  );

  const handleButtonPress = async () => {
    const user: Record<string, string> | undefined = await getItem(
      Collection.USER,
    );

    if (!user) {
      router.replace("/register/step-one");
    }

    const payload = { ...user, userType: selectedOption };

    await setItem(Collection.USER, payload);

    router.push("/register/step-tree");
  };

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
                  id={UserType.MENTEE}
                  selected={selectedOption === UserType.MENTEE}
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
                  id={UserType.MENTOR}
                  selected={selectedOption === UserType.MENTOR}
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
        disabled={selectedOption === null}
      />
      <RegisterText mt={20}>
        Para saber mais ou duvidas acesse o portal{" "}
        <StyledLink href="/register">mentorei.app</StyledLink>.
      </RegisterText>
    </Container>
  );
}
