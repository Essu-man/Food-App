import { useSignUp } from "@clerk/clerk-expo";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function VerifyScreen() {
  const router = useRouter();
  const { email } = useLocalSearchParams();
  const { isLoaded, signUp, setActive } = useSignUp();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    if (!isLoaded) return;

    if (!code.trim()) {
      Alert.alert("Error", "Verification code is required");
      return;
    }

    try {
      setLoading(true);
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.replace("/home");
      } else {
        Alert.alert("Error", "Verification failed. Please try again.");
      }
    } catch (err) {
      Alert.alert(
        "Error",
        err.errors?.[0]?.message || "Invalid code. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    if (!isLoaded) return;

    try {
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      Alert.alert("Success", "A new verification code has been sent!");
    } catch (err) {
      Alert.alert("Error", "Failed to resend code. Please try again.");
    }
  };

  if (!isLoaded) {
    return (
      <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <View style={styles.formContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>Verify Email</Text>
            <Text style={styles.subtitle}>
              Enter the verification code sent to {email}
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>VERIFICATION CODE</Text>
            <TextInput
              style={styles.input}
              placeholder="123456"
              placeholderTextColor="#ccc"
              value={code}
              onChangeText={setCode}
              keyboardType="numeric"
              autoCapitalize="none"
              editable={!loading}
            />
          </View>

          <TouchableOpacity
            style={[styles.verifyButton, loading && styles.disabledButton]}
            onPress={handleVerify}
            disabled={loading}
          >
            <Text style={styles.verifyButtonText}>
              {loading ? "VERIFYING..." : "VERIFY"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleResendCode} disabled={loading}>
            <Text style={styles.resendLink}>Resend Code</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: "center",
  },
  formContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#f5f7fa",
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    color: "#333",
  },
  verifyButton: {
    backgroundColor: "#6c63ff",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginBottom: 16,
  },
  disabledButton: {
    backgroundColor: "#a8a5d6",
  },
  verifyButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  resendLink: {
    fontSize: 14,
    color: "#6c63ff",
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline",
  },
});