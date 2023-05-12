import React from 'react';
import Modal from './Modal';
import styled from 'styled-components';
import { Button } from '../../../shared/style/globalButtons';
import { rem } from 'polished';

export const DeclineButton = styled(Button)`
  width: ${rem("100px")};
  margin: ${rem("5px")};
`;

const ErrorModal = props => {
  return (
    <Modal
      onCancel={props.onClear}
      header="An Error Occurred!"
      show={!!props.error}
      footer={<DeclineButton onClick={props.onClear}>Okay</DeclineButton>}
    >
      <p className="error-class">{props.error}</p>
    </Modal>
  );
};

export default ErrorModal;