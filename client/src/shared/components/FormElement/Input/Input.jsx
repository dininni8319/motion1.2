import { useEffect, useReducer } from 'react';
import { FormControl, IconWrapper, AuthIcons } from '../../../style/globalWrappers';
import { AuthInput } from "./InputStyle";
import { inputReducer } from "../../../reducers/inputReducer";

const Input = (props) => {
 const {
    id,
    type,
    placeHolder,
    label,
    inputElement,
    rows,
    icon,
    errorText,
    onInput
  } = props;

  const initialState = {
    value: props.initialValue || "",
    isTouched: false, 
    isValid: props.initialValid || false 
  };

  const [ inputState, dispatch ] = useReducer(inputReducer, initialState);

  const changeHandler = event => {
    dispatch({
      type: "ON_CHANGE",
      val: event.target.value,
      validators: props.validators    
    })
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH"
    })
  }
  useEffect(() => {
     onInput(id, inputState.value, inputState.isValid);
  }, [id, inputState.value, inputState.isValid]);
  
  const element = inputElement === "input" ? (
    <AuthInput
      formInvalid={!inputState.value && inputState.isTouched}
      id={id}
      type={type}
      placeholder={placeHolder}
      onChange={changeHandler}
      value={inputState?.value}
      onBlur={touchHandler}
    />
  ) : (
    <textarea
      id={id}
      row={rows || 3}    
      placeholder={placeHolder}
      onChange={changeHandler}
      value={inputState?.value}
      onBlur={touchHandler}
    />
  );
  return ( 
    <FormControl>
      <IconWrapper>
        <AuthIcons src={icon} />
        <label htmlFor={id}>{label}</label>
      </IconWrapper>
      {element}
      {!inputState.isValid && <p>{errorText}</p>}
    </FormControl>
   );
}
 
export default Input;