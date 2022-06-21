import React from "react";
import { ListGroup, Card } from "react-bootstrap";
import FilterNotifikasi from "./filterNotifikasi";

const DetailNotifikasi = () => {
  return (
    <Card border="dark">
      <ListGroup variant="flush">
        <ListGroup.Item className="justify-content-between align-items-start" variant="secondary">
          <div className="text-start fw-bold">Jangan Lupa Isi Jurnal Tanggal 1 Juni 2022</div>
        </ListGroup.Item>
        <ListGroup.Item className="justify-content-between align-items-start" variant="warning">
          <div className="text-start fw-bold">Jurnal Tanggal 16 Mei 2022 Sedang Dalam Proses Review</div>
        </ListGroup.Item>
        <ListGroup.Item className="justify-content-between align-items-start" variant="danger">
          <div className="text-start fw-bold">Perbaiki Jurnal Tanggal 23 Mei 2022</div>
        </ListGroup.Item>
        <ListGroup.Item className="justify-content-between align-items-start" variant="success">
          <div className="text-start fw-bold">Jurnal Tanggal 9 Mei 2022 Telah Diterima</div>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default DetailNotifikasi;
