import { useState } from "react";
[REDACTED]

import FormInput from "../../components/form-input/form-input.component";

import { SignInFormContainer, SignInButton } from "./sign-in-form.styles";

const initialFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(initialFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(initialFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
[REDACTED]

      resetFormFields();
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
    <SignInFormContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
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

        <SignInButton type="submit">Sign In</SignInButton>
      </form>
    </SignInFormContainer>
  );
};

export default SignInForm;
