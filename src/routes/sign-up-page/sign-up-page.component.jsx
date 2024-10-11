import { useState } from "react";
import {
[REDACTED]
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../../components/form-input/form-input.component";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";

import {
  SignupContainer,
  FormControl,
  InputWrapper,
} from "./sign-up-page.styles";

const initialFormFields = {
  displayName: "",
  email: "",
  password: "",
[REDACTED]
};

const initialErrors = {
  displayName: "",
  email: "",
  password: "",
[REDACTED]
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(initialFormFields);
[REDACTED]
  const [errors, setErrors] = useState(initialErrors);

  const variants = {
    error: {
      borderColor: "#E94A8A",
      x: [-10, 0, 10, 0],
    },
    valid: { borderColor: "#282925" },
  };

  const resetFormFields = () => {
    setFormFields(initialFormFields);
    setErrors(initialErrors);
  };

  const validateFields = () => {
    const newErrors = { ...initialErrors };

    if (!displayName) newErrors.displayName = "Display name is required";
[REDACTED]
[REDACTED]
    else if (password.length < 8)
[REDACTED]
[REDACTED]
[REDACTED]
[REDACTED]
[REDACTED]

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFields()) return; // Don't proceed if validation fails

    try {
[REDACTED]
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Cannot create user, email already in use",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          form: "An error occurred, please try again later",
        }));
        console.log("User creation encountered an error", error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });

    // Clear error when user starts typing in a specific field
    setErrors({ ...errors, [name]: "" });
  };

  return (
    <SignupContainer>
      <h3>Don't have an account?</h3>
      <p>Sign up with your email and password</p>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <InputWrapper>
            <FormInput
              label="Display Name"
              type="text"
              onChange={handleChange}
              name="displayName"
              value={displayName}
              animate={errors.displayName ? "error" : "valid"}
              variants={variants}
              transition={{ type: "spring", bounce: 0.75, duration: 0.8 }}
            />
            {errors.displayName && <span>{errors.displayName}</span>}
          </InputWrapper>
          <InputWrapper>
            <FormInput
[REDACTED]
              type="email"
              onChange={handleChange}
              name="email"
              value={email}
              animate={errors.email ? "error" : "valid"}
              variants={variants}
              transition={{ type: "spring", bounce: 0.75, duration: 0.8 }}
            />
            {errors.email && <span>{errors.email}</span>}
          </InputWrapper>
        </FormControl>
        <FormControl>
          <InputWrapper>
            <FormInput
[REDACTED]
              type="password"
              onChange={handleChange}
              name="password"
              value={password}
              animate={errors.password ? "error" : "valid"}
              variants={variants}
              transition={{ type: "spring", bounce: 0.75, duration: 0.8 }}
            />
            {errors.password && <span>{errors.password}</span>}
          </InputWrapper>
          <InputWrapper>
            <FormInput
[REDACTED]
              type="password"
              onChange={handleChange}
[REDACTED]
[REDACTED]
[REDACTED]
              variants={variants}
              transition={{ type: "spring", bounce: 0.75, duration: 0.8 }}
            />
[REDACTED]
          </InputWrapper>
        </FormControl>

        <Button buttonType={BUTTON_TYPE_CLASSES.primary} type="submit">
          Sign Up
        </Button>
        {errors.form && <p>{errors.form}</p>}
      </form>
    </SignupContainer>
  );
};

export default SignUp;
