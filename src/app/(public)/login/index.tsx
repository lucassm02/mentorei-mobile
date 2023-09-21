import { Button, CheckBox, Input, Loading } from "@/components";
import { getSize } from "@/utils";
import { useRouter } from "expo-router";
import {
  BannerText,
  Container,
  ForgotPasswordText,
  Image,
  OptionsContainer,
  RegisterText,
  StyledLink,
  Text,
  Title,
} from "./styles";

import bannerPng from "@assets/images/screen/login/banner.png";
import logoPng from "@assets/images/shared/white-logo.png";
import { ScrollView } from "react-native-gesture-handler";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { formSchema, makeHandleWithApiErrors } from "./utils";
import { type FormDataProps } from "./types";
import { Collection, setItem } from "@/storages/async-storage";
import { type User, UserContext } from "@/storages/context";
import { useContext } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "@/services";

export default function Login() {
  const { setUser } = useContext(UserContext);

  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState,
    setError: setFormFieldError,
  } = useForm<FormDataProps>({
    resolver: yupResolver(formSchema),
  });

  const [gqlLogin, gqlLoginProps] = useMutation(LOGIN, {
    errorPolicy: "all",
  });

  const handleWithApiErrors = makeHandleWithApiErrors(setFormFieldError);

  const handleButtonPress = handleSubmit(async (user) => {
    const { data, errors } = await gqlLogin({
      variables: {
        email: user.email,
        password: user.password,
      },
    });

    if (Array.isArray(errors)) {
      handleWithApiErrors(errors);
      return;
    }

    const { id, name, token }: User = data.login;

    await setItem(Collection.USER, { id, name, token });

    setUser({ id, name, token });

    router.replace("/(private)/home");
  });

  return (
    <>
      <Container>
        <Loading active={gqlLoginProps.loading} />
        <ScrollView centerContent>
          <Image source={bannerPng} resizeMode="cover" width={1} />
          <Image source={logoPng} position="absolute" top={80} />
          <BannerText position="absolute" top={150}>
            Bem vindo!
          </BannerText>
          <Title mt={getSize(20)} ml={getSize(30)}>
            Bem-vindo de volta
          </Title>
          <Text mt={getSize(10)} ml={getSize(30)}>
            Acesse sua conta com seu e-mail cadastrado
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
                mt={getSize(15)}
                label="Senha"
                placeholder="Digite sua senha..."
                secureTextEntry
                autoComplete="off"
                returnKeyType="send"
                autoCorrect={false}
                errorMessage={formState.errors.password?.message}
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
          />

          <OptionsContainer mt={getSize(10)}>
            <CheckBox label="Lembrar senha" />
            <ForgotPasswordText>Esqueceu sua senha?</ForgotPasswordText>
          </OptionsContainer>
          <Button mt={getSize(30)} value="Entrar" onPress={handleButtonPress} />
          <RegisterText mt={getSize(20)} mb={getSize(40)}>
            Não possui cadastro? Clique em
            <StyledLink href="/register"> Criar conta</StyledLink>
          </RegisterText>
        </ScrollView>
      </Container>
    </>
  );
}
