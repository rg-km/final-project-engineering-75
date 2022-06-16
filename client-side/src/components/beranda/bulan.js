import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap';

const Bulan = () => {
  return (
    <div  className="d-grid">
      <ButtonGroup vertical>
        <Button variant="outline-dark">Januari</Button>
        <Button variant="outline-dark">Februari</Button>
        <Button variant="outline-dark">Maret</Button>
        <Button variant="outline-dark">April</Button>
        <Button variant="outline-dark">Mei</Button>
        <Button variant="outline-dark">Juni</Button>
        <Button variant="outline-dark">Juli</Button>
        <Button variant="outline-dark">Agustus</Button>
        <Button variant="outline-dark">September</Button>
        <Button variant="outline-dark">Oktober</Button>
        <Button variant="outline-dark">November</Button>
        <Button variant="outline-dark">Desember</Button>
      </ButtonGroup>
    </div>
  )
}

export default Bulan