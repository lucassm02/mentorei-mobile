import { Button, Header } from "@/components";
import { Input, Masks } from "@/components/Input";
import { getSize } from "@/utils";
import { Container, Text } from "./styles";

import { useRouter } from "expo-router";

import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

interface FormDataProps {
  name: string;
  cpf: string;
}

const formSchema = yup.object({
  name: yup.string().required("O nome é obrigatório."),
  cpf: yup.string().required("O cpf é obrigatório."),
});

export default function StepOne() {
  const router = useRouter();
  const { control, handleSubmit, formState } = useForm<FormDataProps>({
    resolver: yupResolver(formSchema),
  });

  const handleButtonPress = handleSubmit((data) => {
    console.log(data);
    router.push("/register/step-two");
  });

  return (
    <Container>
      <Header backButton title="Cadastro" />
      <Text mt={30} ml={30}>
        Preencha suas informações pessoais nos campos abaixo
      </Text>
      <Controller
        control={control}
        name="name"
        render={({ field }) => (
          <Input
            mt={getSize(20)}
            label="Nome completo"
            placeholder="Digite seu nome..."
            errorMessage={formState.errors.name?.message}
            onChangeText={field.onChange}
            value={field.value}
          />
        )}
      />
      <Controller
        control={control}
        name="cpf"
        render={({ field }) => (
          <Input
            mt={getSize(10)}
            label="CPF"
            keyboardType="numeric"
            placeholder="Digite seu cpf..."
            onChangeText={(_, unmaskedValue) => {
              field.onChange(unmaskedValue);
            }}
            onSubmitEditing={handleButtonPress}
            returnKeyType="send"
            errorMessage={formState.errors.cpf?.message}
            mask={Masks.BRL_CPF}
            value={field.value}
          />
        )}
      />
      <Button mt={20} value="Continuar" onPress={handleButtonPress} />
    </Container>
  );
}
