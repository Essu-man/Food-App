import { useRouter } from "expo-router";
import React from 'react';
import { Text, View } from 'react-native';
export default function signupScreen() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>signup Screen</Text>
    </View>
  );
}