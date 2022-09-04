import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

function ProfileModal(props) {
  const {
    closeModal, show, children, modalTitle,
  } = props;

  return (
    <Modal show={show} animation centered size="lg">
      <Modal.Header className="justify-content-center bg-warning">
        <Modal.Title>
          {modalTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center" style={{ backgroundColor: '#FFF5EC' }}>
        {children}
      </Modal.Body>
      <Modal.Footer className="justify-content-center" style={{ backgroundColor: '#FFF5EC' }}>
        <Button variant="warning">Save change</Button>
        <Button onClick={closeModal} variant="danger">No</Button>
      </Modal.Footer>
    </Modal>
  );
}

ProfileModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  modalTitle: PropTypes.string,
};

ProfileModal.defaultProps = {
  modalTitle: 'Untitled modal',
};

export default ProfileModal;
