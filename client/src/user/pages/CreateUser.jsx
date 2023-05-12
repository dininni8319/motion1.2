import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftContainer from '../../shared/components/LeftContainer';
import FormSignUp from '../components/FormSignUp';
import { useHttpClient } from "../../hooks/http-hook"
import { useForm } from "../../hooks/form-hook";
import { AuthContext } from "../../context/AuthContext";
import ErrorModal from '../components/Modal/ErrorModal';
import { url } from "../../shared/util/urls";
import { AuthLayout } from "../../shared/style/globalWrappers"

const CreateUser = () => {
  const navigate = useNavigate();
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
      // navigate("/auth/success")
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
 
export default CreateUser;