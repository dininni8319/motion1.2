import styled from "styled-components";
import backgroundImg from '../../../shared/assets/images/background_image.png';

export const MainContainer = styled.div`
  width: 40%;
  height: 100vh;
  background: ${props => props.theme.LinearGradient}, url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;

  
  h2 {
    color: white;
    font-size: 30px;
  }

  p {
    color: white;
    opacity: 0.6;
    font-size: 15px;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 66%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;
