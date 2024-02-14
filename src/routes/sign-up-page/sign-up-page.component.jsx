import { useState } from "react";
import {
[REDACTED]
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../../components/form-input/form-input.component";

import { SignupContainer, SignupButton } from "./sign-up-page.styles";

const initialFormFields = {
  displayName: "",
  email: "",
  password: "",
[REDACTED]
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(initialFormFields);
[REDACTED]

  const resetFormFields = () => {
    setFormFields(initialFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

[REDACTED]
      alert("passwords not matching!");
      return;
    }

    try {
[REDACTED]
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignupContainer>
     <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChangeHandler}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
[REDACTED]
          type="password"
          required
          onChange={handleChangeHandler}
[REDACTED]
[REDACTED]
        />
        <SignupButton type="submit">Sign Up</SignupButton>
      </form>
    </SignupContainer>
  );
};

export default SignUp;
