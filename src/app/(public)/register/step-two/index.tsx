import { Button, Header, RadioButton, RadioButtonForm } from "@/components";
import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import {
  Card,
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
import { getSize } from "@/utils";

const UserType = { MENTEE: "MENTEE", MENTOR: "MENTOR" };

export default function StepTree() {
  const router = useRouter();

  const { user, setUser } = useContext(UserContext);

  const [selectedOption, setSelectedOption] = useState<string | number | null>(
    null,
  );

  const handleButtonPress = async () => {
    if (!user) {
      router.replace("/(public)/onboarding");
      return;
    }

    const payload = {
      ...user,
      userType: selectedOption as keyof typeof UserType,
    };

    setUser(payload);
    await setItem(Collection.USER, payload);

    router.push("(public)/register/step-tree");
  };

  return (
    <Container>
      <Header />
      <Title mt={getSize(30)} ml={getSize(30)}>
        Olá {user?.name},
      </Title>
      <Text mt={getSize(10)} ml={getSize(30)}>
        Chegou a hora de iniciar sua jornada, deseja aprender ou ensinar?
      </Text>
      <RadioButtonForm onSelected={setSelectedOption}>
        <RadioButtonCardContainer mt={30}>
          <Card colors={["#EAF1F6", "#EAF1F6"]}>
            <RadioButtonCard
              onPress={() => {
                setSelectedOption(UserType.MENTEE);
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
              <CardText mb={getSize(30)} color="#0F9FFA">
                Aluno
              </CardText>
            </RadioButtonCard>
          </Card>
          <Card colors={["#4DB9FD", "#427CFA"]}>
            <RadioButtonCard
              onPress={() => {
                setSelectedOption(UserType.MENTOR);
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
              <CardText mb={getSize(30)}>Mentor</CardText>
            </RadioButtonCard>
          </Card>
        </RadioButtonCardContainer>
      </RadioButtonForm>
      <Button
        mt={getSize(20)}
        value="Continuar"
        onPress={handleButtonPress}
        disabled={selectedOption === null}
      />
    </Container>
  );
}
