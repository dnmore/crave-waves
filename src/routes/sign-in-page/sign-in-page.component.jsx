import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import FormInput from "../../components/form-input/form-input.component";

import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";
import SignInGoogle from "../../components/google-sign-in/google-sign-in.component";

import { SignInContainer } from "./sign-in-page.styles";

const initialFormFields = {
  email: "",
  password: "",
};

const initialErrors = {
  email: "",
  password: "",
};

const SignInPage = () => {
  const [formFields, setFormFields] = useState(initialFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();
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

    if (!email) newErrors.email = "Email is required";
    else if (!password) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFields()) return;

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
      navigate("/");
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "incorrect email or password",
          password: "incorrect email or password",
        }));
      } else {
        console.log(error);
      }
    }
  };

  const handleChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  return (
    <SignInContainer>
      <h3>Already have an account?</h3>
      <p>Sign in with your email and password</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          onChange={handleChangeHandler}
          name="email"
          value={email}
          animate={errors.email ? "error" : "valid"}
          variants={variants}
          transition={{ type: "spring", bounce: 0.75, duration: 0.8 }}
        />
        {errors.email && <span>{errors.email}</span>}

        <FormInput
          label="Password"
          type="password"
          onChange={handleChangeHandler}
          name="password"
          value={password}
          animate={errors.password ? "error" : "valid"}
          variants={variants}
          transition={{ type: "spring", bounce: 0.75, duration: 0.8 }}
        />
        {errors.password && <span>{errors.password}</span>}

        <Button buttonType={BUTTON_TYPE_CLASSES.primary} type="submit">
          Sign In
        </Button>
        <p>OR</p>
      </form>
      <SignInGoogle />
    </SignInContainer>
  );
};

export default SignInPage;
