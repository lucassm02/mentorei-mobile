import { Header, Loading, MentorList, SearchInput } from "@/components";
import { GET_ALL_MENTORS } from "@/services";
import { UserContext } from "@/storages";
import { getSize } from "@/utils";
import { useLazyQuery } from "@apollo/client";
import { useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Container, Text, Title } from "./styles";

export default function LookForMentorV2() {
  const route = useRouter();
  const { user } = useContext(UserContext);

  const [mentors, setMentors] = useState<
    Array<{ id: string; name: string; rating: number }>
  >([]);

  const [gqlGetMentors, gqlGetMentorsProps] = useLazyQuery(GET_ALL_MENTORS, {
    errorPolicy: "all",
  });

  useEffect(() => {
    getMentors();
  }, []);

  async function getMentors() {
    if (!user) {
      route.replace("/(public)/onboarding");
      return;
    }

    const { data } = await gqlGetMentors({
      context: {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      },
    });

    const list = data.getAllMentors.map((item: any) => {
      const calculateRating = () => {
        if (item.evaluations.length === 0) return 0;

        const sumOfAlEvaluations = item.evaluations.reduce(
          (acc: any, curr: any) => acc + curr.rating,
          0,
        );

        const average = sumOfAlEvaluations / item.evaluations.length;

        return average;
      };

      const rating = calculateRating();

      return {
        id: item.user.id,
        name: item.user.name,
        email: item.user.email,
        rating,
      };
    });

    setMentors(list);
  }

  return (
    <>
      <Loading active={gqlGetMentorsProps.loading} />
      <Header backButton />
      <Container>
        <Title ml={getSize(30)} mt={getSize(30)} mr={getSize(30)}>
          Olá {user?.name},
        </Title>
        <Text ml={getSize(30)} mt={getSize(10)} mr={getSize(30)}>
          Aqui você pode encontrar mentores por skills ou pode buscar pelo nome.
        </Text>
        <SearchInput mt={getSize(20)} placeholder="Pesquisar" />
        <MentorList data={mentors} mt={getSize(40)} />
      </Container>
    </>
  );
}
