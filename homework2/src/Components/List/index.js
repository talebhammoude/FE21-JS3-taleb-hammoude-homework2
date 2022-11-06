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

        {props.theFilteredArrayValue ? 
        
        props.theFilteredArrayValue.map((e) => {
          return (
            <div className="cardClass">
              <Card>
                <Card.Body>
                  <Card.Title className="cardTitle">{e.category}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Name: {e.name}
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    Amount: {e.amount}
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    Date: {e.date}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </div>
          );
        })
        
            :

            props.theData.map((e) => {
              return (
                <div className="cardClass">
                  <Card>
                    <Card.Body>
                      <Card.Title className="cardTitle">{e.category}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        Name: {e.name}
                      </Card.Subtitle>
                      <Card.Subtitle className="mb-2 text-muted">
                        Amount: {e.amount}
                      </Card.Subtitle>
                      <Card.Subtitle className="mb-2 text-muted">
                        Date: {e.date}
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </div>
              );
            })

        }
        
          

        </Col>
        <Col xs={{ order: 1 }}></Col>
      </Row>
    </Container>
  );
}

export default List;
