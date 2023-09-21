import { type SpaceProps } from "styled-system";
import { Block, Container, List, Separator, Title } from "./styles";

import { getAvatarImageUrl, getSize } from "@/utils";
import { MentorCard } from "./MentorCard";
import { type CardProps } from "./types";

type Props = { title: string; data: CardProps[] };

export function MentorList({ data, title, ...props }: SpaceProps & Props) {
  return (
    <Container {...props}>
      <Title mb={getSize(10)}>{title}</Title>
      <List
        ListHeaderComponent={() => <Block height={getSize(5)} />}
        ListFooterComponent={() => <Block />}
        ItemSeparatorComponent={() => <Separator />}
        data={data}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <MentorCard
            mt={getSize(10)}
            name={item.name}
            photoUrl={getAvatarImageUrl(item.name)}
            rating={item.rating}
            onPress={() => {
              if (!item.onPress) return;
              item.onPress(item.id);
            }}
          />
        )}
      />
    </Container>
  );
}
