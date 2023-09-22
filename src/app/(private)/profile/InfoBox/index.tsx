import { getSize } from "@/utils";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  IconContainer,
  IconShape,
  InfoContainer,
  Label,
  Separator,
  TextContainer,
  Value,
  Container,
} from "../styles";
import { type SpaceProps } from "styled-system";

type Props = { label: string; value: string; iconName: string };

export function InfoBox({
  label,
  value,
  iconName,
  ...props
}: Props & SpaceProps) {
  return (
    <Container {...props}>
      <Separator />
      <InfoContainer ml={getSize(30)} mt={getSize(10)}>
        <IconContainer>
          <IconShape>
            <Ionicons name={iconName as any} size={20} color="#464646" />
          </IconShape>
        </IconContainer>
        <TextContainer ml={getSize(15)}>
          <Label mt={getSize(15)}>{label}</Label>
          <Value ellipsizeMode="tail" numberOfLines={1} mt={getSize(5)}>
            {value}
          </Value>
        </TextContainer>
        <IconContainer>
          <Ionicons name="chevron-forward-sharp" size={20} color="#464646" />
        </IconContainer>
      </InfoContainer>
    </Container>
  );
}
