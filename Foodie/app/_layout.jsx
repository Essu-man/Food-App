import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="hero" />
      <Stack.Screen name="carousel/next" />
      <Stack.Screen name="carousel/Next2" />
      <Stack.Screen name="auth/login" />
      <Stack.Screen name="auth/signup" />
      <Stack.Screen name="auth/forgotpassword" />
    </Stack>
  );
}