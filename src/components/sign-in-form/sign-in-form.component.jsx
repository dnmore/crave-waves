import { useState } from "react";
[REDACTED]

import FormInput from "../../components/form-input/form-input.component";

import "./sign-in-form.styles.scss";

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
    <div className="signin-form-container">
      <h2>Sign in with your e-mail and password</h2>
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

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInForm;
