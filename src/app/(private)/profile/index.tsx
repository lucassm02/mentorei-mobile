import { AvatarRating, Button, Header, Loading } from "@/components";
import { GET_USER_BY_ID } from "@/services";
import { Collection, UserContext, setItem } from "@/storages";
import { getAvatarImageUrl, getSize } from "@/utils";
import { useLazyQuery } from "@apollo/client";
import { useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { InfoBox } from "./InfoBox";
import { Container, Title } from "./styles";

type User = { name: string; email: string; cpf: string };

export default function Profile() {
  const route = useRouter();

  const { user, setUser } = useContext(UserContext);
  const [userDataFromApi, setUserDataFromApi] = useState<User | null>(null);

  const [gqlGetUserById, gqlGetUserByIdProps] = useLazyQuery(GET_USER_BY_ID, {
    errorPolicy: "all",
  });

  async function handleLogout() {
    await setItem(Collection.USER, null);
    setUser(null);
    route.replace("/(public)/login");
  }

  useEffect(() => {
    getMentorInfo();
  }, []);

  async function getMentorInfo() {
    if (!user) {
      route.replace("/(public)/onboarding");
    }

    const { data } = await gqlGetUserById({
      variables: {
        id: user?.id,
      },
      context: {
        headers: { Authorization: `Bearer ${user?.token}` },
      },
    });

    setUserDataFromApi(data.user);
  }

  return (
    <>
      <Loading active={gqlGetUserByIdProps.loading} />
      <Header />
      <Container>
        <AvatarRating
          ml={getSize(25)}
          mt={getSize(15)}
          name={user?.name ?? ""}
          photoUrl={getAvatarImageUrl(user?.name ?? "")}
          rating={5}
        />
        {userDataFromApi && (
          <>
            <Title mt={getSize(30)} ml={getSize(30)} mb={getSize(10)}>
              Informações do usuário
            </Title>

            <ScrollView>
              <InfoBox
                mt={getSize(10)}
                label="Nome completo"
                value={userDataFromApi?.name ?? ""}
                iconName="person-sharp"
              />

              <InfoBox
                mt={getSize(10)}
                label="Senha"
                value="********"
                iconName="eye-sharp"
              />

              <InfoBox
                mt={getSize(10)}
                label="E-mail"
                value={userDataFromApi?.email ?? ""}
                iconName="mail-sharp"
              />

              <InfoBox
                mt={getSize(10)}
                label="CPF"
                value={userDataFromApi?.cpf ?? ""}
                iconName="newspaper-sharp"
              />

              <Button
                mt={getSize(40)}
                mb={getSize(40)}
                type="outline"
                value="Sair"
                onPress={handleLogout}
              />
            </ScrollView>
          </>
        )}
      </Container>
    </>
  );
}
