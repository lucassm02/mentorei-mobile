import { Container, Gif, GifContainer } from "./styles";

import crownGif from "@assets/images/component/loading/crown.gif";

type Props = { active: boolean };

export function Loading({ active }: Props) {
  if (!active) {
    return null;
  }

  return (
    <Container>
      <GifContainer>
        <Gif source={crownGif} />
      </GifContainer>
    </Container>
  );
}
