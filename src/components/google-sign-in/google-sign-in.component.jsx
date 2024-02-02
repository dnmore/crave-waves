import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";


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
    <div>
      <h1>Sign In with Google </h1>
      

      <button onClick={signInWithGoogleRedirect}>Sign in with Google</button>
    </div>
  );
};

export default SignInGoogle;
