import { getSize } from "@/utils";
import { type SpaceProps } from "styled-system";
import { MentorInfo } from "./MentorInfo";
import {
  Container,
  Label,
  LeftSideContainer,
  RightSideContainer,
  StackContainer,
  Text,
} from "./styles";
import { type Props } from "./types";

import { Button } from "./Button";

export function SchedulingCard(props: Props & SpaceProps) {
  return (
    <Container>
      <LeftSideContainer>
        <MentorInfo
          ml={getSize(10)}
          mt={getSize(10)}
          name={props.mentor.name}
          photoUrl={props.mentor.photoUrl}
          rating={props.mentor.rating}
        />
        <StackContainer ml={getSize(20)}>
          <Label>
            Skill: <Text>{props.skill}</Text>
          </Label>
        </StackContainer>
        <StackContainer ml={getSize(20)} mb={getSize(10)}>
          <Label>
            Data: <Text>{props.meet.date}</Text>
          </Label>
          <Label ml={getSize(5)}>
            Hora: <Text>{props.meet.hour}</Text>
          </Label>
        </StackContainer>
      </LeftSideContainer>
      <RightSideContainer>
        <Button />
      </RightSideContainer>
    </Container>
  );
}
