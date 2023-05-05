import styled from "styled-components";
import { rem } from 'polished';

export const FormControl = styled.div`
  label, input, textarea {
    display: block;
  }

  label {
    font-weight: bold;
    margin-bottom: ${rem("5px")};
  }

`;