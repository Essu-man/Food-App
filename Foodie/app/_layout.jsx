import { ClerkProvider } from "@clerk/clerk-expo";
import { Stack } from "expo-router";

export default function RootLayout() {
  const publishableKey = "pk_test_YnVyc3RpbmctbWFybW90LTQ3LmNsZXJrLmFjY291bnRzLmRldiQ";

  return (
    <ClerkProvider publishableKey={publishableKey}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="hero" options={{ headerShown: false }} />
        <Stack.Screen name="carousel/next" options={{ headerShown: false }} />
        <Stack.Screen name="carousel/Next2" options={{ headerShown: false }} />
        <Stack.Screen name="auth/protectedroute" options={{ headerShown: false }} />
        <Stack.Screen name="auth/login" options={{ headerShown: true, title: "Log In" }} />
        <Stack.Screen name="auth/signup" options={{ headerShown: true, title: "Sign Up" }} />
        <Stack.Screen name="auth/verify" options={{ headerShown: true, title: "Verify Email" }} />
        <Stack.Screen name="home" options={{ headerShown: false }} />
      </Stack>
    </ClerkProvider>
  );
}
