import { useEffect, useReducer } from 'react';
import { inputReducer } from '../../../reducers/inputReducer';
import { FormControl, IconWrapper, AuthIcons } from '../../../style/globalWrappers';
import { AuthInput } from "./InputStyle";

const Input = ({
  id,
  type,
  placeHolder,
  label,
  inputElement,
  rows,
  icon,
  errorText,
}) => {

  const initialState = {
    // value:  initialValue || "",
     value: "",
    // isValid: initialValid || false   
    isValid:  true  
  };
  const [ inputState, dispatch ] = useReducer(inputReducer, initialState);

  // console.log('====================================');
  // console.log(inputState);
  // console.log('====================================');
  const changeHandler = event => {
    dispatch({
      type: "ON_CHANGE",
      val: event.target.value,
      validators: true      
    })
  };

  const element = inputElement === "input" ? (
    <AuthInput
      id={id}
      type={type}
      placeholder={placeHolder}
      onChange={changeHandler}
      value={inputState.value}
    />
  ) : (
    <textarea
      id={id}
      row={rows || 3}    
      placeholder={placeHolder}
      onChange={changeHandler}
      value={inputState.value}
    />
  )

  return ( 
    <FormControl>
      <IconWrapper>
        <AuthIcons src={icon} />
        <label htmlFor={id}>{label}</label>
      </IconWrapper>
      {element}
      {!inputState && <p>{errorText}</p>}
    </FormControl>
   );
}
 
export default Input;