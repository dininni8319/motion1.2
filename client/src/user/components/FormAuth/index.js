import Input from '../../../shared/components/FormElement/Input/Input';
import { AuthButton, FormWrapper, SignUpMessage, FormContainer, TopLoginButton, SingInTitle } from './style';
import { TopTitleWrapper } from '../../../shared/style/globalWrappers';

// export const 
const FormLogin = () => {
  return ( 
    <FormContainer>
      <TopTitleWrapper>
         <SignUpMessage>Do you have an account?</SignUpMessage>
         <TopLoginButton>SIGN UP</TopLoginButton>
      </TopTitleWrapper>
      
      <FormWrapper>
          <SingInTitle>Sign In</SingInTitle>
          <Input
            id="email"
            type="email"
            // placeHolder=""
            label="Email"
            inputElement="input"
          />
          <Input
            id="pasword"
            type="password"
            // placeHolder="Password"
            label="Password"
            inputElement="input"
          />
          <AuthButton>SIGN IN</AuthButton>

      </FormWrapper>
    </FormContainer>
   );
}
 
export default FormLogin;