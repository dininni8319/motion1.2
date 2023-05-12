import styled from 'styled-components';
import { Message } from '../globalTitles';
import { rem } from 'polished';
import { Icon } from '../globalIcons';

export const TopTitleWrapper = styled.div`
 height: 10%;
 width: 100%;
 padding: ${rem('10px')};
 display: flex;
 justify-content: flex-end;
 align-items: center;
`;

export const FormControl = styled.div`
  label, input, textarea {
    display: block;
    margin: ${rem("10px")};
  }

  label {
    font-weight: bold;
    margin-bottom: ${rem("5px")};
  }
`;

export const AuthIcons = styled(Icon)`
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ErrorTag = styled.p`
  color: red;
  font-size: ${rem("12px")};
  padding-left: ${rem("10px")};
  padding-bottom: ${rem("5px")};
`;