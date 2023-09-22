import {
  Header,
  Loading,
  MentorList,
  NotFoundContainer,
  SearchInput,
  SkillList,
} from "@/components";
import { GET_MENTORS, GET_SKILLS } from "@/services";
import { UserContext } from "@/storages";
import { getSize } from "@/utils";
import { useLazyQuery } from "@apollo/client";
import { useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Container, Text, Title } from "./styles";

type GetMentorsParams = { name?: string; skillId?: string };

export default function LookForMentor() {
  const route = useRouter();
  const { user } = useContext(UserContext);

  const [skills, setSkills] = useState<
    Array<{ id: string; name: string; imageUrl: string; type: string }>
  >([]);

  const [mentors, setMentors] = useState<
    Array<{ id: string; name: string; rating: number }>
  >([]);

  const [inputText, setInputText] = useState<string>("");
  const [showSkills, setShowSkills] = useState<boolean>(true);
  const [showMentors, setShowMentors] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [gqlGeSkills, gqlGetSkillProps] = useLazyQuery(GET_SKILLS, {
    errorPolicy: "all",
  });

  const [gqlGetMentors] = useLazyQuery(GET_MENTORS, {
    errorPolicy: "all",
  });

  useEffect(() => {
    getSkills();
  }, []);

  async function getMentors(params?: GetMentorsParams) {
    if (!user) {
      route.replace("/(public)/onboarding");
      return;
    }

    const { data } = await gqlGetMentors({
      variables: { name: params?.name, skillId: params?.skillId },
      context: {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      },
    });

    const mentors = data.mentors.filter((item: any) => item.user !== null);

    const list = mentors.map((item: any) => {
      const calculateRating = () => {
        if (item?.evaluations.length === 0) return 0;

        const sumOfAlEvaluations = item?.evaluations.reduce(
          (acc: any, curr: any) => acc + curr.rating,
          0,
        );

        const average = sumOfAlEvaluations / item.evaluations.length;

        return average;
      };

      const rating = calculateRating();

      return {
        id: item.id,
        name: item.user.name,
        email: item.user.email,
        rating,
        onPress: () => {
          route.push({
            pathname: "/(private)/mentor/[id]",
            params: { id: item.id },
          });
        },
      };
    });

    setMentors(list);

    if (list.length > 0) {
      setShowSkills(false);
      setShowMentors(true);
    }
  }
  async function getSkills() {
    if (!user) {
      route.replace("/(public)/onboarding");
      return;
    }

    const { data } = await gqlGeSkills({
      context: {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      },
    });

    const skills = data.skills.map((item: any) => ({
      ...item,
      onPress: async (id: string) => {
        setLoading(true);
        await getMentors({ skillId: id });
        setLoading(false);
      },
    }));

    setSkills(skills);
  }

  return (
    <>
      <Loading active={gqlGetSkillProps.loading || loading} />
      <Header />
      <Container>
        <Title ml={getSize(30)} mt={getSize(30)} mr={getSize(30)}>
          Buscar mentor
        </Title>
        <Text ml={getSize(30)} mt={getSize(10)} mr={getSize(30)}>
          Aqui você pode encontrar mentores filtrando habilidade ou pode buscar
          pelo nome
        </Text>
        <SearchInput
          mt={getSize(20)}
          placeholder="Pesquisar"
          enterKeyHint="search"
          value={inputText}
          onChangeText={async (value) => {
            setInputText(value);
            await getMentors({ name: value });
          }}
        />
        {showSkills && skills.length > 0 && (
          <SkillList title="Habilidades" data={skills} mt={getSize(40)} />
        )}

        {showSkills && skills.length === 0 && (
          <NotFoundContainer>
            <Text ml={getSize(30)} mt={getSize(10)} mr={getSize(30)}>
              Nenhuma habilidade foi encontrada
            </Text>
          </NotFoundContainer>
        )}

        {showMentors && mentors.length > 0 && (
          <MentorList title="Mentores" data={mentors} mt={getSize(40)} />
        )}

        {showMentors && mentors.length === 0 && (
          <NotFoundContainer>
            <Text ml={getSize(30)} mt={getSize(10)} mr={getSize(30)}>
              Nenhum mentor encontrado
            </Text>
          </NotFoundContainer>
        )}
      </Container>
    </>
  );
}
