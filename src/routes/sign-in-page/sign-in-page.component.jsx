import SignInGoogle from "../../components/google-sign-in/google-sign-in.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import './sign-in-page.styles.scss'

const SignInPage = () => {
  return (
    <div className="signin-page-container">
      <SignInForm />
      <SignInGoogle />
    </div>
  );
};

export default SignInPage;
