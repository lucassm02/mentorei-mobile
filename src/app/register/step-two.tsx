import { Button, Header, Input } from "@/components";
import { getSize } from "@/utils";
import { Container, Text } from "./styles";

import { useRouter } from "expo-router";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface FormDataProps {
  email: string;
  password: string;
  passwordConfirm: string;
}

const formSchema = yup.object({
  email: yup
    .string()
    .required("O e-mail é obrigatório.")
    .email("O e-mail digitado aaé invalido."),
  password: yup
    .string()
    .required("A senha é obrigatória.")
    .min(6, "A senha deve ter no mínimo 6 caracteres."),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas não coincidem.")
    .required("O confirmação de senha é obrigatória."),
});

export default function StepTwo() {
  const router = useRouter();

  const { control, handleSubmit, formState } = useForm<FormDataProps>({
    resolver: yupResolver(formSchema),
  });

  const handleButtonPress = handleSubmit((data) => {
    console.log(data);
    router.push("/register/step-tree");
  });

  return (
    <Container>
      <Header backButton title="Cadastro" />
      <Text mt={30} ml={30}>
        Preencha suas informações de login nos campos abaixo
      </Text>
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <Input
            mt={getSize(20)}
            label="E-mail"
            placeholder="Digite seu e-mail..."
            keyboardType="email-address"
            errorMessage={formState.errors.email?.message}
            onChangeText={field.onChange}
            value={field.value}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <Input
            mt={getSize(10)}
            label="Senha"
            placeholder="Digite sua senha..."
            secureTextEntry
            autoComplete="off"
            autoCorrect={false}
            errorMessage={formState.errors.password?.message}
            onChangeText={field.onChange}
            value={field.value}
          />
        )}
      />

      <Controller
        control={control}
        name="passwordConfirm"
        render={({ field }) => (
          <Input
            mt={getSize(10)}
            label="Confirmar senha"
            placeholder="Confirme sua senha..."
            onSubmitEditing={handleButtonPress}
            returnKeyType="send"
            secureTextEntry
            autoComplete="off"
            autoCorrect={false}
            errorMessage={formState.errors.passwordConfirm?.message}
            onChangeText={field.onChange}
            value={field.value}
          />
        )}
      />

      <Button mt={20} value="Continuar" onPress={handleButtonPress} />
    </Container>
  );
}
