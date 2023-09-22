/* eslint-disable prettier/prettier */
import { Button, Header, Loading } from "@/components";
import { SelectForm } from "@/components/CardSelect";
import { Dictionary } from "@/constants";
import { GET_SKILLS, UPDATE_USER } from "@/services";
import { UserContext } from "@/storages";
import { useLazyQuery, useMutation } from "@apollo/client";
import { useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Container, RegisterText, StyledLink, Text } from "../styles";
import { getSize } from "@/utils";

type Skills = Array<{
  id: string;
  text: string;
  type: string;
}>;

type CustomText = {
  title: string;
  button: string;
};

export default function StepTree() {
  const router = useRouter();

  const { user } = useContext(UserContext);

  const [selectedOption, setSelectedOption] = useState<string[]>([]);
  const [customText, setCustomText] = useState<CustomText>({
    title: "",
    button: "",
  });
  const [skills, setSkills] = useState<Skills[]>([]);

  useEffect(() => {
    getSkills();
  }, []);

  useEffect(() => {
    const userType = user?.userType ?? "MENTEE";
    const { BUTTON, TITLE } = Dictionary.SCREEN.REGISTER_STEP_TREE;
    setCustomText({ title: TITLE[userType], button: BUTTON[userType] });
  }, [user]);

  const [gqlGetSkills, gqlGetSkillsProps] = useLazyQuery(GET_SKILLS, {
    errorPolicy: "all",
  });

  const [gqlUpdateUser, gqlUpdateUserProps] = useMutation(UPDATE_USER, {
    errorPolicy: "all",
  });

  async function getSkills() {
    if (!user) {
      router.replace("(public)/onboarding");
      return;
    }

    const { data } = await gqlGetSkills({
      context: { headers: { Authorization: `Bearer ${user.token}` } },
    });

    const formattedSkills = data.skills.map(
      ({ id, name, type }: Record<string, string>) => ({
        id,
        text: name,
        type,
      }),
    );

    setSkills(formattedSkills);
  }

  async function updateUser() {
    if (!user) {
      router.replace("/(public)/register/step-one");
      return;
    }

    const variables = {
      id: user.id,
      skills: selectedOption,
      ...(user.userType === "MENTEE"
        ? {
          mentee: {
            id: "",
            linkedin: "value",
            goal: "value",
            interestArea: "value",
            degree: "HIGH_SCHOOL",
          },
        }
        : {}),
    };

    await gqlUpdateUser({
      variables,
      context: { headers: { Authorization: `Bearer ${user.token}` } },
    });
  }

  const handleButtonPress = async () => {
    await updateUser();

    if (user?.userType === "MENTEE") {
      router.replace("/(private)/home");
      return;
    }

    router.replace("/(public)/register/step-four");
  };

  return (
    <>
      <Loading
        active={gqlGetSkillsProps.loading || gqlUpdateUserProps.loading}
      />
      <Container>
        {!gqlGetSkillsProps.loading && (
          <>
            <Header backButton />
            <Text mt={getSize(30)} ml={getSize(30)}>
              {customText.title}
            </Text>
            <SelectForm
              mt={getSize(10)}
              ml={getSize(30)}
              data={skills}
              onSelected={setSelectedOption}
            />
            <Button
              mt={getSize(10)}
              value={customText.button}
              onPress={handleButtonPress}
              disabled={selectedOption.length === 0}
            />
            <RegisterText
              ml={getSize(30)}
              mr={getSize(30)}
              mt={getSize(20)}
              mb={getSize(20)}
            >
              Para saber mais ou duvidas acesse o portal{" "}
              <StyledLink href="/register">mentorei.app</StyledLink>.
            </RegisterText>
          </>
        )}
      </Container>
    </>
  );
}
