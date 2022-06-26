import React from 'react'
<<<<<<< HEAD
import { Navbar, Container, Nav } from 'react-bootstrap'
=======
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
>>>>>>> 93f05dc793c996bf075bdeeae0081786c66ec696

const Navigation = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
<<<<<<< HEAD
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
=======
      <Container>
        <Navbar.Brand href="/beranda">JOURNAL LINK</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/beranda" className="d-flex align-items-center">Beranda</Nav.Link>
            <Nav.Link href="/notifikasi" className="d-flex align-items-center">Notifikasi</Nav.Link>
            <Nav.Link href="/akun">
              <Button variant="danger" size="sm">Keluar</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
>>>>>>> 93f05dc793c996bf075bdeeae0081786c66ec696
    </Navbar>
  )
}

<<<<<<< HEAD
export default Navigation
=======
export default Navigation
>>>>>>> 93f05dc793c996bf075bdeeae0081786c66ec696
