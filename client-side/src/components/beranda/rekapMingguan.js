import React from 'react'
import { Badge, ListGroup, Card, Button, Row, Col } from 'react-bootstrap';

const RekapMingguan = () => {
  return (
    <Card border="dark">
      <ListGroup variant="flush">
        <ListGroup.Item className="justify-content-between align-items-start">
          <Row>
            <Col className="text-start">
              <div className="fw-bold">Minggu ke-4</div>
            </Col>
            <Col className="text-center">
              <Badge bg="secondary">Tidak Lengkap</Badge>
            </Col>
            <Col className="text-end">
              <Badge bg="primary" pill>
                30 Mei-04 Juni 2022
              </Badge>
            </Col>
          </Row>
          <Row>
            <Col className="text-start">Cras justo odio</Col>
            <Col className="text-end">
              <Button variant="outline-primary">
                Lihat
              </Button>
            </Col>
          </Row>
        </ListGroup.Item>

        <ListGroup.Item className="justify-content-between align-items-start">
          <Row>
            <Col className="text-start">
              <div className="fw-bold">Minggu ke-3</div>
            </Col>
            <Col className="text-center">
              <Badge bg="danger">Perlu Revisi</Badge>
            </Col>
            <Col className="text-end">
              <Badge bg="primary" pill>
                23-28 Mei 2022
              </Badge>
            </Col>
          </Row>
          <Row>
            <Col className="text-start">Cras justo odio</Col>
            <Col className="text-end">
              <Button variant="outline-primary">
                Lihat
              </Button>
            </Col>
          </Row>
        </ListGroup.Item>

        <ListGroup.Item className="justify-content-between align-items-start">
          <Row>
            <Col className="text-start">
              <div className="fw-bold">Minggu ke-2</div>
            </Col>
            <Col className="text-center">
              <Badge bg="warning" text="dark">Proses Review</Badge>
            </Col>
            <Col className="text-end">
              <Badge bg="primary" pill>
                16-21 Mei 2022
              </Badge>
            </Col>
          </Row>
          <Row>
            <Col className="text-start">Cras justo odio</Col>
            <Col className="text-end">
              <Button variant="outline-primary">
                Lihat
              </Button>
            </Col>
          </Row>
        </ListGroup.Item>

        <ListGroup.Item className="justify-content-between align-items-end">
          <Row>
            <Col className="text-start">
              <div className="fw-bold">Minggu ke-1</div>
            </Col>
            <Col className="text-center">
              <Badge bg="success">Selesai</Badge>
            </Col>
            <Col className="text-end">
              <Badge bg="primary" pill>
                09-14 Mei 2022
              </Badge>
            </Col>
          </Row>
          <Row>
            <Col className="text-start">Cras justo odio</Col>
            <Col className="text-end">
              <Button variant="outline-primary">
                Lihat
              </Button>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </Card>
    
  )
}

export default RekapMingguan