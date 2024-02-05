import { useEffect} from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";


import './google-sign-in.styles.scss'

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
    <div className="signin-google-container">
      <button onClick={signInWithGoogleRedirect}>Sign in with Google</button>
    </div>
  );
};

export default SignInGoogle;
