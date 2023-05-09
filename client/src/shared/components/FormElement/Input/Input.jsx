import { useEffect, useReducer } from 'react';
import { inputReducer } from '../../../reducers/inputReducer';
import { FormControl } from '../../../style/globalWrappers';
import { AuthInput } from "./InputStyle";

const Input = ({
  id,
  type,
  placeHolder,
  label,
  inputElement,
  rows,
  errorText
}) => {

  const initialState = {
    // value:  initialValue || "",
     value: "",
    // isValid: initialValid || false   
    isValid:  false   
  };
  const [ inputState, dispatch ] = useReducer(inputReducer, initialState);

  const changeHandler = event => {};

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
      <label htmlFor={id}>{label}</label>
      {element}
      {!inputState && <p>{errorText}</p>}
    </FormControl>
   );
}
 
export default Input;