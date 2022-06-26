import React from 'react'
import InputJurnal from './inputJurnal';
import { Badge, ListGroup, Card, Button, Row, Col } from 'react-bootstrap';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const DetailMingguan = () => {
  const [modalShow, setModalShow] = React.useState(false);
=======
import Axios from 'axios';

const DetailMingguan = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const dataDetail = [
    {id: 1, tanggal: "Senin, 30 Mei 2022", isi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet eget sit amet. Lorem ipsum dolor sit amet consectetur adipiscing elit ut. Congue nisi vitae suscipit tellus mauris a diam maecenas. Ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum."},
    {id: 2, tanggal: "Selasa, 31 Mei 2022", isi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet eget sit amet. Lorem ipsum dolor sit amet consectetur adipiscing elit ut. Congue nisi vitae suscipit tellus mauris a diam maecenas. Ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum."},
    {id: 3, tanggal: "Rabu, 01 Juni 2022", isi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet eget sit amet. Lorem ipsum dolor sit amet consectetur adipiscing elit ut. Congue nisi vitae suscipit tellus mauris a diam maecenas. Ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum."},
    {id: 4, tanggal: "Kamis, 02 Juni 2022", isi: ""},
    {id: 5, tanggal: "Jumat, 03 Juni 2022", isi: ""}
  ]
>>>>>>> 93f05dc793c996bf075bdeeae0081786c66ec696

  return (
    <Card border="dark">
      <ListGroup variant="flush">
        <Card.Header className="justify-content-between align-items-start">
          <Row>
<<<<<<< HEAD
            <Col className="text-start">
              <div className="fw-bold">Minggu ke-4</div>
            </Col>
            <Col className="text-center">
              <Badge bg="secondary">Tidak Lengkap</Badge>
            </Col>
            <Col className="text-end">
=======
            <Col className="text-start" md="auto">
              <Button variant="outline-primary" size="sm" href="/beranda">Kembali</Button>
            </Col>
            <Col className="text-start align-items-center d-flex">
              <div className="fw-bold">Minggu ke-4</div>
            </Col>
            <Col className="text-center align-items-center d-flex">
              <Badge bg="secondary">Tidak Lengkap</Badge>
            </Col>
            <Col className="text-end align-items-center d-flex" md="auto">
>>>>>>> 93f05dc793c996bf075bdeeae0081786c66ec696
              <Badge bg="primary" pill>
                30 Mei-04 Juni 2022
              </Badge>
            </Col>
          </Row>
        </Card.Header>
<<<<<<< HEAD
        <ListGroup.Item className="justify-content-between align-items-start">
          <div className="text-start fw-bold">
            Senin, 30 Mei 2022
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet eget sit amet. Lorem ipsum dolor sit amet consectetur adipiscing elit ut. Congue nisi vitae suscipit tellus mauris a diam maecenas. Ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Lectus quam id leo in vitae turpis. Est lorem ipsum dolor sit amet. Volutpat odio facilisis mauris sit amet massa. Semper auctor neque vitae tempus. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Integer feugiat scelerisque varius morbi enim nunc faucibus a. Fringilla est ullamcorper eget nulla. Elit duis tristique sollicitudin nibh sit amet commodo nulla.
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="justify-content-between align-items-start">
          <div className="text-start fw-bold">
            Senin, 30 Mei 2022
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet eget sit amet. Lorem ipsum dolor sit amet consectetur adipiscing elit ut. Congue nisi vitae suscipit tellus mauris a diam maecenas. Ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Lectus quam id leo in vitae turpis. Est lorem ipsum dolor sit amet. Volutpat odio facilisis mauris sit amet massa. Semper auctor neque vitae tempus. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Integer feugiat scelerisque varius morbi enim nunc faucibus a. Fringilla est ullamcorper eget nulla. Elit duis tristique sollicitudin nibh sit amet commodo nulla.
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="justify-content-between align-items-start">
          <div className="text-start fw-bold">
            Selasa, 31 Mei 2022
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet eget sit amet. Lorem ipsum dolor sit amet consectetur adipiscing elit ut. Congue nisi vitae suscipit tellus mauris a diam maecenas. Ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Lectus quam id leo in vitae turpis. Est lorem ipsum dolor sit amet. Volutpat odio facilisis mauris sit amet massa. Semper auctor neque vitae tempus. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Integer feugiat scelerisque varius morbi enim nunc faucibus a. Fringilla est ullamcorper eget nulla. Elit duis tristique sollicitudin nibh sit amet commodo nulla.
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="justify-content-between align-items-start">
          <div className="text-start fw-bold">
            Rabu, 01 Juni 2022
          </div>
          <div className="text-center">
            <Button variant="primary" onClick={() => setModalShow(true)}>Tulis Jurnal</Button>
            <InputJurnal show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="justify-content-between align-items-start">
          <div className="text-start fw-bold">
            Kamis, 02 Juni 2022
          </div>
          <div className="text-center">
            <Button variant="primary">Tulis Jurnal</Button>
          </div>
        </ListGroup.Item>
=======
        {dataDetail.map((item) => (
          (item.isi === "") ? 
          (<ListGroup.Item className="justify-content-between align-items-start">
            <div className="text-start fw-bold">
              {item.tanggal}
            </div>
            <div>
              <Button variant="primary" onClick={() => setModalShow(true)}>Tulis Jurnal</Button>
              <InputJurnal show={modalShow} onHide={() => setModalShow(false)} />
            </div>
          </ListGroup.Item>) :
          (<ListGroup.Item className="justify-content-between align-items-start">
            <div className="text-start fw-bold">
              {item.tanggal}
            </div>
            <div>
              {item.isi}
            </div>
          </ListGroup.Item>)
        ))}
>>>>>>> 93f05dc793c996bf075bdeeae0081786c66ec696
      </ListGroup>
    </Card>
  )
}

export default DetailMingguan