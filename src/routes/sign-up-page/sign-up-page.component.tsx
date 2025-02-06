import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";

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
  form: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(initialFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const [errors, setErrors] = useState(initialErrors);
  const navigate = useNavigate();

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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateFields()) return;

    try {
      const userCredential = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      if (!userCredential || !userCredential.user) {
        throw new Error("User creation failed");
      }
      const { user } = userCredential;

      await createUserDocumentFromAuth(user, { displayName });

      resetFormFields();
      navigate("/");
    } catch (error) {
      if (error instanceof FirebaseError) {
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
      } else {
        console.log("An unknown error occurred:", error);
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });

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
