import React from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import List from "./routes/list";
import New from "./routes/new";

function App() {
  return (
      <div>
          <Navbar bg="dark" variant="dark">
              <Container>
                  <Navbar.Brand href="#home">User manager</Navbar.Brand>
                  <Nav className="me-auto">
                      <Nav.Link as={Link} to={"/"}>All users</Nav.Link>
                      <Nav.Link as={Link} to={"/new"}>New user</Nav.Link>
                  </Nav>
              </Container>
          </Navbar>
          <Container style={{
              paddingTop: '1em'
          }}>
              <Row>
                  <Col>
                      <Routes>
                          <Route path="/" element={<List/>} />
                          <Route path="/new" element={<New/>} />
                          <Route path="*" element={<p>Route not found</p>} />
                      </Routes>
                  </Col>
              </Row>
          </Container>
      </div>
  );
}

export default App;
