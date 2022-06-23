import React from "react";
import { Card } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import {Button, ListGroup } from 'react-bootstrap';

const Profil =() => {

return (
<>
<Card border="dark">

  <ListGroup variant="flush">
        <ListGroup.Item className="justify-content-between align-items-start">
<Form>
  <Form.Group className="mb-3">
  <Form.Label>Nama Lengkap</Form.Label>
  <Form.Control type="text" placeholder="nama lengkap" />
  <br>
  </br>
  
  <Form.Label>Jenis Kelamin</Form.Label>
  <Form.Select aria-label="Default select example">
      <option>Jenis Kelamin</option>
      <option value="1">laki-laki</option>
      <option value="2">perempuan</option>
    </Form.Select>
    <br>
  </br>

    <Form.Label>NIM</Form.Label>
  <Form.Control type="text" placeholder="nomor induk mahasiswa" />
  <br>
  </br>

    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Alamat Email</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
    </Form.Group>
    <br>
  </br>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</ListGroup.Item>
      </ListGroup>
</Card>
</>
)

}

export default Profil