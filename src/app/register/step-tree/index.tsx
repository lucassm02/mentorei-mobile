import { Button, Header, Loading } from "@/components";
import { SelectForm } from "@/components/CardSelect";
import { GET_ALL_SKILLS, UPDATE_USER_SKILLS } from "@/services";
import { Collection, getItem } from "@/storages/async-storage";
import { useLazyQuery, useMutation } from "@apollo/client";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Container, RegisterText, StyledLink, Text } from "../styles";
import { mergeAndSortSkills, addSkillTypeOnListOfSkills } from "./utils";

export default function StepFour() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string[]>([]);
  const [skills, setSkills] = useState<
    Array<{ id: string; text: string; type: string }>
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

  async function getLocalUserData(): Promise<
    { id: string; token: string } | undefined
  > {
    const user: { id: string; token: string } | undefined = await getItem(
      Collection.USER,
    );

    return user ?? undefined;
  }

  async function getSkills() {
    const userData = await getLocalUserData();

    if (!userData) {
      router.replace("/register/step-one");
      return;
    }

    const { data } = await getAllSkills({
      context: { headers: { Authorization: `Bearer ${userData.token}` } },
    });

    const softSkills = addSkillTypeOnListOfSkills(
      data.listSkills.softSkills,
      "SOFT",
    );

    const hardSkills = addSkillTypeOnListOfSkills(
      data.listSkills.hardSkills,
      "HARD",
    );

    const mergedSkills = mergeAndSortSkills(softSkills, hardSkills);

    const renamedKeySkills = mergedSkills.map(({ id, name, type }) => ({
      id,
      text: name,
      type,
    }));

    setSkills(renamedKeySkills);
  }

  async function updateUser() {
    const userData = await getLocalUserData();

    if (!userData) {
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
      variables: { id: userData.id, softSkills, hardSkills },
      context: { headers: { Authorization: `Bearer ${userData.token}` } },
    });
  }

  const handleButtonPress = async () => {
    await updateUser();
    router.replace("/home");
  };

  useEffect(() => {
    getSkills();
  }, []);

  return (
    <>
      <Loading active={getSkillsLoading || updateUserSkillsLoading} />
      <Container>
        <Header title="Meu Perfil" backButton />
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
        <RegisterText mt={20}>
          Para saber mais ou duvidas acesse o portal{" "}
          <StyledLink href="/register">mentorei.app</StyledLink>.
        </RegisterText>
      </Container>
    </>
  );
}
