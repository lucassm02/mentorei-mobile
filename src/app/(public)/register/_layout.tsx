import { Stack } from "expo-router";

const RegisterNavigation = () => {
  return (
    <>
      <Stack initialRouteName="step-one">
        <Stack.Screen name="step-one" options={{ headerShown: false }} />
        <Stack.Screen name="step-two" options={{ headerShown: false }} />
        <Stack.Screen name="step-tree" options={{ headerShown: false }} />
        <Stack.Screen name="step-four" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default RegisterNavigation;
