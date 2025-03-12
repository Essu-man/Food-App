import * as Clerk from "@clerk/clerk-expo";

const clerk = Clerk.initialize({
  publishableKey: "pk_test_YnVyc3RpbmctbWFybW90LTQ3LmNsZXJrLmFjY291bnRzLmRldiQ",
  clerkJSUrl: "bursting-marmot-47.clerk.accounts.dev",
  clerkJSVersion: "latest",
});

export default clerk;