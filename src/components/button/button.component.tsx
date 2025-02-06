import { ButtonHTMLAttributes, ElementType } from "react";
import {
  PrimaryButton,
  GoogleSignInButton,
  AccentButton,
  LoadingSpinner
} from "./button.styles";

export enum BUTTON_TYPE_CLASSES {
  primary = "primary",
  google = "google-sign-in",
  accent = "accent",
};

const BUTTON_COMPONENTS: Record<BUTTON_TYPE_CLASSES, ElementType> = {
  [BUTTON_TYPE_CLASSES.primary]: PrimaryButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.accent]: AccentButton,
}

export type ButtonProps ={
  buttonType?: BUTTON_TYPE_CLASSES
  isLoading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, buttonType= BUTTON_TYPE_CLASSES.primary, isLoading=false, ...otherProps } : ButtonProps) => {
  const CustomButton = BUTTON_COMPONENTS[buttonType] || PrimaryButton;
  return (
    <CustomButton whileTap={{ scale: 1.1 }} disabled={isLoading} {...otherProps}>
      {isLoading ? <LoadingSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
