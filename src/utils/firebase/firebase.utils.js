import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
[REDACTED]
[REDACTED]
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYNF29Fu802S09vDTy7PFQJlR1ijTURRU",
  authDomain: "crave-waves-db.firebaseapp.com",
  projectId: "crave-waves-db",
  storageBucket: "crave-waves-db.appspot.com",
  messagingSenderId: "681937636175",
  appId: "1:681937636175:web:10a856766a9de16cf8933a",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(app);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return userDocRef;
};

[REDACTED]
  if (!email || !password) return;

[REDACTED]
};

[REDACTED]
  if (!email || !password) return;

[REDACTED]
};
