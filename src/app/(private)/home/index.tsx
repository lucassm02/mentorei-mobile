import {
  Header,
  Loading,
  NotFoundContainer,
  SchedulingCard,
} from "@/components";
import {
  Collection,
  UserContext,
  getItem,
  type SharedCollection,
} from "@/storages";
import { getAvatarImageUrl, getSize } from "@/utils";
import { useContext, useEffect, useState } from "react";
import {
  Block,
  Container,
  Image,
  ListContainer,
  ListTitle,
  Separator,
  Text,
  Title,
} from "./styles";

import bannerPng from "@assets/images/screen/login/banner.png";
import logoPng from "@assets/images/shared/white-logo.png";

import { FlatList } from "react-native";

type Meeting = {
  mentor: {
    name: string;
    rating: number;
  };
  date: string;
  hour: string;
  link: string;
};

export default function Home() {
  const { user } = useContext(UserContext);

  const [loading, setLoading] = useState(false);
  const [meetings, setMeetings] = useState<Meeting[]>([]);

  useEffect(() => {
    (async () => {
      if (!user) {
        setMeetings([]);
        return;
      }

      setLoading(true);
      const shared = await getItem<SharedCollection>(Collection.SHARED);

      const { meetings } = shared?.[user.id] ?? { meetings: [] };

      setMeetings(meetings);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <Header />
      <Loading active={loading} />
      <Container>
        <Image
          source={bannerPng}
          position="absolute"
          top={-getSize(105, "number")}
          resizeMode="stretch"
          width={1}
          height={getSize(150, "number")}
        />
        <Image
          source={logoPng}
          position="absolute"
          top={-getSize(60, "number")}
        />
        <Title ml={getSize(30)} mt={getSize(80)} mr={getSize(30)}>
          Olá {user?.name},
        </Title>
        <Text ml={getSize(30)} mt={getSize(10)} mr={getSize(40)}>
          Aqui você pode encontrar um resumo do seu aprendizado, reunimos para
          você suas mentorias agendadas
        </Text>

        {meetings.length > 0 && (
          <ListTitle ml={getSize(30)} mt={getSize(20)} mb={getSize(10)}>
            Agendamentos
          </ListTitle>
        )}

        {meetings.length === 0 && (
          <NotFoundContainer>
            <Text ml={getSize(30)} mr={getSize(30)}>
              Nenhum agendamento encontrado
            </Text>
          </NotFoundContainer>
        )}

        {meetings.length > 0 && (
          <ListContainer>
            <FlatList
              data={meetings}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={() => <Block height={getSize(10)} />}
              ListFooterComponent={() => <Block />}
              ItemSeparatorComponent={() => <Separator />}
              renderItem={({ item }) => (
                <SchedulingCard
                  meet={{
                    date: item.date,
                    hour: item.hour,
                    link: item.link,
                  }}
                  mentor={{
                    name: item.mentor.name,
                    photoUrl: getAvatarImageUrl(item.mentor.name),
                    rating: 3,
                  }}
                  skill="JavaScript"
                />
              )}
            />
          </ListContainer>
        )}
      </Container>
    </>
  );
}
