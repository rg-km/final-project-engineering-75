import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Navigation = () => {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('token');
    navigate('/');
  }

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/beranda">JOURNAL LINK</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/beranda" className="d-flex align-items-center">Beranda</Nav.Link>
            <Nav.Link href="/notifikasi" className="d-flex align-items-center">Notifikasi</Nav.Link>
            <Button variant="danger" size="sm" onClick={logout}>Keluar</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
