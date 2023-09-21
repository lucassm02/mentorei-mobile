import { Button, Header, Loading } from "@/components";
import { SelectForm } from "@/components/CardSelect";
import { GET_ALL_SKILLS, UPDATE_USER_SKILLS } from "@/services";
import { UserContext } from "@/storages";
import { useLazyQuery, useMutation } from "@apollo/client";
import { useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Container, RegisterText, StyledLink, Text } from "../styles";

export default function StepTree() {
  const router = useRouter();

  const { user } = useContext(UserContext);

  const [selectedOption, setSelectedOption] = useState<string[]>([]);
  const [skills, setSkills] = useState<
    Array<{ id: string; text: string; imageUrl: string; type: string }>
  >([]);

  const [getAllSkills, { loading: getSkillsLoading }] = useLazyQuery(
    GET_ALL_SKILLS,
    {
      errorPolicy: "all",
    },
  );

  const [updateUserSkills, { loading: updateUserSkillsLoading }] = useMutation(
    UPDATE_USER_SKILLS,
    {
      errorPolicy: "all",
    },
  );

  async function getSkills() {
    if (!user) {
      router.replace("/onboarding");
      return;
    }

    const { data } = await getAllSkills({
      context: { headers: { Authorization: `Bearer ${user.token}` } },
    });

    setSkills(data.listSkills);
  }

  async function updateUser() {
    if (!user) {
      router.replace("/register/step-one");
      return;
    }

    const softSkills = skills
      .filter(
        (item) => selectedOption.includes(item.id) && item.type === "SOFT",
      )
      .map((item) => item.id);

    const hardSkills = skills
      .filter(
        (item) => selectedOption.includes(item.id) && item.type === "HARD",
      )
      .map((item) => item.id);

    await updateUserSkills({
      variables: { id: user.id, softSkills, hardSkills },
      context: { headers: { Authorization: `Bearer ${user.token}` } },
    });
  }

  const handleButtonPress = async () => {
    await updateUser();
    router.replace("/look-for-mentor");
  };

  useEffect(() => {
    getSkills();
  }, []);

  return (
    <>
      <Loading active={getSkillsLoading || updateUserSkillsLoading} />
      <Container>
        <Header backButton />
        <Text mt={30} ml={30}>
          Selecione suas skills
        </Text>
        <SelectForm
          mt={20}
          ml={30}
          data={skills}
          onSelected={setSelectedOption}
        />
        <Button
          mt={10}
          value="Finalizar"
          onPress={handleButtonPress}
          disabled={selectedOption.length === 0}
        />
        <RegisterText mt={20} mb={20}>
          Para saber mais ou duvidas acesse o portal{" "}
          <StyledLink href="/register">mentorei.app</StyledLink>.
        </RegisterText>
      </Container>
    </>
  );
}
