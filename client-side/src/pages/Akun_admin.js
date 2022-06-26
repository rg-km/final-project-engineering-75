import React from 'react'
import Keluar from '../components/akun/keluar'
import Profil from '../components/akun/profil'
import Sidebar from '../components/akun/sidebar'
import { Container, Card, Row, Col } from 'react-bootstrap'
import Gantikatasandi from '../components/akun/gantikatasandi'
const Akun_admin = () => {

  return (
    <>
    <Container>
      
    <Keluar />
    <br>
    </br>

    <Card >
        <Card.Body>
          <Row>
            <Col sm={3}><Sidebar/></Col>
            <Col sm={9}><Profil/></Col>
            
          </Row>
        </Card.Body>
      </Card>
      <Gantikatasandi/>
      

    </Container>
    </>
    
  )
}

export default Akun_admin