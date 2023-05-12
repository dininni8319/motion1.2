import { 
  AuthButton, 
  FormWrapper,  
  FormContainer, 
  SingInTitle 
} from '../FormSignin/style';
import { Link } from 'react-router-dom';
import { SuccessMessage } from './style';

const FormSuccess = () => {
  const email = localStorage.getItem("email");

  return ( 
    <FormContainer>
      <FormWrapper>
          <SingInTitle weight={true}>Congratulations!</SingInTitle>
          <SuccessMessage>We sent a confirmation code to your email </SuccessMessage>
          <SuccessMessage>{email}</SuccessMessage>
          <AuthButton successBtn={true}>
            <Link to="/auth/create-user">
              CONTINUE
            </Link>
          </AuthButton>
      </FormWrapper>
    </FormContainer>
   );
}
 
export default FormSuccess;