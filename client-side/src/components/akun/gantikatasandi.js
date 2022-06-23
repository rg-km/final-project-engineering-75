import React from "react";
import { Card, Form, FormGroup, Button, ListGroup } from "react-bootstrap";



const Gantikatasandi = () => {

    return (    
    
        <>
        <Card border="dark">
        <ListGroup variant="flush">
        <ListGroup.Item className="justify-content-between align-items-start">
        <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Kata Sandi Sekarang</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
          <br>
          </br>
          
          <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Kata Sandi Baru</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
            <br>
          </br>
        
          <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Konfirmasi Kata Sandi</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
          <br>
          </br>
        
            
            <br>
          </br>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </ListGroup.Item>
      </ListGroup>
        </Card>

        </>
       
    
    )
    }
    
    export default Gantikatasandi
