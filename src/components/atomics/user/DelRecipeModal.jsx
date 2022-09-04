import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function DelRecipeModal({ show, closeModal }) {
  return (
    <Modal show={show} animation centered>
      <Modal.Body className="text-center">
        <h4>Are you sure want to delete this recipe?</h4>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button onClick={closeModal} variant="danger">No</Button>
        <Button variant="warning">Yes</Button>
      </Modal.Footer>
    </Modal>
  );
}

DelRecipeModal.propTypes = {
  show: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default DelRecipeModal;
