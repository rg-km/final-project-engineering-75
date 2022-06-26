import React from 'react'
import Tanggal from '../components/beranda/tanggal'
import FilterBulan from '../components/beranda/filterBulan'
import RekapMingguan from '../components/beranda/rekapMingguan'
<<<<<<< HEAD
import Alamat from '../components/beranda/alamat'
import DetailMingguan from '../components/beranda/detailMingguan'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row, Col, Card, Stack, Alert } from 'react-bootstrap'

const Beranda = () => {
=======
import DetailMingguan from '../components/beranda/detailMingguan'
import { Container, Row, Col, Card, Stack } from 'react-bootstrap'

const Beranda = () => {
  const [detailShow, setDetailShow] = React.useState(false);
>>>>>>> 93f05dc793c996bf075bdeeae0081786c66ec696

  return (
    <Container>
      <Stack gap={2}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          Beranda
          <Tanggal />
        </div>
<<<<<<< HEAD
        <Alert key="secondary" variant="secondary">
          <Alamat />
        </Alert>
      </Stack>
      <Card border="dark">
        <Card.Body>
          <Row>
            <Col sm={3}><FilterBulan /></Col>
            <Col sm={9}><RekapMingguan /></Col>
            
          </Row>
        </Card.Body>
      </Card>
=======
        <Card border="dark">
          <Card.Body>
            <Row>
              <Col sm={3}><FilterBulan /></Col>
              <Col>
                {detailShow === false && (<RekapMingguan detail={() => setDetailShow(true)} />)}
                {detailShow === true && (<DetailMingguan />)}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Stack>
>>>>>>> 93f05dc793c996bf075bdeeae0081786c66ec696
    </Container>
  )
}

export default Beranda