import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

const Alamat = () => {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="/" active>Semua Jurnal</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Januari</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}

export default Alamat