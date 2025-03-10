import { useRouter } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SignupScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-gray-100 justify-center p-4">
      <Text className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Sign Up
      </Text>
      <TextInput
        className="bg-white p-4 rounded-lg mb-4 shadow-sm"
        placeholder="Full Name"
      />
      <TextInput
        className="bg-white p-4 rounded-lg mb-4 shadow-sm"
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        className="bg-white p-4 rounded-lg mb-6 shadow-sm"
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity className="bg-blue-500 p-4 rounded-lg">
        <Text className="text-white text-center font-bold">Sign Up</Text>
      </TouchableOpacity>
      <Text
        className="text-blue-500 text-center mt-4"
        onPress={() => router.push("/Sign-in")}
      >
        Already have an account? Login
      </Text>
    </View>
  );
}