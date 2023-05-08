import styled from "styled-components";
import backgroundImg from '../../../shared/assets/images/background_image.png';
import { Title } from "../../../shared/style/globalTitles";
import { Icon } from '../../../shared/style/globalIcons';
import { rem } from 'polished';

export const MainContainer = styled.div`
  width: 40%;
  height: 100vh;
  margin-bottom: 0px;
  background: ${props => props.theme.LinearGradient}, url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 66%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const MotionTitle = styled(Title)`
  font-size: 28px;
  font-weight: 400;
  letter-spacing: 0.8px;
  color: white;
  opacity: 0.6;
  margin-top: 4%;
  text-align: center;
`;

export const Slogan = styled(Title)`
  color: rgba(255, 255, 255, 0.82);
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.2px;
  text-align: center;
`;

export const BottomContainer = styled.div`
  height: 34%;
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const AppButtons = styled(Icon)`
  width: ${rem('125px')};
`;

// export 