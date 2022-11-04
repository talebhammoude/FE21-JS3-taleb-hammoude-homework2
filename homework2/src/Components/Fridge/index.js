import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './styles.css';










function Fridge(props) {




  return (
    <Container className="fridgeComp">
      <Row>
        <Col xs></Col>
        <Col xs={{ order: 12 }}>
          <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Product name</Form.Label>
              <Form.Control type="text" placeholder="Product name" id="pname" />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Product amount</Form.Label>
              <Form.Control type="number" placeholder="Amount" id="pamount" />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" id="pdate"/>
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Product category</Form.Label>
              <Form.Control type="text" placeholder="Product category"  id="pcat"/>
            </Form.Group>

            <Button variant="success" onClick={props.handleSubmitFunc}>
              Submit
            </Button>
          </Form>
        </Col>
        <Col xs={{ order: 1 }}></Col>
      </Row>
    </Container>
  );
}

export default Fridge;
