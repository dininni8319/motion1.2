import LeftContainer from '../../shared/components/LeftContainer';
import FormSuccess from "../components/FormSuccess"
import styled from 'styled-components';

export const AuthLayout = styled.section`
  display: flex;
`;

const Success = () => {
  return ( 
    <AuthLayout>
      <LeftContainer/>
      <FormSuccess  />
    </AuthLayout>
  );
}
 
export default Success;