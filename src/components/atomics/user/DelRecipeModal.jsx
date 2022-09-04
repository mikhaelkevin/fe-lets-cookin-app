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
        <Button variant="warning">Yes</Button>
        <Button onClick={closeModal} variant="danger">No</Button>
      </Modal.Footer>
    </Modal>
  );
}

DelRecipeModal.propTypes = {
  show: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default DelRecipeModal;
