import React from "react";
import {Button, ButtonGroup ,} from 'react-bootstrap';

const Sidebaradm =() => {
    return(

        <>
        <div className="fixed-center">
        <h4 className="align-item-center">Jurnal Link Admin</h4>
        </div>

        <div className="d-grid">
      <ButtonGroup vertical>
        <div><Button variant="btn btn-primary" href="/">Laporan Jurnal</Button></div>


        <div className="posisition-fix-bottom"><Button className ="btn btn-danger" href="/" style={{display: 'fixed-bottom'}}>Keluar</Button></div>
     
      </ButtonGroup>
    </div>
        </>
    )
}

export default Sidebaradm