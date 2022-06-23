import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Navigation = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
            <Navbar.Brand href="/">JOURNAL LINK</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="/">Beranda</Nav.Link>
                    <Nav.Link href="/notifikasi">Notifikasi</Nav.Link>
                    <Nav.Link href="/akun">Akun</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Navigation