import { AvatarRating, Header, Loading, Button, SkillList } from "@/components";
import { GET_MENTOR_BY_ID } from "@/services";
import { getAvatarImageUrl, getSize } from "@/utils";
import { useLazyQuery } from "@apollo/client";
import { useContext, useEffect, useState } from "react";
import { Container, Description, RatingContainer } from "./styles";
import { useRouter, useLocalSearchParams } from "expo-router";
import { UserContext } from "@/storages";

type Mentor = {
  id: string;
  user: {
    id: string;
    name: string;
    email: string;
    skills: Array<{ id: string; name: string; imageUrl: string }>;
  };
  experience: string;
  evaluations: Array<{ rating: number }>;
};

export default function MentorDetail() {
  const { id } = useLocalSearchParams();
  const route = useRouter();

  const { user } = useContext(UserContext);
  const [mentor, setMentor] = useState<Mentor | null>(null);

  const [gqlGetMentorById, gqlGetMentorByIdProps] = useLazyQuery(
    GET_MENTOR_BY_ID,
    {
      errorPolicy: "all",
    },
  );

  useEffect(() => {
    console.log(id);
    getMentorInfo();
  }, []);

  async function getMentorInfo() {
    if (!user) {
      route.replace("/(public)/onboarding");
      return;
    }

    const { data, error } = await gqlGetMentorById({
      variables: { id: "f763ccbe-f4dd-4902-b296-57b736922e14" },
      context: {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      },
    });

    if (!gqlGetMentorByIdProps.loading && error !== undefined) {
      route.back();
      return;
    }

    setMentor(data.mentor);
  }

  return (
    <>
      <Loading active={gqlGetMentorByIdProps.loading} />
      <Header backButton />
      <Container>
        {mentor && (
          <>
            <RatingContainer ml={getSize(30)} mt={getSize(20)}>
              <AvatarRating
                userType="MENTOR"
                name={mentor.user.name}
                rating={0}
                photoUrl={getAvatarImageUrl(mentor.user.name)}
              />
            </RatingContainer>
            <Description ml={getSize(30)} mt={getSize(30)} mr={getSize(30)}>
              {mentor.experience ?? "Descrição não disponível"}
            </Description>
            <SkillList
              title="Habilidades"
              data={mentor.user.skills}
              mt={getSize(40)}
            />
            <Button mt={20} mb={20} value="Agendar mentoria" />
          </>
        )}
      </Container>
    </>
  );
}
