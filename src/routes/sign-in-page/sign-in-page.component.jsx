import { useState } from "react";
import { useNavigate } from "react-router-dom";
[REDACTED]

import FormInput from "../../components/form-input/form-input.component";

import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";
import SignInGoogle from "../../components/google-sign-in/google-sign-in.component";

import { SignInContainer, ActionsButtons } from "./sign-in-page.styles";

const initialFormFields = {
  email: "",
  password: "",
};

const SignInPage = () => {
  const [formFields, setFormFields] = useState(initialFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(initialFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
[REDACTED]

      resetFormFields();
      navigate("/");
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h3>Already have an account?</h3>
      <p>Sign in with your email and password</p>
      <form onSubmit={handleSubmit}>
        <FormInput
[REDACTED]
          type="email"
          required
          onChange={handleChangeHandler}
          name="email"
          value={email}
        />

        <FormInput
[REDACTED]
          type="password"
          required
          onChange={handleChangeHandler}
          name="password"
          value={password}
        />
        <ActionsButtons>
          <Button buttonType={BUTTON_TYPE_CLASSES.primary} type="submit">
            Sign In
          </Button>
          <p>OR</p>
          <SignInGoogle />
        </ActionsButtons>
      </form>
    </SignInContainer>
  );
};

export default SignInPage;
