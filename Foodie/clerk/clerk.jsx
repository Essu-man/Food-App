
import { ClerkProvider } from "@clerk/clerk-expo";

const publishableKey = "pk_test_YnVyc3RpbmctbWFybW90LTQ3LmNsZXJrLmFjY291bnRzLmRldiQ";

export default function ClerkConfig({ children }) {
  return (
    <ClerkProvider publishableKey={publishableKey}>
      {children}
    </ClerkProvider>
  );
}