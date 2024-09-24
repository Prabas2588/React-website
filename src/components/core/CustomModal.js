import React from "react";
import { Modal, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomModal = ({
  open,
  onClose,
  width = "sm",
  title,
  actions,
  children,
}) => {
  const handleClose = () => onClose();

  return (
    <Modal
      show={open}
      onHide={handleClose}
      size={width}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {title && (
        <>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {children}
          </Modal.Body>
          {actions && (
            <Modal.Footer>
              {actions}
            </Modal.Footer>
          )}
        </>
      )}
      {!title && (
        <Modal.Header closeButton>
          <Modal.Body>
            {children}
          </Modal.Body>
          {actions && (
            <Modal.Footer>
              {actions}
            </Modal.Footer>
          )}
        </Modal.Header>
      )}
    </Modal>
  );
};

export default CustomModal;
