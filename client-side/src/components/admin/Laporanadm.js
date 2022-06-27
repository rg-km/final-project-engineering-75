import React from 'react'
import { Table, Button } from 'react-bootstrap'

function Laporanadm() {
  return (
    <div>
        <h5> Laporan Jurnal</h5>
        <hr/>
        <Table striped bordered hover size="md">
  <thead>
    <tr>
      <th>Nama</th>
      <th>Nim</th>
      <th>Email</th>
      <th>Status</th>
      <th>Aksi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>soekadji</td>
      <td>1915061022</td>
      <td>soekadji@gmail.com</td>
      <td style={{color : "orange"}}>menunggu</td>
      <td> <Button variant="btn btn-primary" href="/">Detail</Button></td>
    </tr>
    <tr>
    <td>arya</td>
      <td>1915061033</td>
      <td>arya123@gmail.com</td>
      <td style={{color : "green"}}>selesai</td>
      <td> <Button variant="btn btn-primary" href="/">Detail</Button></td>
    </tr>
    <tr>
    <td>adjie nur</td>
      <td>1915061024</td>
      <td>adjie099@gmail.com</td>
      <td style={{color : "orange"}}>menunggu</td>
      <td> <Button variant="btn btn-primary" href="/">Detail</Button></td>
    </tr>
    <tr>
    <td>adjie nur hadi </td>
      <td>1915061056</td>
      <td>adjie12345@gmail.com</td>
      <td style={{color : "green"}}>selesai</td>
      <td> <Button variant="btn btn-primary" href="/">Detail</Button></td>
    </tr>
  </tbody>
</Table>



    </div>
  )
}

export default Laporanadm