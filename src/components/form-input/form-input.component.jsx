import { InputContainer, InputLabel, Input } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <Input {...otherProps} />
    </InputContainer>
  );
};

export default FormInput;
