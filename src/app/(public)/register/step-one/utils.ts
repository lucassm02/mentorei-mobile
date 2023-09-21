import * as yup from "yup";
import { type FormDataProps } from "./types";

export const formSchema = yup.object({
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
        message:
          "Sua senha deve conter pelo menos uma letra maiúscula, um número e um caracter especial.",
        localMessage:
          "A senha deve conter letra maiúscula e carácter especial.",
        field: "password",
      },
      { message: "O CPF precisa ser válido.", field: "cpf" },
      { message: "Já existe um usuário com este e-mail.", field: "email" },
      { message: "Já existe um usuário com este CPF.", field: "cpf" },
      { message: "Digite o seu nome completo.", field: "name" },
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
