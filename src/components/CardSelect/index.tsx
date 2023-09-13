import { useContext, useEffect, useState } from "react";
import { type SpaceProps } from "styled-system";
import { Context, ContextProvider } from "./context";
import {
  CardContainer,
  FormContainer,
  Text,
  List,
  SelectedIcon,
  Divisor,
  Footer,
} from "./styles";
import { TouchableOpacity } from "react-native";

import { type CardProps, type FormProps } from "./types";

const selectedPng = require("@assets/images/component/card-select/selected.png");

export function SelectForm(props: SpaceProps & FormProps) {
  return (
    <ContextProvider>
      <FormWithContext {...props} />
    </ContextProvider>
  );
}

function FormWithContext({ ...props }: SpaceProps & FormProps) {
  const { selectedIds } = useContext(Context);

  useEffect(() => {
    if (typeof props.onSelected === "function") {
      props.onSelected(selectedIds);
    }
  }, [selectedIds]);

  return (
    <FormContainer {...props}>
      <List
        ListHeaderComponent={() => <Divisor />}
        ListFooterComponent={() => <Footer />}
        showsVerticalScrollIndicator={false}
        data={props.data}
        renderItem={({ item }) => <Card text={item.text} id={item.id} />}
      />
    </FormContainer>
  );
}

function Card(props: CardProps & SpaceProps) {
  const { selectedIds, setSelectedIds } = useContext(Context);
  const [selected, setSelected] = useState(false);

  function unselectId(id: string | number) {
    const filteredIds = selectedIds.filter(
      (item: string | number) => item !== id,
    );
    setSelectedIds(filteredIds);
  }

  useEffect(() => {
    const isSelected = selectedIds.includes(props.id);
    setSelected(isSelected);
  }, [selectedIds, props.id]);

  function handlePress() {
    if (typeof props.onPress === "function") {
      props.onPress(props.id);
    }

    if (selectedIds.includes(props.id)) {
      unselectId(props.id);
      return;
    }

    setSelectedIds([...selectedIds, props.id]);
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <CardContainer>
        {selected && <SelectedIcon source={selectedPng} />}
        <Text>{props.text}</Text>
      </CardContainer>
    </TouchableOpacity>
  );
}
