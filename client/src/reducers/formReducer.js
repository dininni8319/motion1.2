
// the formReducer,it handles the overall state of the form
export const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
     let formIsValid = true;

     for (const inputId in state.inputs) {
       if (!state.inputs[inputId]) {
          continue;
       }
        // input change
       if (inputId === action.inputId) {
         formIsValid = formIsValid && action.isValid; // looping through the object and checking if we are updating the obj with input change 
       } else { // here get the input validity of the inputs not been updated
        // not updated from the current running action 
        formIsValid = formIsValid && state.inputs[inputId].isValid
       }
     };

     return {
       ...state,
       inputs: {
         ...state.inputs,
          // this make sure that we update only on input not update the others
         [action.inputId]: {value: action.value, isValid: action.isValid}
       }, 
       isValid: formIsValid
     };
    case "SET_DATA": 
      return {
        inputs: action.inputs,
        isValid: action.formIsValid
      }
      
    default:
     return state;
  };
};