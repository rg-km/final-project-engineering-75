import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap';

const FilterBulan = () => {
  const data = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]

  return (
    <div className="d-grid">
      <ButtonGroup vertical>
        {data.map((bulan) => (
          <Button variant="outline-dark">{bulan}</Button>
        ))}
      </ButtonGroup>
    </div>
  )
}

export default FilterBulan