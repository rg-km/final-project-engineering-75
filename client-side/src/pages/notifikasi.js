import React from "react";
import FilterNotifikasi from "../components/notifikasi/filterNotifikasi";
import DetailNotifikasi from "../components/notifikasi/detailNotifikasi";
import Navbar from '../components/navbar';
import { Container, Row, Col, Card, Stack } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'

const Notifikasi = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/')
    }
  }, [])

  return (
    <Stack gap={2}>
      <Navbar />
      <Container>
        <Stack gap={2}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Col className="text-start"> Notifikasi</Col>
          </div>
          <Card border="dark">
            <Card.Body>
              <Row>
                <Col sm={3}>
                  <FilterNotifikasi />
                </Col>
                <Col>
                  <DetailNotifikasi />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Notifikasi;
