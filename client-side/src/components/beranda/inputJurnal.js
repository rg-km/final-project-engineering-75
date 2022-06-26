import React from 'react'
<<<<<<< HEAD
import { Modal, Button } from 'react-bootstrap'
=======
import { Modal, Button, Form } from 'react-bootstrap'
>>>>>>> 93f05dc793c996bf075bdeeae0081786c66ec696

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
<<<<<<< HEAD
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
=======
          Tulis Jurnal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Kamis, 02 Juni 2022</Form.Label>
          <Form.Control as="textarea" rows={6} />
        </Form.Group>
>>>>>>> 93f05dc793c996bf075bdeeae0081786c66ec696
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Simpan</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default InputJurnal