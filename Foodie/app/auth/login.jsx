import { useSignIn } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const LoginScreen = () => {
  const router = useRouter();
  const { isLoaded, signIn, setActive } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!isLoaded) return;

    if (!email.trim()) {
      Alert.alert("Error", "Email is required");
      return;
    }
    if (!password) {
      Alert.alert("Error", "Password is required");
      return;
    }

    try {
      setLoading(true);
      const signInAttempt = await signIn.create({
        identifier: email,
        password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/home"); // Redirect to home after successful login
      } else {
        Alert.alert("Error", "Login failed. Please try again.");
      }
    } catch (err) {
      Alert.alert(
        "Error",
        err.errors?.[0]?.message || "Invalid email or password."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = () => {
    router.push("auth/signup");
  };

  if (!isLoaded) {
    return (
      <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require("../assets/login_undraw.png")}
          style={styles.headerImage}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardAvoidingView}
        >
          <View style={styles.formContainer}>
            <View style={styles.header}>
              <Text style={styles.title}>Log In</Text>
              <Text style={styles.subtitle}>Welcome back!</Text>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>EMAIL</Text>
              <TextInput
                style={styles.input}
                placeholder="example@gmail.com"
                placeholderTextColor="#ccc"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                editable={!loading}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>PASSWORD</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="••••••••••"
                  placeholderTextColor="#ccc"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  editable={!loading}
                />
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={() => setShowPassword(!showPassword)}
                  disabled={loading}
                >
                  <Ionicons
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                    size={24}
                    color="#999"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={[styles.loginButton, loading && styles.disabledButton]}
              onPress={handleLogin}
              disabled={loading}
            >
              <Text style={styles.loginButtonText}>
                {loading ? "LOGGING IN..." : "LOG IN"}
              </Text>
            </TouchableOpacity>

            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Don't have an account? </Text>
              <TouchableOpacity onPress={handleSignup} disabled={loading}>
                <Text style={styles.signupLink}>SIGN UP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerImage: {
    height: 200,
    width: "100%",
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
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
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f7fa",
    borderRadius: 8,
  },
  passwordInput: {
    flex: 1,
    padding: 15,
    fontSize: 16,
    color: "#333",
  },
  eyeIcon: {
    padding: 10,
  },
  loginButton: {
    backgroundColor: "#6c63ff",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginBottom: 16,
  },
  disabledButton: {
    backgroundColor: "#a8a5d6",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
  },
  signupText: {
    fontSize: 14,
    color: "#666",
  },
  signupLink: {
    fontSize: 14,
    color: "#6c63ff",
    fontWeight: "bold",
  },
});

export default LoginScreen;