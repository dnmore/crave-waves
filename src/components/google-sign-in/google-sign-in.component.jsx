import { useNavigate } from "react-router-dom";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const SignInGoogle = () => {
  const navigate = useNavigate();
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
    navigate("/");
  };

  return (
    <Button buttonType={BUTTON_TYPE_CLASSES.google} onClick={logGoogleUser}>
      Sign in with Google
    </Button>
  );
};

export default SignInGoogle;
