import React, { Component } from 'react'
import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap'

export default class Login extends Component {
  render() {
    return (
      <Container style={{width: '35%'}}>
        <Row className="justify-content-center">
          <Col className="lg-5">
            <Card border="primary" className="shadow-lg mt-5">
              <h4 className="mt-1 p-2 text-center">Masuk</h4>
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
                <div key="inline-radio" className="mb-3">
                  <Form.Check inline label="User" name="group1" type="radio" id="inline-radio-1"/>
                  <Form.Check inline label="Admin" name="group1" type="radio" id="inline-radio-2"/>
                </div>
                <div className="d-grid">
                  <Button variant="primary" type="submit">
                    Masuk
                  </Button>
                </div>
              </Form>
              </Card.Body>
              <h6 className="mt-1 p-2 text-center">Belum punya akun? <a href="/sign-up">Daftar</a></h6>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}