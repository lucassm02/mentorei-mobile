import { Button, Header } from "@/components";
import { Input, Masks } from "@/components/Input";
import { getSize } from "@/utils";
import { gql, useMutation } from "@apollo/client";
import { ScrollView } from "react-native";
import { ButtonContainer, Container, Text } from "./styles";

import { useRouter } from "expo-router";

import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

type FormDataProps = {
  name: string;
  cpf: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

const formSchema = yup.object({
  name: yup.string().required("O nome é obrigatório."),
  cpf: yup.string().required("O cpf é obrigatório."),
  email: yup
    .string()
    .required("O e-mail é obrigatório.")
    .email("O e-mail digitado é invalido."),
  password: yup
    .string()
    .required("A senha é obrigatória.")
    .min(6, "A senha deve ter no mínimo 6 caracteres."),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas não coincidem.")
    .required("O confirmação de senha é obrigatória."),
});

const CREATE_USER = gql`
  mutation (
    $name: String!
    $email: String!
    $cpf: String!
    $password: String!
  ) {
    createUser(name: $name, email: $email, cpf: $cpf, password: $password) {
      id
      token
    }
  }
`;

export default function StepOne() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState,
    setError: setFormFieldError,
  } = useForm<FormDataProps>({
    resolver: yupResolver(formSchema),
  });

  const [createUser] = useMutation(CREATE_USER, {
    errorPolicy: "all",
    context: { headers: {} },
  });

  function handleWithApiErrors(errors: Array<{ message: string }>) {
    const dictionary: Array<{ message: string; field: string }> = [
      {
        message:
          "Sua senha deve conter pelo menos uma letra maiúscula, um número e um caracter especial.",
        field: "password",
      },
      { message: "O CPF precisa ser válido.", field: "cpf" },
      { message: "Já existe um usuário com este e-mail.", field: "email" },
      { message: "Já existe um usuário com este CPF.", field: "cpf" },
    ];

    errors.forEach(({ message }: { message: string }) => {
      const value = dictionary.find(
        ({ message: localMessage }) =>
          String(message).toLowerCase() === String(localMessage).toLowerCase(),
      );

      if (value) {
        setFormFieldError(value.field as keyof FormDataProps, { message });
      }
    });
  }

  const handleButtonPress = handleSubmit(async (user) => {
    const { data, errors } = await createUser({
      variables: {
        name: user.name,
        cpf: user.cpf,
        email: user.email,
        password: user.password,
      },
    });

    if (Array.isArray(errors)) {
      handleWithApiErrors(errors);
      return;
    }

    const { id, token }: Record<string, string> = data.createUser;

    router.replace({
      pathname: "/register/step-two",
      params: { id, token },
    });
  });

  return (
    <Container>
      <Header backButton title="Cadastro" />
      <Text mt={30} ml={30}>
        Preencha suas informações pessoais nos campos abaixo
      </Text>
      <ScrollView>
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

        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <Input
              mt={getSize(10)}
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
      </ScrollView>
      <ButtonContainer position="relative" bottom={4}>
        <Button mt={50} value="Continuar" onPress={handleButtonPress} />
      </ButtonContainer>
    </Container>
  );
}
