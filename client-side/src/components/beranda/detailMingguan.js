import React from 'react'
import InputJurnal from './inputJurnal';
import { Badge, ListGroup, Card, Button, Row, Col } from 'react-bootstrap';

const DetailMingguan = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Card border="dark">
      <ListGroup variant="flush">
        <Card.Header className="justify-content-between align-items-start">
          <Row>
            <Col className="text-start">
              <div className="fw-bold">Minggu ke-4</div>
            </Col>
            <Col className="text-center">
              <Badge bg="secondary">Tidak Lengkap</Badge>
            </Col>
            <Col className="text-end">
              <Badge bg="primary" pill>
                30 Mei-04 Juni 2022
              </Badge>
            </Col>
          </Row>
        </Card.Header>
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
      </ListGroup>
    </Card>
  )
}

export default DetailMingguan