import React from "react"
import { Container, Row, Col, Stack } from "react-bootstrap"

function Headeradm() {
    return (
<Container>
      <Row>
        <Col sm={1}><Button variant="outline-dark" href="/">《 </Button></Col>
        <Col sm={11}><h5>Nama Admin</h5></Col>
      </Row><Row>
        <Col sm={1}></Col>
        <Col sm={11}>
        <Stack direction="horizontal" gap={3}>
            <div >id</div>
            <div >email</div>
        </Stack>
        </Col>
      </Row>
    </Container>

)
}