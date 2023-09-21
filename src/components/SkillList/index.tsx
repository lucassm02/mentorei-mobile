import { type LayoutProps, type SpaceProps } from "styled-system";
import { Container, Title, List, Separator, Block } from "./styles";

import { SkillCard } from "./SkillCard";
import { getSize } from "@/utils";
import { type Props } from "./types";

export function SkillList({
  data,
  title,
  ...props
}: Props & SpaceProps & LayoutProps) {
  return (
    <Container {...props}>
      <Title mb={getSize(10)}>{title}</Title>
      <List
        ListHeaderComponent={() => <Block height={getSize(5)} />}
        ListFooterComponent={() => <Block />}
        data={data}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <SkillCard
            text={item.name}
            highlight={props.highlight?.includes(item.id)}
            imageUrl={item.imageUrl}
            onPress={() => {
              if (!item.onPress) return;
              item.onPress(item.id);
            }}
          />
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
    </Container>
  );
}
