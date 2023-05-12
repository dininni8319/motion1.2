import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftContainer from '../../shared/components/LeftContainer';
import FormLogin from '../components/FormSignin';
import styled from 'styled-components';
import { useHttpClient } from "../../shared/hooks/http-hook"
import { useForm } from "../../shared/hooks/form-hook";
import { AuthContext } from "../../context/AuthContext";
import ErrorModal from '../components/Modal/ErrorModal';

export const AuthLayout = styled.section`
  display: flex;
`;

const url = process.env.REACT_APP_EXPRESS_API;

const Signin = () => {

  const navigate = useNavigate();
  const { user, login } = useContext(AuthContext)
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
        login(
          response.userName.first_name,
          response.userName.last_name,
          response.token
        );
        navigate("/")
      } catch (err) {  
      } 
  };

  return ( 
    <AuthLayout>
      <ErrorModal onClear={clearError} error={error} />
      <LeftContainer />
      <FormLogin 
        loginHandler={loginHandler} 
        inputHandler={inputHandler}
        loading={loading}
        formState={formState}
      />
    </AuthLayout>
  );
}
 
export default Signin;