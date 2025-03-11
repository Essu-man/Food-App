import { useAuth } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";

const ProtectedRoute = ({ children }) => {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.replace('auth/login');
    }
  }, [isLoaded, isSignedIn]);

  if (!isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#6c63ff" />
        <Text style={{ marginTop: 10 }}>Loading...</Text>
      </View>
    );
  }

  if (!isSignedIn) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;