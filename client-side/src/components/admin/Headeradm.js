import React from "react"
import { Container, Row, Col, Stack, Button } from "react-bootstrap"

function Headeradm() {
    return (
      <>
<Container>
      <Row>
        <Col sm={1}><Button variant="outline-dark" href="/">《 </Button></Col>
        <Col sm={11}><h5>Nama Admin</h5></Col>
      </Row><Row>
        <Col sm={1}></Col>
        <Col sm={11}>
        <Stack direction="horizontal" gap={5}>
            <div >02545446</div>
            <div >bismillah@gmail.com</div>
        </Stack>
        </Col>
      </Row>
    </Container>
    <hr/>
    <Stack direction="horizontal" gap={2}>
    <Button variant="outline-secondary" href="/">Semua</Button>
    <Button variant="outline-secondary" href="/">perlu review</Button>
    <Button variant="outline-secondary" href="/">proses revisi</Button>
    <Button variant="outline-secondary" href="/">selesai</Button>
    <Button variant="outline-secondary" href="/">tidak lengkap</Button>
    </Stack>
    </>

)
}

export default Headeradm