import Input from '../../../shared/components/FormElement/Input/Input';
import LoadingSpinner from '../../../shared/components/UI/Loader'
import { AuthButton, FormWrapper, SignUpMessage, FormContainer, TopLoginButton, SingInTitle } from './style';
import { TopTitleWrapper } from '../../../shared/style/globalWrappers';
import avatar from "../../../shared/assets/svgs/avatar.svg";
import password from "../../../shared/assets/svgs/password.svg";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../../shared/util/validators';
import { Link } from 'react-router-dom';

const FormLogin = ({ loginHandler, inputHandler, loading, formState }) => {
  
  return ( 
    <FormContainer>
      <TopTitleWrapper>
         <SignUpMessage>Do you have an account?</SignUpMessage>
         <TopLoginButton>
           <Link to="/auth/signup">
             SIGN UP
           </Link>
         </TopLoginButton>
      </TopTitleWrapper>
      <FormWrapper onSubmit={loginHandler}>
          { loading && <LoadingSpinner asOverlay />}
          <SingInTitle>Sign In</SingInTitle>
          <Input
            id="email"
            type="email"
            label="Email"
            inputElement="input"
            icon={avatar}
            validators={[VALIDATOR_EMAIL()]}
            onInput={inputHandler}
          />
          <Input
            id="password"
            type="password"
            label="Password"
            inputElement="input"
            icon={password}
            validators={[VALIDATOR_MINLENGTH(8)]}
            onInput={inputHandler}
          />
          <AuthButton onClick={loginHandler} formIsValid={!formState.isValid} disabled={!formState.isValid}>SIGN IN</AuthButton>
      </FormWrapper>
    </FormContainer>
   );
}
 
export default FormLogin;