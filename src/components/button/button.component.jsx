import {
  PrimaryButton,
  GoogleSignInButton,
  AccentButton,
  LoadingSpinner
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  primary: "primary",
  google: "google-sign-in",
  accent: "accent",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.primary]: PrimaryButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.accent]: AccentButton,
  }[buttonType]);

const Button = ({ children, buttonType, isLoading=false, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton whileTap={{ scale: 1.1 }} disabled={isLoading} {...otherProps}>
      {isLoading ? <LoadingSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
