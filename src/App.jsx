import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "./Sidebar";
import Salesinfo from "./Salesinfo";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="col-md-2 p-4 mt-3">
            <Sidebar />
          </Col>
          <Col className="col-md-10 p-5 sales">
            <Salesinfo />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
