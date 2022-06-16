import React from 'react'
import { Badge, ListGroup, Button, Row, Col } from 'react-bootstrap';

const Konten = () => {
  return (
    <ListGroup>
      <ListGroup.Item className="d-flex align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">Minggu ke-4</div>
          Cras justo odio
        </div>
        <div className="ms-2 mx-auto">
          <Badge bg="secondary">Tidak Lengkap</Badge>
        </div>
        <div className="ms-2 ms-auto">
          <Badge bg="primary" pill>
            30 Mei-04 Juni 2022
          </Badge>
        </div>
      </ListGroup.Item>
      <ListGroup.Item className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">Minggu ke-3</div>
          Cras justo odio
        </div>
        <div className="ms-2 mx-auto">
          <Badge bg="danger">Perlu Revisi</Badge>
        </div>
        <div className="ms-2 ms-auto">
          <Badge bg="primary" pill>
            23-28 Mei 2022
          </Badge>
        </div>
      </ListGroup.Item>
      <ListGroup.Item className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">Minggu ke-2</div>
          Cras justo odio
        </div>
        <div className="ms-2 mx-auto">
          <Badge bg="warning" text="dark">Proses Review</Badge>
        </div>
        <div className="ms-2 ms-auto">
          <Badge bg="primary" pill>
            16-21 Mei 2022
          </Badge>
        </div>
      </ListGroup.Item>
      <ListGroup.Item className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">Minggu ke-1</div>
          Cras justo odio
        </div>
        <div className="ms-2 mx-auto">
          <Badge bg="success">Selesai</Badge>
        </div>
        <div className="ms-2 ms-auto">
          <Badge bg="primary" pill>
            09-14 Mei 2022
          </Badge>
        </div>
      </ListGroup.Item>
    </ListGroup>
  )
}

export default Konten