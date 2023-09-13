import { type SpaceProps } from "styled-system";
import { Container, Title, List, Separator, Footer } from "./styles";

import { SkillCard } from "./SkillCard";
import { getSize } from "@/utils";
import { type CardProps } from "./types";

type Props = { data: CardProps[] };

export function SkillList({ data, ...props }: SpaceProps & Props) {
  return (
    <Container {...props}>
      <Title mb={getSize(10)}>Lista de skills</Title>
      <List
        data={data}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <SkillCard text={item.name} mt={getSize(10)} />
        )}
        ItemSeparatorComponent={() => <Separator />}
        ListFooterComponent={() => <Footer />}
      />
    </Container>
  );
}
