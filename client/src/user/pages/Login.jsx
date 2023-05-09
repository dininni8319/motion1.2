import { useState } from 'react';
import LeftContainer from '../../shared/components/LeftContainer';
import FormLogin from '../components/FormAuth';
import styled from 'styled-components';

export const AuthLayout = styled.section`
  display: flex;
`;

const Signin = () => {
 
  return ( 
    <AuthLayout>
      <LeftContainer>
      </LeftContainer>
      <FormLogin />
    </AuthLayout>
  );
}
 
export default Signin;