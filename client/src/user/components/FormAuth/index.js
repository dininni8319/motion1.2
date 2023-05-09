import Input from '../../../shared/components/FormElement/Input/Input';
import { AuthButton, FormWrapper, SignUpMessage, FormContainer, TopLoginButton, SingInTitle } from './style';
import { TopTitleWrapper } from '../../../shared/style/globalWrappers';
import avatar from "../../../shared/assets/svgs/avatar.svg";
import password from "../../../shared/assets/svgs/password.svg";

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
            icon={avatar}
          />
          <Input
            id="pasword"
            type="password"
            // placeHolder="Password"
            label="Password"
            inputElement="input"
            icon={password}
          />
          <AuthButton>SIGN IN</AuthButton>
      </FormWrapper>
    </FormContainer>
   );
}
 
export default FormLogin;