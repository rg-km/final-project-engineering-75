import React from "react";
import FilterNotifikasi from "../components/filterNotifikasi";
import DetailNotifikasi from "../components/detailNotifikasi";
import { Container, Row, Col, Card, Stack, Alert } from "react-bootstrap";

const Notifikasi = () => {
  return (
    <Container>
      <Stack gap={2}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Col className="text-start"> Notifikasi</Col>
          <Col className="text-end">Tandai Semua Sudah Dibaca</Col>
        </div>
      </Stack>
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
    </Container>
  );
};

export default Notifikasi;
