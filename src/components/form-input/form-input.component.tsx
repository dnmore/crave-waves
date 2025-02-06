import { InputHTMLAttributes } from "react";
import { InputContainer, InputLabel, Input } from "./form-input.styles";

type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput = ({
  label,

  ...otherProps
}: FormInputProps) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <Input {...otherProps} />
    </InputContainer>
  );
};

export default FormInput;
