import { InputContainer, InputLabel, Input } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <Input whileFocus={{ scale: 1.05 }} {...otherProps} />
    </InputContainer>
  );
};

export default FormInput;
