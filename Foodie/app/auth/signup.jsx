import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import React, { useState } from 'react';
import {
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
  View
} from 'react-native';

const SignupScreen = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSignup = () => {
    console.log('Sign up with:', { username, email, password, termsAccepted });
    router.push('home');
  };

  const handleGoogleSignup = () => {
    console.log('Sign up with Google');
    // Implement Google authentication logic here
    router.push('home');
  };

  const handleLogin = () => {
    router.push('auth/login');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require('../assets/signup.png')}
          style={styles.headerImage}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardAvoidingView}
        >
          <View style={styles.formContainer}>
            <View style={styles.header}>
              <Text style={styles.title}>Sign Up</Text>
              <Text style={styles.subtitle}>Create a new account</Text>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>USERNAME</Text>
              <TextInput
                style={styles.input}
                placeholder="johndoe123"
                placeholderTextColor="#ccc"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
              />
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
                />
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Ionicons
                    name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                    size={24}
                    color="#999"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>CONFIRM PASSWORD</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="••••••••••"
                  placeholderTextColor="#ccc"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={!showConfirmPassword}
                />
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <Ionicons
                    name={showConfirmPassword ? 'eye-off-outline' : 'eye-outline'}
                    size={24}
                    color="#999"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.termsContainer}>
              <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={() => setTermsAccepted(!termsAccepted)}
              >
                <View style={[
                  styles.checkbox,
                  termsAccepted && styles.checkboxChecked
                ]}>
                  {termsAccepted && (
                    <Ionicons name="checkmark" size={16} color="#fff" />
                  )}
                </View>
                <Text style={styles.termsText}>
                  I agree to the <Text style={styles.termsLink}>Terms of Service</Text> and <Text style={styles.termsLink}>Privacy Policy</Text>
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.signupButton}
              onPress={handleSignup}
            >
              <Text style={styles.signupButtonText}>SIGN UP</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>OR</Text>

            <TouchableOpacity
              style={styles.googleButton}
              onPress={handleGoogleSignup}
            >
              <Ionicons name="logo-google" size={20} color="#fff" style={styles.googleIcon} />
              <Text style={styles.googleButtonText}>SIGN UP WITH GOOGLE</Text>
            </TouchableOpacity>

            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Already have an account? </Text>
              <TouchableOpacity onPress={handleLogin}>
                <Text style={styles.loginLink}>LOG IN</Text>
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
    backgroundColor: '#fff',
  },
  headerImage: {
    height: 200,
    width: '100%',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f5f7fa',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    color: '#333',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f7fa',
    borderRadius: 8,
  },
  passwordInput: {
    flex: 1,
    padding: 15,
    fontSize: 16,
    color: '#333',
  },
  eyeIcon: {
    padding: 10,
  },
  termsContainer: {
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  checkboxChecked: {
    backgroundColor: '#6c63ff',
    borderColor: '#6c63ff',
  },
  termsText: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  termsLink: {
    color: '#6c63ff',
    fontWeight: '500',
  },
  signupButton: {
    backgroundColor: '#6c63ff',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 16,
    fontWeight: '500',
  },
  googleButton: {
    backgroundColor: '#EA4335',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  googleIcon: {
    marginRight: 8,
  },
  googleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  loginText: {
    fontSize: 14,
    color: '#666',
  },
  loginLink: {
    fontSize: 14,
    color: '#6c63ff',
    fontWeight: 'bold',
  },
});

export default SignupScreen;