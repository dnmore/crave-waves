import SignInGoogle from "../../components/google-sign-in/google-sign-in.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import { SignInContainer } from "./sign-in-page.styles";

const SignInPage = () => {
  return (
    <SignInContainer>
      <SignInForm />
      <SignInGoogle />
    </SignInContainer>
  );
};

export default SignInPage;
