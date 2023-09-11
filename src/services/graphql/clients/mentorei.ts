import { ApolloClient, InMemoryCache } from "@apollo/client";

export const mentoreiApolloClient = new ApolloClient({
  uri: "https://mentorei.app/graphql",
  cache: new InMemoryCache(),
});
