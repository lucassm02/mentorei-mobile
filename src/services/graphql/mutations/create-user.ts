import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation (
    $name: String!
    $email: String!
    $cpf: String!
    $password: String!
  ) {
    user: createUser(
      name: $name
      email: $email
      cpf: $cpf
      password: $password
    ) {
      id
      name
      token
    }
  }
`;
