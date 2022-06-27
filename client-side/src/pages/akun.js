import React from 'react'
import Sidebaradm from '../components/admin/Sidebaradm';
import Headeradm from '../components/admin/Headeradm';
import Bulanadm from '../components/admin/Bulanadm';
import Laporanadm from '../components/admin/Laporanadm';
import { Container, Row, Col, Card,  } from 'react-bootstrap';


function Akun() {
  return (
    <Container>

<Card border="dark">
        <Card.Body>
          <Row>
            <Col sm={2} ><Sidebaradm/></Col>
            <Col sm={10} ><Headeradm/> <hr/>
            <Row>
            <Col sm={2}><Bulanadm/>
            </Col>
            <Col sm={10}><Laporanadm/></Col>
            </Row>
            
            
            </Col>
            
          </Row>
        </Card.Body>
      </Card>
</Container>
  );
}

export default Akun