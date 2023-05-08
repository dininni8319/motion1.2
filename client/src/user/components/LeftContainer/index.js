import { MainContainer, TitleContainer } from './style';
import logo from "../../../shared/assets/images/logo_white.png";
import google from "../../../shared/assets/svgs/google.svg";
import apple from "../../../shared/assets/svgs/apple.svg";

const LeftContainer = () => {
  return ( 
    <MainContainer>
      <TitleContainer>
         <div>
            <img src={logo} alt="Motion logo" />
            <h2>Motion</h2>
            <p>Connect with friends and the world around you with Motion</p>
         </div>
         <div>
            <img src={google} alt="Google logo" />
            <img src={apple} alt="Apple logo" />
         </div>
      </TitleContainer>
    </MainContainer>
   );
}
 
export default LeftContainer;