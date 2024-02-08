import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import { SignInGoogleContainer, GoogleButton } from "./google-sign-in.styles";

const SignInGoogle = () => {
  useEffect(() => {
    async function fetchData() {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
        console.log(userDocRef);
      }
    }

    fetchData();
  }, []);

  return (
    <SignInGoogleContainer>
      <GoogleButton onClick={signInWithGoogleRedirect}>
        Sign in with Google
      </GoogleButton>
    </SignInGoogleContainer>
  );
};

export default SignInGoogle;
