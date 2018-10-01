import React from 'react';
import { Modal } from 'react-materialize';
import './Modal.css';
import PropTypes from 'prop-types';

const CustomModal = ({ children, trigger, header }) => (
  <Modal
    header={
      <div>
        <h1 className="modal-header">{header}</h1>
      </div>
    }
    trigger={trigger}
  >
    {children}
  </Modal>
);

CustomModal.propTypes = {
  header: PropTypes.string.isRequired
};

Modal.propTypes = {
  header: PropTypes.object.isRequired
};

export default CustomModal;
