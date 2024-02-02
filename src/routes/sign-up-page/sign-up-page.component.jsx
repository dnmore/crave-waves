import { useState } from "react";
import {
[REDACTED]
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../../components/form-input/form-input.component";
import './sign-up-page.styles.scss'

const initialFormFields = {
  displayName: "",
  email: "",
  password: "",
[REDACTED]
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(initialFormFields);
[REDACTED]

  console.log(formFields);

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
    <div className="signup-container">
      <h1>Sign Up</h1>
      <p>Sign up with your e-mail and password</p>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
