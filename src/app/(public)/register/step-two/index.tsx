import { Button, Header, RadioButton, RadioButtonForm } from "@/components";
import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import {
  CardGradient,
  CardText,
  Container,
  Image,
  RadioButtonCard,
  RadioButtonCardContainer,
  RadioContainer,
  Text,
  Title,
} from "../styles";

import { UserContext } from "@/storages";
import { Collection, setItem } from "@/storages/async-storage";
import mentorPng from "@assets/images/screen/register/mentor.png";
import studentPng from "@assets/images/screen/register/student.png";

const UserType = { MENTEE: "MENTEE", MENTOR: "MENTOR" };

export default function StepTree() {
  const router = useRouter();

  const { user } = useContext(UserContext);

  const [selectedOption, setSelectedOption] = useState<string | number | null>(
    null,
  );

  const handleButtonPress = async () => {
    if (!user) {
      router.replace("/onboarding");
    }

    const payload = { ...user, userType: selectedOption };

    await setItem(Collection.USER, payload);

    router.push("/register/step-tree");
  };

  return (
    <Container>
      <Header />
      <Title mt={30} ml={30}>
        Olá
      </Title>
      <Text mt={10} ml={30}>
        Escolha abaixo sua forma de acesso
      </Text>
      <RadioButtonForm onSelected={setSelectedOption}>
        <RadioButtonCardContainer mt={30}>
          <CardGradient border colors={["#EAF1F6", "#EAF1F6"]}>
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
              <CardText mb={30} color="#0F9FFA">
                Aluno
              </CardText>
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
    </Container>
  );
}
