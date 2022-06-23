import React from "react";
import {Button, ButtonGroup ,} from 'react-bootstrap';

const Sidebar =() => {
    return(

        <>
        <div className="d-grid">
      <ButtonGroup vertical>
        <Button variant="outline-primary" href="../pages/index.js">Profil</Button>
        <br>
        </br>
        <Button variant="outline-primary" href="/">Ganti Kata Sandi</Button>
      </ButtonGroup>
    </div>
        </>
    )
}

export default Sidebar