import { validate } from '../util/validators';

export const inputReducer = (state, action) => {
  switch (action.type) {
    case "ON_CHANGE":
      
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
      }

    default:
      return state;
  }
};