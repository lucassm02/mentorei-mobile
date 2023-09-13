import { mentoreiApolloClient } from "@/services";
import { UserContextProvider } from "@/storages/context";
import { ApolloProvider } from "@apollo/client";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Slot, SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontLoadingHasFinished, error] = useFonts({
    SpaceMono: require("@assets/fonts/SpaceMono-Regular.ttf"),
    HammersmithOne: require("@assets/fonts/HammersmithOne-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  if (!fontLoadingHasFinished) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <UserContextProvider>
        <ApolloProvider client={mentoreiApolloClient}>
          <Slot screenOptions={{ headerShown: false }} />
        </ApolloProvider>
      </UserContextProvider>
    </>
  );
}
