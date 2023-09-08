import { getSize } from "@/utils";
import { Container, Text } from "./styles";

export default function Home() {
  return (
    <Container>
      <Text ml={getSize(30)} mt={getSize(30)} mr={getSize(30)}>
        Em construção
      </Text>
    </Container>
  );
}
