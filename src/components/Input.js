import React from "react";

const Input = React.memo((props) => {
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleChange = (e) => {
    console.log(e.target.value.trim().length)
    console.log(e.target.value.trim().length < 2 )
    props.onChange(e)
    if(e.target.value.trim().length < 2 && e.target.validationMessage === ''){
      setErrorMessage('Нужно как минимум 2 символа');
    }
    else{
      setErrorMessage(e.target.validationMessage);
    }
  }

  React.useEffect(() => {
    if(!props.isOpen) setErrorMessage('');
  },[props.isOpen])
  return (
    <>
      <input
        id={`${props.name}-input`}
        type={props.type}
        className={`popup__form-input popup__form-input_field_${props.name}`}
        name={props.name}
        placeholder={props.placeholder}
        minLength={props.minLength}
        maxLength={props.maxLength}
        required
        autoComplete="off"
        value={props.value}
        onChange={handleChange}
        onPaste={handleChange}
        contentEditable={true}
      />
      <span className={`${props.name}-input-error popup__form-error popup__form-error_active`}>
        {errorMessage}
      </span>
    </>
  );
})

export default Input;
