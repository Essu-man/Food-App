import { ClerkProvider } from '@clerk/clerk-expo';
import * as SecureStore from 'expo-secure-store';

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};


export function ClerkProviderWithTokenCache({ children }) {
  return (
    <ClerkProvider
      publishableKey="pk_test_YnVyc3RpbmctbWFybW90LTQ3LmNsZXJrLmFjY291bnRzLmRldiQ"
      tokenCache={tokenCache}
    >
      {children}
    </ClerkProvider>
  );
}