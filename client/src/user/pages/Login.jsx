import { useState } from 'react';
import LeftContainer from '../../shared/components/LeftContainer';
import FormLogin from '../components/FormAuth';
import styled from 'styled-components';
import { useHttpClient } from "../../shared/hooks/http-hook"
import { useForm } from "../../shared/hooks/form-hook";

export const AuthLayout = styled.section`
  display: flex;
`;

const url = process.env.REACT_APP_EXPRESS_API;

const Signin = () => {

  const [ formState, inputHandler, setFormData ] = useForm({
    email: {
      value: "",
      isValid: false,
    },
    password: {
      value: "",
      isValid: false
    }
  }, false)
  
  const {
    loading,
    error,
    sendRequest,
    clearError,
  } = useHttpClient();
  
  console.log('====================================');
  console.log(loading);
  console.log('====================================');
  const loginHandler = async event => {
    event.preventDefault();
    
      try {
        const response = await sendRequest(
          url,
          "POST", 
          JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
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
      <FormLogin 
        loginHandler={loginHandler} 
        inputHandler={inputHandler}
        loading={loading}
      />
    </AuthLayout>
  );
}
 
export default Signin;