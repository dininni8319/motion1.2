import { useState, useReducer } from 'react';
import LeftContainer from '../../shared/components/LeftContainer';
import FormLogin from '../components/FormAuth';
import styled from 'styled-components';
import { useHttpClient } from "../../shared/hooks/http-hook"
import { inputReducer } from "../../shared/reducers/inputReducer";

export const AuthLayout = styled.section`
  display: flex;
`;

const initialState = {
  value: "",
  isValid: false
};

const url = process.env.REACT_APP_EXPRESS_API;

const Signin = () => {
  
  const [ inputState, dispatch ] = useReducer(inputReducer, initialState);

  console.log(inputState, 'INPUTSTATE');

  const login = {
    email: "s.dininni@yahoo.com",
    password: "12345678"
  };
  
  const {
    loading,
    error,
    sendRequest,
    clearError,
  } = useHttpClient();
  
  const loginHandler = async event => {
    event.preventDefault();
    
      try {
        const response = await sendRequest(
          url,
          "POST", 
          JSON.stringify(login),
          {
            "Content-Type": "application/json"
          }
        );
        console.log('====================================');
        console.log(response);
        console.log('====================================');
      } catch (err) {  
      } 
  };

  return ( 
    <AuthLayout>
      <LeftContainer />
      <FormLogin loginHandler={loginHandler} />
    </AuthLayout>
  );
}
 
export default Signin;