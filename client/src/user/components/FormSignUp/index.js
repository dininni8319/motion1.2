import Input from '../../../shared/components/FormElement/Input/Input';
import LoadingSpinner from '../../../shared/components/UI/Loader'
import { 
  AuthButton, 
  FormWrapper, 
  SignUpMessage, 
  FormContainer, 
  TopLoginButton, 
  SingInTitle 
} from '../FormSignin/style';
import { TopTitleWrapper } from '../../../shared/style/globalWrappers';
import email from "../../../shared/assets/svgs/email.png";
import { VALIDATOR_EMAIL } from '../../../shared/util/validators';
import { Link } from 'react-router-dom';

const FormRegister = ({ signupHandler, inputHandler, loading, formState }) => {
  
  return ( 
    <FormContainer>
      <TopTitleWrapper>
         <SignUpMessage>You already have an occunt?</SignUpMessage>
         <TopLoginButton>
           <Link to="/auth/login">
             SIGN IN
           </Link>
         </TopLoginButton>
      </TopTitleWrapper>
      <FormWrapper onSubmit={signupHandler}>
          { loading && <LoadingSpinner asOverlay />}
          <SingInTitle>Sign Up</SingInTitle>
          <Input
            id="email"
            type="email"
            label="Email"
            inputElement="input"
            email={email}
            validators={[VALIDATOR_EMAIL()]}
            onInput={inputHandler}
            errorText="Email required"
          />
       
          <AuthButton onClick={signupHandler} formIsValid={!formState?.isValid}>SEND</AuthButton>
      </FormWrapper>
    </FormContainer>
   );
}
 
export default FormRegister;