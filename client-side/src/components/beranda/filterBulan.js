import React from 'react'
<<<<<<< HEAD
import { Button, ButtonGroup } from 'react-bootstrap';

const FilterBulan = () => {
  return (
    <div className="d-grid">
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
=======
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

const FilterBulan = () => {
  const dataBulan = [
    {id: 1, name: "Januari", value: "1"},
    {id: 2, name: "Februari", value: "2"},
    {id: 3, name: "Maret", value: "3"},
    {id: 4, name: "April", value: "4"},
    {id: 5, name: "Mei", value: "5"},
    {id: 6, name: "Juni", value: "6"},
    {id: 7, name: "Juli", value: "7"},
    {id: 8, name: "Agustus", value: "8"},
    {id: 9, name: "September", value: "9"},
    {id: 10, name: "Oktober", value: "10"},
    {id: 11, name: "November", value: "11"},
    {id: 12, name: "Desember", value: "12"}
  ]
  const [radioValue, setRadioValue] = React.useState();

  function handleChange(event) {
    setRadioValue(event.currentTarget.value);
    // panggil data rekap sesuai dengan value bulan ke back end
    // simpan data di zustand sehingga bisa di render di halaman rekapMingguan
    // render halaman rekapMingguan mengambil data dari zustand
  }

  return (
    <div className="d-grid">
      <ButtonGroup vertical>
        {dataBulan.map((bulan, id) => (
          <ToggleButton 
            key={id}
            id={`bulan-${id}`}
            type="radio"
            variant="outline-dark"
            name="radio"
            value={bulan.value}
            checked={radioValue === bulan.value}
            onChange={handleChange}
          >
            {bulan.name}
          </ToggleButton>
        ))}
>>>>>>> 93f05dc793c996bf075bdeeae0081786c66ec696
      </ButtonGroup>
    </div>
  )
}

export default FilterBulan