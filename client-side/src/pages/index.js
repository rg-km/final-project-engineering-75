import React from 'react'
import Tanggal from '../components/beranda/tanggal'
import Bulan from '../components/beranda/bulan'
import Konten from '../components/beranda/konten'
import { Container, Breadcrumb, Row, Col, Card } from 'react-bootstrap'

const Beranda = () => {

  return (
    <Container>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        Beranda
        <Tanggal />
      </div>
      <Breadcrumb>
        <Breadcrumb.Item href="/" active>Semua Jurnal</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Januari</Breadcrumb.Item>
      </Breadcrumb>
      <Card border="dark">
        <Card.Body>
          <Row>
            <Col sm={3}><Bulan /></Col>
            <Col sm={9}><Konten /></Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Beranda