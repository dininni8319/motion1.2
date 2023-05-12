import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftContainer from '../../shared/components/LeftContainer';
import FormSignUp from '../components/FormSignUp';
import FormSuccess from "../components/FormSuccess"
import styled from 'styled-components';
import { useHttpClient } from "../../hooks/http-hook"
import { useForm } from "../../hooks/form-hook";
import { AuthContext } from "../../context/AuthContext";
import ErrorModal from '../components/Modal/ErrorModal';
import { AuthLayout } from "../../shared/style/globalWrappers"
import { url } from "../../shared/util/urls";

const Signup = () => {
  const navigate = useNavigate();
  
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
      let response;
      try {
        response = await sendRequest(
          `${url}/email/verify`,
          "POST", 
          JSON.stringify({
            email: formState.inputs.email.value,
          }),
          {
            "Content-Type": "application/json"
          }
        );
       console.log(response, "RESPONSE FROM THE EMAIL");

      } catch (err) { 
      }
      if (response) {
        const user = localStorage.setItem("email", formState.inputs.email.value);
        navigate("/auth/success");
      }
  };

  return ( 
    <AuthLayout>
      <ErrorModal onClear={clearError} error={error} />
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