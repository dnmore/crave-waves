import { useNavigate } from "react-router-dom";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import { SignInGoogleContainer, GoogleButton } from "./google-sign-in.styles";

const SignInGoogle = () => {
  const navigate = useNavigate();
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
    navigate("/");
  };

  return (
    <SignInGoogleContainer>
      <GoogleButton onClick={logGoogleUser}>Sign in with Google</GoogleButton>
    </SignInGoogleContainer>
  );
};

export default SignInGoogle;
