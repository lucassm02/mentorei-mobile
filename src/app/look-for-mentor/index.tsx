import { Header, Loading, SearchInput, SkillList } from "@/components";
import { GET_ALL_SKILLS } from "@/services";
import {
  addSkillTypeOnListOfSkills,
  getSize,
  mergeAndSortSkills,
} from "@/utils";
import { useLazyQuery } from "@apollo/client";
import { useContext, useEffect, useState } from "react";
import { Container, Text, Title } from "./styles";
import { useRouter } from "expo-router";
import { UserContext } from "@/storages";

export default function LookForMentor() {
  const route = useRouter();
  const { user } = useContext(UserContext);

  const [skills, setSkills] = useState<
    Array<{ id: string; name: string; type: string }>
  >([]);

  const [gqlGeSkills, gqlGetSkillProps] = useLazyQuery(GET_ALL_SKILLS, {
    errorPolicy: "all",
  });

  useEffect(() => {
    getSkills();
  }, []);

  async function getSkills() {
    if (!user) {
      route.replace("/onboarding");
      return;
    }

    const { data } = await gqlGeSkills({
      context: {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      },
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
      name,
      type,
    }));

    setSkills(renamedKeySkills);
  }

  return (
    <>
      <Loading active={gqlGetSkillProps.loading} />
      <Header />
      <Container>
        <Title ml={getSize(30)} mt={getSize(30)} mr={getSize(30)}>
          Olá Lucas,
        </Title>
        <Text ml={getSize(30)} mt={getSize(10)} mr={getSize(30)}>
          Aqui você pode encontrar mentores por skills ou pode buscar pelo nome.
        </Text>
        <SearchInput mt={getSize(20)} placeholder="Pesquisar" />
        <SkillList data={skills} mt={getSize(40)} />
      </Container>
    </>
  );
}
