import React from 'react'
import Tanggal from '../components/beranda/tanggal'
import FilterBulan from '../components/beranda/filterBulan'
import RekapMingguan from '../components/beranda/rekapMingguan'
import Alamat from '../components/beranda/alamat'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Beranda = () => {

  return (
    <Container>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        Beranda
        <Tanggal />
      </div>
      <Alamat />
      <Card border="dark">
        <Card.Body>
          <Row>
            <Col sm={3}><FilterBulan /></Col>
            <Col sm={9}><RekapMingguan /></Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Beranda