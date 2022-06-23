import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const InputJurnal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Rabu, 01 Juni 2022
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Input Jurnal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Simpan</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default InputJurnal