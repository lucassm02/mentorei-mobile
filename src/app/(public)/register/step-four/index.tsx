import { Button, Header, Loading, TextInput } from "@/components";
import { Input } from "@/components/Input";
import {
  CREATE_MENTOR_AVAILABILITY,
  UPDATE_USER,
} from "@/services/graphql/mutations";
import { UserContext } from "@/storages";
import { getSize } from "@/utils";
import { useLazyQuery, useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { ScrollView } from "react-native";
import { ButtonContainer, Container, Text, Title } from "../styles";
import { type FormDataProps } from "./types";
import { formSchema } from "./utils";
import { GET_USER_BY_ID } from "@/services";

const weekDays = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
];

export default function StepOne() {
  const router = useRouter();

  const { user } = useContext(UserContext);

  const { control, handleSubmit, formState } = useForm<FormDataProps>({
    resolver: yupResolver(formSchema),
  });

  const [gqlUpdateUser, gqlUpdateUserProps] = useMutation(UPDATE_USER, {
    errorPolicy: "all",
  });

  const [gqlCreateMentorAvailability, gqlCreateMentorAvailabilityProps] =
    useMutation(CREATE_MENTOR_AVAILABILITY, {
      errorPolicy: "all",
    });

  const [gqlGetUserById, gqlGetUserByIdProps] = useLazyQuery(GET_USER_BY_ID, {
    errorPolicy: "all",
  });

  const handleButtonPress = handleSubmit(
    async ({ experience, linkedIn, occupation }) => {
      const gqlContext = {
        headers: { Authorization: `Bearer ${user?.token}` },
      };

      const updateResult = await gqlUpdateUser({
        variables: {
          id: user?.id,
          mentor: {
            id: "",
            linkedin: linkedIn,
            occupation,
            experience,
            degree: "MASTER",
            expertise: "value",
            valuePerHour: 0,
          },
        },
        context: gqlContext,
      });

      const getResult = await gqlGetUserById({
        variables: {
          id: user?.id,
        },
        context: gqlContext,
      });

      if (!updateResult.errors && !getResult.error) {
        const createPromises = weekDays.map(async (day) => {
          return await gqlCreateMentorAvailability({
            variables: {
              mentorId: getResult.data?.user?.mentor?.id,
              openingTime: "9",
              closingTime: "18",
              weekday: day,
            },
            context: gqlContext,
          });
        });

        await Promise.all(createPromises);
      }

      router.replace("/(private)/home");
    },
  );

  return (
    <>
      <Loading
        active={
          gqlUpdateUserProps.loading ||
          gqlGetUserByIdProps.loading ||
          gqlCreateMentorAvailabilityProps.loading
        }
      />
      <Container>
        <Header />
        <Title mt={getSize(30)} ml={getSize(30)}>
          Quase lá...
        </Title>
        <Text mt={getSize(10)} ml={getSize(30)}>
          Preencha suas informações sociais. Exibiremos no seu perfil
        </Text>
        <ScrollView>
          <Controller
            control={control}
            name="experience"
            render={({ field }) => (
              <TextInput
                multiline
                mt={getSize(20)}
                label="Descrição"
                placeholder="Digite sua descrição..."
                errorMessage={formState.errors.experience?.message}
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
          />

          <Controller
            control={control}
            name="linkedIn"
            render={({ field }) => (
              <Input
                mt={getSize(10)}
                label="LinkedIn"
                placeholder="Digite seu linkedIn... (opcional)"
                errorMessage={formState.errors.linkedIn?.message}
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
          />
          <Controller
            control={control}
            name="occupation"
            render={({ field }) => (
              <Input
                mt={getSize(10)}
                label="Ocupação"
                placeholder="Digite sua ocupação... (opcional)"
                errorMessage={formState.errors.occupation?.message}
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
          />
        </ScrollView>
        <ButtonContainer position="relative" bottom={4}>
          <Button
            mt={getSize(50)}
            value="Concluir"
            onPress={handleButtonPress}
          />
        </ButtonContainer>
      </Container>
    </>
  );
}
