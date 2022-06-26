import React from 'react'
import { Badge, ListGroup, Card, Button, Row, Col, Stack } from 'react-bootstrap';

<<<<<<< HEAD
const RekapMingguan = () => {
  return (
    <Card border="dark">
      <ListGroup variant="flush">
        <ListGroup.Item className="justify-content-between align-items-start">
          <Stack gap={2}>
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
                <Button variant="outline-primary" href="/detailMingguan">
                  Lihat
                </Button>
              </Col>
            </Row>
          </Stack>
          
        </ListGroup.Item>

        <ListGroup.Item className="justify-content-between align-items-start">
          <Stack gap={2}>
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
          </Stack>
          
        </ListGroup.Item>

        <ListGroup.Item className="justify-content-between align-items-start">
          <Stack gap={2}>
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
          </Stack>
          
        </ListGroup.Item>

        <ListGroup.Item className="justify-content-between align-items-end">
          <Stack gap={2}>
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
          </Stack>
        </ListGroup.Item>
      </ListGroup>
    </Card>
    
=======
const RekapMingguan = (props) => {
  const dataRekap = [
    {id: 1, status: "Tidak Lengkap", tanggal: "30 Mei-04 Juni 2022", minggu: "Minggu ke-4", variant: "secondary"},
    {id: 2, status: "Perlu Revisi", tanggal: "23-28 Mei 2022", minggu: "Minggu ke-3", variant: "danger"},
    {id: 3, status: "Proses Review", tanggal: "16-21 Mei 2022", minggu: "Minggu ke-2", variant: "warning"},
    {id: 4, status: "Selesai", tanggal: "09-14 Mei 2022", minggu: "Minggu ke-1", variant: "success"}
  ]

  return (
    <Card border="dark">
      <ListGroup variant="flush">
        {dataRekap.map((item) => (
          <ListGroup.Item className="justify-content-between align-items-start">
            <Stack gap={2}>
              <Row>
                <Col className="text-start">
                  <div className="fw-bold">{item.minggu}</div>
                </Col>
                <Col className="text-center">
                  <Badge bg={item.variant}>{item.status}</Badge>
                </Col>
                <Col className="text-end">
                  <Badge bg="primary" pill>
                    {item.tanggal}
                  </Badge>
                </Col>
              </Row>
              <Row>
                <Col className="text-start">
                  <h2>
                    <Badge pill bg="secondary">S</Badge>
                    <Badge pill bg="secondary">S</Badge>
                    <Badge pill bg="success">R</Badge>
                    <Badge pill bg="success">K</Badge>
                    <Badge pill bg="danger">J</Badge>
                  </h2>
                </Col>
                <Col className="text-end">
                  <Button variant="outline-primary" onClick={props.detail}>
                    Lihat
                  </Button>
                </Col>
              </Row>
            </Stack>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
>>>>>>> 93f05dc793c996bf075bdeeae0081786c66ec696
  )
}

export default RekapMingguan