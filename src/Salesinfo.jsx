import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import bell from "./assets/bell.png";

function Salesinfo() {
  return (
    <div>
      <Container className="mb-4">
        <Row>
          <Col>
            <div className="search">
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                  className="search-bar"
                />
              </InputGroup>
            </div>
          </Col>
          <Col>
            <div className="bell float-end">
              <i class="fa-solid fa-bell"></i>
              <img src={bell} alt="bell" />
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <div className="mb-3 ty">
          <h2>Sales Information</h2>
        </div>

        <Row>
          <Col className="mb-4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Customer</Form.Label>
              <Form.Control type="text" className=" b-style" placeholder="Enter Costumer Name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Invoice ID</Form.Label>
              <Form.Control type="text" className="b-style" placeholder="Enter Invoice ID" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Start Date</Form.Label>
              <Form.Control type="text" className=" b-style" placeholder="Start Date" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>End Date</Form.Label>
              <Form.Control type="text" className=" b-style" placeholder="End Date" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Table>
            <thead>
              <tr>
                <th>
                  <Form.Check aria-label="option 1" className="align-middle" />
                </th>
                <th>Invoice ID</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Payable Amount</th>
                <th>Paid Amount</th>
                <th>Due</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Form.Check aria-label="option 1" />
                </td>
                <td className="t-color">#AHGA68</td>
                <td>23/09/2022</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>$000</td>
                <td>$000</td>
              </tr>
              <tr>
                <td>
                  <Form.Check aria-label="option 1" />
                </td>
                <td className="t-color">#AHGA68</td>
                <td>23/09/2022</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>$000</td>
                <td>$000</td>
              </tr>
              <tr>
                <td>
                  <Form.Check aria-label="option 1" />
                </td>
                <td className="t-color">#AHGA68</td>
                <td>23/09/2022</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>$000</td>
                <td>$000</td>
              </tr>
              <tr>
                <td>
                  <Form.Check aria-label="option 1" />
                </td>
                <td className="t-color">#AHGA68</td>
                <td>23/09/2022</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>$000</td>
                <td>$000</td>
              </tr>
              <tr>
                <td>
                  <Form.Check aria-label="option 1" />
                </td>
                <td className="t-color">#AHGA68</td>
                <td>23/09/2022</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>$000</td>
                <td>$000</td>
              </tr>
              <tr>
                <td>
                  <Form.Check aria-label="option 1" />
                </td>
                <td className="t-color">#AHGA68</td>
                <td>23/09/2022</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>$000</td>
                <td>$000</td>
              </tr>
              <tr>
                <td>
                  <Form.Check aria-label="option 1" />
                </td>
                <td className="t-color">#AHGA68</td>
                <td>23/09/2022</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>$000</td>
                <td>$000</td>
              </tr>
              <tr>
                <td>
                  <Form.Check aria-label="option 1" />
                </td>
                <td className="t-color">#AHGA68</td>
                <td>23/09/2022</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>$000</td>
                <td>$000</td>
              </tr>
              <tr>
                <td>
                  <Form.Check aria-label="option 1" />
                </td>
                <td className="t-color">#AHGA68</td>
                <td>23/09/2022</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>$000</td>
                <td>$000</td>
              </tr>
              <tr>
                <td>
                  <Form.Check aria-label="option 1" />
                </td>
                <td className="t-color">#AHGA68</td>
                <td>23/09/2022</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>$000</td>
                <td>$000</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
}

export default Salesinfo;
