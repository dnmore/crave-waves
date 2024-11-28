import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  createAuthUserWithEmailAndPassword,
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
  confirmPassword: "",
};

const initialErrors = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(initialFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const [errors, setErrors] = useState(initialErrors);
  const navigate = useNavigate();

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
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 8)
      newErrors.password = "Password must be minimum 8 characters";
    if (!confirmPassword)
      newErrors.confirmPassword = "Please confirm your password";
    else if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFields()) return; // Don't proceed if validation fails

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });

      resetFormFields();
      navigate("/");
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
              label="Email"
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
              label="Password"
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
              label="Confirm Password"
              type="password"
              onChange={handleChange}
              name="confirmPassword"
              value={confirmPassword}
              animate={errors.confirmPassword ? "error" : "valid"}
              variants={variants}
              transition={{ type: "spring", bounce: 0.75, duration: 0.8 }}
            />
            {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
          </InputWrapper>
        </FormControl>

        <Button buttonType={BUTTON_TYPE_CLASSES.primary} type="submit">
          Sign Up
        </Button>
        {errors.form && <span>{errors.form}</span>}
      </form>
    </SignupContainer>
  );
};

export default SignUp;
