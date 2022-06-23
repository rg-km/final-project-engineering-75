import React from 'react'
import Keluar from '../components/akun/keluar'
import Profil from '../components/akun/profil'
import Sidebar from '../components/akun/sidebar'
import { Container } from 'react-bootstrap'

const Akun = () => {

  return (
    <>
    <Container>
      
    <Keluar />
    <br>
    </br>
      <Sidebar/>
      <Profil/>

    </Container>
    </>
    
  )
}

export default Akun