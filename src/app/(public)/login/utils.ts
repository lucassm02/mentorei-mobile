import * as yup from "yup";
import { type FormDataProps } from "./types";

export const formSchema = yup.object({
  email: yup
    .string()
    .required("O e-mail é obrigatório.")
    .email("O e-mail digitado é invalido."),
  password: yup
    .string()
    .required("A senha é obrigatória.")
    .min(6, "A senha deve ter no mínimo 6 caracteres."),
});

type SetFormFieldErro = (
  field: keyof FormDataProps,
  options: { message: string },
) => void;

type ApiErrors = Array<{ message: string }>;

export const makeHandleWithApiErrors =
  (setFormFieldError: SetFormFieldErro) => (errors: ApiErrors) => {
    const dictionary: Array<{
      message: string;
      localMessage?: string;
      field: string;
    }> = [
      {
        message: "Não foi possível encontrar este usuário.",
        field: "email",
      },
      { message: "Email ou senha incorreta.", field: "email" },
    ];

    errors.forEach(({ message }: { message: string }) => {
      const value = dictionary.find(
        ({ message: localMessage }) =>
          String(message).toLowerCase() === String(localMessage).toLowerCase(),
      );

      if (value) {
        const messageToThrow = value.localMessage ?? value.message;

        setFormFieldError(value.field as keyof FormDataProps, {
          message: messageToThrow,
        });
      }
    });
  };
