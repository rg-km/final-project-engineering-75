import React from 'react'
import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleApi = (e) => {
    console.log({ email, password });
    axios.post('https://reqres.in/api/login', {
      email: email,
      password: password
    })
      .then(res => {
        console.log(res.data);
        localStorage.setItem('token', res.data.token);
        navigate('/beranda');
      })
      .catch(err => {
        console.log(err);
        alert('Email atau password salah!');
      })
  }

  return (
    <Container style={{width: '35%'}}>
      <Row className="justify-content-center">
        <Col className="lg-5">
          <h2 className="text-center">JOURNAL LINK</h2>
          <Card border="primary" className="shadow-lg mt-5">
            <h4 className="mt-1 p-2 text-center">Masuk</h4>
            <Card.Body>
              <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Alamat Email</Form.Label>
                <Form.Control value={email} type="email" placeholder="Masukkan email" onChange={handleEmail} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control value={password} type="password" placeholder="Masukkan password" onChange={handlePassword} />
              </Form.Group>
              <div key="inline-radio" className="mb-3">
                <Form.Check inline label="User" name="group1" type="radio" id="inline-radio-1"/>
                <Form.Check inline label="Admin" name="group1" type="radio" id="inline-radio-2"/>
              </div>
              <div className="d-grid">
                <Button variant="primary" onClick={handleApi}>
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

export default Login