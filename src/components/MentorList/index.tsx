import { type SpaceProps } from "styled-system";
import { Container, Title, List, Separator, Footer } from "./styles";

import { MentorCard } from "./MentorCard";
import { getAvatarImageUrl, getSize } from "@/utils";
import { type CardProps } from "./types";

type Props = { data: CardProps[] };

export function MentorList({ data, ...props }: SpaceProps & Props) {
  return (
    <Container {...props}>
      <Title mb={getSize(10)}>Lista de mentores encontrados:</Title>
      <List
        data={data}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <MentorCard
            mt={getSize(10)}
            name={item.name}
            photoUrl={getAvatarImageUrl(item.name)}
            rating={item.rating}
          />
        )}
        ItemSeparatorComponent={() => <Separator />}
        ListFooterComponent={() => <Footer />}
      />
    </Container>
  );
}
