import styled from 'styled-components';
import { Title, Message } from '../../../shared/style/globalTitles';
import { Button } from '../../../shared/style/globalButtons';
import { rem } from 'polished';

export const FormContainer = styled.form`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const FormWrapper = styled.form`
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const SignUpMessage = styled(Message)`
  margin-right: ${rem("15px")};
`; 

export const SingInTitle = styled(Title)`
  margin-bottom: ${rem("40px")};
  text-align: center;
`;

export const AuthButton = styled(Button)`
  width: ${rem("300px")};
  height: ${rem("50px")};
  margin-top: 10%;
  background: ${props => props.theme.purpleColor};
  color: white;
  border: none;
  outline: none;

  &:hover {
    background: ${props => props.theme.LinearGradientHover};
  }
`;

export const TopLoginButton = styled(Button)`
  background-color: white;

  &:hover {
    transition: 0.3s;
    background: ${ props => props.theme.grayColor}
  }
`;
