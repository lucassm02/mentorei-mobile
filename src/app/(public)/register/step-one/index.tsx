import { Button, Header, Loading } from "@/components";
import { Input, Masks } from "@/components/Input";
import { CREATE_USER } from "@/services/graphql/mutations";
import { Collection, setItem } from "@/storages/async-storage";
import { getSize } from "@/utils";
import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { ScrollView } from "react-native";
import { ButtonContainer, Container, Text } from "../styles";
import { type FormDataProps } from "./types";
import { formSchema, makeHandleWithApiErrors } from "./utils";
import { useContext } from "react";
import { UserContext } from "@/storages";

export default function StepOne() {
  const router = useRouter();

  const { setUser } = useContext(UserContext);

  const {
    control,
    handleSubmit,
    formState,
    setError: setFormFieldError,
  } = useForm<FormDataProps>({
    resolver: yupResolver(formSchema),
  });

  const [createUser, { loading }] = useMutation(CREATE_USER, {
    errorPolicy: "all",
  });

  const handleWithApiErrors = makeHandleWithApiErrors(setFormFieldError);

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

    const { id, name, token }: Record<string, string> = data.user;

    await setItem(Collection.USER, { id, name, token });

    setUser({ id, name, token });

    router.replace("/(public)/register/step-two");
  });

  return (
    <>
      <Loading active={loading} />
      <Container>
        <Header backButton />
        <Text mt={getSize(30)} ml={getSize(30)}>
          Para criar sua conta, preencha as informações abaixo
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
          <Button
            mt={getSize(50)}
            value="Criar conta"
            onPress={handleButtonPress}
          />
        </ButtonContainer>
      </Container>
    </>
  );
}
