import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <SignIn routing="path" path="/sign-in" />;
}
