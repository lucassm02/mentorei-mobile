import { gql } from "@apollo/client";

export const CREATE_USER = gql`
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
