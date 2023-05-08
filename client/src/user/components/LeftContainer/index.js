import { 
   BottomContainer,
   MainContainer,
   MotionTitle, 
   Slogan, 
   TitleContainer, 
   AppButtons 
} from './style';
import logo from "../../../shared/assets/images/logo_white.png";
import google from "../../../shared/assets/svgs/google.svg";
import apple from "../../../shared/assets/svgs/apple.svg";

const LeftContainer = () => {
  return ( 
    <MainContainer>
      <TitleContainer>
            <img src={logo} alt="Motion logo" />
            <MotionTitle>Motion</MotionTitle>
            <Slogan>Connect with friends and the world around you with Motion</Slogan>
      </TitleContainer>
      <BottomContainer>
         <AppButtons src={google} alt="Google logo" />
         <AppButtons src={apple} alt="Apple logo" />
      </BottomContainer>
    </MainContainer>
   );
}
 
export default LeftContainer;