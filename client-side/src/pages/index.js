import React from 'react'
import Tanggal from '../components/beranda/tanggal'
import FilterBulan from '../components/beranda/filterBulan'
import RekapMingguan from '../components/beranda/rekapMingguan'
import Alamat from '../components/beranda/alamat'
import DetailMingguan from '../components/beranda/detailMingguan'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row, Col, Card, Stack, Alert } from 'react-bootstrap'

const Beranda = () => {

  return (
    <Container>
      <Stack gap={2}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          Beranda
          <Tanggal />
        </div>
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
    </Container>
  )
}

export default Beranda