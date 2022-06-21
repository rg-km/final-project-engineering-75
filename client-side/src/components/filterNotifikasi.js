import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const FilterNotifikasi = () => {
  return (
    <div className="d-grid">
      <ButtonGroup vertical>
        <Button variant="light">Semua Notifikasi</Button>
        <Button variant="secondary">Belum Diisi</Button>
        <Button variant="warning">Proses Riview</Button>
        <Button variant="danger">Perlu Revisi</Button>
        <Button variant="success">Selesai</Button>
      </ButtonGroup>
    </div>
  );
};

export default FilterNotifikasi;

