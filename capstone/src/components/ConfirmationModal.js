import React, { useEffect, useState } from 'react'
import { Alert, Button, Modal } from 'react-bootstrap'

function ConfirmationModal(props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(props.show)
  }, [props.show]);

  return (
    <>
        <Modal
          show={show}
          onHide={props.handleClose}
          backdrop="static"
        >
          <Modal.Header closeButton>
            <Modal.Title>Booking confirmed!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Alert key='success' variant='success'>
              Your Booking has been confirmed. We look forward to hosting you.
            </Alert>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='warning' onClick={props.handleClose}>
              Book another
            </Button>
            <Button variant='success' onClick={props.primaryClickHandler}>
              Great!
            </Button>
          </Modal.Footer>
        </Modal>
    </>
  )
}

export default ConfirmationModal