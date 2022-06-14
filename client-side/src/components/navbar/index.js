import React from 'react'
import { Nav, NavLink, Bars, NavMenu } from './NavbarElements'

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to="/">
                <h1>JOURNAL LINK</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/beranda" activeStyle>
                    Beranda
                </NavLink>
                <NavLink to="/notifikasi" activeStyle>
                    Notifikasi
                </NavLink>
                <NavLink to="/akun" activeStyle>
                    Akun
                </NavLink>
            </NavMenu>
        </Nav>
    </>
  )
}

export default Navbar