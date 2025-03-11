import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { Redirect, Stack, useRouter, } from "expo-router";


const clerk = require("../clerk/clerk").default;


const AuthRedirect = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();

  if (!isLoaded) {
    return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}><Text>Loading...</Text></View>;
  }

  if (isSignedIn) {
    return <Redirect href="/home" />;
  }

  return null;
};

export default function RootLayout() {
  return (
    <ClerkProvider clerk={clerk}>
      <AuthRedirect />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="hero" options={{ headerShown: false }} />
        <Stack.Screen name="carousel/next" options={{ headerShown: false }} />
        <Stack.Screen name="carousel/Next2" options={{ headerShown: false }} />
        <Stack.Screen name="auth/login" options={{ headerShown: true, title: "Log In" }} />
        <Stack.Screen name="auth/signup" options={{ headerShown: true, title: "Sign Up" }} />
        <Stack.Screen name="auth/verify" options={{ headerShown: true, title: "Verify Email" }} />
        <Stack.Screen name="auth/forgot-password" options={{ headerShown: true, title: "Forgot Password" }} />
        <Stack.Screen name="auth/protectedroute" options={{ headerShown: false}} />
        <Stack.Screen name="home" options={{ headerShown: false }} />
      </Stack>
    </ClerkProvider>
  );
}