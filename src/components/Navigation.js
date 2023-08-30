import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  return (
    <Navbar
      expand="lg"
      className="navbar navbar-expand-md navbar-light  "
      style={{ backgroundColor: '#c9c5c3' }}
    >
      <Container>
        <Navbar.Brand className="text-white fw-bold" href="/">
          TAMILNADU TOURISM
        </Navbar.Brand>
        <Navbar.Toggle
          className="text-white"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="text-white fw-bold" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="text-white fw-bold" href="/placetovisit">
              Place To visit
            </Nav.Link>
            <Nav.Link className="text-white fw-bold" href="/besttimetovisit">
              Best Time To Visit
            </Nav.Link>
            <Nav.Link className="text-white fw-bold" href="/packages">
              Packages
            </Nav.Link>
            <Nav.Link className="text-white fw-bold" href="/destination">
              Destination
            </Nav.Link>
            <Nav.Link className="text-white fw-bold" href="/food">
              Food
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
