import React from "react";
import {Container, Row, Col} from 'react-bootstrap'

const Keluar = () => {

return (    

    <>
    <Container>
    <Row>
        <Col>Akun</Col>
        <Col md="auto"></Col>
        <Col sm md xs lg="2">
        <button type="button" className="btn btn-danger">
          Keluar
        </button>
        </Col>
      </Row>
      </Container>
    </>
   

)
}

export default Keluar