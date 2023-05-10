import Input from '../../../shared/components/FormElement/Input/Input';
import LoadingSpinner from '../../../shared/components/UI/Loader'
import { AuthButton, FormWrapper, SignUpMessage, FormContainer, TopLoginButton, SingInTitle } from './style';
import { TopTitleWrapper } from '../../../shared/style/globalWrappers';
import avatar from "../../../shared/assets/svgs/avatar.svg";
import password from "../../../shared/assets/svgs/password.svg";
import { VALIDATOR_EMAIL, VALIDATOR_MIN } from '../../../shared/util/validators';

const FormLogin = ({ loginHandler, inputHandler, loading }) => {
  
  return ( 
    <FormContainer>
      <TopTitleWrapper>
         <SignUpMessage>Do you have an account?</SignUpMessage>
         <TopLoginButton>SIGN UP</TopLoginButton>
      </TopTitleWrapper>
      <FormWrapper onSubmit={loginHandler}>
          { loading && <LoadingSpinner asOverlay />}
          <SingInTitle>Sign In</SingInTitle>
          <Input
            id="email"
            type="email"
            // placeHolder=""
            label="Email"
            inputElement="input"
            icon={avatar}
            validators={[VALIDATOR_MIN(8)]}
            onInput={inputHandler}
          />
          <Input
            id="password"
            type="password"
            // placeHolder="Password"
            label="Password"
            inputElement="input"
            icon={password}
            validators={[VALIDATOR_EMAIL()]}
            onInput={inputHandler}
          />
          <AuthButton onClick={loginHandler} disabled={loading}>SIGN IN</AuthButton>
      </FormWrapper>
    </FormContainer>
   );
}
 
export default FormLogin;