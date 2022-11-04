import "./styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function List(props) {
  return (
    <Container>
      <Row>
        <Col xs></Col>
        <Col xs={{ order: 12 }}>

          {props.theData.map((e) => {
            return (
              <div className="cardClass">
                <Card>
                  <Card.Body>
                    <Card.Title className="cardTitle">{e.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Category: {e.category}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                      Amount: {e.amount}
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </div>
            );
          })}

        </Col>
        <Col xs={{ order: 1 }}></Col>
      </Row>
    </Container>
  );
}

export default List;
