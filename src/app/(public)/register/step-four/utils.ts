import * as yup from "yup";

export const formSchema = yup.object({
  experience: yup.string().required("Sua descrição é obrigatória."),
  linkedIn: yup.string(),
  occupation: yup.string(),
});
