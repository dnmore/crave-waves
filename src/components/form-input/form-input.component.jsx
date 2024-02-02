import './form-input.styles.scss'

const FormInput = ({label, ...otherProps}) => {
  return (
    <div className='input-container'>
        <label>{label}</label>
      <input className='form-input'
        {...otherProps}
      />
    </div>
  );
};

export default FormInput
