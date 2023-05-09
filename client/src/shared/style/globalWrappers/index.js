import styled from 'styled-components';
import { Message } from '../globalTitles';
import { rem } from 'polished';

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
  }

  label {
    font-weight: bold;
    margin-bottom: ${rem("5px")};
  }
`;