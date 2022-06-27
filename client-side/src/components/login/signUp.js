import React, { Component } from 'react'
import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap'

export default class SignUp extends Component {
  render() {
    return (
      <Container style={{width: '35%'}}>
        <Row className="justify-content-center">
          <Col className="lg-5">
            <Card border="primary" className="shadow-lg mt-5">
              <h4 className="mt-1 p-2 text-center">Daftar</h4>
              <Card.Body>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Alamat Email</Form.Label>
                  <Form.Control type="email" placeholder="Masukkan email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Masukkan password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Konfirmasi Password</Form.Label>
                  <Form.Control type="password" placeholder="Masukkan password" />
                </Form.Group>
                <div className="d-grid">
                  <Button variant="primary" type="submit">
                    Daftar
                  </Button>
                </div>
              </Form>
              </Card.Body>
              <h6 className="mt-1 p-2 text-center">Sudah punya akun? <a href="/">Masuk</a></h6>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}