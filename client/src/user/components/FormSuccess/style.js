import styled from 'styled-components';
import { Message } from '../../../shared/style/globalTitles';
import { rem } from 'polished';

export const SuccessMessage = styled(Message)`
  font-size: ${rem("16px")};
  opacity: 0.6;
  font-style: normal;
  text-align: center;
  margin-bottom: ${rem("5px")};
`;