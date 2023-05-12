import { useState, useContext } from 'react';
import LeftContainer from '../../shared/components/LeftContainer';
import FormSignUp from '../components/FormSignUp';
import styled from 'styled-components';
import { useHttpClient } from "../../shared/hooks/http-hook"
import { useForm } from "../../shared/hooks/form-hook";
import { AuthContext } from "../../context/AuthContext";

export const AuthLayout = styled.section`
  display: flex;
`;

const url = process.env.REACT_APP_EXPRESS_API;

const Signup = () => {

  const { user, login } = useContext(AuthContext)
  
  const [ formState, inputHandler, setFormData ] = useForm({
    email: {
      value: "",
      isValid: false,
    },
  }, false)
  
  const {
    loading,
    error,
    sendRequest,
    clearError,
  } = useHttpClient();
  
  const signupHandler = async event => {
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

        login(
          response.userName.first_name,
          response.userName.last_name,
          response.token
        )
      } catch (err) {  
      } 
  };

  return ( 
    <AuthLayout>
      <LeftContainer/>
      <FormSignUp 
         signupHandler={signupHandler}
         inputHandler={inputHandler}
         loading={loading}
         formState={formState}
      />
    </AuthLayout>
  );
}
 
export default Signup;